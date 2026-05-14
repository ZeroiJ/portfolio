export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
}

const GRID = 10;
const CELLS = GRID * GRID;
const MAX_NAME_LEN = 32;
const MAX_BODY_BYTES = 12_000;
const STAMPS_PER_HOUR = 15;
const VISITOR_SERVER_COOLDOWN_SEC = 6 * 3600;
const HOUR_MS = 3_600_000;

const BAD_NAME_FRAGMENTS = [
  'http://',
  'https://',
  'www.',
  '<script',
  '</script',
  'javascript:',
  'onerror=',
  'onload='
];

function json(data: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...headers
    }
  });
}

function clientIp(request: Request): string {
  return request.headers.get('CF-Connecting-IP') ?? request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ?? '0.0.0.0';
}

async function ipHash(request: Request): Promise<string> {
  const ip = clientIp(request);
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

function moderateName(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const name = raw.trim();
  if (name.length < 1 || name.length > MAX_NAME_LEN) return null;
  const lower = name.toLowerCase();
  for (const frag of BAD_NAME_FRAGMENTS) {
    if (lower.includes(frag)) return null;
  }
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(name)) return null;
  return name;
}

function moderatePixels(raw: unknown): number[] | null {
  if (!Array.isArray(raw) || raw.length !== CELLS) return null;
  const out: number[] = [];
  for (const v of raw) {
    if (typeof v !== 'number' || !Number.isInteger(v) || v < 0 || v > 4) return null;
    out.push(v);
  }
  if (out.every((c) => c === 0)) return null;
  return out;
}

async function readJsonBody(request: Request): Promise<unknown | null> {
  const ct = request.headers.get('content-type') ?? '';
  if (!ct.includes('application/json')) return null;
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return null;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}

async function getVisitorCount(db: D1Database): Promise<number> {
  const row = await db.prepare('SELECT count FROM visitors WHERE id = 1').first<{ count: number }>();
  return typeof row?.count === 'number' ? row.count : 0;
}

async function handleGetVisitors(env: Env): Promise<Response> {
  const count = await getVisitorCount(env.DB);
  return json({ count });
}

async function handlePostVisitors(request: Request, env: Env): Promise<Response> {
  const nowSec = Math.floor(Date.now() / 1000);
  const hash = await ipHash(request);

  const prev = await env.DB
    .prepare('SELECT last_increment FROM rl_visitor WHERE ip_hash = ?')
    .bind(hash)
    .first<{ last_increment: number }>();

  if (prev && typeof prev.last_increment === 'number') {
    if (nowSec - prev.last_increment < VISITOR_SERVER_COOLDOWN_SEC) {
      const count = await getVisitorCount(env.DB);
      return json({ count, incremented: false });
    }
  }

  await env.DB.batch([
    env.DB.prepare('UPDATE visitors SET count = count + 1 WHERE id = 1'),
    env.DB.prepare('INSERT OR REPLACE INTO rl_visitor (ip_hash, last_increment) VALUES (?, ?)').bind(hash, nowSec)
  ]);

  const count = await getVisitorCount(env.DB);
  return json({ count, incremented: true });
}

async function checkGuestbookRateLimit(db: D1Database, hash: string): Promise<boolean> {
  const windowId = Math.floor(Date.now() / HOUR_MS);
  const row = await db
    .prepare('SELECT stamp_count FROM rl_guestbook WHERE ip_hash = ? AND window_id = ?')
    .bind(hash, windowId)
    .first<{ stamp_count: number }>();
  const n = typeof row?.stamp_count === 'number' ? row.stamp_count : 0;
  return n < STAMPS_PER_HOUR;
}

async function bumpGuestbookRateLimit(db: D1Database, hash: string): Promise<void> {
  const windowId = Math.floor(Date.now() / HOUR_MS);
  await db
    .prepare(
      `INSERT INTO rl_guestbook (ip_hash, window_id, stamp_count) VALUES (?, ?, 1)
       ON CONFLICT(ip_hash, window_id) DO UPDATE SET stamp_count = stamp_count + 1`
    )
    .bind(hash, windowId)
    .run();
}

async function handleGetGuestbook(env: Env): Promise<Response> {
  const { results } = await env.DB
    .prepare(
      'SELECT id, name, pixels_json, created_at FROM guestbook ORDER BY created_at DESC LIMIT 200'
    )
    .all<{ id: string; name: string; pixels_json: string; created_at: number }>();

  const entries = (results ?? []).map((r) => {
    let pixels: number[] = [];
    try {
      const p = JSON.parse(r.pixels_json) as unknown;
      if (Array.isArray(p)) pixels = p.filter((x): x is number => typeof x === 'number');
    } catch {
      /* ignore */
    }
    return { id: r.id, name: r.name, pixels, created_at: r.created_at };
  });

  return json({ entries });
}

async function handlePostGuestbook(request: Request, env: Env): Promise<Response> {
  const hash = await ipHash(request);
  const allowed = await checkGuestbookRateLimit(env.DB, hash);
  if (!allowed) {
    return json({ error: 'Too many stamps from this network. Try again later.' }, 429);
  }

  const body = await readJsonBody(request);
  if (body === null || typeof body !== 'object' || body === null) {
    return json({ error: 'Expected application/json body' }, 400);
  }

  const o = body as Record<string, unknown>;
  const name = moderateName(o.name);
  const pixels = moderatePixels(o.pixels);
  if (!name) return json({ error: 'Invalid or empty name' }, 400);
  if (!pixels) return json({ error: 'Invalid stamp pixels (use 10×10 palette indices 0–4, not all empty)' }, 400);

  const id = crypto.randomUUID();
  const created_at = Date.now();
  const pixels_json = JSON.stringify(pixels);

  try {
    await env.DB
      .prepare('INSERT INTO guestbook (id, name, pixels_json, created_at) VALUES (?, ?, ?, ?)')
      .bind(id, name, pixels_json, created_at)
      .run();
  } catch (e) {
    console.error('guestbook insert', e);
    return json({ error: 'Could not save stamp' }, 500);
  }

  await bumpGuestbookRateLimit(env.DB, hash);

  return json({ ok: true, entry: { id, name, pixels, created_at } }, 201);
}

async function handleApi(request: Request, env: Env, pathname: string): Promise<Response | null> {
  if (pathname === '/api/guestbook' && request.method === 'GET') {
    return handleGetGuestbook(env);
  }
  if (pathname === '/api/guestbook' && request.method === 'POST') {
    return handlePostGuestbook(request, env);
  }
  if (pathname === '/api/visitors' && request.method === 'GET') {
    return handleGetVisitors(env);
  }
  if (pathname === '/api/visitors' && request.method === 'POST') {
    return handlePostVisitors(request, env);
  }
  if (pathname.startsWith('/api/')) {
    return json({ error: 'Not found' }, 404);
  }
  return null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = normalizePath(url.pathname);

    const api = await handleApi(request, env, pathname);
    if (api) return api;

    return env.ASSETS.fetch(request);
  }
};

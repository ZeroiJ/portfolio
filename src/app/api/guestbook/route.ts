import { NextRequest, NextResponse } from "next/server";
import {
  getDb,
  moderateName,
  moderatePixels,
  STAMPS_PER_HOUR,
  HOUR_MS,
  clientIpHash,
} from "@/lib/d1";

const MAX_BODY_BYTES = 12_000;

interface GuestbookRow {
  id: string;
  name: string;
  pixels_json: string;
  created_at: number;
}

/** GET /api/guestbook — latest stamps */
export async function GET() {
  const db = await getDb();
  const { results } = await db
    .prepare(
      "SELECT id, name, pixels_json, created_at FROM guestbook ORDER BY created_at DESC LIMIT 200"
    )
    .all<GuestbookRow>();

  const entries = (results ?? []).map((r) => {
    let pixels: number[] = [];
    try {
      const p = JSON.parse(r.pixels_json) as unknown;
      if (Array.isArray(p)) pixels = p.filter((x): x is number => typeof x === "number");
    } catch {
      /* ignore */
    }
    return { id: r.id, name: r.name, pixels, created_at: r.created_at };
  });

  return NextResponse.json({ entries });
}

/** POST /api/guestbook — save a new stamp */
export async function POST(request: NextRequest) {
  const db = await getDb();
  const hash = await clientIpHash(request);

  // rate limit: 15 stamps / IP / hour window
  const windowId = Math.floor(Date.now() / HOUR_MS);
  const rl = await db
    .prepare("SELECT stamp_count FROM rl_guestbook WHERE ip_hash = ? AND window_id = ?")
    .bind(hash, windowId)
    .first<{ stamp_count: number }>();
  const n = typeof rl?.stamp_count === "number" ? rl.stamp_count : 0;
  if (n >= STAMPS_PER_HOUR) {
    return NextResponse.json(
      { error: "Too many stamps from this network. Try again later." },
      { status: 429 }
    );
  }

  const ct = request.headers.get("content-type") ?? "";
  if (!ct.includes("application/json")) {
    return NextResponse.json({ error: "Expected application/json body" }, { status: 400 });
  }
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Body too large" }, { status: 400 });
  }

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const o = body as Record<string, unknown>;
  const name = moderateName(o.name);
  const pixels = moderatePixels(o.pixels);
  if (!name) return NextResponse.json({ error: "Invalid or empty name" }, { status: 400 });
  if (!pixels) {
    return NextResponse.json(
      { error: "Invalid stamp pixels (10×10 palette indices 0–5, not all paper)" },
      { status: 400 }
    );
  }

  const id = crypto.randomUUID();
  const created_at = Date.now();

  await db.batch([
    db
      .prepare("INSERT INTO guestbook (id, name, pixels_json, created_at) VALUES (?, ?, ?, ?)")
      .bind(id, name, JSON.stringify(pixels), created_at),
    db
      .prepare(
        `INSERT INTO rl_guestbook (ip_hash, window_id, stamp_count) VALUES (?, ?, 1)
         ON CONFLICT(ip_hash, window_id) DO UPDATE SET stamp_count = stamp_count + 1`
      )
      .bind(hash, windowId),
  ]);

  return NextResponse.json({ ok: true, entry: { id, name, pixels, created_at } }, { status: 201 });
}
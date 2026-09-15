import { getCloudflareContext } from "@opennextjs/cloudflare";

declare global {
  interface CloudflareEnv {
    DB: D1Database;
  }
}

export const GRID = 10;
export const CELLS = GRID * GRID;
export const MAX_NAME_LEN = 32;
export const MAX_BODY_BYTES = 12_000;
export const STAMPS_PER_HOUR = 15;
export const VISITOR_SERVER_COOLDOWN_SEC = 6 * 3600;
export const HOUR_MS = 3_600_000;

export const BAD_NAME_FRAGMENTS = [
  "http://",
  "https://",
  "www.",
  "<script",
  "</script",
  "javascript:",
  "onerror=",
  "onload=",
];

export async function getDb(): Promise<D1Database> {
  const { env } = await getCloudflareContext({ async: true });
  const db = env.DB;
  if (!db) throw new Error("D1 binding (DB) not configured");
  return db;
}

export async function clientIpHash(request: Request): Promise<string> {
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "0.0.0.0";
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(ip)
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function moderateName(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const name = raw.trim();
  if (name.length < 1 || name.length > MAX_NAME_LEN) return null;
  const lower = name.toLowerCase();
  for (const frag of BAD_NAME_FRAGMENTS) {
    if (lower.includes(frag)) return null;
  }
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(name)) return null;
  return name;
}

export function moderatePixels(raw: unknown): number[] | null {
  if (!Array.isArray(raw) || raw.length !== CELLS) return null;
  const out: number[] = [];
  for (const v of raw) {
    if (typeof v !== "number" || !Number.isInteger(v) || v < 0 || v > 5)
      return null;
    out.push(v);
  }
  if (out.every((c) => c === 5)) return null;
  return out;
}
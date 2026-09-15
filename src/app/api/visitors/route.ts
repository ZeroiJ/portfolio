import { NextRequest, NextResponse } from "next/server";
import { getDb, clientIpHash, VISITOR_SERVER_COOLDOWN_SEC } from "@/lib/d1";

async function getVisitorCount(db: D1Database): Promise<number> {
  const row = await db
    .prepare("SELECT count FROM visitors WHERE id = 1")
    .first<{ count: number }>();
  return typeof row?.count === "number" ? row.count : 0;
}

/** GET /api/visitors — current visitor count */
export async function GET() {
  const db = await getDb();
  return NextResponse.json({ count: await getVisitorCount(db) });
}

/** POST /api/visitors — increment visitor count (server-side cooldown) */
export async function POST(request: NextRequest) {
  const db = await getDb();
  const nowSec = Math.floor(Date.now() / 1000);
  const hash = await clientIpHash(request);

  const prev = await db
    .prepare("SELECT last_increment FROM rl_visitor WHERE ip_hash = ?")
    .bind(hash)
    .first<{ last_increment: number }>();

  if (prev && typeof prev.last_increment === "number") {
    if (nowSec - prev.last_increment < VISITOR_SERVER_COOLDOWN_SEC) {
      return NextResponse.json({ count: await getVisitorCount(db), incremented: false });
    }
  }

  await db.batch([
    db.prepare("UPDATE visitors SET count = count + 1 WHERE id = 1"),
    db
      .prepare("INSERT OR REPLACE INTO rl_visitor (ip_hash, last_increment) VALUES (?, ?)")
      .bind(hash, nowSec),
  ]);

  return NextResponse.json({ count: await getVisitorCount(db), incremented: true });
}
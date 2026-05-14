-- Visitor counter (single row)
CREATE TABLE IF NOT EXISTS visitors (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  count INTEGER NOT NULL DEFAULT 0
);
INSERT OR IGNORE INTO visitors (id, count) VALUES (1, 0);

-- Approved guestbook entries only (moderation is synchronous in the Worker)
CREATE TABLE IF NOT EXISTS guestbook (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  pixels_json TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_guestbook_created ON guestbook (created_at);

-- Rate limit: guestbook stamps per IP per hour window
CREATE TABLE IF NOT EXISTS rl_guestbook (
  ip_hash TEXT NOT NULL,
  window_id INTEGER NOT NULL,
  stamp_count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (ip_hash, window_id)
);

-- Visitor increment cooldown per IP (server-side, seconds since epoch)
CREATE TABLE IF NOT EXISTS rl_visitor (
  ip_hash TEXT PRIMARY KEY,
  last_increment INTEGER NOT NULL
);

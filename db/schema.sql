-- D1 schema for prospera.center. Apply: npx wrangler@4 d1 execute prospera-center --remote --file db/schema.sql
CREATE TABLE IF NOT EXISTS interested_emails (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  hostname TEXT,
  referrer TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_interested_emails_created ON interested_emails (created_at);

// Shared helpers for Pages Functions.
export interface Env {
  DB: D1Database;
  // Password for /admin (Pages secret). Without it, /api/admin answers 500.
  ADMIN_PASSWORD?: string;
  // Optional: new-signup Nostr DM (bot key is a Pages secret, recipient is a plain var in wrangler.toml).
  NOSTR_NOTIFY_SK_HEX?: string;
  NOSTR_NOTIFY_TO_HEX?: string; // recipient pubkey, hex
  NOSTR_RELAYS?: string; // comma-separated wss:// URLs
}

export const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers },
  });

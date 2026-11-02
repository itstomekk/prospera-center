import { json, type Env } from '../../server/lib';

// POST /api/admin {action: 'verify', password} -> {success, token}
// POST /api/admin {action: 'list', token}       -> {emails}
// The token is an HMAC-signed expiry time (1 hour); the password never leaves the request that verifies it.
const TTL_MS = 3600_000;
const enc = new TextEncoder();

async function hmac(secret: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

async function makeToken(secret: string): Promise<string> {
  const exp = String(Date.now() + TTL_MS);
  return `${exp}.${await hmac(secret, exp)}`;
}

async function tokenOk(secret: string, token: unknown): Promise<boolean> {
  if (typeof token !== 'string') return false;
  const [exp, sig] = token.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  return safeEqual(sig, await hmac(secret, exp));
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const secret = env.ADMIN_PASSWORD;
  if (!secret) return json({ error: 'Server configuration error' }, 500);
  let body: { action?: string; password?: unknown; token?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }
  if (body.action === 'verify') {
    const ok = typeof body.password === 'string' && safeEqual(body.password, secret);
    if (!ok) {
      await new Promise((r) => setTimeout(r, 800)); // slow down guessing
      return json({ success: false }, 401);
    }
    return json({ success: true, token: await makeToken(secret) });
  }
  if (body.action === 'list') {
    if (!(await tokenOk(secret, body.token))) return json({ error: 'Unauthorized' }, 401);
    const { results } = await env.DB.prepare(
      'SELECT id, email, hostname, referrer, created_at FROM interested_emails ORDER BY created_at DESC',
    ).all();
    return json({ emails: results });
  }
  return json({ error: 'Invalid action' }, 400);
};

import { json, type Env } from '../../server/lib';
import { nostrDM } from '../../server/nostr';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (v: unknown, n: number) => (typeof v === 'string' && v ? v.slice(0, n) : null);

// POST /api/subscribe {email, hostname?, referrer?} -> "interested in this domain" list.
// 201 new, 200 {already: true} for a duplicate, 422 invalid email.
export const onRequestPost: PagesFunction<Env> = async ({ request, env, waitUntil }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'invalid_email' }, 422);
  }
  const hostname = clip(body.hostname, 253);
  const referrer = clip(body.referrer, 1000);
  const r = await env.DB.prepare(
    `INSERT INTO interested_emails (id, email, hostname, referrer) VALUES (?, ?, ?, ?)
     ON CONFLICT(email) DO NOTHING`,
  )
    .bind(crypto.randomUUID(), email, hostname, referrer)
    .run();
  const created = (r.meta.changes ?? 0) > 0;
  if (created) {
    waitUntil(
      env.DB.prepare('SELECT COUNT(*) AS n FROM interested_emails')
        .first<{ n: number }>()
        .then((row) =>
          nostrDM(
            env,
            `prospera.center domain interest: ${email}` +
              (referrer ? ` (from ${referrer})` : '') +
              ` - total now: ${row?.n ?? 0}`,
          ),
        )
        .catch((e) => console.error('notify error', String(e))),
    );
  }
  return json({ ok: true, already: !created }, created ? 201 : 200);
};

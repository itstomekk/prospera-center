# HANDOFF: Próspera Center

## Status (2026-11-01)

- Migrated from Lovable (project `ec83379a-402c-46bd-b9da-d84cbc593ac4`) to Cloudflare Pages + D1.
  Test URL: https://prospera-center.pages.dev. Repo: https://github.com/itstomekk/prospera-center (public, MIT).
- **Not on the real domain yet.** `prospera.center` still points at Lovable (A 185.158.133.1).
- Every push to `main` deploys through GitHub Actions (first run green, deploy `f15ad186`).

## What changed from the Lovable version

- Supabase client and `src/integrations/supabase/` removed; `lovable-tagger` and `@supabase/supabase-js` dropped.
- Signup form (`src/components/EmailForm.tsx`, inside the "this domain is for sale" bar) posts to `/api/subscribe`.
  New signups send a Nostr DM to Tomek from the same bot key as bitcoinroatan.info (replaces the Resend email
  to domain@thebitcoindistrict.com; Lovable's RESEND_API_KEY is not readable).
- `/admin` posts to `/api/admin`. New password (the Lovable one is not readable): Pages secret `ADMIN_PASSWORD`,
  copy in `C:\Users\Lenovo\.secrets\prospera-center-admin.txt`. Token is now HMAC-signed (the old one was
  base64 of the password).
- Dropped as unused: `PageCounters` (not mounted anywhere), `get-emails-preview` (showed masked emails publicly),
  `track-view`, `knowledge`, `refresh-knowledge` (the knowledge file is bundled at build; the upstream
  roatan.live URL returns 404). `page_views` (783 rows) stays only in the local export.

## Data

- D1 `prospera-center` (id `751e8650-8f78-481d-8bc2-81821a418cad`): `interested_emails` 7 rows (2025-12-21 to
  2025-12-27), same count as Lovable. Export:
  `npx --yes wrangler@4 d1 execute prospera-center --remote --json --command "select email, created_at from interested_emails order by created_at"`

## Verified (2026-11-01)

- Routes 200: `/`, `/admin`, section pages. Screenshots (Firefox, desktop + mobile) in
  `../lovable-migration/qa/prospera-center/`: pixel-identical to the live site except Lovable's "Edit with Lovable"
  badge, which is gone. `/admin` differs only by its random matrix animation.
- `/api/subscribe`: 422 invalid, 201 new, 200 duplicate; the Nostr DM for the test signup reached nos.lol and
  relay.primal.net (event `cf48c1b6f2d8`). Test row deleted, count back to 7.
- `/api/admin`: wrong password 401, right password returns a token, list returns 7, forged token 401.

## Domain cutover (needs Tomek's yes)

- Registrar Namecheap, DNS on Namecheap (`dns1/2.registrar-servers.com`). No MX/TXT records, so no mail to keep.
  `www` is a Namecheap parking record. Domain expires **2026-12-19**.
- Steps: add `prospera.center` as a zone in Cloudflare (dashboard; the Hermes token cannot create zones), switch the
  nameservers at Namecheap, then add `prospera.center` + `www.prospera.center` as Pages custom domains, add a www ->
  apex redirect rule, re-export new signups from Lovable, verify, and unpublish Lovable after 2 weeks.

## Cutover progress (2026-11-02)

- Cloudflare zone `prospera.center` created (id `877a993b1420e9c9780d458e52a512f5`, Free plan) with the token in
  `C:\Users\Lenovo\.secrets\cloudflare.env` (the Hermes `.env` token cannot create zones). Records: apex and www
  proxied CNAME -> `prospera-center.pages.dev`, `_dmarc` TXT copied from Namecheap. Pages custom domains added for
  both. Redirect rule `ce83ab59` sends www -> apex (301).
- Lovable still had 7 signups, the same 7 in D1: nothing to copy.
- **Blocked:** nameservers at Namecheap still `dns1/2.registrar-servers.com`. The Namecheap API rejects the current
  IP `168.228.193.69` (not whitelisted). `ops/switch_nameservers.py` (gitignored) retries every 5 min for 12 h and
  calls `setCustom` with hunts/treasure.ns.cloudflare.com once accepted; log in `ops/switch.log`.
  Manual alternative: Namecheap > Domain > Nameservers > Custom DNS.
- After the switch: confirm zone `active`, both Pages domains `active`, apex 200, www 301, `/api/subscribe` 422 on a
  bad email, then unpublish Lovable after 2 weeks.

## SEO (2026-11-02)

- New 1200x630 `public/og-image.png` (rendered from a purpose-built card in the site's colours and fonts) replaces
  Lovable's generic image; `twitter:site @Lovable` removed; `og:url` added. No static canonical: it would mark every section as a copy of `/`.
- `public/sitemap.xml` (static, 18 URLs: home + sections 1-17; section 19 is revision notes, left out). Regenerate it
  when sections change in `src/content/prospera-knowledge.md`. `robots.txt` points to it.
- `public/_headers`: `X-Robots-Tag: noindex` on the pages.dev copies.

## Known issues (same on the Lovable site)

- Unknown paths return the SPA with HTTP 200 instead of 404.
- OG tags are the home page's on every route, and there is no per-route canonical (client-side SPA, no prerender).

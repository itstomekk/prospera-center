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

## Known issues (same on the Lovable site)

- `og:image` still points at Lovable's generic image (`lovable.dev/opengraph-image-p98pqg.png`). Needs a real share
  image.
- Unknown paths return the SPA with HTTP 200 instead of 404.

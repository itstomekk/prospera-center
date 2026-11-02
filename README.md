# Próspera Center

Independent, sourced knowledge base on Próspera ZEDE in Roatán, Honduras: legal status, tax, companies,
residency, property, banking and cost of living.

Live: https://prospera.center

## How it works

- **Frontend:** Vite + React + TypeScript + Tailwind (shadcn/ui). The knowledge base is one Markdown file,
  `src/content/prospera-knowledge.md`, bundled at build time and split into sections by `src/lib/knowledge.ts`.
  Each section is a route (`/:slug`); search runs in the browser.
- **Backend:** two [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/) in `functions/api/`,
  backed by a [D1](https://developers.cloudflare.com/d1/) (SQLite) database.
- **Hosting:** Cloudflare Pages. GitHub Pages can only serve static files, and the "interested in this domain"
  form needs a small server and a database, so the site runs on Cloudflare's free tier instead.

| Route | What it does |
|---|---|
| `POST /api/subscribe` | `{email, hostname?, referrer?}`. Adds the email to the domain-interest list. 201 new, 200 `{already: true}` duplicate, 422 invalid. Sends the owner a Nostr DM for each new email. |
| `POST /api/admin` | `{action: "verify", password}` returns a 1-hour signed token; `{action: "list", token}` returns the list. Used by `/admin`. |

Database schema: `db/schema.sql`. Shared server code: `server/`.

## Develop

```bash
npm ci
npm run dev        # http://localhost:8080 (frontend only)
npm run build      # output in dist/
npx wrangler@4 pages dev dist   # frontend + functions with a local D1
```

For the local D1, apply the schema once: `npx wrangler@4 d1 execute prospera-center --local --file db/schema.sql`.

## Deploy

Every push to `main` builds and deploys through GitHub Actions (`.github/workflows/deploy.yml`).
The Cloudflare credentials are repository secrets.

Manual deploy, with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in your environment (never commit them):

```bash
npm run build
npx wrangler@4 pages deploy dist --project-name prospera-center --branch main
```

### Configuration

| Name | Where | Purpose |
|---|---|---|
| `DB` | `wrangler.toml` | D1 binding |
| `ADMIN_PASSWORD` | Pages secret | Password for `/admin` |
| `NOSTR_NOTIFY_SK_HEX` | Pages secret, optional | Bot key that sends new-signup DMs |
| `NOSTR_NOTIFY_TO_HEX` | `wrangler.toml` | Recipient public key (hex) |

Set secrets with `npx wrangler@4 pages secret put NAME --project-name prospera-center`.

## Contributing

Corrections to the knowledge base are welcome: edit `src/content/prospera-knowledge.md` and open a pull request,
with a source for each factual change.

## License

MIT, see `LICENSE`. The knowledge-base text is provided for information only and is not legal or tax advice.

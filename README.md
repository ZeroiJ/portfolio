# Portfolio (static + Cloudflare Worker)

The site is static HTML/CSS/JS in `dist/` after `npm run build`. A small Worker in [`src/worker.ts`](src/worker.ts) serves `/api/guestbook` and `/api/visitors` and forwards everything else to static assets via the `ASSETS` binding (see [`wrangler.json`](wrangler.json)).

## First-time Cloudflare setup

1. **Create a D1 database** (once per account/project):

   ```bash
   npx wrangler d1 create portfolio-guestbook
   ```

   Copy the printed `database_id` (UUID) into `wrangler.json` under `d1_databases[0].database_id`, replacing the placeholder.

2. **Apply migrations to the remote database**:

   ```bash
   npx wrangler d1 migrations apply portfolio-guestbook --remote
   ```

3. **Build and deploy**:

   ```bash
   npm run build
   npm run deploy
   ```

## Local development

```bash
npm run build
npx wrangler d1 migrations apply portfolio-guestbook --local
npm run dev
```

Then open the URL Wrangler prints (for example `http://localhost:8787`). The guestbook and visitor APIs use a local SQLite file under `.wrangler/state/`.

## API (same origin as the site)

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/api/guestbook` | List approved stamps (newest first). |
| `POST` | `/api/guestbook` | JSON `{ "name": string, "pixels": number[] }` — `pixels` must be length 100 with integers `0`–`5` (palette indices; `5` is paper). Rejects if every cell is paper (blank). |
| `GET` | `/api/visitors` | Current visitor count. |
| `POST` | `/api/visitors` | Increment count once per client IP within a server-side cooldown (6 hours), in addition to the browser `localStorage` TTL in `script.js`. |

Rate limits for stamps are enforced in D1 per IP per hour (see Worker source).

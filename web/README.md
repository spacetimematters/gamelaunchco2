# GameLaunch — Next.js

The site as a Next.js 15 App Router app, ready to deploy on Vercel, with the
contact form writing to Neon Postgres.

```bash
npm install
cp .env.example .env.local     # paste your Neon connection string
npm run dev                    # http://localhost:3000
```

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS 3.4** — token names mirror the reference build's own
  (`igj_pink`, `igj_dark_surface`, …) so ported markup keeps working
- **@neondatabase/serverless** — HTTP driver, one round trip per query, which
  is what you want on Vercel's serverless runtime
- **zod** for form validation
- No UI library, no icon package, no webfont

## Contact form → Neon

1. Create a project at [console.neon.tech](https://console.neon.tech).
2. Copy the **pooled** connection string into `DATABASE_URL`.
3. Create the table:
   ```bash
   psql "$DATABASE_URL" -f db/schema.sql
   ```
   or paste `db/schema.sql` into the Neon SQL Editor.
4. Add `DATABASE_URL` to Vercel → Project → Settings → Environment Variables.

The form posts through a **server action** (`src/app/actions.ts`), so there is
no API route and no client-side database access. It has:

- zod validation with per-field error messages
- a honeypot field that silently accepts and discards bot submissions
- a unique index on `(email, minute)` as a cheap duplicate brake — a repeat
  inside the same minute is reported as success and not stored twice
- a clear message when `DATABASE_URL` is missing, rather than a 500

Read submissions with `select * from contact_submissions order by created_at desc;`

## Deploying

Push, then in Vercel: **New Project → import the repo → set Root Directory to
`web`** → add `DATABASE_URL` → deploy. No other configuration needed.

## Assets

Every image is a CSS background layer, so a file that isn't there yet simply
doesn't paint — there is no broken-image icon and no layout shift. Drop these
into `public/` and they appear:

| File | Where |
|---|---|
| `hero-day.jpg` | hero, light theme (~2560×1440) |
| `hero-night.jpg` | hero, dark theme |
| `portrait.jpg` | bio (5:6, ~1040×1248) |
| `posts/friend-slop.jpg` | blog card 1 (16:9) |
| `posts/streamers.jpg` | blog card 2 |
| `posts/discord.jpg` | blog card 3 |

## Content

All copy lives in `src/lib/content.tsx`. Anything commented `PLACEHOLDER` is
invented and must be replaced before launch — the testimonials, the results
numbers, and the six game titles in the logo bar. A logo bar you haven't
earned is an endorsement claim, so name only games you may name, or delete
the section.

Real, from Joel: the 200M+ views, 180+ games, 15M+ in a channel's first 90
days, and the three blog posts.

## Verified

Production build, then checked in a real browser at 1440 and 390 wide, in
both light and dark:

- zero horizontal overflow
- no console or page errors
- theme resolves from system preference and from the persisted toggle, applied
  before first paint

## Not done yet

- **The blog post pages** (`/blog`, `/blog/[slug]`) are linked but not built.
  The three articles exist in full in the static site at the repo root.
- **No real assets** — see above.

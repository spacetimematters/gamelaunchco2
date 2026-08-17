-- Run once against your Neon database:
--   psql "$DATABASE_URL" -f db/schema.sql
-- or paste into the Neon SQL Editor.

create table if not exists contact_submissions (
  id          bigserial primary key,
  name        text        not null,
  email       text        not null,
  studio      text,
  game_url    text,
  message     text        not null,
  source      text        not null default 'website',
  created_at  timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on contact_submissions (created_at desc);

-- Cheap abuse brake: one submission per email per minute.
create unique index if not exists contact_submissions_dedupe_idx
  on contact_submissions (email, date_trunc('minute', created_at));

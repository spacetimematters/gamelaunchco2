import { neon } from "@neondatabase/serverless";

/**
 * Neon's HTTP driver — one round trip per query, which is what you want on
 * Vercel's serverless runtime. No pooling to manage.
 *
 * DATABASE_URL comes from the Neon dashboard (the "pooled" connection string).
 */
let cached: ReturnType<typeof neon> | null = null;

export function sql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env.local and paste your Neon connection string."
    );
  }
  if (!cached) cached = neon(url);
  return cached;
}

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes — GameLaunch",
  description:
    "Notes on marketing indie games: thumbnails, hooks, streamer outreach, Discord, and the economics of $10 co-op.",
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main id="main" className="py-14 sm:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <p className="eyebrow mb-2">Notes</p>
            <h1 className="text-3xl sm:text-4xl">Things I keep having to explain</h1>
            <p className="mt-3 leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">
              Marketing notes for people shipping indie games. No roundups, no sponsors.
            </p>
          </header>

          <div className="grid gap-6">
            {POSTS.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                    className="card group flex flex-col overflow-hidden hover:border-igj_pink sm:flex-row">
                <div
                  className="aspect-video w-full shrink-0 bg-igj_lightgray bg-cover bg-center dark:bg-igj_dark_bg_alt sm:aspect-auto sm:w-56"
                  style={{ backgroundImage: `url(${p.image})` }}
                  aria-hidden
                />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-igj_muted dark:text-igj_dark_text_muted">
                    <span className="rounded bg-igj_pink px-2 py-0.5 text-igj_white">{p.category}</span>
                    <time dateTime={p.isoDate}>{p.date}</time>
                    <span>· {p.readTime} read</span>
                  </p>
                  <h2 className="mb-2 text-lg normal-case sm:text-xl">{p.title}</h2>
                  <p className="flex-1 leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 text-[11px] font-extrabold uppercase tracking-widest text-igj_pink">
                    Read it →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

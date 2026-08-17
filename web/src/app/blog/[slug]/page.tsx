import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { POSTS, getPost } from "@/lib/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found — GameLaunch" };
  return {
    title: `${post.title} — GameLaunch`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
    },
  };
}

export default async function Article({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Nav />
      <main id="main" className="py-10 sm:py-16">
        <article className="container">
          <div className="mx-auto max-w-[720px]">
            <Link href="/blog"
                  className="mb-6 inline-block text-[11px] font-extrabold uppercase tracking-widest text-igj_pink hover:text-igj_darkpink">
              ← All notes
            </Link>

            <p className="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-igj_muted dark:text-igj_dark_text_muted">
              <span className="rounded bg-igj_pink px-2 py-0.5 text-igj_white">{post.category}</span>
              <time dateTime={post.isoDate}>{post.date}</time>
              <span>· {post.readTime} read</span>
            </p>

            <h1 className="text-2xl leading-tight sm:text-4xl">{post.title}</h1>

            <p className="mt-5 rounded border border-igj_gray border-l-4 border-l-igj_pink bg-igj_lightgray p-5 text-base font-semibold leading-7 dark:border-igj_dark_border dark:border-l-igj_pink dark:bg-igj_dark_surface sm:text-lg">
              {post.standfirst}
            </p>

            <hr className="my-8 border-igj_gray dark:border-igj_dark_border" />

            <div className="text-base sm:text-lg">{post.body}</div>

            <div className="mt-10 border-t border-igj_gray pt-8 dark:border-igj_dark_border">
              <a href="/#contact" className="btn-pink">Send me your game</a>
            </div>
          </div>

          {others.length > 0 && (
            <aside className="mx-auto mt-14 max-w-[720px]">
              <h2 className="mb-5 text-base">Keep reading</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {others.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-5 hover:border-igj_pink">
                    <p className="mb-2 text-[10px] font-extrabold uppercase tracking-widest text-igj_muted dark:text-igj_dark_text_muted">
                      {p.category} · {p.readTime}
                    </p>
                    <h3 className="text-sm normal-case leading-snug sm:text-base">{p.title}</h3>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

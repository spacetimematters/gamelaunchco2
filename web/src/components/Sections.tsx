import { PLANS, TESTIMONIALS, RESULTS, POSTS, GAMES, STATS } from "@/lib/content";

/* --------------------------------------------------------------- shared */

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <Rule flip />
        <h2 className="text-2xl sm:text-3xl md:text-4xl">{title}</h2>
        <Rule />
      </div>
    </div>
  );
}

function Rule({ flip = false }: { flip?: boolean }) {
  return (
    <span className="hidden h-5 w-16 shrink-0 sm:block lg:w-32" aria-hidden>
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" className="h-full w-full">
        <g stroke="#E9368A" strokeWidth={2} fill="none">
          {flip ? (
            <>
              <path d="M0 10 H130" />
              <path d="M142 10 L152 2 L162 10 L152 18 Z" />
              <path d="M166 10 L176 2 L186 10 L176 18 Z" />
            </>
          ) : (
            <>
              <path d="M14 10 L24 2 L34 10 L24 18 Z" />
              <path d="M38 10 L48 2 L58 10 L48 18 Z" />
              <path d="M70 10 H200" />
            </>
          )}
        </g>
      </svg>
    </span>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <span
      className={`mt-[6px] block h-[7px] w-[11px] shrink-0 -rotate-45 border-b-2 border-l-2 ${className}`}
      aria-hidden
    />
  );
}

/* ------------------------------------------------------------------ bio */

export function Intro() {
  return (
    <section id="about" className="bg-igj_background py-16 dark:bg-igj_dark_bg_alt sm:py-24">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-14">
        <div className="mx-auto w-full max-w-[320px] md:mx-0">
          {/* Drop /public/portrait.jpg in and this fills. */}
          <div
            role="img"
            aria-label="Joel"
            className="aspect-[5/6] w-full rounded border border-igj_gray bg-igj_lightgray bg-cover bg-center dark:border-igj_dark_border dark:bg-igj_dark_surface"
            style={{ backgroundImage: "url(/portrait.jpg)" }}
          />
        </div>

        <div>
          <p className="eyebrow mb-3">Who you&rsquo;d be working with</p>
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl">
            I&rsquo;m Joel. I&rsquo;m the machine behind the views.
          </h2>
          <p className="mb-4 text-base font-semibold leading-7 text-igj_black dark:text-igj_dark_text sm:text-lg">
            Editing, thumbnails, and the research that decides what gets made in the first place —
            that&rsquo;s my half. 200M+ views of it, and sponsored campaigns for 180+ indie games.
          </p>
          <p className="mb-4 leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">
            I met Andy on Instagram eight years ago. We bonded over the games we both played and
            never really stopped; he&rsquo;s the voice on camera, a Twitch and YouTube Partner
            posting as AndySlaps, and I build everything around him. Our newest channel did 15M+
            views in its first 90 days.
          </p>
          <p className="leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">
            What that means for you: I&rsquo;m not an agency and there&rsquo;s no account manager.
            You get the person who cuts the video, tests the thumbnail, and can tell you in one
            watch whether your game has a hook worth building a campaign on.
          </p>

          <blockquote className="mt-6 rounded border border-igj_gray border-l-4 border-l-igj_pink bg-igj_white p-5 text-lg font-bold leading-7 dark:border-igj_dark_border dark:border-l-igj_pink dark:bg-igj_dark_surface">
            If you&rsquo;re a dev with a game you believe in, or a brand that wants to collab —
            the DMs are open, and I actually read them.
          </blockquote>

          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="card p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-igj_pink">{s.value}</dd>
                <dd className="mt-1 text-[11px] font-bold uppercase tracking-widest text-igj_muted dark:text-igj_dark_text_muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- games bar */

export function GamesBar() {
  return (
    <section aria-label="Games worked on" className="border-y border-igj_gray py-10 dark:border-igj_dark_border">
      <div className="container">
        <p className="mb-6 text-center text-[11px] font-extrabold uppercase tracking-widest text-igj_muted dark:text-igj_dark_text_muted">
          A few of the 180+
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {GAMES.map((g) => (
            <li key={g}
                className="text-sm font-extrabold uppercase tracking-widest text-igj_muted transition-colors duration-300 hover:text-igj_black dark:text-igj_dark_text_muted dark:hover:text-igj_dark_text sm:text-base">
              {g}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- plans */

export function Plans() {
  return (
    <section id="plans" className="py-16 sm:py-24">
      <div className="container">
        <SectionHeading eyebrow="How can I help you?" title="Three ways to work together" />
        <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">
          Same person doing the work either way — what changes is how long I&rsquo;m on it. Every
          one starts with me actually playing your game and telling you straight whether I can move it.
        </p>

        <div className="mt-12 grid max-w-md gap-6 sm:mx-auto lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:items-start">
          {PLANS.map((p) => (
            <article
              key={p.rarity}
              className={`pennant relative border border-t-0 border-igj_gray bg-igj_white px-6 pb-14 pt-9 text-center transition-transform duration-300 hover:-translate-y-1 dark:border-igj_dark_border dark:bg-igj_dark_surface ${
                p.popular ? "order-first lg:order-none lg:-mt-7 lg:pt-12" : ""
              }`}
            >
              <span
                className="absolute inset-x-0 top-0 block"
                style={{ height: p.popular ? 10 : 6, background: p.color }}
                aria-hidden
              />
              {p.popular && (
                <p className="absolute right-0 top-6 flex items-center gap-1.5 bg-igj_black py-1.5 pl-5 pr-3 text-[10px] font-extrabold uppercase tracking-widest text-igj_white"
                   style={{ clipPath: "polygon(13px 0, 100% 0, 100% 100%, 13px 100%, 0 50%)" }}>
                  Most chosen
                </p>
              )}

              <span className="mx-auto mb-4 block h-11 w-11" style={{ color: p.color }} aria-hidden>
                {p.icon}
              </span>

              <h3 className="text-2xl sm:text-3xl">{p.rarity}</h3>
              <p className="mt-1 text-xs font-extrabold uppercase tracking-wider">{p.scope}</p>
              <p className="mx-auto mt-4 max-w-[27ch] leading-6 text-igj_darkgray dark:text-igj_dark_text_muted">
                {p.blurb}
              </p>

              <ul className="mt-6 space-y-2.5 text-left">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="border-current" />
                    <span className="text-sm leading-6 text-igj_darkgray dark:text-igj_dark_text_muted">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact"
                 className="mt-7 inline-flex rounded px-6 py-2.5 text-sm font-extrabold uppercase tracking-wide text-igj_white transition-opacity duration-300 hover:opacity-90"
                 style={{ background: p.color }}>
                More info
              </a>
              <p className="mt-3 text-[11px] text-igj_muted dark:text-igj_dark_text_muted">{p.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- testimonials */

function Stars({ n }: { n: number }) {
  return (
    <div className="mb-3 flex gap-0.5" role="img" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4"
             fill={i < n ? "#E9368A" : "#E5E5E5"} aria-hidden>
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8Z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="proof" className="bg-igj_background py-16 dark:bg-igj_dark_bg_alt sm:py-24">
      <div className="container">
        <SectionHeading eyebrow="Fellow travellers" title="Devs who let me near their game" />
        <div className="mt-12 gap-5 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card mb-5 break-inside-avoid p-5">
              <Stars n={t.stars} />
              <blockquote className="leading-6 text-igj_black dark:text-igj_dark_text">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-igj_gray pt-3 dark:border-igj_dark_border">
                <span className="block text-sm font-extrabold uppercase tracking-wide">{t.name}</span>
                <span className="text-xs text-igj_muted dark:text-igj_dark_text_muted">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- results */

export function Results() {
  return (
    <section id="results" className="py-16 sm:py-24">
      <div className="container">
        <SectionHeading eyebrow="Completed quests" title="What the numbers did" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r, i) => (
            <a key={r.name} href="#contact"
               className="card block p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-igj_pink">
              <span className="mb-4 inline-grid h-9 w-9 place-items-center rounded bg-igj_pink/10 text-sm font-extrabold text-igj_pink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-lg normal-case">{r.name}</h3>
              <p className="mb-4 leading-6 text-igj_darkgray dark:text-igj_dark_text_muted">{r.result}</p>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-igj_pink">
                See the numbers →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- notes */

export function Notes() {
  return (
    <section id="notes" className="bg-igj_background py-16 dark:bg-igj_dark_bg_alt sm:py-24">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">Notes</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl">Things I keep having to explain</h2>
          </div>
          <a href="/blog" className="text-sm font-extrabold uppercase tracking-widest text-igj_pink">
            All notes →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="card group flex flex-col overflow-hidden hover:border-igj_pink">
              <div
                className="aspect-video w-full bg-igj_lightgray bg-cover bg-center dark:bg-igj_dark_bg_alt"
                style={{ backgroundImage: `url(${p.image})` }}
                aria-hidden
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-igj_muted dark:text-igj_dark_text_muted">
                  <span className="rounded bg-igj_pink px-2 py-0.5 text-igj_white">{p.category}</span>
                  <span>{p.date}</span><span>· {p.readTime}</span>
                </p>
                <h3 className="mb-2 text-base leading-snug normal-case">{p.title}</h3>
                <p className="flex-1 text-sm leading-6 text-igj_darkgray dark:text-igj_dark_text_muted">{p.excerpt}</p>
                <span className="mt-4 text-[11px] font-extrabold uppercase tracking-widest text-igj_pink">Read it →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

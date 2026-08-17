import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Intro, GamesBar, Plans, Testimonials, Results, Notes } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* HERO — two images swapped by theme, the reference's own pattern.
            Drop /public/hero-day.jpg and /public/hero-night.jpg in; until
            then the gradient underneath carries it. */}
        <section id="top" className="relative isolate flex min-h-[78vh] items-center overflow-hidden
                                     bg-gradient-to-br from-[#3B4A63] via-[#6E819C] to-[#A8B7C9]
                                     dark:from-[#0E131C] dark:via-[#1C2534] dark:to-[#2E3B4F]">
          {/* Background layers, not <img>: a file that isn't there yet simply
              doesn't paint, so there is never a broken-image icon. */}
          <div className="absolute inset-0 -z-10 bg-cover bg-center dark:hidden"
               style={{ backgroundImage: "url(/hero-day.jpg)" }} />
          <div className="absolute inset-0 -z-10 hidden bg-cover bg-center dark:block"
               style={{ backgroundImage: "url(/hero-night.jpg)" }} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />

          <div className="container py-20 sm:py-28">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-white/80 sm:text-sm">
                Short-form that makes indie games move
              </p>
              <h1 className="text-3xl leading-[1.05] text-igj_white sm:text-5xl lg:text-7xl">
                You made the game.<br />
                <span className="box-decoration-clone shadow-[inset_0_-0.14em_0_#E9368A]">
                  Nobody saw it.
                </span>
              </h1>
              <p className="mt-5 max-w-[42ch] text-sm font-bold uppercase leading-6 tracking-wide text-white/85 sm:text-base sm:leading-7">
                I&rsquo;m Joel. I do the editing, the thumbnails and the research behind 200M+ views,
                and I&rsquo;ve run sponsored campaigns for 180+ indie games.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-pink">Send me your game</a>
                <p className="text-xs font-bold uppercase tracking-wide text-white/80 sm:text-sm">
                  DMs are open, and I actually read them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Intro />
        <GamesBar />
        <Plans />
        <Testimonials />
        <Results />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

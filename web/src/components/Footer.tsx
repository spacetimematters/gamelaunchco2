const NAV = [
  { title: "Work", links: [["Ways to work", "#plans"], ["Results", "#results"], ["What devs say", "#proof"]] },
  { title: "More", links: [["Notes", "/blog"], ["About Joel", "#about"], ["Contact", "#contact"]] },
  { title: "The small print", links: [["Privacy", "#"], ["Terms", "#"], ["Cookies", "#"]] },
];

export default function Footer() {
  return (
    <footer className="py-14">
      <div className="container">
        <div className="grid gap-10 border-b border-igj_gray pb-10 dark:border-igj_dark_border md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div>
            <span className="text-lg font-extrabold uppercase tracking-wide">
              GameLaunch<span className="text-igj_pink">.</span>
            </span>
            <p className="mt-3 max-w-[32ch] leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">
              Great games don&rsquo;t travel on their own. That&rsquo;s the whole job.
            </p>
            <a href="mailto:hello@gamelaunch.co"
               className="mt-3 inline-block text-sm font-bold text-igj_pink hover:text-igj_darkpink">
              hello@gamelaunch.co
            </a>
          </div>
          <nav className="grid grid-cols-2 gap-6 sm:grid-cols-3" aria-label="Footer">
            {NAV.map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-[11px] tracking-widest text-igj_muted dark:text-igj_dark_text_muted">
                  {col.title}
                </h3>
                {col.links.map(([label, href]) => (
                  <a key={label} href={href}
                     className="block py-1 text-sm text-igj_darkgray transition-colors duration-300 hover:text-igj_pink dark:text-igj_dark_text_muted">
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <p className="pt-6 text-xs text-igj_muted dark:text-igj_dark_text_muted">
          © {new Date().getFullYear()} GameLaunch. Made between edits.
        </p>
      </div>
    </footer>
  );
}

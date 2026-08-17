"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#plans", label: "Work" },
  { href: "#proof", label: "Proof" },
  { href: "#results", label: "Results" },
  { href: "#notes", label: "Notes" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="container flex items-center gap-4 py-3">
        <a href="#top" className="flex items-center gap-2 text-igj_white" aria-label="GameLaunch — home">
          <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden>
            <rect x="2" y="2" width="13" height="13" rx="2" fill="#E9368A" />
            <rect x="17" y="2" width="13" height="13" rx="2" fill="#1863DC" />
            <rect x="2" y="17" width="13" height="13" rx="2" fill="#1863DC" />
            <rect x="17" y="17" width="13" height="13" rx="2" fill="#E9368A" />
          </svg>
          <span className="text-lg font-extrabold uppercase tracking-wide">
            GameLaunch<span className="text-igj_pink">.</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}
               className="text-xs font-extrabold uppercase tracking-widest text-igj_dark_text_muted transition-colors duration-300 hover:text-igj_white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <ThemeToggle />
          <a href="#contact" className="btn-pink hidden sm:inline-flex">Send me your game</a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="text-igj_white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-neutral-800 bg-black lg:hidden" aria-label="Mobile">
          <div className="container flex flex-col py-2">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 className="py-3 text-sm font-extrabold uppercase tracking-widest text-igj_dark_text_muted hover:text-igj_white">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-pink my-3 w-full">
              Send me your game
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

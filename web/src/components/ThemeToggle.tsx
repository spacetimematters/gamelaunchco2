"use client";

import { useEffect, useState } from "react";

const KEY = "site-theme";

/** Sun and moon are Feather Icons (MIT), the same pair the reference uses. */
function Sun() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
         strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function Moon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
         strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setReady(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem(KEY, next ? "dark" : "light"); } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={ready ? dark : undefined}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-[30px] w-[60px] shrink-0 rounded-full border border-neutral-700 bg-neutral-800"
    >
      <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-igj_white">
        <Sun />
      </span>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-igj_dark_text_muted">
        <Moon />
      </span>
      <span
        className="absolute left-[3px] top-[3px] h-6 w-6 rounded-full bg-igj_pink transition-transform duration-300"
        style={{ transform: dark ? "translateX(30px)" : "translateX(0)" }}
      />
    </button>
  );
}

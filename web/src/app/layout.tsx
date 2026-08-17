import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameLaunch — I make indie games go viral",
  description:
    "Editing, thumbnails and research behind 200M+ views, and sponsored campaigns for 180+ indie games. If you built something worth playing, the problem isn't the game.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1C232E" },
  ],
};

/* Applied before first paint so the page never flashes the wrong theme. */
const themeScript = `
try {
  var t = localStorage.getItem('site-theme');
  var dark = t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches);
  if (dark) document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a href="#main"
           className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded focus:bg-igj_pink focus:px-4 focus:py-2 focus:font-extrabold focus:text-igj_white">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

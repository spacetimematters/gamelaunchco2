import type { Config } from "tailwindcss";

/**
 * Token names mirror the reference build's own Tailwind theme (igj_*), with
 * the hex values read out of the page source. Keeping the names identical
 * means markup ported from the old site keeps working unchanged.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        igj_pink: "#E9368A",
        igj_darkpink: "#C41F6D",
        igj_blue: "#1863DC",
        igj_darkblue: "#0056A7",
        igj_tan: "#C4A882",

        igj_white: "#FFFFFF",
        igj_black: "#212121",
        igj_lightblack: "#0F0F0F",

        igj_background: "#F4F4F4",
        igj_lightgray: "#F8F8F8",
        igj_gray: "#EBEBEB",
        igj_bordergray: "#E5E5E5",
        igj_darkgray: "#4E4B66",
        igj_muted: "#8C8C97",

        igj_dark_bg: "#1C232E",
        igj_dark_bg_alt: "#141924",
        igj_dark_surface: "#171C28",
        igj_dark_border: "#2A3140",
        igj_dark_text: "#FFFFFF",
        igj_dark_text_muted: "#A3A3A3",
      },
      borderRadius: { DEFAULT: "4px" },
      transitionDuration: { DEFAULT: "300ms" },
    },
  },
  plugins: [],
};
export default config;

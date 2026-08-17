# assets

Image slots. Every one is optional — each has an `onerror` that removes the
image so a missing file never shows a broken icon.

| File | Where | Notes |
|---|---|---|
| `hero-day.jpg` | hero background, light theme | ~2560×1440, landscape. Falls back to a CSS gradient. |
| `hero-night.jpg` | hero background, dark theme | Same size. The night version of the same scene. |
| `portrait.jpg` | bio section | 5:6 portrait, ~1040×1248. `object-fit: cover`. |
| `post-friend-slop.jpg` | blog teaser 1 | 16:9, ~800×450 |
| `post-streamers.jpg` | blog teaser 2 | 16:9 |
| `post-discord.jpg` | blog teaser 3 | 16:9 |

The hero pair follows the reference build's pattern (`2k_DAY.webp` /
`2k_NIGHT.webp`): two images of the same scene, swapped by theme, with white
type over a bottom-up scrim.

Nothing else on the site is illustration — the remaining inline SVG is
functional only: star ratings, chevrons, the brand mark, the theme toggle's
sun/moon, and the testimonial glyph.

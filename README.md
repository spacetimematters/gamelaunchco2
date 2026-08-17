# GameLaunch

A single-scroll site plus a small blog for GameLaunch — Joel, who does the
editing, thumbnails and research behind 200M+ views and has run sponsored
campaigns for 180+ indie games. Built on a quest metaphor: the visitor's
game is lost in the wilderness, Joel is the guide, and the ways to work
together are named with game loot rarities.

No build step, no dependencies, no external requests. Open `index.html`.

```
index.html              home
styles.css              tokens, layout, both themes, article styles
main.js                 theme toggle, sticky nav, signup validation
blog/index.html         notes index
blog/friend-slop.html   The $10 Board Game
blog/streamers.html     100+ Streamers For $0
blog/discord.html       1,000 Discord Members
assets/                 the one photograph on the site
```

## Design system

Rebuilt against the reference build the client supplied (indiegamejoe.com),
with its palette read from the page source rather than guessed.

**Colour**

| Role | Light | Dark |
|---|---|---|
| Page | `#FFFFFF` | `#1C232E` |
| Sections, cards | `#F4F4F4` / `#F8F8F8` | `#171C28` |
| Nav | `#000000` | `#000000` |
| Ink | `#212121` | `#FFFFFF` |
| Muted | `#4E4B66` | `#A3A3A3` |
| Primary accent | `#E9368A` | `#E9368A` |
| Second accent | `#1863DC` | `#4D8CF0` |

Pink is the action colour — it carries the CTAs, the ornament and the
highlights, exactly as in the reference. Blue is structural. Rarity tiers
run blue → pink → tan.

**Type** is a system sans throughout. Headings are extrabold, uppercase and
lightly tracked; body copy stays sentence case. No display serif, no
webfont, nothing fetched at runtime.

**Surfaces** are flat: 1px borders, a 4px radius, and colour-only hover
transitions at 300ms. No offset shadows, no cut corners, no double rules.

**Illustration was removed.** The hand-drawn vector landscapes, pennant
bunting, wax seal, shield mark and drawn newsletter beacon are gone — they
were the weakest part of the build. What replaces them follows the
reference, which is image-led (72 `<img>` to 14 inline SVG): real image
slots with graceful fallbacks. The remaining inline SVG is functional only —
star ratings, chevrons, the brand mark, the toggle's sun/moon, and the
testimonial glyph. The sun, moon and chevrons are taken verbatim from the
reference page (they are stock open-source icon shapes — the moon is
Feather's, MIT).

**Two ornaments survive**, because the reference itself uses them: the
section title flanked by rules ending in stacked diamonds, and the pennant
notch cut into the bottom edge of each tier card.

**The tier section follows the supplied screenshot**: centred eyebrow, bold
uppercase title, three centred cards with a rarity-coloured cap bar, a
notched MOST CHOSEN tab on the raised middle card, tick lists, and a centred
MORE INFO button.

**Two terrains.** The hero swaps a day image for a night one with the theme,
the same pattern the reference uses for `2k_DAY.webp` / `2k_NIGHT.webp`.
Until real artwork is dropped into `assets/`, a CSS gradient stands in.
Themes resolve three ways — system light, system dark, and an explicit
choice persisted to `localStorage` — each with its own selector, applied
before first paint by a blocking inline script.

**No animation.** No keyframes, no scroll reveals. The only transitions are
hover, focus and press states.

## Accessibility & responsive

- Skip link, visible focus rings, `aria-pressed` and a live `aria-label` on
  the toggle, `role="status"` on the form, labelled star ratings.
- `prefers-reduced-motion` shortens the remaining transitions.
- On phones the 2:1 hero scene bottom-anchors into a landscape band rather
  than cropping to a narrow centre strip.
- Verified: zero horizontal overflow from 320px to 1920px, no console
  errors, and `document.getAnimations()` empty on every page in both themes.

## What's real and what isn't

**Real** — Joel's own figures and history: 200M+ views, 180+ games, a
channel at 15M+ in its first 90 days, meeting Andy on Instagram eight years
ago, Andy being the on-camera half and a Twitch and YouTube Partner posting
as AndySlaps. **The three blog posts are Joel's own writing**, reproduced in
full.

**Placeholder — replace before this is public:**

- **`hello@gamelaunch.co`**, in the footers, nav and all three tier buttons.
- **Testimonials** — twelve quotes with invented names and companies.
- **Results grid** — six games with invented numbers.
- **Games bar** — six fictional titles (Hollowfen, Ashvault, Tin Compass,
  Nightmarket, Saltpetre, Wrenlight). Only name real games you have
  permission to name, or delete the section; a logo bar you haven't earned
  is an endorsement claim.
- **Links** — results, legal pages and all four socials are `#`.
- **Tier names and terms** — The Drop / The Run / The Guild, and lines like
  "two games at a time".

There are no prices anywhere; every tier ends in a conversation.

The signup form validates and gives feedback but posts nowhere. Point it at
a mail provider in `main.js` (the branch is commented).

`assets/portrait.jpg` doesn't exist yet — the bio falls back to a marked
placeholder until it does.

## Known trade-off

**Testimonial wall reading order.** CSS `columns` flows top-to-bottom per
column, so visual order differs from DOM order. Fine for an unordered wall
of quotes; don't reuse the pattern where sequence matters.

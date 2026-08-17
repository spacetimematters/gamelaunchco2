# Joel — short-form for indie games

A single-scroll personal site for Joel, who does the editing, thumbnails
and research behind 200M+ views and has run sponsored campaigns for 180+
indie games. Built on an adventure/quest metaphor: the visitor's game is
lost in the wilderness, Joel is the guide, and the ways to work together
are named with game loot rarities.

No build step, no dependencies, no external requests. Open `index.html`.

```
index.html    markup + every illustration (inline SVG)
styles.css    design tokens, layout, the two-terrain theming
main.js       theme toggle, sticky nav, signup validation
assets/       the one photograph on the page
```

## Design system

**Two terrains, not one palette.** Light and dark aren't a colour swap. The
hero holds two separately drawn scenes — a day valley with a low sun, snow
caps, a winding chalk path and a hiker; and a night version with a crescent
moon, aurora ribbons, a constellation, a lake, and a campfire with a tent.
Whichever matches the resolved theme cross-fades in.

**Themes resolve three ways** and each is handled explicitly in CSS:

| State | How it's set | Selector |
|---|---|---|
| System light | default | bare `:root` |
| System dark | OS preference, no choice made | `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }` |
| Explicit | the toggle, persisted to `localStorage` | `:root[data-theme="dark"]` / `["light"]` |

A blocking inline script in `<head>` applies the stored choice before first
paint, so the wrong terrain never flashes.

**Colour.** Purple (`--accent`) carries structure — dividers, section rules,
eyebrow marks, primary buttons. Magenta (`--accent-2`) is reserved for small
emphasis: star ratings, the brand full stop, list bullets, social hovers.
Rarity tiers each own a colour (`--epic` purple, `--legendary` gold,
`--mythical` magenta) that drives their emblem, bullets, scope line, top
rule and CTA.

**Iconography** is drawn by hand: the diamond brand mark, three tier emblems
(faceted diamond, hunting horn, crystal cluster), six quest sigils, wave and
triangle section dividers, six game wordmarks, and the social glyphs. There
is no icon library.

**Type** is a display serif for headings and pull-quotes, a sans for body,
and a mono for eyebrows, metadata and small print — all system stacks, so
nothing is fetched at runtime.

**No animation.** There are no keyframe animations and no scroll reveals —
nothing on the page moves on its own. What remains are CSS transitions on
hover, focus and the theme cross-fade, which are feedback for a user action
rather than ambient motion.

## Sections

Hero → bio with pull-quote → games bar → three loot-rarity ways to work
(the middle one flagged) → testimonial wall → results grid → notes →
newsletter band → footer.

## Accessibility & responsive notes

- Skip link, visible focus rings, `aria-pressed` and a live `aria-label` on
  the theme toggle, `role="status"` on the form message, `role="img"` +
  label on each star rating.
- `prefers-reduced-motion` shortens the remaining transitions.
- On phones the 2:1 hero scene would crop to a useless centre strip, so it
  bottom-anchors into a landscape band and masks into the page instead.
- Verified free of horizontal overflow from 320px to 1920px.

## What's real and what isn't

**Real** — taken from Joel's own description of the work: the 200M+ views,
180+ games, the newest channel's 15M+ in its first 90 days, meeting Andy on
Instagram eight years ago, Andy being the on-camera half and a Twitch and
YouTube Partner posting as AndySlaps.

**Placeholder — replace before this is public:**

- **`joel@example.com`**, in the footer and on all three tier buttons.
- **Testimonials** — twelve quotes with invented names and companies.
- **Results grid** — six games with invented numbers.
- **Games bar** — six fictional titles (Hollowfen, Ashvault, Tin Compass,
  Nightmarket, Saltpetre, Wrenlight). Only name real games you have
  permission to name, or delete the section; a logo bar you haven't earned
  is an endorsement claim.
- **Notes** — three invented posts.
- **Links** — results, notes, legal pages and all four socials are `#`.
- **Brand wordmark** — currently just "Joel". Swap for a handle if there's
  one you post under.
- **Tier names and terms** — The Drop / The Run / The Guild, and lines like
  "two games at a time".

There are no prices anywhere; every tier ends in a conversation instead.

The signup form validates and gives feedback but posts nowhere. Point it at
a mail provider in `main.js` (the branch is commented).

`assets/portrait.jpg` doesn't exist yet — the bio falls back to a marked
placeholder until it does. That's the single photograph on the page.

## Known trade-off

**Testimonial wall reading order.** CSS `columns` flows top-to-bottom per
column, so the visual order down the page differs from DOM order. Fine for
an unordered wall of quotes; don't reuse the pattern where sequence matters.

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

**White and neon blue, over black.** Light mode is a pure white page with
`#F8F8F8` for banded sections and panels. Dark mode is `#1D232E` for the
page and `#181C28` for cards and important panels. **The nav bar is pure
black in both themes** — the one fixed point in the design. Neon blue
(`#1F51FF` light, `#4D7CFF` dark) carries every highlight, with electric
cyan (`#00C2FF` / `#38D6FF`) as the secondary. Rarity tiers run sky blue →
neon blue → brass.

**Medieval structure, not medieval decoration.** The ornament is
load-bearing: a shield wordmark, a wax-seal badge on the portrait, pennant
bunting closing the hero, a pennant notch cut into the bottom edge of every
tier card, doubled rules under headings, cut corners on buttons and the hero
panel, hard offset shadows instead of soft ones, and illuminated drop caps
opening the bio and every article.

**The tier section follows the supplied reference layout**: centred eyebrow,
a bold uppercase title flanked by rules ending in stacked diamonds, three
centred cards with a rarity-coloured cap bar, a notched MOST CHOSEN tab on
the raised middle card, tick lists, and a centred MORE INFO button.

**No transparency anywhere.** Every surface, border and overlay is a solid
colour. There is no `backdrop-filter`, no `rgba()` UI fill, no faded panel,
no opacity on a component. Two consequences worth knowing:

- The hero copy sits on a **solid panel** over the artwork rather than on a
  semi-transparent scrim.
- The two terrains **swap outright** rather than cross-fading, because a
  cross-fade is two half-transparent images stacked.

The illustrations still use gradient fills for shading inside the SVG —
that's how the sun, moon and firelight are drawn, and it isn't a
transparency effect in the UI sense.

**Two terrains, not one palette.** Light and dark aren't a colour swap. The
hero holds two separately drawn scenes — a pale-blue day valley with a white
sun, snow caps, a chalk path and a hiker; and a night version in the
`#1D232E` family with a crescent moon, blue aurora, a constellation, a lake,
and an arcane blue campfire.

**Themes resolve three ways**, each handled explicitly:

| State | How it's set | Selector |
|---|---|---|
| System light | default | bare `:root` |
| System dark | OS preference, no choice made | `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }` |
| Explicit | the toggle, persisted to `localStorage` | `:root[data-theme="dark"]` / `["light"]` |

A blocking inline script in `<head>` applies the stored choice before first
paint, so the wrong terrain never flashes.

**No animation.** No keyframes, no scroll reveals — nothing moves on its
own. The only transitions are hover, focus and the press states, which
respond to a user action.

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

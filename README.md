# Wayfinder

A single-scroll marketing site for a solo consultant, built on an
adventure/quest metaphor: the visitor is lost in the wilderness, the
consultant is the guide, and the service tiers are named like game loot.

The worked example is a launch strategist for indie game studios. All the
names, numbers, quotes and logos are placeholder — see
[Swapping in real content](#swapping-in-real-content).

No build step, no dependencies, no external requests. Open `index.html`.

```
index.html    markup + every illustration (inline SVG)
styles.css    design tokens, layout, the two-terrain theming
main.js       theme toggle, sticky nav, scroll reveals, signup validation
assets/       the one photograph on the page
```

## Design system

**Two terrains, not one palette.** Light and dark aren't a colour swap. The
hero holds two separately drawn scenes — a day valley with a low sun, snow
caps, a winding chalk path and a hiker; and a night version with a crescent
moon, aurora ribbons, a constellation, a lake, and a campfire with a tent.
Whichever matches the resolved theme cross-fades in. The newsletter beacon
and the blog-teaser art re-tone through the same token set.

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
`--mythical` magenta) that drives their emblem, bullets, top rule and CTA.

**Iconography** is drawn by hand: the diamond brand mark, three tier emblems
(faceted diamond, hunting horn, crystal cluster), six quest sigils, wave and
triangle section dividers, press logos, and the social glyphs. There is no
icon library.

**Type** is a display serif for headings and pull-quotes, a sans for body,
and a mono for eyebrows, metadata and small print — all system stacks, so
nothing is fetched at runtime.

## Sections

Hero → bio with pull-quote → press bar → three loot-rarity packages (the
middle one flagged) → testimonial wall → case-study grid → blog teasers →
newsletter band → footer.

## Accessibility & responsive notes

- Skip link, visible focus rings, `aria-pressed` and a live `aria-label` on
  the theme toggle, `role="status"` on the form message, `role="img"` +
  label on each star rating.
- `prefers-reduced-motion` disables the flame flicker, star twinkle, spark
  drift, scroll reveals and smooth scrolling.
- Scroll reveals are progressive enhancement: the hidden start state lives
  behind a `.js` class that the inline head script sets, so with JavaScript
  off or failed, every section renders visible.
- On phones the 2:1 hero scene would crop to a useless centre strip, so it
  bottom-anchors into a landscape band and masks into the page instead.

## Swapping in real content

Everything below is invented and needs replacing before this goes near a
real audience:

- **Identity** — "Wayfinder", the guide's name (Rowan Vale), the tagline,
  `rowan@wayfinder.gg`, and the footer company line.
- **Testimonials** — twelve quotes with fabricated names and companies.
- **Case studies** — six projects with fabricated result numbers.
- **Press bar** — six invented publications. Real publication logos are
  trademarks; only list outlets that actually covered you.
- **Bio stats** — "60+ studios", "$140M", "11 yrs".
- **Prices and tier terms.**
- **Blog teasers** and the newsletter's "6,400 developers".
- **Links** — case studies, blog posts, legal pages and socials are all `#`.

The signup form validates and gives feedback but posts nowhere. Point it at
a mail provider in `main.js` (the branch is commented).

## Known trade-offs

- **Testimonial wall reading order.** CSS `columns` flows top-to-bottom per
  column, so the visual order down the page differs from DOM order. Fine for
  an unordered wall of quotes; don't reuse the pattern where sequence
  matters.
- **Hero art is inline**, which keeps the page to one request but makes
  `index.html` large. If you add more scenes, move them to sprite files.

# assets

Drop `portrait.jpg` in here — a photo of Joel, and the single photograph on
the page. Used in the bio section. Everything else on the site is custom SVG drawn inline in
`index.html`.

- **Aspect ratio:** 5 : 6 (portrait). The frame is `object-fit: cover`, so
  anything close to that crops cleanly.
- **Suggested size:** 1040 × 1248 (2× the rendered 520 × 620).

Until the file exists, the bio section falls back to a dashed placeholder —
that's the `onerror` handler on the `<img>`, not a broken layout.

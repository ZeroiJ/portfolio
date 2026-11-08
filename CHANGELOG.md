# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] — 2026-11-06 / 2026-11-08

### Changed (2026-11-08, content)
- Added a one-line description under every project (corrected after the
  resume arrived: Guardian Manager is a Destiny 2 inventory app; Autonomic
  DBRE is a GRPO RL agent; Analysis Pack covers six datasets).
- Resume linked from the contact row — `public/resume.docx`, served as-is
  (no docx→pdf converter on this machine; swap to a PDF export later if
  you want inline viewing).
- **Hackathon achievements section** added between Projects and Experience:
  META × Scaler Grand Finale + Round 1 finalist (52,000+ applicants).
- `metadataBase` + canonical URL added (`https://portfolio.zeroij.workers.dev`,
  taken from the resume header); OG image now resolves to absolute URLs.
- **Kept the desktop void empty** (right side, ≥1100px): tried both an
  animated WebGL dither and a static one, decided the plain blue space
  reads better — removed the ASCII art filler too. Cleaner.
- `@cloudflare/workers-types` moved from global `types` to module-scoped
  imports (`d1.ts`, `api/visitors`) — the globals were clashing with DOM
  types in new code.

### Fixed
- **Clock timezone bug** — the header clock rendered the *visitor's* local time
  under a "Navi Mumbai, IN" label. It now always renders IST
  (`Intl.DateTimeFormat` with `timeZone: "Asia/Kolkata"`).
- **Custom cursor trap** — `cursor: none` was applied globally in base CSS
  while the replacement dot only appears after hydration, leaving no visible
  pointer whenever JS fails or during load. The native pointer is now hidden
  only once the `Cursor` component confirms it is running
  (`html.cursor-enabled` class), restoring it on touch/small screens as before.
- **Guestbook offline behaviour** — the client polled `/api/guestbook` every
  30s forever even when the endpoint was unreachable. Polling now stops while
  offline, the pixel editor is hidden, and a manual `Retry` button is shown.
  (Still expected to be "offline" on bare `next dev` — no local D1 binding;
  works on the deployed Worker.)

### Added
- **OpenGraph / Twitter metadata** — proper link previews with a generated
  on-brand `public/og.png` (1200×630), plus `theme-color: #0038ff` for mobile
  browser chrome. TODO once the final domain is known: `metadataBase` +
  `alternates.canonical` in `layout.tsx`.
- **Page structure for a11y** — the name is now a real `h1`, and every section
  has a screen-reader heading (`sr-only` h2: About, Education, Skills,
  Projects, Experience, Contact).
- **aria-label for the guestbook name input** (was placeholder-only).
- **CHANGELOG.md** (this file).

### Changed
- Muted 13px text on the blue background bumped from 50% to 60% opacity
  (header location, school/org lines) to get closer to WCAG AA contrast.
- Mobile pixel-editor cells and palette swatches enlarged 14/16px → 26px
  for touch input.

### Performance
- **Replaced the SVG `feTurbulence` noise overlay** (4 octaves re-rendered
  over the full viewport on every repaint) with a pre-rendered 64px
  `public/noise.png` tile repeated via CSS — visually identical, near-zero
  runtime cost.
- `first-wave.jpg` is now lazy-loaded with explicit `width`/`height`
  (no layout shift).
- Favicon `icon.png` downsized 256×256 (116KB) → 64×64 (6KB).
- Removed leftover create-next-app template assets from `public/`
  (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`).

### Accessibility
- **Focus-visible outlines** on all interactive elements (project/contact
  links, buttons, palette swatches, pixel cells) — previously only inputs had
  them, and the custom cursor hides any pointer feedback.
- **`prefers-reduced-motion: reduce`** support: page-entrance animation and
  scroll-reveal transitions disabled, hover indent removed.

### Fixed (lint debt, follow-up same day)
- `eslint` now ignores the old standalone QA scripts `.omo/**`.
- Removed the dead render-time `pixelsRef` update in `Guestbook.tsx`.
- Documented why the initial guestbook fetch runs in an effect
  (`react-hooks/set-state-in-effect`).
- Ink palette is now `role="group"` with `aria-pressed` swatches (was an
  invalid `aria-selected` button/listbox combo).
- `open-next.config.ts` anonymous default export fixed.
- `bun run lint` and `bunx tsc --noEmit` are both clean. (One accepted
  warning remains: plain `<img>` for `first-wave.jpg`, a static 27KB asset
  with explicit dimensions.)

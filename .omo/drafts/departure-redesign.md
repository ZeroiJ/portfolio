# Draft — departure-redesign

## Request state
- intent: clear
- review_required: false
- classification: standard (frontend redesign across index.html/styles.css/script.js; backend untouched)
- scaffold: hand-created (script unavailable in session shell; template contract followed verbatim from references/full-workflow.md)
- status: EXECUTING - user explicitly authorized planner to execute directly ("after re-writing the plan pls execute it"), sequential-only (no parallel agents), sandbox new/ scope folded into plan v2
- gap analysis: performed by planner inline (user explicitly declined Metis delegation after two aborted task spawns). 9 findings, 0 blockers; fixes folded into plan: clipped-content probe, JS-created-node CSS list incl .pixel-editor, !important ban on stamp/pixel backgrounds, absolute font URLs, 100vh fallback, preconnect removal, todo-5 commit line, dialog focus semantics, remnant-grep additions. Structural self-check passed (header order, row grammar, counts 7+4).

## Goal
Redesign the portfolio's visual layer in the departuremono.com aesthetic:
- Single page, NO SCROLL (fits viewport).
- Departure Mono font bundled locally (SIL OFL 1.1 — bundling permitted).
- Guestbook preserved: same `/api/guestbook` + `/api/visitors` contracts, D1 untouched,
  `PALETTE_HEX` array byte-identical (stamps store palette INDICES 0–5; changing hex
  mapping would silently recolor the 2 friend-made stamps — HARD CONSTRAINT).
- All existing behaviors kept where compatible with no-scroll: email copy toast, GitHub
  stars hydrate, live IST clock, visitor counter, resume HTML generator/download,
  keyboard shortcuts (r/g/e), guestbook editor/stamp flow.

## Design inventory (from github.com/rektdeckard/departure-mono @ HEAD, cloned read-only)
- Font files: `public/assets/DepartureMono-Regular.woff2` + `.woff`; LICENSE = SIL OFL 1.1
  (Helena Zhang). Reuse: copy both files + LICENSE into `assets/fonts/`.
- Tokens (src/index.css): base font-size **11px**, `--flick: cubic-bezier(0.36,2.09,0.07,-1.52)`;
  palette: carbon #222222 (dark bg), enamel #eeeeee, cement #c0c0c0, aluminum #cccccc,
  ash #8e8e8e, smoke #666666, dark #444444, soot #333333, black #141414,
  amber #ffa133 (accent), pumpkin #e47b1a, flux #c8be50, foam #bccabb (highlight),
  mud #8a8a6f, clay #6c6c58.
- Signature patterns to reimplement (vanilla CSS, not copied wholesale):
  - Headline letters set on solid blocks (aluminum background spans).
  - "DEPARTURES" flip-board list + `@keyframes blink` (steps(1)) cursor.
  - `.callout`: clay-colored code-comment annotations with thick left border.
  - `.inverse` fg/bg swap blocks; `.highlight` foam spans; menu links get foam bg on hover.
  - Link hover → amber with --flick easing; selection inverted (carbon-on-cement).
  - Pixel-art rendering vibe: `image-rendering: pixelated` for avatar/photos.
  - Footer: oversized h2 + callout credits.
- NOT reused: their SVG ephemera artwork, SolidJS components, fuzz WebGL overlay
  (scope discipline; optional stretch only if user asks).

## Adopted defaults (announced, reversible)
- Theme: full dark-carbon cockpit (#222 bg, enamel text, amber accents) with the
  light-block headline treatment as accent — derived directly from reference site's main body.
- Avatar rendered pixelated to match pixel-font aesthetic.
- Keyboard shortcut `r` re-bound from scroll-to-resume → trigger resume download
  (no scroll exists anymore). g/e unchanged.
- Font credit added to footer ("Departure Mono by Helena Zhang, SIL OFL") + LICENSE file shipped.

## Preservation contract (must hold after execution)
- `migrations/`, `src/worker.ts`, `wrangler.json`, D1 data: UNTOUCHED. No new migrations.
- API shapes unchanged: GET /api/guestbook `{entries:[{id,name,pixels,created_at}]}`;
  POST {name,pixels[100]∈0..5}; GET/POST /api/visitors.
- `PALETTE_HEX = ['#1f1f1f','#ff6a00','#1b7f79','#6b5ca5','#c63d2f','#efe9e1']` byte-identical;
  index semantics (5=paper blank) unchanged in editor AND stamp renderer.
- Existing 2 stamps must render after redeploy (verified against live API before/after).

## Resolved forks (user answered 2026-08-23)
1. Mobile no-scroll: STRICT FIT ALWAYS — scaled layouts at all breakpoints, no vertical
   scroll anywhere. Below 767px, left-rail content moves into an INFO overlay panel
   (toggle: header button + `i` key) to preserve readability under the strict rule.
2. Content density: KEEP ALL 6 PROJECTS on the departures-style board. Nothing deleted.

## Approval gate
status: approved-to-write-plan (user answered both open forks with recommended options
= approval per gate contract; authorizes plan creation ONLY, never execution).
Next action: write .omo/plans/departure-redesign.md, run Metis gap analysis, append
todos, self-review, handoff with start-or-review question.

## Approach (to plan after approval)
Vanilla-stack rewrite of index.html structure + styles.css (new token system, viewport-
locked grid) + script.js adjustments (rebind shortcuts, keep all APIs/guestbook logic).
New layout: header bar (avatar/name/meta/nav) → main viewport grid [left rail: about/
education/tools/open-to-work · center: PROJECT DEPARTURES board · right: guestbook
(editor + stamps)] → footer strip (visitor counter, keys hint, font credit). Build/deploy
pipeline unchanged (`npm run build` copies index.html styles.css script.js + assets).

## Next workflow action
After user answers forks + approves: write .omo/plans/departure-redesign.md (template
order verbatim), Metis gap analysis, append todos, self-review, handoff.

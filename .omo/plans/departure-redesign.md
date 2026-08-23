# departure-redesign - Work Plan

## TL;DR (For humans)

**What you'll get:** The portfolio rebuilt from scratch in the departuremono.com aesthetic — dark carbon cockpit, Departure Mono pixel type everywhere, your 6 projects as a DEPARTURES flip-style board, amber accents, blinking cursors, inverse-video panels — locked to a single non-scrolling screen at every viewport. Built ENTIRELY inside a new sandboxed folder `new/` in this repo; you preview it on localhost with the guestbook fully working. Your live site files are not touched until you separately approve promotion. Guestbook intact: both friend-made stamps render byte-identically.

**Why this approach:** The design system was extracted from the reference source (`rektdeckard/departure-mono`): exact palette tokens, easing curve, signature patterns. Font ships locally under SIL OFL 1.1 — legal and CDN-free. Sandbox-first means zero risk while you review.

**What it will NOT do:** Edit root `index.html`, `styles.css`, `script.js`, `package.json`, `src/worker.ts`, `migrations/`, `wrangler.json`, or any D1 data; alter the `PALETTE_HEX` line; remove any feature; copy the reference site's artwork/SVGs; introduce frameworks or scroll bars.

**Effort:** 7 implementation tasks + 4 final verifications; roughly half a day of worker time.
**Risk:** Low — pixel type at small sizes and strict-fit phones are watch items, mitigated by an INFO overlay below 767px and three-viewport QA gates. Sandbox isolation removes deployment risk entirely for this phase.
**Decisions you made:** Strict no-scroll everywhere; all 6 projects kept; dark carbon theme; stamps preserved byte-identically; everything in `new/`, reviewed via localhost before promotion.

## Scope

**In scope**
- `new/` — NEW self-contained folder: `new/index.html`, `new/styles.css`, `new/script.js`, `new/assets/fonts/{DepartureMono-Regular.woff2,DepartureMono-Regular.woff,OFL-LICENSE.txt}`, `new/assets/profile.jpg` + `new/assets/mgmcet-logo.jpg` (copied from root assets).
- `.reference/departure-mono` — shallow clone of the reference repo for asset sourcing; `.reference/` added to `.gitignore` (the only root-file edit allowed in this phase).
- Preview recipe (documented + used by QA): `rm -rf dist && mkdir dist && cp -r new/. dist/ && npm run dev` → http://localhost:8787 with worker APIs + local D1 live.

**Explicitly OUT of scope (promotion phase — separate follow-up after your localhost review)**
- Swapping `new/` files into the repo root, extending `package.json` build to copy fonts, deploying. Nothing here changes what is live at portfolio.zeroij.workers.dev.

**Must-NOT-Have (hard guardrails)**
- Zero diffs vs HEAD in: `index.html`, `styles.css`, `script.js`, `package.json`, `src/worker.ts`, `migrations/*`, `wrangler.json` (only additions allowed: `new/**`, `.reference/` in `.gitignore`).
- The line starting `const PALETTE_HEX` in `new/script.js` must be byte-identical to `git show HEAD:script.js`.
- No removal of behaviors ported from the current site: toast/email-copy, GitHub-star hydration, IST clock, visitor counter, resume HTML generator/download, keyboard shortcuts r/g/e (r repurposed to download), guestbook flow (editor, palette indices 0–5, clear, stamp POST, 45s poll).
- No frameworks, no new npm deps, no CDN font loading, no vertical scrolling at any viewport (strict), no copying of reference-site SVG/PNG artwork.
- Content carried over verbatim from current `index.html`; only additions allowed are the decorative flight-status labels specified in Todo 4 and the footer font credit.

**Preservation contract**
- APIs unchanged (they are not touched at all this phase): `GET/POST /api/guestbook`, `GET/POST /api/visitors` as implemented in `src/worker.ts`.
- Stamp rendering semantics: pixels are indices 0–5 into the unchanged `PALETTE_HEX`; 5 = paper/blank; JS inline cell backgrounds always win over CSS (no `!important` on those cells).
- Continuity proof: `GET https://portfolio.zeroij.workers.dev/api/guestbook` saved before work; F4 confirms both friend-made stamps would render identically through the new renderer logic (same indices, same hex mapping).

## Verification strategy

Agent-executed, zero human intervention. Per-task QA evidence under `.omo/evidence/departure-redesign/`. Key gates:
- Sandbox self-containment: `new/` contains index.html, styles.css, script.js, assets/fonts (woff2 >80 KB), assets images; `npm run build` still passes for the UNCHANGED root (proves no root breakage).
- Root freeze: `git diff HEAD --stat -- index.html styles.css script.js package.json src/worker.ts migrations wrangler.json` prints empty; `git status --porcelain` shows only `new/**`, `.reference/**` (untracked), `.gitignore`.
- Palette freeze: `diff <(git show HEAD:script.js | grep -F 'const PALETTE_HEX') <(grep -F 'const PALETTE_HEX' new/script.js)` prints nothing.
- No-scroll: headless browser at 1440x900, 1366x768, 390x844 evaluates document scrollHeight <= innerHeight AND scrollWidth <= innerWidth — true at all three, plus every layout panel passes el.scrollHeight <= el.clientHeight + 2 so clipping cannot hide behind overflow:hidden; screenshots archived.
- Local E2E via preview recipe with local D1 migrations; remote stamp continuity is a read-only GET diff against the saved before-file.

## Execution strategy

Single worker session, sequential todos 1→7 (later tasks depend on earlier ones). All file writes land under `new/` only. Commit after each todo per its Commit line (conventional commits). Deploy and root-file promotion are NOT part of this plan. If any QA gate fails, fix within the same todo before committing; never commit red.

## Todos

- [ ] 1. Sandbox setup: clone reference repo, scaffold new/, snapshot continuity file
  - Steps: `git clone --depth 1 https://github.com/rektdeckard/departure-mono.git .reference/departure-mono`; append `.reference/` to `.gitignore` (only root-file edit allowed); `mkdir -p new/assets/fonts`; copy root `assets/profile.jpg` + `assets/mgmcet-logo.jpg` into `new/assets/`; copy the two font files from `.reference/departure-mono/public/assets/` and its LICENSE to `new/assets/fonts/OFL-LICENSE.txt`; save production GET https://portfolio.zeroij.workers.dev/api/guestbook JSON to `.omo/evidence/departure-redesign/guestbook-before.json`.
  - Acceptance: all files exist; woff2 >80 KB; before-file contains entries array.
  - QA happy: `ls -laR new/assets` log to evidence t0. QA failure: verify clone origin URL via `git -C .reference/departure-mono remote get-url origin` prints the expected repo.
  - Commit: `chore(redesign): sandbox new/, reference clone, stamp continuity snapshot`

- [ ] 2. Create new/script.js as verbatim copy, then apply fixed-viewport surgical edits
  - References: root `script.js` lines 344-347 (scrollToResume), 349-371 (bindKeyboardShortcuts), 398-422 (initScrollReveal), 735-770 (staggerProjects), 772-782 (init calls).
  - Steps: copy root script.js to new/script.js UNCHANGED first. Then: (a) delete scrollToResume, rebind key r to downloadResumeHtml(); (b) delete initScrollReveal + staggerProjects functions and their calls; (c) add INFO toggle: i key (same typing-context guard) and #infoToggle click toggle hidden attr + aria-expanded on #infoPanel; Escape closes. DO NOT touch: EMAIL/GITHUB consts, RESUME object, the PALETTE_HEX line, guestbook block, visitors block, stars hydration, toast, clock.
  - Acceptance: `node --check new/script.js` passes; grep proves scrollToResume/initScrollReveal/staggerProjects absent; PALETTE_HEX diff vs HEAD empty.
  - QA happy: browser-dispatch r/g/e/i in non-input context asserting expected effects; log t1-keys.md. QA failure: keys while focused in #guestbookName must NOT fire shortcuts.
  - Commit: `feat(redesign): viewport-era interactions in new/script.js`

- [ ] 3. Write new/styles.css: carbon token system and viewport-locked shell
  - References: token values in `.omo/drafts/departure-redesign.md` (carbon #222222, soot #333333, dark #444444, smoke #666666, ash #8e8e8e, cement #c0c0c0, aluminum #cccccc, enamel #eeeeee, amber #ffa133, pumpkin #e47b1a, foam #bccabb, flux #c8be50, clay #6c6c58, mud #8a8a6f, black #141414); easing `--flick: cubic-bezier(0.36, 2.09, 0.07, -1.52)`; root font-size 11px; blink keyframes steps(1) alternating transparent/foam; inverse utility swaps fg/bg; selection = cement on carbon.
  - Structure: html/body height 100vh THEN 100dvh fallback line, overflow hidden; NEVER apply !important to .stamp-cell or .pixel-cell backgrounds (JS inline styles from PALETTE_HEX must always win); body flex column: header.site-head, main.deck grid (columns minmax(230px,300px) / minmax(0,1fr) / minmax(300px,380px); gap 10px; flex 1; min-height 0), footer.site-foot. Panels: 1px solid var(--dark) borders, inverse-video panel headers. All type "Departure Mono" with ui-monospace fallback. Link hover amber via --flick transition; nav-style links hover get foam bg + carbon text. focus-visible 2px amber outline. prefers-reduced-motion disables blink/transitions. Avatar image-rendering pixelated, 2px aluminum border. Callout utility: clay text + thick clay left border. MUST style all JS-created nodes: .stamp-card/.stamp/.stamp-cell/.stamp-author/.stamps-empty/.pixel-cell and .pixel-editor (JS adds this class to the editor root), plus toast .is-visible and stampsStatus .is-hidden states.
  - Acceptance: zero Google-font @import; zero old Dune hexes (#f2ebe4, #9a6b4f, #d9cfc3, #6b5e52); brace count balanced; every class in Todo 3's must-style list has a rule.
  - QA happy: grep checks for forbidden hexes return nothing; save to evidence t3-token-check.log. QA failure: leave one Dune hex temporarily, check catches it, fix — proves gate bites.
  - Commit: `feat(redesign): departure-mono carbon tokens, fixed-viewport deck shell`

- [ ] 4. Write new/index.html: header bar, left rail, departures board, guestbook panel
  - References: root `index.html` (content source of truth — copy text verbatim); JS contract in new/script.js; board concept from reference site #departures element.
  - Head: charset/viewport/canonical/title/description/OG/Twitter carried over verbatim EXCEPT theme-color meta becomes #222222 and the two Google-fonts preconnect links are NOT included; add preload link href=/assets/fonts/DepartureMono-Regular.woff2 as=font type=font/woff2 crossorigin.
  - Required structure: header.site-head = pixelated avatar (assets/profile.jpg), name "SUJAL BIRWADKAR" as block-highlighted spans, meta segments (AGE:20 / LOC:NAVI MUMBAI / TIME with span#localTime / TZ), nav (LinkedIn, GitHub, a#emailNav Email, a#resumeDownloadBtn Resume). main.deck = section.rail-left (About copy verbatim incl. both paragraphs and Now playing/Currently micro rows; Education MGMCET row with logo; Tools 5 label/value rows; open-to-work callout + button#letsTalkBtn + chips); section.board (panel title "PROJECT DEPARTURES" with .blink cursor, then 6 article.flight rows in this order: Guardian Manager ZJ-101 stack React/TypeScript/Vite status BOARDING repo ZeroiJ/guardian-manager; RustDB ZJ-102 stack Rust/B-tree/WAL status BOARDING repo ZeroiJ/database-engine; SQL Optimizer R1 ZJ-103 stack Python/Gradio status ARRIVED repo ZeroiJ/sql-optimizer-hackathon-round_1; Autonomic DBRE R2 ZJ-104 stack Python/Docker/GRPO status FINAL CALL repo ZeroiJ/autonomus-DBRE; Ironveil ZJ-105 stack Rust/Terminal status EN ROUTE repo ZeroiJ/ironveil; Analysis Pack ZJ-106 stack Jupyter/EDA status ON TIME repo ZeroiJ/spotify-data-analysis). Each flight row keeps its existing GitHub link URL/target from HEAD index.html, one-line desc verbatim, and a span.gh-stars[data-owner][data-repo] exactly as today. section.rail-right = Guestbook: p#stampsStatus, div#stampsGrid, editor div#pixelEditor, palette div#guestbookPalette with the SAME six swatch buttons data-color-index 0..5 (first has is-selected + aria-selected true), input#guestbookName, buttons #guestbookClear #guestbookStamp. footer.site-foot = visitor line with span#visitorNum, keys hint `r resume - g github - e email - i info`, credit callout `TYPE: DEPARTURE MONO - HELENA ZHANG - SIL OFL`. Also button#infoToggle (hidden on desktop) and div#infoPanel (role=dialog aria-modal=true aria-hidden) containing a compact duplicate of rail-left content + close button.
  - DOM contract checklist (ALL must exist with exact ids): toast, localTime, emailNav, letsTalkBtn, resumeDownloadBtn, visitorNum, stampsStatus, stampsGrid, pixelEditor, guestbookPalette (+6 .palette-swatch), guestbookName, guestbookClear, guestbookStamp, 6x .gh-stars[data-owner][data-repo], infoToggle, infoPanel.
  - Acceptance: scripted id audit passes 16/16; all 6 project hrefs identical to HEAD versions (diff URLs only vs git show HEAD:index.html).
  - QA happy: id audit log to evidence t4-dom-contract.log. QA failure: remove one id temporarily, audit FAILS naming it, restore — proves audit works.
  - Commit: `feat(redesign): departure-board single-screen markup in new/index.html`

- [ ] 5. Guestbook integration verification in new/ (zero logic changes)
  - References: preservation contract in this plan; guestbook block of new/script.js (lines ~424-728 of HEAD script.js); src/worker.ts API handlers; .omo/evidence/departure-redesign/guestbook-before.json.
  - Steps: style stamp cards/editor/palette with new tokens ONLY (cell colors come from inline background styles set by JS - unchanged); confirm editor builds, stamps render, poll cycle works.
  - Acceptance: PALETTE_HEX diff vs HEAD empty; root freeze intact (`git diff HEAD --stat -- index.html styles.css script.js package.json src/worker.ts migrations wrangler.json` empty); local POST with drawn pattern returns 201 and entry appears within one poll cycle.
  - QA happy: draw->stamp->visible E2E; screenshot evidence t5-stamp-local.png. QA failure: blank editor submit expects toast "Draw something first" and NO network POST (assert via request interception).
  - Commit: `feat(redesign): carbon-theme stamp and editor styling (logic untouched)`

- [ ] 6. Strict-fit responsive passes, motion and focus polish
  - References: reference site breakpoints (1115px, 767px) in .reference/departure-mono/src/components/header.css; INFO overlay decision in draft.
  - Steps: at <=1115px tighten paddings/gaps and shrink display type; at <=767px switch deck to 2 columns (board + guestbook), hide rail-left, show #infoToggle; #infoPanel fixed inset-0 carbon panel, inverse title, close on button/Escape/i. Pixel type stays >=9px effective. Board-row hover foam bg like reference menu links; reduced-motion kills transitions.
  - Acceptance: headless browser at 1440x900, 1366x768, 390x844 each satisfies document scrollHeight<=innerHeight AND scrollWidth<=innerWidth PLUS per-panel probe el.scrollHeight <= el.clientHeight + 2 on header.site-head, each deck column, every panel, footer.site-foot; info toggle works at 390x844 with focus into dialog on open, restored to #infoToggle on close.
  - QA happy: three screenshots + boolean evals saved to evidence t6-viewport/ (900.png, 768.png, 844.png, results.json). QA failure: force tall child into board, eval flips false, remove — proves measurement live.
  - Commit: `feat(redesign): strict-fit breakpoints, info overlay, motion polish`

- [ ] 7. Full local E2E sweep of every interactive behavior
  - References: verification strategy section; README local-dev commands.
  - Steps: preview recipe `rm -rf dist && mkdir dist && cp -r new/. dist/ && npm run dev`; walk EVERY feature: clock ticks IST, stars hydrate or fall back to dash, email nav copies + toast, Let's talk copies, Resume downloads HTML blob containing "Sujal Birwadkar", visitor count GET+POST, guestbook full flow, keys r/g/e/i, Escape closes info, console clean.
  - Acceptance: checklist table all green recorded to evidence t7-e2e.md with console excerpt showing zero errors.
  - QA happy: full pass logged. QA failure: simulate offline API via route abort -> stamps fallback message, counter dash, no crash.
  - Commit: none (verification todo).

## Final verification wave

Runs AFTER all todos, one by one per user instruction (no parallel agents); every verifier must APPROVE.

- [ ] F1. Plan compliance audit - verify every `- [ ] N.` row executed as written, commits match Commit lines, evidence files exist under .omo/evidence/departure-redesign/, nothing silently skipped. Evidence: audit notes appended to draft.
- [ ] F2. Code quality review - new/styles.css, new/script.js, new/index.html read end-to-end: dead selectors/functions removed, token-var naming consistent, no Dune remnants or reveal/data-stagger leftovers anywhere in new/, node --check passes, unique ids. Evidence: review notes in evidence dir.
- [ ] F3. Real manual-style QA in browser - fresh build click-through at two viewports: every Todo 7 interaction re-driven independently, screenshots archived, console clean. Evidence: t-F3 screenshots + transcript.
- [ ] F4. Scope fidelity + stamp continuity - root files zero-diff vs HEAD except allowed additions (new/**, .reference/ ignored, .gitignore line); PALETTE_HEX byte-identical; production /api/guestbook GET vs guestbook-before.json: same count, ids, names, pixels arrays (both friend stamps intact); renderer logic proven equivalent (same indices, same hex mapping). Evidence: continuity diff file.

## Commit strategy

Conventional commits directly on the current branch (repo history is direct-to-main style), one commit per implementation todo exactly as its Commit line states; verification todos commit nothing. Deploy and root promotion intentionally excluded - user reviews localhost preview first, promotion is a separate follow-up.

## Success criteria

1. new/ is self-contained and previews correctly at localhost:8787 via the documented recipe (worker APIs + local D1 live).
2. Single non-scrolling screen at 1440x900, 1366x768, 390x844 (strict booleans true, no hidden clipping).
3. Departure Mono loads from local new/assets/fonts (no Google Fonts requests).
4. Visual system matches reference DNA: carbon bg, enamel text, amber accents, block headline, departures board with all 6 projects, inverse panels, blink cursor, clay callouts, foam hovers.
5. Both friend-made guestbook stamps render with IDENTICAL colors (PALETTE_HEX untouched, backend untouched, production entries diff-clean).
6. Every pre-existing behavior works in the preview: resume download, email copy toast, star counts, IST clock, visitor counter, keyboard shortcuts (r downloads), full stamp create/read loop.
7. Root production files verifiably untouched: zero diffs vs HEAD outside new/** and the single .gitignore line.


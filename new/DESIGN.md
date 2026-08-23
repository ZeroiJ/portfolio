# DESIGN.md — Sujal Birwadkar Portfolio

## Reference
departuremono.com — live site CSS extracted via webfetch, reference repo at `.reference/departure-mono/`.

---

## 1. Tokens

### Palette (exact from reference `:root`)
```
--black: #141414
--carbon: #222222
--soot: #333333
--dark: #444444
--smoke: #666666
--ash: #8e8e8e
--cement: #c0c0c0
--aluminum: #cccccc
--enamel: #eeeeee
--amber: #ffa133
--pumpkin: #e47b1a
--flux: #c8be50
--foam: #bccabb
--mud: #8a8a6f
--clay: #6c6c58
```

### Semantic mappings (from reference `main`)
```
--accent: var(--amber)
--fg: var(--dark)       /* root text */
--bg: var(--enamel)     /* root background */
```
Note: reference uses `--fg: var(--dark)` + `background-color: var(--carbon)` on root. Inside `main`, it overrides to `--fg: var(--cement)`, `--bg: var(--carbon)`.

### Typography
- Font: `"Departure Mono", monospace`
- Base size: `11px` (reference uses increments of 11px)
- `--unit: 1em`
- `-webkit-font-smoothing: antialiased`

### Easing
```
--flick: cubic-bezier(0.36, 2.09, 0.07, -1.52)   /* bounce-snap */
--easing: cubic-bezier(1, 0.05, 0.48, 0.99)       /* smooth-out */
--time: 1000ms                                       /* default transition */
```

---

## 2. Layout Grammar

### Reference site structure
The reference is a SCROLLING page. We adapt to NO-SCROLL single-page viewport.

### Our adaptation: 3-column viewport-locked grid
```
body: 100dvh, overflow:hidden, flex column
header: flex 0 0 auto (top bar)
main.deck: flex 1 1, grid 3-column
footer: flex 0 0 auto (bottom bar)
```

### Grid columns (desktop ≥1116px)
```
rail-left:  minmax(230px, 300px)
board:      minmax(0, 1fr)        ← center, largest
rail-right: minmax(300px, 380px)
```

### Grid columns (mobile <768px)
```
board + rail-right: 2-column
rail-left: hidden (accessible via info panel)
```

---

## 3. Component Anatomy

### Header (`.site-head`)
Reference `header`: `padding: 137px 0 0`, `background-color: var(--bg)`.
Our adaptation: compact top bar, but uses the same aluminum-block name treatment.

**Name blocks** (reference `#title > h1 > :not(#version)`):
- `background-color: var(--aluminum)`
- `display: inline-block`
- `line-height: 1`
- Each word gets its own block — this is the SIGNATURE visual element

**Nav links** (reference `menu > a`):
- `font-size: 16.5px`, `line-height: 21px`
- Hover: `background-color: var(--foam)`, `color: unset`
- Transition: `background-color 75ms var(--flick)`

### Panel title bar
Reference `h2`: `font-size: 44px`, `color: var(--soot)`, `background-color: var(--ash)`, `line-height: 1`.
Our adaptation: smaller scale, same ash-bg/soot-text pattern.

### Callout (reference `.callout`)
```
color: var(--mud)
border-left: 7px solid var(--mud)
padding: 8px 0 8px 12px
font-size: 11px
line-height: 14px
```

### Highlight (reference `.highlight`)
```
background-color: var(--foam)
```
Used for blinking cursor, selected text, and emphasis.

### Inverse (reference `.inverse`)
```
color: var(--bg)
background-color: var(--fg)
::selection: color: var(--cement), background-color: var(--clay)
```

### Link hover
```
a: color: currentColor, transition: color 150ms var(--flick)
a:hover: color: var(--accent)
```

### Button (`.btn`)
Base: border 1px solid var(--aluminum), transparent bg, hover → foam.
Accent (`.lets-talk`): amber bg, carbon text, hover → enamel.

### Footer (reference `footer`)
```
display: flex, align-items: center, justify-content: space-between
padding: 44px
background-color: var(--carbon)
```

### Printout (reference `.printout`)
```
color: var(--carbon)
> foreignObject > *: padding: 88px 44px 0
```
This is the ink-on-paper look — carbon text on cement/enamel background.

### Comment (reference `.comment`)
```
color: var(--clay)
font-size: 11px
white-space: preserve
```

### Max width (reference `.maxwidth`)
```
max-width: 1440px
padding-inline: 44px
margin: 0 auto
```

### Blink (reference `@keyframes blink`)
```
0%, 100% { background-color: transparent }
50% { background-color: var(--foam) }
animation: blink 1s infinite steps(1)
```

### Selection
```
::selection { color: var(--enamel); background-color: var(--carbon) }
main ::selection { color: var(--carbon); background-color: var(--cement) }
```

---

## 4. Motion Rules

### Transitions
- Links: `color 150ms var(--flick)` — the bounce-snap easing
- Menu items: `background-color 75ms var(--flick)` — fast snap
- Ephemera hover: `transform var(--time) var(--easing)` — slow smooth drift
- Badge hover: `transform 600ms var(--easing)` — rotate + translate

### CRT Fuzz (reference `#fuzz`)
```
position: fixed, inset: 0
opacity: var(--fuzz) — controlled by JS scroll position
pointer-events: none
canvas: position fixed, 100vh
```
This is a semi-transparent noise overlay. For our no-scroll version, we'll show it at low opacity always.

### Keyframes
- `blink` — steps(1), 1s infinite, foam bg
- Fuzz — canvas noise (JS-driven)

---

## 5. Anti-patterns (DO NOT)
- Do NOT add scroll — viewport-locked at all sizes
- Do NOT change `PALETTE_HEX` — stamps are stored as indices 0-5
- Do NOT touch root `index.html`, `styles.css`, `script.js`
- Do NOT touch `src/worker.ts`, `migrations/`, `wrangler.json`
- Do NOT use emojis as icons — SVG only
- Do NOT animate layout properties — GPU-composited only
- Do NOT add decorative animation that serves no purpose

---

## 6. Accepted Debt
- No dark/light toggle — dark mode only (matches departuremono.com default)
- No CRT fuzz at mobile (performance)
- No scroll-triggered animations (no-scroll constraint)
- Printout padding scaled down for viewport fit

---

## 7. File Map
```
new/
  index.html    ← markup (IDs preserved for script.js)
  styles.css    ← all design tokens + component styles
  script.js     ← logic + CRT fuzz + anime.js animations
  assets/       ← profile.jpg, mgmcet-logo.jpg, fonts/
  DESIGN.md     ← this file
```

document.documentElement.classList.add('portfolio-js');

const EMAIL = 'sujalbirwadkar19@gmail.com';
const GITHUB_PROFILE = 'https://github.com/ZeroiJ';
const GH_CACHE_KEY = 'portfolioGhStars';
const GH_CACHE_TTL_MS = 60 * 60 * 1000;

const GUESTBOOK_GRID = 10;
const GUESTBOOK_CELLS = GUESTBOOK_GRID * GUESTBOOK_GRID;
const PALETTE_HEX = ['#1f1f1f', '#ff6a00', '#1b7f79', '#6b5ca5', '#c63d2f', '#efe9e1'];
const GUESTBOOK_PAPER = 5;
const VISIT_LS_KEY = 'portfolioVisitV1';
const VISIT_TTL_MS = 30 * 60 * 1000;
const GB_POLL_MS = 45 * 1000;

/** Plain-text / structured mirror for downloadable resume HTML (no images). */
const RESUME = {
  name: 'Sujal Birwadkar',
  metaLine: '20 · Navi Mumbai · sujalbirwadkar.dev',
  contact: {
    email: EMAIL,
    linkedin: 'https://www.linkedin.com/in/sujal-birwadkar',
    github: GITHUB_PROFILE
  },
  about: [
    'Second year at MGMCET (BTech Data Science) + IIT Madras BS on the side. I build things that actually run — RL agents, database engines, CLI tools, data pipelines. Arch Linux daily driver, terminal for almost everything.',
    'Sometimes I win hackathons. Sometimes my laptop dies at 78%.'
  ],
  education: [
    {
      degree: 'BTech in Data Science',
      line: 'MGMCET, Navi Mumbai · 2024 — 2028'
    },
    {
      degree: 'BS Degree (Data Science & Applications)',
      line: 'IIT Madras · ongoing'
    }
  ],
  tools: [
    { label: 'Lang', value: 'Python, SQL, Rust, R' },
    { label: 'Data', value: 'Pandas, NumPy, Polars, PySpark' },
    { label: 'ML/RL', value: 'PyTorch, Gradio, GRPO' },
    { label: 'Infra', value: 'Docker, Git, Linux, PostgreSQL' }
  ],
  projects: [
    {
      title: 'Autonomic DBRE',
      stack: 'Python · PyTorch · GRPO · Docker · Gradio · Hackathon finalist',
      desc:
        'Self-improving database reliability agent built for the Meta × Scaler OpenEnv Grand Finale (top finalists, 52,000+ entrants). Used GRPO training with ELO-based playbook evolution — reward improved from 0.02 → 0.477 over training. Recovered from hardware failure mid-run, resumed from checkpoint 350 and submitted successfully.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/autonomus-DBRE' }]
    },
    {
      title: 'RustDB',
      stack: 'Rust · B-Tree · WAL · Storage Engine',
      desc: 'SQL database engine built from scratch: B-Tree storage layer, buffer pool manager, write-ahead log, and TCP server. No ORM, no shortcuts.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/database-engine' }]
    },
    {
      title: 'Ghost',
      stack: 'Python · Gemini Flash · faster-whisper · Tesseract · Hyprland',
      desc:
        'Screen-share-invisible AI interview assistant for Hyprland/Wayland. Uses Hyprland window rules to exclude the overlay from screenshare capture while staying visible locally. Real-time transcription via faster-whisper, OCR via Tesseract, LLM responses via Gemini Flash API.',
      links: []
    },
    {
      title: 'SQL Optimizer — R1',
      stack: 'Python · Gradio · RL · Hackathon',
      desc:
        'RL environment for SQL query optimization with a live reward function, built as Round 1 submission for Meta × Scaler OpenEnv. Selected as finalist out of 52,000+ developers.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/sql-optimizer-hackathon-round_1' }]
    },
    {
      title: 'Guardian Manager',
      stack: 'React · TypeScript · Vite · Bungie API',
      desc: 'Destiny 2 inventory management web app with full Bungie API integration.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/guardian-manager' }]
    },
    {
      title: 'Ironveil',
      stack: 'Rust · Terminal · Roguelike',
      desc: 'Terminal-based roguelike dungeon crawler. Built to learn systems-level Rust.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/ironveil' }]
    }
  ]
};

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatResumeTime() {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return fmt.format(now);
}

function buildResumeHtmlDocument() {
  const r = RESUME;
  const toolsRows = r.tools
    .map((row) => `<tr><th>${escapeHtml(row.label)}</th><td>${escapeHtml(row.value)}</td></tr>`)
    .join('');

  const projectsHtml = r.projects
    .map((p) => {
      const noteBlock = p.note ? `<p class="note">${escapeHtml(p.note)}</p>` : '';
      const linkItems = Array.isArray(p.links) ? p.links : [];
      const linksInner = linkItems
        .map((l) => `<a href="${escapeHtml(l.url)}">${escapeHtml(l.label)}</a>`)
        .join(' · ');
      const linksBlock =
        linkItems.length > 0 ? `\n    <p class="links">${linksInner}</p>` : '';
      return `<section class="project">
    <h3>${escapeHtml(p.title)}</h3>
    <p class="stack">${escapeHtml(p.stack)}</p>
    ${noteBlock}<p>${escapeHtml(p.desc)}</p>${linksBlock}
  </section>`;
    })
    .join('\n\n  ');

  const aboutParas = r.about.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n  ');

  const educationHtml = r.education
    .map(
      (e) =>
        `<p><strong>${escapeHtml(e.degree)}</strong> · ${escapeHtml(e.line)}</p>`
    )
    .join('\n  ');

  const generatedAt = escapeHtml(formatResumeTime());

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(r.name)} — Resume</title>
  <style>
    :root { --text: #111; --muted: #444; --line: #ccc; --accent: #c24100; }
    * { box-sizing: border-box; }
    body { font-family: Georgia, "Times New Roman", serif; margin: 0; padding: 1.25rem 1.5rem 2rem; color: var(--text); line-height: 1.45; max-width: 52rem; }
    h1 { font-size: 1.65rem; margin: 0 0 0.2rem; letter-spacing: -0.02em; }
    .meta { margin: 0 0 0.4rem; font-size: 0.9rem; color: var(--muted); }
    .contact { font-size: 0.9rem; margin-bottom: 1.25rem; }
    .contact a { color: var(--text); }
    h2 { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); border-bottom: 1px solid var(--line); padding-bottom: 0.25rem; margin: 1.35rem 0 0.5rem; page-break-after: avoid; }
    p { margin: 0 0 0.5rem; }
    .stack { font-family: ui-monospace, monospace; font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin: 0.15rem 0 0.35rem; }
    .note { font-size: 0.8rem; color: var(--muted); font-style: italic; }
    .links a { color: var(--accent); }
    table { width: 100%; border-collapse: collapse; font-size: 0.9rem; margin: 0.25rem 0 0.5rem; }
    th { text-align: left; width: 5.5rem; color: var(--muted); font-weight: 600; padding: 0.2rem 0.5rem 0.2rem 0; vertical-align: top; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; }
    td { padding: 0.2rem 0; }
    .project { margin-bottom: 1rem; page-break-inside: avoid; }
    .project h3 { font-size: 1.05rem; margin: 0 0 0.15rem; }
    footer { margin-top: 1.5rem; font-size: 0.75rem; color: var(--muted); }
    @media print {
      body { padding: 0.5in; max-width: none; }
      a { color: #000; text-decoration: none; }
      .links a::after { content: " (" attr(href) ")"; font-size: 0.7em; color: #333; word-break: break-all; }
    }
  </style>
</head>
<body>
  <h1>${escapeHtml(r.name)}</h1>
  <p class="meta">${escapeHtml(r.metaLine)}</p>
  <p class="contact">
    <a href="mailto:${escapeHtml(r.contact.email)}">${escapeHtml(r.contact.email)}</a>
    · <a href="${escapeHtml(r.contact.linkedin)}">LinkedIn</a>
    · <a href="${escapeHtml(r.contact.github)}">GitHub</a>
  </p>

  <h2>About</h2>
  ${aboutParas}

  <h2>Education</h2>
  ${educationHtml}

  <h2>Tools</h2>
  <table>
    ${toolsRows}
  </table>

  <h2>Projects</h2>

  ${projectsHtml}

  <footer>Generated ${generatedAt} · sujalbirwadkar.dev</footer>
</body>
</html>`;
}

function downloadResumeHtml() {
  const html = buildResumeHtmlDocument();
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Sujal_Birwadkar_Resume.html';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function updateLocalTime() {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const el = document.getElementById('localTime');
  if (el) el.textContent = fmt.format(now);
}

function readGhCache() {
  try {
    const raw = localStorage.getItem(GH_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function writeGhCache(map) {
  try {
    localStorage.setItem(GH_CACHE_KEY, JSON.stringify(map));
  } catch {
    /* ignore quota */
  }
}

function getCachedStars(owner, repo) {
  const key = `${owner}/${repo}`;
  const map = readGhCache();
  const entry = map[key];
  if (!entry || typeof entry.stars !== 'number' || typeof entry.ts !== 'number') return null;
  if (Date.now() - entry.ts > GH_CACHE_TTL_MS) return null;
  return entry.stars;
}

function setCachedStars(owner, repo, stars) {
  const key = `${owner}/${repo}`;
  const map = readGhCache();
  map[key] = { stars, ts: Date.now() };
  writeGhCache(map);
}

async function fetchRepoStars(owner, repo) {
  const cached = getCachedStars(owner, repo);
  if (cached !== null) return cached;

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: { Accept: 'application/vnd.github+json' }
  });
  if (!res.ok) throw new Error(String(res.status));
  const data = await res.json();
  const stars = typeof data.stargazers_count === 'number' ? data.stargazers_count : 0;
  setCachedStars(owner, repo, stars);
  return stars;
}

function formatStars(n) {
  return `— ★ ${n}`;
}

async function hydrateGitHubStars() {
  const nodes = Array.from(document.querySelectorAll('.gh-stars[data-owner][data-repo]'));
  const keys = new Map();
  nodes.forEach((el) => {
    const owner = el.getAttribute('data-owner');
    const repo = el.getAttribute('data-repo');
    if (!owner || !repo) return;
    keys.set(`${owner}/${repo}`, { owner, repo });
  });

  await Promise.all(
    [...keys.values()].map(async ({ owner, repo }) => {
      const selector = `.gh-stars[data-owner="${owner}"][data-repo="${repo}"]`;
      try {
        const n = await fetchRepoStars(owner, repo);
        document.querySelectorAll(selector).forEach((node) => {
          node.textContent = formatStars(n);
        });
      } catch {
        document.querySelectorAll(selector).forEach((node) => {
          node.textContent = '— …';
        });
      }
    })
  );
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
    setTimeout(() => {
      toast.hidden = true;
    }, 400);
  }, 2400);
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast('Email copied to clipboard');
  } catch {
    showToast(`Copy blocked — ${EMAIL}`);
  }
}

function isTypingContext(el) {
  if (!el || !(el instanceof Element)) return false;
  const tag = el.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (el.isContentEditable) return true;
  return false;
}

function infoPanelOpen() {
  const panel = document.getElementById('infoPanel');
  if (!panel) return false;
  panel.hidden = false;
  panel.setAttribute('aria-hidden', 'false');
  const toggle = document.getElementById('infoToggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'true');
  const closeBtn = panel.querySelector('[data-info-close]');
  if (closeBtn instanceof HTMLElement) closeBtn.focus();
  return true;
}

function infoPanelClose() {
  const panel = document.getElementById('infoPanel');
  if (!panel || panel.hidden) return;
  panel.hidden = true;
  panel.setAttribute('aria-hidden', 'true');
  const toggle = document.getElementById('infoToggle');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
}

function infoPanelToggle() {
  const panel = document.getElementById('infoPanel');
  if (!panel) return;
  if (panel.hidden) infoPanelOpen();
  else infoPanelClose();
}

function bindKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === 'Escape') {
      infoPanelClose();
      return;
    }
    if (isTypingContext(e.target)) return;

    const k = e.key.toLowerCase();
    if (k === 'r') {
      e.preventDefault();
      downloadResumeHtml();
      return;
    }
    if (k === 'g') {
      e.preventDefault();
      window.open(GITHUB_PROFILE, '_blank', 'noopener,noreferrer');
      return;
    }
    if (k === 'e') {
      e.preventDefault();
      copyEmail();
      return;
    }
    if (k === 'i') {
      e.preventDefault();
      infoPanelToggle();
    }
  });
}

function bindEmailTriggers() {
  const nav = document.getElementById('emailNav');
  if (nav) {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      copyEmail();
    });
  }
  const btn = document.getElementById('letsTalkBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      copyEmail();
    });
  }
}

function bindResumeDownload() {
  const btn = document.getElementById('resumeDownloadBtn');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    downloadResumeHtml();
  });
}

/** @type {Uint8Array | null} */
let guestbookPixels = null;
/** @type {HTMLButtonElement[] | null} */
let guestbookPixelEls = null;
let guestbookSelectedColor = 0;
let guestbookPollTimer;

function guestbookCellsOrThrow() {
  if (!guestbookPixelEls || guestbookPixelEls.length !== GUESTBOOK_CELLS) {
    throw new Error('Guestbook editor not ready');
  }
  return guestbookPixelEls;
}

function syncGuestbookEditorCell(i) {
  if (!guestbookPixels) return;
  const cells = guestbookPixelEls;
  if (!cells || !cells[i]) return;
  const c = guestbookPixels[i];
  cells[i].style.background = PALETTE_HEX[c] ?? PALETTE_HEX[GUESTBOOK_PAPER];
}

function paintGuestbookCell(i) {
  if (!guestbookPixels || i < 0 || i >= GUESTBOOK_CELLS) return;
  guestbookPixels[i] = guestbookSelectedColor;
  syncGuestbookEditorCell(i);
}

function buildGuestbookEditor() {
  const root = document.getElementById('pixelEditor');
  if (!root) return;

  root.innerHTML = '';
  root.classList.add('pixel-editor');
  guestbookPixels = new Uint8Array(GUESTBOOK_CELLS);
  guestbookPixelEls = [];

  for (let i = 0; i < GUESTBOOK_CELLS; i += 1) {
    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'pixel-cell';
    cell.dataset.i = String(i);
    cell.style.background = PALETTE_HEX[GUESTBOOK_PAPER];
    cell.setAttribute('aria-label', `Pixel ${1 + Math.floor(i / GUESTBOOK_GRID)}, ${1 + (i % GUESTBOOK_GRID)}`);
    root.appendChild(cell);
    guestbookPixelEls.push(cell);
  }

  guestbookPixels.fill(GUESTBOOK_PAPER);

  let painting = false;

  const endPaint = () => {
    painting = false;
  };

  root.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const t = e.target;
    if (!(t instanceof HTMLElement) || !t.classList.contains('pixel-cell')) return;
    painting = true;
    try {
      root.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    paintGuestbookCell(Number(t.dataset.i ?? -1));
  });

  root.addEventListener('pointermove', (e) => {
    if (!painting) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!(el instanceof HTMLElement) || !el.classList.contains('pixel-cell')) return;
    const idx = el.dataset.i;
    if (idx === undefined) return;
    paintGuestbookCell(Number(idx));
  });

  root.addEventListener('pointerup', endPaint);
  root.addEventListener('pointercancel', endPaint);
  root.addEventListener('lostpointercapture', endPaint);
}

function clearGuestbookEditor() {
  if (!guestbookPixels) return;
  guestbookPixels.fill(GUESTBOOK_PAPER);
  for (let i = 0; i < GUESTBOOK_CELLS; i += 1) syncGuestbookEditorCell(i);
}

function bindGuestbookPalette() {
  const root = document.getElementById('guestbookPalette');
  if (!root) return;

  root.querySelectorAll('.palette-swatch').forEach((btn) => {
    if (!(btn instanceof HTMLButtonElement)) return;
    btn.addEventListener('click', () => {
      const raw = btn.getAttribute('data-color-index');
      const n = raw !== null ? Number(raw) : NaN;
      if (!Number.isInteger(n) || n < 0 || n > 5) return;
      guestbookSelectedColor = n;
      root.querySelectorAll('.palette-swatch').forEach((b) => {
        if (!(b instanceof HTMLButtonElement)) return;
        const sel = b === btn;
        b.classList.toggle('is-selected', sel);
        b.setAttribute('aria-selected', sel ? 'true' : 'false');
      });
    });
  });
}

function guestbookPixelsFlat() {
  if (!guestbookPixels) return [];
  return Array.from(guestbookPixels);
}

function renderGuestbookStamps(entries) {
  const grid = document.getElementById('stampsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  if (!entries.length) {
    const empty = document.createElement('div');
    empty.className = 'stamps-empty mono-label';
    empty.textContent = 'No stamps yet — be the first.';
    grid.appendChild(empty);
    return;
  }

  for (const entry of entries) {
    if (!entry.pixels || entry.pixels.length !== GUESTBOOK_CELLS) continue;

    const card = document.createElement('div');
    card.className = 'stamp-card';

    const wrap = document.createElement('div');
    wrap.className = 'stamp';
    wrap.title = entry.name;

    for (let i = 0; i < GUESTBOOK_CELLS; i += 1) {
      const c = entry.pixels[i];
      const cell = document.createElement('span');
      cell.className = 'stamp-cell';
      let idx = typeof c === 'number' && Number.isInteger(c) ? c : 0;
      if (idx < 0 || idx > 5) idx = 0;
      cell.style.background = PALETTE_HEX[idx];
      wrap.appendChild(cell);
    }

    const author = document.createElement('div');
    author.className = 'stamp-author mono-label';
    author.textContent = entry.name;

    card.appendChild(wrap);
    card.appendChild(author);
    grid.appendChild(card);
  }
}

async function fetchGuestbookEntries() {
  const res = await fetch('/api/guestbook', { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(String(res.status));
  const data = await res.json();
  const entries = Array.isArray(data.entries) ? data.entries : [];
  return entries;
}

async function refreshGuestbookStamps() {
  const status = document.getElementById('stampsStatus');
  const grid = document.getElementById('stampsGrid');
  try {
    const entries = await fetchGuestbookEntries();
    if (status) {
      status.textContent = '';
      status.classList.add('is-hidden');
    }
    renderGuestbookStamps(entries);
  } catch {
    if (grid && !grid.querySelector('.stamp-card')) {
      if (status) {
        status.classList.remove('is-hidden');
        status.textContent = 'Guestbook offline — try again later.';
      }
      grid.innerHTML = '';
      const empty = document.createElement('div');
      empty.className = 'stamps-empty mono-label';
      empty.textContent = 'Could not load stamps.';
      grid.appendChild(empty);
    }
  }
}

async function refreshVisitorCount() {
  const el = document.getElementById('visitorNum');
  if (!el) return;
  try {
    const res = await fetch('/api/visitors', { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    el.textContent = typeof data.count === 'number' ? `#${data.count.toLocaleString('en-US')}` : '—';
  } catch {
    el.textContent = '—';
  }
}

async function maybeIncrementVisitorCount() {
  const el = document.getElementById('visitorNum');
  const now = Date.now();
  let shouldPost = true;
  try {
    const raw = localStorage.getItem(VISIT_LS_KEY);
    if (raw) {
      const ts = parseInt(raw, 10);
      if (Number.isFinite(ts) && now - ts < VISIT_TTL_MS) shouldPost = false;
    }
  } catch {
    /* ignore */
  }

  if (!shouldPost) return;

  try {
    const res = await fetch('/api/visitors', {
      method: 'POST',
      headers: { 'content-type': 'application/json', Accept: 'application/json' },
      body: '{}'
    });
    if (!res.ok) return;
    const data = await res.json();
    try {
      localStorage.setItem(VISIT_LS_KEY, String(now));
    } catch {
      /* ignore */
    }
    if (el && typeof data.count === 'number') el.textContent = `#${data.count.toLocaleString('en-US')}`;
  } catch {
    /* ignore */
  }
}

function bindGuestbookActions() {
  const clearBtn = document.getElementById('guestbookClear');
  const stampBtn = document.getElementById('guestbookStamp');
  const nameInput = document.getElementById('guestbookName');

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearGuestbookEditor();
    });
  }

  if (stampBtn && nameInput) {
    stampBtn.addEventListener('click', async () => {
      try {
        guestbookCellsOrThrow();
      } catch {
        showToast('Editor not ready');
        return;
      }

      const name = String(nameInput.value ?? '').trim();
      if (!name) {
        showToast('Add your name first');
        return;
      }

      const pixels = guestbookPixelsFlat();
      if (!pixels.some((c) => c !== GUESTBOOK_PAPER)) {
        showToast('Draw something first');
        return;
      }

      stampBtn.disabled = true;
      try {
        const res = await fetch('/api/guestbook', {
          method: 'POST',
          headers: { 'content-type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, pixels })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          showToast(typeof data.error === 'string' ? data.error : 'Could not stamp');
          return;
        }
        showToast('Stamped');
        clearGuestbookEditor();
        nameInput.value = '';
        await refreshGuestbookStamps();
      } catch {
        showToast('Network error — try again');
      } finally {
        stampBtn.disabled = false;
      }
    });
  }
}

function initGuestbook() {
  buildGuestbookEditor();
  bindGuestbookPalette();
  bindGuestbookActions();
  refreshGuestbookStamps();
  clearInterval(guestbookPollTimer);
  guestbookPollTimer = setInterval(refreshGuestbookStamps, GB_POLL_MS);
}

function initVisitors() {
  refreshVisitorCount();
  maybeIncrementVisitorCount();
}

function bindInfoToggle() {
  const toggle = document.getElementById('infoToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    infoPanelToggle();
  });
  const panel = document.getElementById('infoPanel');
  if (!panel) return;
  panel.querySelectorAll('[data-info-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      infoPanelClose();
    });
  });
}

updateLocalTime();
setInterval(updateLocalTime, 60000);

bindKeyboardShortcuts();
bindEmailTriggers();
bindResumeDownload();
bindInfoToggle();
hydrateGitHubStars();
initGuestbook();
initVisitors();

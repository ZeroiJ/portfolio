document.documentElement.classList.add('portfolio-js');

const EMAIL = 'sujalbirwadkar19@gmail.com';
const GITHUB_PROFILE = 'https://github.com/ZeroiJ';
const GH_CACHE_KEY = 'portfolioGhStars';
const GH_CACHE_TTL_MS = 60 * 60 * 1000;

/** Plain-text / structured mirror of the portfolio for offline resume HTML (no images). */
const RESUME = {
  name: 'Sujal Birwadkar',
  contact: {
    email: EMAIL,
    linkedin: 'https://www.linkedin.com/in/sujal-birwadkar',
    github: GITHUB_PROFILE
  },
  about: [
    'Second year at MGMCET, with the IIT Madras BS programme on the side. I like building things that actually run — reinforcement-learning agents, CLI tools, and data pipelines that sit at the intersection of AI/ML and reliable systems.',
    'Arch Linux daily driver; terminal for almost everything. Sometimes I win hackathons. Sometimes my laptop dies at 78%.'
  ],
  nowPlaying: {
    songLabel: 'Peaceful Piano',
    songUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO',
    readLabel: 'ZeroER: Entity Resolution using Zero Labeled Examples',
    readUrl: 'https://arxiv.org/abs/1908.06049',
    readAttribution: 'Wu et al.'
  },
  currently: [
    'Building QuerySight — agentic analytics on messy data.',
    'Learning RL & ML depth, Python, SQL — plus whatever IITM assigns this week.'
  ],
  education: {
    degree: 'BTech in Data Science',
    school: 'MGMCET, Navi Mumbai • 2024 — 2028'
  },
  tools: [
    { label: 'Lang', value: 'Python, SQL, R' },
    { label: 'Data', value: 'Pandas, NumPy, Polars, PySpark' },
    { label: 'Stack', value: 'PostgreSQL, BigQuery, dbt, Airflow' },
    { label: 'BI', value: 'Power BI, Tableau, Excel' },
    { label: 'Infra', value: 'Docker, Git, Linux' }
  ],
  experience: {
    kicker: 'Actively hiring my first formal role',
    body: 'I am seeking internships and project collaborations in data science, analytics, and data engineering — teams that care about measurable impact, clean pipelines, and clear communication.',
    chips: ['Internships', 'Data', 'ML', 'RL', 'Remote OK']
  },
  projects: [
    {
      title: 'Guardian Manager',
      stack: 'React · TypeScript · Vite',
      note: 'Fully vibe-coded — consider yourself warned.',
      desc: 'Destiny 2 inventory management web app. Full-stack flow with Bungie API integration.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/guardian-manager' }]
    },
    {
      title: 'RustDB',
      stack: 'Rust · B-tree · WAL · Storage',
      desc: 'SQL database engine built from scratch: real B-Tree storage layer, buffer pool, WAL, and TCP server.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/database-engine' }]
    },
    {
      title: 'SQL Optimizer — R1',
      stack: 'Python · Gradio · Hackathon',
      desc: 'SQL query optimizer prototype. Hackathon Round 1 at METAxScaler School of Technology.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/sql-optimizer-hackathon-round_1' }]
    },
    {
      title: 'Autonomic DBRE — R2',
      stack: 'Python · Docker · Hackathon',
      desc: 'Autonomic Database Reliability Engineering prototype. Hackathon Round 2 at METAxScaler School of Technology.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/autonomus-DBRE' }]
    },
    {
      title: 'Ironveil',
      stack: 'Rust · Roguelike · Terminal',
      desc: 'Terminal-based roguelike dungeon crawler — built for fun and to sharpen systems thinking.',
      links: [{ label: 'GitHub', url: 'https://github.com/ZeroiJ/ironveil' }]
    },
    {
      title: 'Analysis Pack',
      stack: 'Jupyter · Python · EDA',
      note: 'Aggregates several notebook-first repos (Spotify is the hub repo below).',
      desc: 'Bundle of analyses — Spotify listening, COVID-19, WhatsApp chats, Netflix vs Prime, California housing, and more.',
      links: [{ label: 'Notebooks', url: 'https://github.com/ZeroiJ/spotify-data-analysis' }]
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
      const links = p.links
        .map((l) => `<a href="${escapeHtml(l.url)}">${escapeHtml(l.label)}</a>`)
        .join(' · ');
      return `
<section class="project">
  <h3>${escapeHtml(p.title)}</h3>
  <p class="stack">${escapeHtml(p.stack)}</p>
  ${noteBlock}
  <p>${escapeHtml(p.desc)}</p>
  <p class="links">${links}</p>
</section>`;
    })
    .join('\n');

  const chips = r.experience.chips.map((c) => `<span class="chip">${escapeHtml(c)}</span>`).join('');

  const aboutParas = r.about.map((p) => `<p>${escapeHtml(p)}</p>`).join('');

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
    h1 { font-size: 1.65rem; margin: 0 0 0.35rem; letter-spacing: -0.02em; }
    .tagline { margin: 0 0 0.5rem; font-size: 0.95rem; color: var(--muted); }
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
    .chips { margin: 0.35rem 0 0.75rem; }
    .chip { display: inline-block; border: 1px solid var(--line); padding: 0.12rem 0.45rem; font-size: 0.68rem; margin: 0 0.35rem 0.25rem 0; letter-spacing: 0.05em; text-transform: uppercase; font-family: ui-monospace, monospace; color: var(--muted); }
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
  <p class="tagline">Sujal Birwadkar · 20 · Navi Mumbai</p>
  <p class="contact">
    <a href="mailto:${escapeHtml(r.contact.email)}">${escapeHtml(r.contact.email)}</a>
    · <a href="${escapeHtml(r.contact.linkedin)}">LinkedIn</a>
    · <a href="${escapeHtml(r.contact.github)}">GitHub</a>
  </p>

  <h2>About</h2>
  ${aboutParas}

  <h2>Now playing</h2>
  <p>Song <a href="${escapeHtml(r.nowPlaying.songUrl)}">${escapeHtml(r.nowPlaying.songLabel)}</a> (Spotify)</p>
  <p>Read <a href="${escapeHtml(r.nowPlaying.readUrl)}">${escapeHtml(r.nowPlaying.readLabel)}</a> ${escapeHtml(r.nowPlaying.readAttribution)}</p>

  <h2>Currently</h2>
  ${r.currently.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}

  <h2>Education</h2>
  <p><strong>${escapeHtml(r.education.degree)}</strong><br />${escapeHtml(r.education.school)}</p>

  <h2>Tools</h2>
  <table>${toolsRows}</table>

  <h2>Experience</h2>
  <p><strong>${escapeHtml(r.experience.kicker)}</strong></p>
  <p>${escapeHtml(r.experience.body)}</p>
  <div class="chips">${chips}</div>

  <h2>Projects</h2>
  ${projectsHtml}

  <footer>Generated ${generatedAt} (IST) · No images · sujalbirwadkar.dev</footer>
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

function scrollToResume() {
  const target = document.getElementById('resume');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function bindKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (isTypingContext(e.target)) return;

    const k = e.key.toLowerCase();
    if (k === 'r') {
      e.preventDefault();
      scrollToResume();
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

function initScrollReveal() {
  const nodes = document.querySelectorAll('.reveal');
  if (!nodes.length) return;

  const reduced =
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || typeof IntersectionObserver === 'undefined') {
    nodes.forEach((n) => n.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  nodes.forEach((n) => io.observe(n));
}

function staggerProjects() {
  const root = document.getElementById('projects');
  if (!root) return;

  const cards = Array.from(root.querySelectorAll('.project[data-stagger]'));
  if (!cards.length) return;

  const reduced =
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || typeof IntersectionObserver === 'undefined') {
    root.classList.add('projects-entered');
    cards.forEach((p) => p.style.setProperty('--enter-i', '0'));
    return;
  }

  cards.forEach((p, i) => p.style.setProperty('--enter-i', String(i)));

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        root.classList.add('projects-entered');
        clearTimeout(fallbackTimer);
        obs.disconnect();
      });
    },
    { root: null, rootMargin: '0px 0px -6% 0px', threshold: 0.1 }
  );

  const fallbackTimer = setTimeout(() => {
    root.classList.add('projects-entered');
  }, 5000);

  io.observe(root);
}

updateLocalTime();
setInterval(updateLocalTime, 60000);

bindKeyboardShortcuts();
bindEmailTriggers();
bindResumeDownload();
initScrollReveal();
staggerProjects();
hydrateGitHubStars();

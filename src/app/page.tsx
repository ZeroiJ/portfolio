import Cursor from "@/components/Cursor";
import Noise from "@/components/Noise";
import Clock from "@/components/Clock";
import ScrollReveal from "@/components/ScrollReveal";
import Guestbook from "@/components/Guestbook";
import FirstWave from "@/components/FirstWave";

const PROJECTS = [
  {
    name: "RustDB",
    desc: "Database engine from scratch — B-tree storage, WAL crash recovery, TCP server",
    pills: ["Rust", "B-Tree", "WAL"],
    href: "https://github.com/ZeroiJ/database-engine",
    linkText: "GitHub ↗",
  },
  {
    name: "Ironveil",
    desc: "Roguelike dungeon crawler in Rust",
    pills: ["Rust", "Roguelike"],
    href: "https://github.com/ZeroiJ/ironveil",
    linkText: "GitHub ↗",
  },
  {
    name: "Guardian Manager",
    desc: "Destiny 2 inventory app — Bungie API, real-time item transfers and loadouts",
    pills: ["React", "TypeScript"],
    href: "https://github.com/ZeroiJ/guardian-manager",
    linkText: "GitHub ↗",
  },
  {
    name: "SQL Optimizer",
    desc: "RL environment that rewrites SQL queries for lower I/O cost (META × Scaler hackathon)",
    pills: ["Python", "Gradio"],
    href: "https://github.com/ZeroiJ/sql-optimizer-hackathon-round_1",
    linkText: "GitHub ↗",
  },
  {
    name: "Autonomic DBRE",
    desc: "Self-improving PostgreSQL reliability agent using GRPO reinforcement learning",
    pills: ["Python", "Docker", "RL"],
    href: "https://github.com/ZeroiJ/autonomus-DBRE",
    linkText: "GitHub ↗",
  },
  {
    name: "Analysis Pack",
    desc: "End-to-end EDA across six datasets — Spotify, streaming, COVID, housing and more",
    pills: ["Jupyter", "Python"],
    href: "https://github.com/ZeroiJ/spotify-data-analysis",
    linkText: "Notebooks ↗",
  },
];

const HACKATHONS = [
  {
    title: "META × Scaler Grand Finale",
    detail: "Self-improving DB reliability agent (Autonomic DBRE) · from 52,000+ applicants",
  },
  {
    title: "META × Scaler Round 1 — Finalist",
    detail: "SQL Query Optimizer RL environment, deployed on HuggingFace Spaces",
  },
];

const SKILLS = [
  { label: "Lang", items: "Python · SQL · R · Rust" },
  { label: "Data", items: "Pandas · NumPy · Polars · PySpark" },
  { label: "Stack", items: "PostgreSQL · BigQuery · dbt · Airflow" },
  { label: "BI", items: "Power BI · Tableau · Excel" },
  { label: "Infra", items: "Docker · Git · Linux" },
];

const EXPERIENCE = [
  {
    role: "AI Data Analyst",
    org: "InAmigos Foundation (IAF) · Jul 2026 — Aug 2026",
  },
];

const EDUCATION = [
  {
    degree: "BTech in Data Science",
    school: "MGMCET, Navi Mumbai · 2024 — 2028",
  },
  {
    degree: "BS in Data Science & Programming",
    school: "IIT Madras · In Progress",
  },
];

export default function Home() {
  return (
    <>
      <Cursor />
      <Noise />
      {/* Full-width hero banner */}
      <div className="hero-banner" role="img" aria-label="Portfolio hero banner" />

      <div className="page page-in">
        {/* Header */}
        <header className="header">
          <div>
            <h1 className="font-semibold text-sm m-0">
              Sujal Birwadkar
            </h1>
            <div className="text-[13px] opacity-50 mt-px">
              Data Engineer · Vibe Coder
            </div>
          </div>
          <div className="text-right text-[13px] opacity-60">
            <div>Navi Mumbai, IN</div>
            <Clock />
          </div>
        </header>

        {/* About */}
        <ScrollReveal>
          <section className="section" aria-labelledby="about-heading">
            <h2 id="about-heading" className="sr-only">About</h2>
            <p>
              I&apos;m a second-year BTech Data Science student at MGMCET, Navi
              Mumbai, with the{" "}
              <strong>IIT Madras BS programme</strong> on the side. I like
              building things that <strong>actually run</strong>{" "}
              — reinforcement-learning agents, CLI tools, and data pipelines
              that sit at the intersection of AI/ML and reliable systems.
            </p>
            <p className="mt-3">
              Arch Linux daily driver. Terminal for almost everything. Sometimes
              I win hackathons. Sometimes my laptop dies at 78%.
            </p>
          </section>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <section className="section" aria-labelledby="education-heading">
            <h2 id="education-heading" className="sr-only">Education</h2>
            {EDUCATION.map((e, i) => (
              <div
                key={e.degree}
                className="flex gap-3.5 py-5"
                style={i > 0 ? { marginTop: "1.5rem" } : undefined}
              >
                <div className="edu-dot" />
                <div>
                  <div className="font-semibold text-sm">{e.degree}</div>
                  <div className="text-[13px] opacity-60 mt-0.5">
                    {e.school}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal>
          <section className="section" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="sr-only">Skills</h2>
            <div className="grid gap-3">
              {SKILLS.map((s) => (
                <div key={s.label} className="flex items-baseline gap-4 text-[13px]">
                  <span className="skills-label">{s.label}</span>
                  <span className="skills-items">{s.items}</span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Projects */}
        <ScrollReveal>
          <section className="section" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">Projects</h2>
            {PROJECTS.map((p) => (
              <div key={p.name} className="project-row">
                <div className="overflow-hidden min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-semibold text-sm whitespace-nowrap">
                      {p.name}
                    </span>
                    {p.pills.map((pill) => (
                      <span key={pill} className="pill">
                        {pill}
                      </span>
                    ))}
                  </div>
                  {p.desc && (
                    <div className="text-[12px] opacity-60 mt-0.5 truncate">
                      {p.desc}
                    </div>
                  )}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {p.linkText}
                </a>
              </div>
            ))}
          </section>
        </ScrollReveal>

        {/* Hackathons */}
        <ScrollReveal>
          <section className="section" aria-labelledby="hackathons-heading">
            <h2 id="hackathons-heading" className="sr-only">Hackathon achievements</h2>
            {HACKATHONS.map((h) => (
              <div key={h.title} className="flex gap-3.5 py-5">
                <div className="edu-dot" />
                <div>
                  <div className="font-semibold text-sm">{h.title}</div>
                  <div className="text-[13px] opacity-60 mt-0.5">
                    {h.detail}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal>
          <section className="section" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="sr-only">Experience</h2>
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="flex gap-3.5 py-5">
                <div className="edu-dot" />
                <div>
                  <div className="font-semibold text-sm">{e.role}</div>
                  <div className="text-[13px] opacity-60 mt-0.5">
                    {e.org}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </ScrollReveal>

        {/* Guestbook */}
        <ScrollReveal>
          <Guestbook />
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
          <section className="section" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="sr-only">Contact</h2>
            <div className="flex gap-10 border-t border-white/20">
              {/* shortcut: served as .docx (no converter available locally) — swap to a PDF version if you export one */}
              <a
                href="/resume.docx"
                className="contact-link"
              >
                Resume ↗
              </a>
              <a
                href="mailto:sujal.m.birwadkar@gmail.com"
                className="contact-link"
              >
                Email ↗
              </a>
              <a
                href="https://github.com/ZeroiJ"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/sujal-birwadkar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn ↗
              </a>
            </div>
          </section>
        </ScrollReveal>

      </div>

      <FirstWave />
    </>
  );
}

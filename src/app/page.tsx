import Cursor from "@/components/Cursor";
import Noise from "@/components/Noise";
import Clock from "@/components/Clock";
import ScrollReveal from "@/components/ScrollReveal";
import Guestbook from "@/components/Guestbook";

const PROJECTS = [
  {
    name: "RustDB",
    pills: ["Rust", "B-Tree", "WAL"],
    href: "https://github.com/ZeroiJ/database-engine",
    linkText: "GitHub ↗",
  },
  {
    name: "Ironveil",
    pills: ["Rust", "Roguelike"],
    href: "https://github.com/ZeroiJ/ironveil",
    linkText: "GitHub ↗",
  },
  {
    name: "Guardian Manager",
    pills: ["React", "TypeScript"],
    href: "https://github.com/ZeroiJ/guardian-manager",
    linkText: "GitHub ↗",
  },
  {
    name: "SQL Optimizer",
    pills: ["Python", "Gradio"],
    href: "https://github.com/ZeroiJ/sql-optimizer-hackathon-round_1",
    linkText: "GitHub ↗",
  },
  {
    name: "Autonomic DBRE",
    pills: ["Python", "Docker"],
    href: "https://github.com/ZeroiJ/autonomus-DBRE",
    linkText: "GitHub ↗",
  },
  {
    name: "Analysis Pack",
    pills: ["Jupyter", "Python"],
    href: "https://github.com/ZeroiJ/spotify-data-analysis",
    linkText: "Notebooks ↗",
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

const TAGS = ["Internships", "Data", "ML", "RL", "Remote OK"];

export default function Home() {
  return (
    <>
      <Cursor />
      <Noise />

      <div className="page page-in">
        {/* Header */}
        <header className="header">
          <div>
            <div className="font-semibold text-sm">Sujal Birwadkar</div>
            <div className="text-[13px] opacity-50 mt-px">
              Data Engineer · Vibe Coder
            </div>
          </div>
          <div className="text-right text-[13px] opacity-50">
            <div>Navi Mumbai, IN</div>
            <Clock />
          </div>
        </header>

        {/* About */}
        <ScrollReveal>
          <section className="section">
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

        {/* Projects */}
        <ScrollReveal>
          <section className="section">
            {PROJECTS.map((p) => (
              <div key={p.name} className="project-row">
                <div className="flex items-center gap-2 overflow-hidden min-w-0">
                  <span className="font-semibold text-sm whitespace-nowrap">
                    {p.name}
                  </span>
                  {p.pills.map((pill) => (
                    <span key={pill} className="pill">
                      {pill}
                    </span>
                  ))}
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

        {/* Experience */}
        <ScrollReveal>
          <section className="section">
            {EXPERIENCE.map((e, i) => (
              <div
                key={e.role}
                className={`flex gap-3.5 py-4 border-b border-white/20 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <div className="edu-dot" />
                <div>
                  <div className="font-semibold text-sm">{e.role}</div>
                  <div className="text-[13px] opacity-50 mt-0.5">
                    {e.org}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal>
          <section className="section">
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

        {/* Education */}
        <ScrollReveal>
          <section className="section">
            {EDUCATION.map((e, i) => (
              <div
                key={e.degree}
                className={`flex gap-3.5 py-4 border-b border-white/20 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <div className="edu-dot" />
                <div>
                  <div className="font-semibold text-sm">{e.degree}</div>
                  <div className="text-[13px] opacity-50 mt-0.5">
                    {e.school}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </ScrollReveal>

        {/* Open to work */}
        <ScrollReveal>
          <section className="section">
            <div className="open-card">
              <div className="inline-flex items-center gap-1.5 font-semibold text-[13px] mb-2.5">
                <span className="open-dot" />
                Actively seeking my first formal role
              </div>
              <p className="text-[13px] leading-relaxed opacity-70 mb-3.5">
                Seeking internships and project collaborations in data science,
                analytics, and data engineering — teams that care about
                measurable impact, clean pipelines, and clear communication.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TAGS.map((t) => (
                  <span key={t} className="pill pill-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Guestbook */}
        <ScrollReveal>
          <Guestbook />
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
          <section className="section">
            <div className="flex gap-10 border-t border-white/20">
              <a
                href="mailto:sujalbirwadkar@gmail.com"
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

        {/* Footer */}
        <footer className="footer">
          <span className="font-semibold py-4 border-r border-white/20 pr-4">
            2026
          </span>
          <a
            href="https://github.com/ZeroiJ"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            @ZeroiJ
          </a>
        </footer>
      </div>
    </>
  );
}

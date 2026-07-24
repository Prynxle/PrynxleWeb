import SectionLabel from "./SectionLabel";

const projects = [
  {
    name: "CommUnity",
    period: "2025–2026",
    tech: ["React", "Next.js", "Supabase", "Tailwind CSS", "SendGrid"],
    description:
      "A web-based campus safety platform for OLOPS College where students submit incident reports with photo evidence, track cases through a 4-stage status pipeline, and get help from a RAG-powered chatbot. Reports are scored across 6 categories with rule-based priority routing to 2 admin roles, with email alerts via SendGrid. The system spans 15 pages, 11 API routes, and ~21K lines of code, evaluated under ISO/IEC 25010 and TAM with 193 student respondents.",
    tags: ["Full-Stack", "RAG", "Enterprise"],
  },
  {
    name: "AI Worship Team Scheduler",
    period: "2026",
    tech: ["Amazon PartyRock", "Amazon Bedrock", "AI/ML"],
    description:
      "An AI-powered Worship Team Monthly Scheduler that automates the generation of monthly ministry schedules. The app intelligently assigns instrumentalists, worship leaders, backup singers, and devotion speakers based on role-specific rules, availability constraints, and rotation queues — eliminating manual scheduling effort and ensuring fair, rule-compliant assignments each month.",
    tags: ["AI", "Automation", "Ministry"],
  },
  {
    name: "DormEatory / Reciper",
    period: "2024–2025",
    tech: ["Flutter", "Dart", "Google Gemini", "Python"],
    description:
      "An AI-powered dorm meal assistant for Filipino students: Gemini chatbot for personalized meal suggestions, responsive chat UI (mobile/tablet/desktop), and Filipino recipe recommendations.",
    tags: ["AI", "Mobile", "Multi-platform"],
  },
  {
    name: "SmartGpay",
    period: "Nov 2025",
    tech: ["Python", "Tkinter", "SQLite", "ReportLab"],
    description:
      "A desktop automated payslip generator with employee and payroll CRUD, payslip generation, text/PDF export, and print support. Built with layered OOP architecture (models → repos → services → UI).",
    tags: ["Desktop", "PDF", "OOP"],
  },
  {
    name: "Booking App",
    period: "Nov 2025",
    tech: ["Python", "Tkinter", "SQLite", "PyInstaller"],
    description:
      "A desktop hotel booking manager for boutique hotels: room/guest/reservation CRUD, calendar booking, availability checks, billing, occupancy reports, and admin login.",
    tags: ["Desktop", "CRUD", "Calendar"],
  },
  {
    name: "Mat²",
    period: "May 2025",
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    description:
      "A static e-commerce demo for Volk Racing wheels: product catalog, shopping cart, checkout with PHP pricing/tax/shipping, order receipt, and hidden admin stock reset (Ctrl+Shift+A).",
    tags: ["E-commerce", "Frontend", "Deployed"],
  },
  {
    name: "UNO Game",
    period: "Dec 2024",
    tech: ["Flutter", "Dart", "Material Design"],
    description:
      "A Flutter UNO card game (1v1 vs. computer): deck dealing, turn-based play, Draw Two, scoring, rules dialog, and game-over/restart flow.",
    tags: ["Game", "Mobile", "Multi-platform"],
  },
  {
    name: "Reaction-Diffusion Simulation",
    period: "May 2026",
    tech: ["Python", "NumPy", "Matplotlib"],
    description:
      "A 2D cellular growth simulation that models a diamond-shaped pattern on a 31×31 grid over 31 generations, using neighbor-count rules and exporting generation snapshots as a PNG.",
    tags: ["Simulation", "Scientific", "Visualization"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto w-full">
      <SectionLabel label="projects" />
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="card-surface p-6 flex flex-col gap-4 group hover:border-ink/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-ink leading-snug group-hover:text-ink/80 transition-colors">
                  {project.name}
                </h3>
                <span className="label-mono">{project.period}</span>
              </div>
              <div className="flex gap-1.5 shrink-0 flex-wrap justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-ink text-surface group-hover:bg-ink/80 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed">
              {project.description}
            </p>

            <div className="mt-auto pt-3 border-t border-rule">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

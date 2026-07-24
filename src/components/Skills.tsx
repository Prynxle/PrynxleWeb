import SectionLabel from "./SectionLabel";
import TechIcon from "./TechIcon";

const skillGroups = [
  {
    category: "Front-End",
    skills: ["React", "JavaScript", "HTML5", "TailwindCSS", "Vite", "TypeScript", "CSS3"],
  },
  {
    category: "Back-End",
    skills: ["Python", "NodeJS", "Dart", "Java"],
  },
  {
    category: "Framework",
    skills: ["NextJS", "Flutter", "MaterialDesign"],
  },
  {
    category: "Database & Auth",
    skills: ["Supabase", "PostgreSQL", "SQLite", "GoogleAuth"],
  },
  {
    category: "Tools & Services",
    skills: ["SendGrid", "Nodemailer", "Netlify", "Vercel", "GitHub", "AWS", "PyInstaller"],
  },
  {
    category: "AI & Cloud",
    skills: ["GoogleGemini", "AmazonPartyRock", "Bedrock"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto w-full">
      <SectionLabel label="skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="card-surface p-5 flex flex-col gap-3 group hover:border-ink/20 transition-colors duration-200"
          >
            <span className="label-mono">{group.category}</span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 text-sm px-2.5 py-1 bg-canvas border border-rule text-ink font-medium hover:bg-ink hover:text-surface transition-all duration-200 cursor-default"
                >
                  <TechIcon name={skill} />
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

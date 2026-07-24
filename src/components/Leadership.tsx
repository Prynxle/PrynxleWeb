import { Music, Users } from "lucide-react";
import SectionLabel from "./SectionLabel";

const activities = [
  {
    role: "Vice President",
    org: "OLOPSC Computer Society",
    period: "2025–2026",
    icon: Users,
    details: [
      "Assisted in planning and executing student-focused academic and technology-related initiatives.",
      "Coordinated with officers and faculty advisers to organize events, workshops, and community activities.",
    ],
  },
  {
    role: "Music Director",
    org: "JOHIA Church",
    period: "2024 – Present",
    icon: Music,
    details: [
      "Led music teams in planning, coordination, and performance preparation.",
      "Managed schedules, rehearsals, and team collaboration activities.",
      "Demonstrated leadership, accountability, and organizational skills in a volunteer setting.",
    ],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding max-w-6xl mx-auto w-full">
      <SectionLabel label="leadership & extracurricular" />
      <div className="grid md:grid-cols-2 gap-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <article
              key={activity.role + activity.org}
              className="card-surface p-6 flex flex-col gap-4 group hover:border-ink/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-canvas border border-rule group-hover:bg-ink group-hover:text-surface transition-colors duration-200">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-semibold text-ink">
                    {activity.role}
                  </h3>
                  <p className="text-sm text-muted">{activity.org}</p>
                  <span className="label-mono mt-0.5">{activity.period}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-1.5">
                {activity.details.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-muted leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-rule mt-1 shrink-0">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

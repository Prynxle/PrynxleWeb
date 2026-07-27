import { GraduationCap } from "lucide-react";
import SectionLabel from "./SectionLabel";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Our Lady of Perpetual Succor College Marikina",
    period: "2023 – 2027",
    highlights: [
      "Dean's Lister (2023-2026)",
      "Rank 7th Dean' Lister 2nd Year",
      "Vice President, OLOPSC Computer Society (2025–2026)",
      "Iskolar ni Omie (San Mateo Scholar) 1st Batch 2023-2026",
    ],
    coursework:
      "Data Structures and Algorithm, Software Engineering, Object-Oriented Programming, Web and Mobile Development, Database Management Systems, Computational Science",
  },
  {
    degree: "TVL – Computer Programming",
    school: "San Mateo Senior High School",
    period: "2021 – 2023",
    highlights: [
      "Academic Excellence With Honors",
      "Best in Work Immersion Award",
    ],
    coursework: "Web Development and Software Development",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding max-w-6xl mx-auto w-full">
      <SectionLabel label="education" />
      <div className="grid md:grid-cols-2 gap-4">
        {education.map((edu) => (
          <article
            key={edu.school + edu.degree}
            className="card-surface p-6 flex flex-col gap-4 group hover:border-ink/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-canvas border border-rule group-hover:bg-ink group-hover:text-surface transition-colors duration-200">
                <GraduationCap size={16} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-lg font-semibold text-ink leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted">{edu.school}</p>
                <span className="label-mono mt-1">{edu.period}</span>
              </div>
            </div>
            {edu.highlights.length > 0 && (
              <ul className="flex flex-col gap-1">
                {edu.highlights.map((h) => (
                  <li key={h} className="text-sm text-ink flex items-start gap-2">
                    <span className="text-muted mt-0.5 shrink-0">●</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
            {edu.coursework && (
              <div className="mt-auto pt-2 border-t border-rule">
                <span className="label-mono block mb-2">Relevant Coursework</span>
                <p className="text-xs text-muted leading-relaxed">
                  {edu.coursework}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

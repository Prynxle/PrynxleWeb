import { Award } from "lucide-react";
import SectionLabel from "./SectionLabel";

const certifications = [
  {
    name: "AWS AI Practitioner Challenge Certificate",
    issuer: "Amazon Web Services (AWS)",
    period: "2025",
    status: "Completed",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    period: "2026",
    status: "In Progress",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding max-w-6xl mx-auto w-full">
      <SectionLabel label="certifications & training" />
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <article
            key={cert.name}
            className="card-surface p-5 flex items-start gap-3 group hover:border-ink/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
          >
            <div className="p-2 bg-canvas border border-rule group-hover:bg-ink group-hover:text-surface transition-colors duration-200 shrink-0">
              <Award size={16} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-sm font-semibold text-ink leading-snug">
                {cert.name}
              </h3>
              <span className="label-mono">{cert.issuer}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="label-mono">{cert.period}</span>
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 ${cert.status === 'Completed' ? 'bg-ink text-surface' : 'bg-canvas border border-rule text-muted'}`}>
                  {cert.status}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

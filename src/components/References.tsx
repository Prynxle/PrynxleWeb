import { Mail } from "lucide-react";
import SectionLabel from "./SectionLabel";

const references = [
  {
    name: "Prof. Ma. Apasra Somo, MAEd",
    title: "Program Chair of Computing Studies",
    org: "Our Lady of Perpetual Succor College",
    email: "apasra.somo@olopsc.edu.ph",
  },
  {
    name: "Prof. Ruby Cruz, MAEd",
    title: "Academic Staff, Department of Computing Studies",
    org: "Our Lady of Perpetual Succor College",
    email: "ruby.cruz@olopsc.edu.ph",
  },
  {
    name: "Prof. Mary Rose Arroyo, LPT",
    title: "Academic Staff, Department of Computing Studies",
    org: "Our Lady of Perpetual Succor College",
    email: "maryrose.arroyo@olopsc.edu.ph",
  },
];

export default function References() {
  return (
    <section id="references" className="section-padding max-w-6xl mx-auto w-full">
      <SectionLabel label="references" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {references.map((ref) => (
          <article
            key={ref.name}
            className="card-surface p-5 flex flex-col gap-2 group hover:border-ink/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
          >
            <h3 className="text-sm font-semibold text-ink">{ref.name}</h3>
            <p className="text-xs text-muted leading-relaxed">{ref.title}</p>
            <p className="text-xs text-muted">{ref.org}</p>
            <a
              href={`mailto:${ref.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink transition-colors mt-1"
            >
              <Mail size={12} strokeWidth={1.5} />
              {ref.email}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

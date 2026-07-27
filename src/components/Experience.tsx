import { Briefcase } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto w-full">
      <SectionLabel label="experience" />
      <article className="card-surface p-6 flex flex-col gap-4 group hover:border-ink/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-canvas border border-rule group-hover:bg-ink group-hover:text-surface transition-colors duration-200">
            <Briefcase size={16} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <h3 className="text-lg font-semibold text-ink">
              Full Stack Developer Intern
            </h3>
            <p className="text-sm text-muted">NexVision Innovations BGC Taguig</p>
            <span className="label-mono mt-0.5">2026</span>
          </div>
          <div className="flex gap-1.5 shrink-0 flex-wrap justify-end">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-ink text-surface">
              CRM
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-ink text-surface">
              Full-Stack
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-ink text-surface">
              SMB
            </span>
          </div>
        </div>
        <p className="text-sm text-muted leading-relaxed">
          Building a CRM platform for SMBs in the Philippines. Developing full-stack features, API integrations, and responsive interfaces for small and medium-sized businesses.
        </p>
      </article>
    </section>
  );
}

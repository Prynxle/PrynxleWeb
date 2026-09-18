"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

type PreviewProject = {
  name: string;
  period: string;
  description: string;
  tech: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  preview: { type: "image" | "video"; src: string; fallback?: string };
};

type TextProject = {
  name: string;
  period: string;
  description: string;
  tech: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
};

const previewProjects: PreviewProject[] = [
  {
    name: "CommUnity",
    period: "2025–2026",
    description: "A campus safety platform that gives students one clear place to report incidents, follow case progress, and find support.",
    tech: ["React", "Next.js", "Supabase", "Tailwind CSS", "SendGrid"],
    tags: ["Full-stack", "RAG", "Enterprise"],
    metrics: [
      { label: "Scale", value: "15 pages · 11 API routes" },
      { label: "Codebase", value: "~21K lines" },
      { label: "Research", value: "193 respondents" },
    ],
    preview: { type: "image", src: "/projects/community_landingPage.png" },
  },
  {
    name: "Johia Bankers Customize Scheduling System",
    period: "2026",
    description: "A calm workspace for worship teams to manage member rosters, availability, and Sunday assignments without the usual spreadsheet friction.",
    tech: ["Amazon PartyRock", "Amazon Bedrock", "AI/ML"],
    tags: ["AI", "Automation", "Ministry"],
    metrics: [
      { label: "Schedule", value: "Monthly generation" },
      { label: "Roles", value: "4 ministry roles" },
      { label: "Rules", value: "Availability + rotation" },
    ],
    preview: { type: "video", src: "/projects/Johiaschedulerdemo.mp4", fallback: "/projects/johiaschedulerlogin.png" },
  },
  {
    name: "HAPI",
    period: "2026",
    description: "A humanist community website built around belonging, participation, and a warmer invitation to join the conversation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    tags: ["Community", "Editorial", "Web"],
    metrics: [
      { label: "Screens", value: "2 supplied previews" },
      { label: "Format", value: "Responsive landing page" },
      { label: "Direction", value: "Editorial community brand" },
    ],
    preview: { type: "image", src: "/projects/hapi.png" },
  },
];

const textProjects: TextProject[] = [
  {
    name: "Cosmic Horizon",
    period: "2025",
    description: "An atmospheric visual experience focused on scale, motion, and the feeling of exploring an unknown horizon.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive design"],
    tags: ["Visual", "Frontend"],
    metrics: [
      { label: "Format", value: "Immersive landing page" },
      { label: "Focus", value: "Visual storytelling" },
      { label: "Output", value: "Responsive web experience" },
    ],
  },
  {
    name: "Reciper",
    period: "2024–2025",
    description: "An AI-powered dorm meal assistant for Filipino students, pairing conversational meal ideas with practical recipe discovery.",
    tech: ["Flutter", "Dart", "Google Gemini", "Python"],
    tags: ["AI", "Mobile", "Multi-platform"],
    metrics: [
      { label: "Platforms", value: "Mobile, tablet, desktop" },
      { label: "Core flow", value: "AI meal recommendations" },
      { label: "Audience", value: "Filipino dorm residents" },
    ],
  },
  {
    name: "SmartGpay Freelancing project",
    period: "Nov 2025",
    description: "A desktop payroll tool that handles employee records, payroll CRUD, payslip generation, and export-ready documents.",
    tech: ["Python", "Tkinter", "SQLite", "ReportLab"],
    tags: ["Desktop", "Payroll", "OOP"],
    metrics: [
      { label: "Architecture", value: "4-layer OOP structure" },
      { label: "Documents", value: "PDF and text export" },
      { label: "Workflow", value: "Employee-to-payslip" },
    ],
  },
];

function ProjectTags({ tags }: { tags: string[] }) {
  return <div className="flex gap-1.5 shrink-0 flex-wrap justify-end">{tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}</div>;
}

function ProjectHeader({ project }: { project: PreviewProject | TextProject }) {
  return <div className="flex items-start justify-between gap-4"><div className="flex flex-col gap-1"><h3 className="text-lg font-semibold text-ink leading-snug">{project.name}</h3><span className="label-mono">{project.period}</span></div><ProjectTags tags={project.tags} /></div>;
}

function ProjectMetrics({ metrics }: { metrics: { label: string; value: string }[] }) {
  return <div className="grid gap-2 border-y border-rule py-3 sm:grid-cols-3">
    {metrics.map((metric) => <div key={metric.label}>
      <span className="label-mono block">{metric.label}</span>
      <span className="mt-1 block text-xs font-medium leading-snug text-ink">{metric.value}</span>
    </div>)}
  </div>;
}

function PreviewModal({ project, onClose }: { project: PreviewProject; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKeyDown); };
  }, [onClose]);

  return <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 sm:p-8" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="modal-content flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden bg-surface shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="preview-title">
      <div className="flex items-center justify-between gap-4 border-b border-rule px-4 py-3 sm:px-6"><div><span className="label-mono">project preview</span><h2 id="preview-title" className="text-base font-semibold text-ink">{project.name}</h2></div><button type="button" onClick={onClose} className="inline-flex size-9 items-center justify-center border border-rule text-ink transition-colors hover:bg-ink hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink" aria-label="Close project preview"><X size={17} aria-hidden="true" /></button></div>
      <div className="overflow-auto bg-[#ececea] p-3 sm:p-6">{project.preview.type === "video" ? <video className="mx-auto max-h-[68vh] w-full object-contain" controls autoPlay muted playsInline poster={project.preview.fallback}><source src={project.preview.src} type="video/mp4" />Your browser does not support embedded video.</video> : <Image src={project.preview.src} alt={`${project.name} project preview`} width={1600} height={900} className="mx-auto max-h-[68vh] w-full object-contain" />}</div>
    </div>
  </div>;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<PreviewProject | null>(null);
  return <section id="projects" className="section-padding max-w-6xl mx-auto w-full">
    <SectionLabel label="projects" />
    <div className="mb-6 flex items-end justify-between gap-4 border-b border-rule pb-4"><p className="max-w-xl text-sm leading-relaxed text-muted">Selected work across product systems, community platforms, and small tools with a clear job to do.</p><span className="label-mono hidden sm:block">{previewProjects.length + textProjects.length} selected builds</span></div>
    <div className="grid gap-4 md:grid-cols-2">{previewProjects.map((project) => <button type="button" key={project.name} onClick={() => setSelectedProject(project)} className="card-surface group flex h-full flex-col gap-4 p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
      <ProjectHeader project={project} />
      <div className="relative aspect-[16/7] overflow-hidden border border-rule bg-ink"><Image src={project.preview.fallback ?? project.preview.src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-75 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-90" /><span className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-surface px-3 py-2 text-xs font-medium text-ink">{project.preview.type === "video" ? <Play size={13} fill="currentColor" aria-hidden="true" /> : <ArrowUpRight size={13} aria-hidden="true" />}Open preview</span></div>
      <p className="text-sm leading-relaxed text-muted">{project.description}</p><ProjectMetrics metrics={project.metrics} /><div className="mt-auto border-t border-rule pt-3"><div className="flex flex-wrap gap-x-3 gap-y-1">{project.tech.map((tech) => <span key={tech} className="text-xs font-mono text-muted">{tech}</span>)}</div></div>
    </button>)}</div>
    <div className="mt-4 grid gap-4 md:grid-cols-3">{textProjects.map((project) => <article key={project.name} className="card-surface flex flex-col gap-5 p-6"><ProjectHeader project={project} /><p className="text-sm leading-relaxed text-muted">{project.description}</p><div className="border-y border-rule py-3">{project.metrics.map((metric) => <div key={metric.label} className="flex items-baseline justify-between gap-3 border-b border-rule/70 py-2 last:border-0"><span className="label-mono">{metric.label}</span><span className="text-right text-xs font-medium text-ink">{metric.value}</span></div>)}</div><div className="mt-auto flex flex-wrap gap-x-3 gap-y-1">{project.tech.map((tech) => <span key={tech} className="text-xs font-mono text-muted">{tech}</span>)}</div></article>)}</div>
    {selectedProject && <PreviewModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </section>;
}

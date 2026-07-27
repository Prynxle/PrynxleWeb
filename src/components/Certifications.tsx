"use client";

import { useState, useEffect, useCallback } from "react";
import { Award, X } from "lucide-react";
import SectionLabel from "./SectionLabel";

const certifications = [
  {
    name: "AWS AI Practitioner Challenge Certificate",
    issuer: "Amazon Web Services (AWS)",
    period: "2026",
    status: "Completed",
    image: "/assets/AWS1.png",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    period: "2026",
    status: "In Progress",
    image: null,
  },
];

export default function Certifications() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const close = useCallback(() => setActiveImage(null), []);

  useEffect(() => {
    if (!activeImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage, close]);

  return (
    <section id="certifications" className="section-padding max-w-6xl mx-auto w-full">
      <SectionLabel label="certifications & training" />
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <article
            key={cert.name}
            onClick={() => cert.image && setActiveImage(cert.image)}
            className={`card-surface p-5 flex items-start gap-3 group transition-all duration-200 ${
              cert.image
                ? "cursor-pointer hover:border-ink/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                : "hover:border-ink/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            }`}
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
              {cert.image && (
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  click to view
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm modal-overlay"
          onClick={close}
        >
          <div
            className="relative max-w-4xl w-full mx-4 modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-10 right-0 p-1 text-surface hover:text-muted transition-colors duration-150"
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
            <div className="bg-surface border border-rule overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage}
                alt="Certificate"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

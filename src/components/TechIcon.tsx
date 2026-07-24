import type { ReactNode } from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

const icons: Record<string, ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  ),
  NextJS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M9 8.5v7l7-3.5v7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">TS</text>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">JS</text>
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 2v20" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
  ),
  TailwindCSS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.22 7.15 14.08 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.22 13.15 9.08 12 7 12z"/>
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M21.8 5.7L13.4 2.1c-.5-.2-1.1-.2-1.6 0L2.2 5.7c-.8.3-1.3 1.1-1.3 2v8.5c0 .9.5 1.7 1.3 2l8.6 3.6c.5.2 1.1.2 1.6 0l8.4-3.6c.8-.3 1.3-1.1 1.3-2V7.8c0-.9-.5-1.7-1.4-2.1z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8l-4 8h2l.8-1.6h4.4L16 16h2l-4-8h-2z" fill="currentColor"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2c-1.7 0-3.2.1-4.3.3C5.5 2.6 4.5 3.6 4.3 5c-.1.9-.1 1.8-.1 2.7v1.9c0 .9 0 1.8.1 2.7.2 1.4 1.2 2.4 2.7 2.7.5.1 1.1.2 1.7.2v-2.5c-.5 0-1 0-1.4-.1-.5-.1-.8-.4-.8-.9V9.5c0-.5.3-.9.8-1 .4-.1.9-.1 1.4-.1h3.8c.5 0 1 0 1.4.1.5.1.8.5.8 1V12c0 .5-.3.9-.8 1-.4.1-.9.1-1.4.1H10v2.5h3.2c.5 0 1.1.1 1.7.2 1.5.3 2.5 1.3 2.7 2.7.1.9.1 1.8.1 2.7v1.9c0 .9 0 1.8-.1 2.7-.2 1.4-1.2 2.4-2.7 2.7-1.1.2-2.6.3-4.3.3s-3.2-.1-4.3-.3c-1.5-.3-2.5-1.3-2.7-2.7-.1-.9-.1-1.8-.1-2.7v-1.9c0-.9 0-1.8.1-2.7.2-1.4 1.2-2.4 2.7-2.7C8.8 2.1 10.3 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="9.5" cy="5.5" r="1.2" fill="currentColor"/>
      <circle cx="14.5" cy="18.5" r="1.2" fill="currentColor"/>
    </svg>
  ),
  Dart: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M5 3l6 6-6 6V3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M11 9l6 6-6 6V9z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M14.3 3.3L8 9.6l3.2 3.2L17.5 6.5c.7-.7.7-1.8 0-2.5l-3.2-0.7z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 9.6L4.8 12.8c-.7.7-.7 1.8 0 2.5l5.5 5.5c.7.7 1.8.7 2.5 0l5.5-5.5c.7-.7.7-1.8 0-2.5L11.2 9.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M8 18c0 0-1 1.5-1 3s1 2 2 2 2-1 2-2-1-3-1-3H8z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M15 18c0 0-1 1.5-1 3s1 2 2 2 2-1 2-2-1-3-1-3H15z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M6.5 12C6.5 7 9 4 12 4s5.5 3 5.5 8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 14c0-4 2-7 5-8" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
      <path d="M20 14c0-4-2-7-5-8" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
    </svg>
  ),
  NodeJS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 7v5m0 0l3 2m-3-2l-3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 11v6m-3-4l3 2 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  SQLite: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  SendGrid: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 7l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Netlify: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 14l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 4L4 20h16L12 4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M3 15c2.5 2.5 6.5 3 9 3 5 0 9-2 9-6s-4-6-9-6c-3 0-6 1-8 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 14l2-3 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 14l2-3 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  GoogleAuth: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Nodemailer: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 7l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  PyInstaller: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12h8m-4-4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Tkinter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="3" width="18" height="4" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 10h4m-2-2v4m4-4h2m0 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Matplotlib: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M3 20V4m0 16l4-6 4 4 4-8 4 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  NumPy: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">N</text>
    </svg>
  ),
  ReportLab: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <rect x="4" y="2" width="16" height="20" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 7h8m-8 4h8m-8 4h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  MaterialDesign: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  GoogleGemini: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  AmazonPartyRock: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M3 15c2.5 2.5 6.5 3 9 3 5 0 9-2 9-6s-4-6-9-6c-3 0-6 1-8 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 11l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Bedrock: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M3 15c2.5 2.5 6.5 3 9 3 5 0 9-2 9-6s-4-6-9-6c-3 0-6 1-8 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="8" y="10" width="8" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function TechIcon({ name, className = "" }: TechIconProps) {
  const icon = icons[name];
  if (!icon) return null;
  return <span className={`inline-flex items-center ${className}`}>{icon}</span>;
}

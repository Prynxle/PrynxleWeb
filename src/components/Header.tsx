"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function useHoverSound() {
  const playHover = () => {
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 600;
    oscillator.type = 'sine';
    
    gainNode.gain.value = 0.02;
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.08);
  };
  
  return playHover;
}

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "References", href: "#references" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const playHover = useHoverSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-rule shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4 sm:px-6">
        <a
          href="#"
          className="font-mono text-sm tracking-tight text-ink font-semibold"
          onMouseEnter={playHover}
        >
          zedrick<span className="text-muted">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-muted hover:text-ink transition-colors"
                onMouseEnter={playHover}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Prynxle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
            aria-label="GitHub"
            onMouseEnter={playHover}
          >
              <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/zedrick-espiritu-4927b3419/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
            aria-label="LinkedIn"
            onMouseEnter={playHover}
          >
              <LinkedinIcon size={16} />
          </a>
          <a
            href="https://www.facebook.com/RaiKaktus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
            aria-label="Facebook"
            onMouseEnter={playHover}
          >
              <FacebookIcon size={16} />
          </a>
          <a
            href="mailto:zedrickespiritu.s@gmail.com"
            className="text-muted hover:text-ink transition-colors"
            aria-label="Email"
            onMouseEnter={playHover}
          >
            <Mail size={16} strokeWidth={1.5} />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-rule">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted hover:text-ink transition-colors"
                  onMouseEnter={playHover}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 px-6 pb-4">
            <a
              href="https://github.com/Prynxle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
              onMouseEnter={playHover}
            >
            <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/zedrick-espiritu-4927b3419/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
              onMouseEnter={playHover}
            >
            <LinkedinIcon size={16} />
            </a>
            <a
              href="https://www.facebook.com/RaiKaktus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
              onMouseEnter={playHover}
            >
            <FacebookIcon size={16} />
            </a>
            <a
              href="mailto:zedrickespiritu.s@gmail.com"
              className="text-muted hover:text-ink transition-colors"
              onMouseEnter={playHover}
            >
              <Mail size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

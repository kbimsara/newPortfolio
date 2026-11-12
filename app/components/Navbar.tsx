'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Pipelines', href: '#pipelines' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#monographs' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.05 }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kavidubim2gamaethige@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore clipboard restrictions
    }
  };

  return (
    <header className="w-full bg-surface/95 backdrop-blur-sm border-b border-surface-container-highest sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 h-16 flex justify-between items-center">
        {/* Brand Logo / Identity */}
        <a
          className="font-mono text-[13px] tracking-wider text-primary font-medium flex items-center gap-2 hover:text-secondary transition-colors"
          href="#"
        >
          <span className="inline-block w-2.5 h-2.5 bg-primary flex-shrink-0" />
          <span>DEVOPS // K.BIMSARA</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6" aria-label="Primary Navigation">
          {links.map(({ label, href }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                className={`font-mono text-[13px] transition-colors duration-150 ${
                  isActive
                    ? 'border-b border-primary text-primary pb-0.5 font-medium'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Actions & Status */}
        <div className="flex items-center space-x-2.5">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded border border-surface-container-highest bg-surface-container-low font-mono text-[11px] tracking-[0.06em] text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>LK: ONLINE</span>
          </div>

          <button
            type="button"
            onClick={copyEmail}
            className="hidden md:flex px-2.5 py-1 text-[11px] font-mono tracking-[0.06em] border border-surface-container-highest bg-surface hover:bg-surface-container-low text-primary transition-colors items-center gap-1.5 rounded cursor-pointer"
            title="Copy email address"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>{copied ? 'Copied' : 'Email'}</span>
          </button>

          <a
            className="px-3 py-1 text-[11px] font-mono tracking-[0.06em] bg-primary-container text-surface hover:bg-secondary transition-colors duration-150 hidden sm:flex items-center gap-1.5 rounded"
            href="/Kavindu_Bimsara_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Resume CV</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-surface-container-low border-t border-surface-container-highest px-4 py-4 space-y-1">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-[12px] font-mono rounded transition-colors ${
                active === href
                  ? 'text-primary bg-surface border border-surface-container-highest font-medium'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface'
              }`}
            >
              {label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-surface-container flex items-center gap-2">
            <a
              href="https://github.com/kbimsara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 border border-surface-container-highest bg-surface rounded text-[11px] font-mono text-primary"
            >
              GitHub
            </a>
            <a
              href="/Kavindu_Bimsara_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 bg-primary-container text-surface rounded text-[11px] font-mono"
            >
              Resume CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

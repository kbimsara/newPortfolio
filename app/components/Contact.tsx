'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kavidubim2gamaethige@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const scope = (form.elements.namedItem('scope') as HTMLSelectElement).value.trim();
    const rawMessage = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    const message = scope ? `[Scope: ${scope}]\n\n${rawMessage}` : rawMessage;

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="pb-12" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Verified Identity & Direct Coordinates (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-[0.06em] text-secondary mb-1 uppercase">
              09 // COMMUNICATIONS DISPATCH
            </div>
            <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight">
              Initiate Engineering Dialogue
            </h2>
          </div>

          <p className="text-[15px] leading-[1.625rem] text-on-surface-variant">
            Available for full-time Software Engineering &amp; DevOps roles, internships, cloud infrastructure collaborations, and full-stack product builds.
          </p>

          {/* Direct Contact Card */}
          <div className="p-4 bg-surface-container-low border border-surface-container-highest rounded font-mono space-y-3">
            <div className="text-[11px] text-secondary font-semibold flex items-center justify-between">
              <span>DIRECT EMAIL COORDINATE</span>
              <span className="text-emerald-700">ACTIVE</span>
            </div>
            <div className="bg-surface p-2.5 border border-surface-container text-xs text-primary break-all select-all">
              kavidubim2gamaethige@gmail.com
            </div>
            <div className="text-[11px] text-outline flex items-center justify-between">
              <span>RESPONSE WINDOW: INBOX MONITORED</span>
              <button
                type="button"
                onClick={copyEmail}
                className="text-primary hover:text-secondary underline cursor-pointer"
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-surface-container-highest pb-2">
              <span className="text-outline text-[11px]">LOCATION</span>
              <span className="text-primary font-medium">Kalutara, Sri Lanka (Remote Ready)</span>
            </div>
            <div className="flex items-center justify-between border-b border-surface-container-highest pb-2">
              <span className="text-outline text-[11px]">GITHUB</span>
              <a
                className="text-primary hover:text-secondary font-medium"
                href="https://github.com/kbimsara"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/kbimsara
              </a>
            </div>
            <div className="flex items-center justify-between border-b border-surface-container-highest pb-2">
              <span className="text-outline text-[11px]">LINKEDIN</span>
              <a
                className="text-primary hover:text-secondary font-medium"
                href="https://linkedin.com/in/kavidu-bimsara"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kavidu-bimsara
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-outline text-[11px]">RESUME</span>
              <a
                className="text-secondary hover:text-primary font-medium underline underline-offset-4"
                href="/Kavindu%20Bimsara%20CV%20-%20DevOps%20%20acc.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kavindu Bimsara CV - DevOps.pdf
              </a>
            </div>
          </div>
        </div>

        {/* Right: Interactive Dispatch Form (7 cols) */}
        <div className="lg:col-span-7 bg-surface-container-low border border-surface-container-highest p-6 sm:p-8 rounded-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between border-b border-surface-container pb-3 mb-2">
              <span className="font-mono text-[11px] text-primary uppercase font-semibold">
                DIRECT MESSAGE DISPATCH FORM
              </span>
              <span className="font-mono text-[11px] text-outline">API // MONGODB</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[11px] text-on-surface-variant mb-1.5 uppercase"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-surface border border-surface-container-highest focus:border-secondary focus:ring-0 text-primary font-mono text-xs px-3.5 py-2.5 rounded transition-colors placeholder:text-outline outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[11px] text-on-surface-variant mb-1.5 uppercase"
                >
                  Contact Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-surface border border-surface-container-highest focus:border-secondary focus:ring-0 text-primary font-mono text-xs px-3.5 py-2.5 rounded transition-colors placeholder:text-outline outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-scope"
                className="block font-mono text-[11px] text-on-surface-variant mb-1.5 uppercase"
              >
                Inquiry Scope
              </label>
              <select
                id="contact-scope"
                name="scope"
                className="w-full bg-surface border border-surface-container-highest focus:border-secondary focus:ring-0 text-primary font-mono text-xs px-3.5 py-2.5 rounded transition-colors outline-none"
              >
                <option value="Full-Time Role / Engineering Opportunity">
                  Full-Time Role / Engineering Opportunity
                </option>
                <option value="DevOps & Cloud Infrastructure (GCP / AWS / Terraform)">
                  DevOps &amp; Cloud Infrastructure (GCP / AWS / Terraform)
                </option>
                <option value="Full-Stack Application Development (Next.js / Node.js)">
                  Full-Stack Application Development (Next.js / Node.js)
                </option>
                <option value="Freelance / Open-Source Collaboration">
                  Freelance / Open-Source Collaboration
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block font-mono text-[11px] text-on-surface-variant mb-1.5 uppercase"
              >
                Message / Project Summary
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="What's on your mind? Share role details, project scope, or a quick hello..."
                className="w-full bg-surface border border-surface-container-highest focus:border-secondary focus:ring-0 text-primary font-mono text-xs px-3.5 py-2.5 rounded transition-colors placeholder:text-outline outline-none resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] font-mono text-outline">
                DISPATCH ENDPOINT: /api/messages
              </span>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 bg-primary-container text-surface hover:bg-secondary disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150 font-mono text-xs font-semibold rounded flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                <span>{status === 'sending' ? 'Transmitting…' : 'Transmit Message'}</span>
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-3 bg-surface border border-emerald-600 font-mono text-xs text-emerald-800 rounded">
              ✓ MESSAGE TRANSMITTED: Stored in portfolio inbox. I&apos;ll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-3 bg-surface border border-error font-mono text-xs text-error rounded">
              ✕ TRANSMISSION FAILED: Unable to reach the message service right now. You can reach me directly at kavidubim2gamaethige@gmail.com.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

const contactInfo = [
  {
    label: 'Email',
    value: 'kavidubim2gamaethige@gmail.com',
    href: 'mailto:kavidubim2gamaethige@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+94 71 49 85 833',
    href: 'tel:+94714985833',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/kbimsara',
    href: 'https://github.com/kbimsara',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kavidu-bimsara',
    href: 'https://linkedin.com/in/kavidu-bimsara',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="text-4xl font-bold text-white mb-6 section-heading">Contact</h2>

            <p className="text-slate-400 leading-relaxed mt-10 mb-10">
              I'm currently open to new opportunities — whether it's a full-time role, internship, or an interesting project to collaborate on.
              My inbox is always open. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                    <div className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors truncate">
                      {value}
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — message form */}
          <div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-white text-lg font-semibold mb-6">Send a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                  const subject = `Portfolio Contact from ${name}`;
                  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
                  window.location.href = `mailto:kavidubim2gamaethige@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="What's on your mind?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/5 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

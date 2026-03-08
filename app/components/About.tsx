'use client';

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '2', label: 'Internships' },
  { value: '4+', label: 'Certifications' },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">About Me</p>
            <h2 className="text-4xl font-bold text-white mb-6 section-heading">
              Who I Am
            </h2>
            <div className="space-y-4 mt-10 text-slate-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Software Engineering undergraduate</span> at
                SLTC Research University with hands-on experience in full-stack development and
                cloud infrastructure.
              </p>
              <p>
                Currently working as an <span className="text-blue-400 font-medium">Intern DevOps Engineer</span> at
                Behaviol Pty Ltd, where I containerize applications, provision GCP infrastructure with
                Terraform, and automate CI/CD pipelines.
              </p>
              <p>
                Passionate about bridging software engineering and DevOps to deliver reliable,
                production-ready systems. I love building scalable web apps, exploring cloud-native
                architectures, and automating everything I can.
              </p>
              <p>
                Based in <span className="text-white">Kalutara, Sri Lanka</span> — open to remote opportunities worldwide.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/kbimsara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kavidu-bimsara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="glass rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300 group"

              >
                <div className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  {value}
                </div>
                <div className="text-slate-400 text-sm mt-2">{label}</div>
              </div>
            ))}

            {/* Location card */}
            <div className="col-span-2 glass rounded-2xl p-6 flex items-center gap-4 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">Kalutara, Sri Lanka</div>
                <div className="text-slate-400 text-sm">Open to remote worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

const education = [
  {
    degree: 'B.Sc. Hons in Software Engineering',
    institution: 'SLTC Research University, Padukka',
    period: '2022 – Present',
    color: 'blue',
    icon: '🎓',
    current: true,
  },
  {
    degree: 'Certificate in DevOps Master Program',
    institution: 'NetXperts (PVT) LTD',
    period: '2025',
    color: 'cyan',
    icon: '☁',
    current: false,
  },
  {
    degree: 'Software Developer NVQ Level 4',
    institution: 'Vocational Training Authority, Kalutara South',
    period: '2021 – 2022',
    color: 'purple',
    icon: '💻',
    current: false,
  },
  {
    degree: 'Certificate in Applied IT',
    institution: 'SLT Moratuwa',
    period: '2018',
    color: 'green',
    icon: '📱',
    current: false,
  },
];

const extras = [
  {
    title: 'Developer – CodeMania Hackathon v4',
    org: 'SLTC Research University',
    year: '2023',
    icon: '⚡',
  },
];

const dotColors: Record<string, string> = {
  blue: 'bg-blue-500 border-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.7)]',
  cyan: 'bg-cyan-500 border-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.7)]',
  purple: 'bg-purple-500 border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.7)]',
  green: 'bg-green-500 border-green-300 shadow-[0_0_10px_rgba(34,197,94,0.7)]',
};

const textColors: Record<string, string> = {
  blue: 'text-blue-400',
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
};

export default function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Education timeline */}
          <div className="md:col-span-2">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Background</p>
            <h2 className="text-4xl font-bold text-white mb-16 section-heading">Education</h2>

            <div className="relative">
              <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-10">
                    <div className={`absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 ${dotColors[edu.color]}`} />

                    <div className="glass rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                              {edu.degree}
                            </h3>
                            {edu.current && (
                              <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 text-green-400 text-xs rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <p className={`text-sm mt-1 ${textColors[edu.color]}`}>{edu.institution}</p>
                        </div>
                        <span className="text-slate-500 text-sm whitespace-nowrap">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional */}
          <div>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">More</p>
            <h2 className="text-4xl font-bold text-white mb-16 section-heading">Additional</h2>

            <div className="space-y-4">
              {extras.map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <h3 className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-blue-400 text-xs mt-1">{item.org}</p>
                      <p className="text-slate-500 text-xs mt-1">{item.year}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Availability card */}
              <div className="glass rounded-xl p-5 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Available</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Open to full-time roles, internships, and exciting freelance opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

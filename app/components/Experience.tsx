'use client';

const experiences = [
  {
    title: 'Intern DevOps Engineer',
    company: 'Behaviol Pty Ltd',
    period: 'Nov 2025 – Present',
    type: 'Current',
    color: 'blue',
    bullets: [
      'Containerized applications using Docker and managed deployments on Kubernetes (GCP)',
      'Provisioned cloud infrastructure on GCP using Terraform following IaC best practices',
      'Built and maintained CI/CD pipelines with GitHub Actions and Jenkins',
      'Wrote Bash scripts to automate operational tasks and reduce manual effort',
      'Configured Grafana and Prometheus dashboards to monitor system health and metrics',
    ],
    tags: ['Docker', 'Kubernetes', 'GCP', 'Terraform', 'GitHub Actions', 'Jenkins', 'Grafana', 'Prometheus'],
  },
  {
    title: 'Software Developer Trainee',
    company: 'Mahapola Ports And Maritime Academy',
    period: 'Jul 2022 – Jan 2023',
    type: 'Internship',
    color: 'cyan',
    bullets: [
      'Designed and managed SQL-based relational databases',
      'Developed responsive UI components using Bootstrap CSS and dynamic tables with Ajax',
      'Implemented client-side user validation using JavaScript',
      'Built reusable server-side components with PHP',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Ajax', 'Bootstrap'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Career</p>
        <h2 className="text-4xl font-bold text-white mb-16 section-heading">Experience</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10">
                {/* Dot */}
                <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  exp.color === 'blue'
                    ? 'bg-blue-500 border-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                    : 'bg-cyan-500 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                }`} />

                <div className="glass rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {exp.title}
                        </h3>
                        {exp.type === 'Current' && (
                          <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 text-green-400 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className={`font-medium mt-1 ${exp.color === 'blue' ? 'text-blue-400' : 'text-cyan-400'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm whitespace-nowrap">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.color === 'blue' ? 'bg-blue-400' : 'bg-cyan-400'}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

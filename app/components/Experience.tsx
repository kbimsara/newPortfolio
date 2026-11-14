'use client';

const experiences = [
  {
    title: 'Associate DevOps Engineer',
    company: 'Behaviol Pty Ltd',
    period: 'May 2026 - Present',
    type: 'CURRENT',
    summary:
      'Continuing ownership of application containerization, GCP cloud infrastructure provisioning with Terraform, and CI/CD automation.',
    bullets: [],
    tags: ['Docker', 'Kubernetes', 'GCP', 'Terraform', 'CI/CD'],
  },
  {
    title: 'Intern DevOps Engineer',
    company: 'Behaviol Pty Ltd',
    period: 'Nov 2025 - May 2026',
    type: 'INTERNSHIP',
    summary:
      'Containerized workloads, provisioned GCP infrastructure via Terraform, built CI/CD pipelines, and configured system observability dashboards.',
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
    period: 'Jul 2022 - Jan 2023',
    type: 'INTERNSHIP',
    summary:
      'Designed SQL relational databases and built responsive full-stack web components with PHP, JavaScript, Ajax, and Bootstrap CSS.',
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
    <section className="border-b border-surface-container-highest pb-12" id="experience">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-[0.06em] text-secondary mb-1 uppercase">
            07 // CAREER TIMELINE
          </div>
          <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight">
            Professional Experience
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-[0.06em] text-outline uppercase">
          PRODUCTION DEVOPS &amp; SOFTWARE TRAINEESHIPS
        </div>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div
            key={`${exp.title}-${idx}`}
            className="p-6 bg-surface-container-low border border-surface-container-highest rounded-lg hover:border-outline transition-colors space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-surface-container pb-3">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-lg font-medium text-primary">{exp.title}</h3>
                  {exp.type === 'CURRENT' && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono bg-surface border border-emerald-600/40 text-emerald-700 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      CURRENT
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-secondary mt-1">
                  {exp.company} • {exp.type}
                </p>
              </div>
              <span className="font-mono text-xs text-outline whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <p className="text-[15px] leading-[1.625rem] text-on-surface-variant">
              {exp.summary}
            </p>

            {exp.bullets.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                {exp.bullets.map((b, j) => (
                  <div key={j} className="border-l-2 border-secondary pl-3 text-[13px] text-on-surface">
                    {b}
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono bg-surface border border-surface-container-highest text-on-surface-variant rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

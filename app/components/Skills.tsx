'use client';

import { useState } from 'react';

type CategoryKey = 'all' | 'infra' | 'app' | 'languages' | 'data';

interface StackGroup {
  id: string;
  index: string;
  category: Exclude<CategoryKey, 'all'>;
  groupLabel: string;
  title: string;
  description: string;
  skills: string[];
}

const STACK_GROUPS: StackGroup[] = [
  {
    id: 'devops-cloud',
    index: '01',
    category: 'infra',
    groupLabel: 'INFRASTRUCTURE & CLOUD',
    title: 'DevOps & Cloud Platforms',
    description: 'Containerization, Kubernetes orchestration on GCP, and Terraform IaC on GCP & AWS.',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'GCP', 'AWS'],
  },
  {
    id: 'cicd',
    index: '02',
    category: 'infra',
    groupLabel: 'DELIVERY AUTOMATION',
    title: 'CI / CD Pipelines',
    description: 'Automated testing, container builds, and cloud deployment workflows.',
    skills: ['GitHub Actions', 'Jenkins'],
  },
  {
    id: 'monitoring',
    index: '03',
    category: 'infra',
    groupLabel: 'OBSERVABILITY',
    title: 'Monitoring & Metrics',
    description: 'System health dashboards, metric collection, and uptime visibility.',
    skills: ['Grafana', 'Prometheus'],
  },
  {
    id: 'languages',
    index: '04',
    category: 'languages',
    groupLabel: 'CORE LANGUAGES',
    title: 'Programming Languages',
    description: 'Type-safe web development, backend scripting, systems programming, and mobile apps.',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'Dart', 'C'],
  },
  {
    id: 'frontend',
    index: '05',
    category: 'app',
    groupLabel: 'CLIENT INTERFACES',
    title: 'Frontend & Mobile',
    description: 'SSR web apps, interactive 3D scenes, cross-platform mobile apps, and utility CSS.',
    skills: ['React.js', 'Next.js', 'React Native', 'Flutter', 'Three.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'backend',
    index: '06',
    category: 'app',
    groupLabel: 'SERVER & APIS',
    title: 'Backend Frameworks',
    description: 'REST APIs, full-stack MVC backends, and Python/Node.js service layers.',
    skills: ['Node.js', 'Express.js', 'Laravel', 'Django'],
  },
  {
    id: 'databases',
    index: '07',
    category: 'data',
    groupLabel: 'STATE & PERSISTENCE',
    title: 'Databases',
    description: 'Relational schema design and document storage for web and cloud apps.',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
  },
  {
    id: 'tools',
    index: '08',
    category: 'data',
    groupLabel: 'WORKFLOW & HARDWARE',
    title: 'Developer Tools',
    description: 'Version control, API verification, cloud BaaS, and embedded prototyping.',
    skills: ['Git', 'Postman', 'Firebase', 'Arduino'],
  },
];

const FILTERS: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'ALL (8)' },
  { key: 'infra', label: 'DEVOPS & CLOUD' },
  { key: 'app', label: 'WEB & BACKEND' },
  { key: 'languages', label: 'LANGUAGES' },
  { key: 'data', label: 'DATA & TOOLS' },
];

export default function Skills() {
  const [filter, setFilter] = useState<CategoryKey>('all');

  const visibleGroups =
    filter === 'all' ? STACK_GROUPS : STACK_GROUPS.filter((g) => g.category === filter);

  return (
    <section className="border-b border-surface-container-highest pb-12" id="stack">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-[0.06em] text-secondary mb-1 uppercase">
            04 // PRODUCTION ARSENAL
          </div>
          <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight">
            Technical Stack Matrix
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.06em]">
          {FILTERS.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-primary text-surface'
                    : 'bg-surface border border-surface-container-highest hover:bg-surface-container-low text-primary'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleGroups.map((group) => (
          <div
            key={group.id}
            className="p-4 bg-surface-container-low border border-surface-container-highest rounded hover:border-outline transition-colors flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="font-mono text-[11px] text-outline mb-1">
                {group.index} / {group.groupLabel}
              </div>
              <div className="font-mono text-primary font-semibold text-sm">
                {group.title}
              </div>
              <p className="text-on-surface-variant text-xs mt-1.5 leading-relaxed">
                {group.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-surface-container">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 bg-surface border border-surface-container-highest rounded text-[11px] font-mono text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

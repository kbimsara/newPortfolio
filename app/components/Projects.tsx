'use client';

import { useState } from 'react';

const GH = 'https://github.com/kbimsara';

type Project = {
  title: string;
  year: string;
  type: string;
  description: string;
  tech: string[];
  featured: boolean;
  github: string;
  repoSlug: string;
  link?: string;
  stars: number | null;
  metrics?: { label: string; value: string }[];
  specTitle?: string;
  specBody?: string;
};

const projects: Project[] = [
  // ── FEATURED DOSSIERS ─────────────────────────────────────
  {
    title: 'JobScrapper - Automated Job Board Aggregator',
    year: '2026',
    type: 'FULL-STACK',
    description:
      'A full-stack Next.js web application that aggregates job listings from LinkedIn and other top job boards. Features an automated backend service deployed on Oracle Cloud that continuously scrapes and refreshes data every 15 minutes, with a modern frontend hosted on Vercel.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Oracle Cloud', 'Web Scraping', 'MongoDB'],
    featured: true,
    github: `${GH}/JobScrapper`,
    repoSlug: 'kbimsara/JobScrapper',
    link: 'https://job-scrapper-tau-nine.vercel.app/',
    stars: null,
    metrics: [
      { label: 'REFRESH CADENCE', value: 'Every 15 Minutes' },
      { label: 'FRONTEND HOST', value: 'Vercel (Next.js)' },
      { label: 'SCRAPER RUNTIME', value: 'Oracle Cloud + MongoDB' },
    ],
    specTitle: '// STACK OVERVIEW: JOBSCRAPPER SPLIT RUNTIME',
    specBody: `frontend:
  framework: Next.js + React + Tailwind CSS
  host: Vercel
backend_worker:
  host: Oracle Cloud
  schedule: "*/15 * * * *" (15-minute scraping refresh)
  sources: LinkedIn & major job boards
datastore: MongoDB`,
  },
  {
    title: 'Z-Score University Finder - ML Course Recommender',
    year: '2025',
    type: 'ML / AI PROJECT',
    description:
      'AI-powered web app that recommends Sri Lankan universities and courses based on A/L Z-scores, academic stream, and district. Uses LightGBM for personalised rankings with real-time searchable dropdowns.',
    tech: ['Next.js', 'FastAPI', 'Python', 'LightGBM', 'scikit-learn', 'Tailwind'],
    featured: true,
    github: `${GH}/Z-ScoreUniFinder`,
    repoSlug: 'kbimsara/Z-ScoreUniFinder',
    stars: 3,
    metrics: [
      { label: 'ML ENGINE', value: 'LightGBM + scikit-learn' },
      { label: 'API SERVICE', value: 'Python FastAPI' },
      { label: 'GITHUB STARS', value: '3 Stars' },
    ],
    specTitle: '// STACK OVERVIEW: ML RANKING PIPELINE',
    specBody: `client:
  framework: Next.js + Tailwind CSS
  features: Real-time searchable stream & district filters
inference_api:
  framework: FastAPI (Python)
  model: LightGBM + scikit-learn
  inputs: [z_score, academic_stream, district]`,
  },
  {
    title: 'Todo App Cloud Infrastructure - Terraform & GCP CI/CD',
    year: '2026',
    type: 'DEVOPS PROJECT',
    description:
      'Full-stack Todo app deployed on GCP using modern DevOps practices. Infrastructure provisioned with Terraform, app containerised with Docker, and deployments fully automated via GitHub Actions CI/CD pipelines.',
    tech: ['Terraform', 'GCP', 'Docker', 'GitHub Actions', 'Next.js', 'MongoDB'],
    featured: true,
    github: `${GH}/todo_infrastructure`,
    repoSlug: 'kbimsara/todo_infrastructure',
    stars: null,
    metrics: [
      { label: 'CLOUD PROVIDER', value: 'Google Cloud (GCP)' },
      { label: 'PROVISIONING', value: 'Terraform IaC' },
      { label: 'DELIVERY', value: 'Docker + GitHub Actions' },
    ],
    specTitle: '// INFRASTRUCTURE SPECIFICATION: GCP + TERRAFORM',
    specBody: `provider: Google Cloud Platform (GCP)
iac_tool: Terraform
containerization: Docker
ci_cd: GitHub Actions automated build & deploy
application:
  frontend: Next.js
  database: MongoDB`,
  },
  {
    title: 'TripGo – AI Trip Planner with Geospatial Guardrails',
    year: '2025',
    type: 'AI / FULL-STACK',
    description:
      'AI-powered travel itinerary generator that creates day-by-day trip plans with GPS-validated locations, real road routing, and an interactive map. Prevents AI hallucination via bounding-box filtering and haversine checks. Supports Claude, OpenRouter, and Ollama.',
    tech: ['Next.js', 'TypeScript', 'Claude AI', 'MongoDB', 'Leaflet', 'NextAuth', 'Tailwind'],
    featured: true,
    github: `${GH}/tripGo`,
    repoSlug: 'kbimsara/tripGo',
    stars: null,
    metrics: [
      { label: 'LLM PROVIDERS', value: 'Claude / OpenRouter / Ollama' },
      { label: 'ANTI-HALLUCINATION', value: 'Bounding-Box + Haversine' },
      { label: 'MAPPING & AUTH', value: 'Leaflet + NextAuth' },
    ],
    specTitle: '// SYSTEM DESIGN: DETERMINISTIC GEO-VALIDATION',
    specBody: `app: Next.js + TypeScript + NextAuth + MongoDB
mapping: Leaflet interactive map + real road routing
llm_backends: [Claude, OpenRouter, Ollama]
validation:
  - GPS coordinate verification
  - Bounding-box spatial filtering
  - Haversine distance checks`,
  },
  // ── ADDITIONAL REPOSITORIES ───────────────────────────────
  {
    title: 'LMS Cloud Infrastructure (AWS)',
    year: '2024',
    type: 'DEVOPS PROJECT',
    description:
      'AWS-based Terraform IaC for a scalable library management system - VPC, EC2 auto-scaling, RDS MySQL, ALB, S3, Lambda, CloudWatch, GitHub Actions CI/CD.',
    tech: ['Terraform', 'AWS', 'EC2', 'RDS', 'Lambda', 'S3', 'GitHub Actions'],
    featured: false,
    github: `${GH}/lms-infrastructure`,
    repoSlug: 'kbimsara/lms-infrastructure',
    stars: 1,
  },
  {
    title: 'GlobalBooks Microservices ESB',
    year: '2024',
    type: 'MICROSERVICES',
    description:
      'Enterprise Service Bus orchestrating book purchase lifecycles across order, payment, and shipping microservices using RabbitMQ, BPEL workflows, and OAuth2/JWT.',
    tech: ['Node.js', 'Java Spring Boot', 'RabbitMQ', 'MongoDB', 'Docker', 'Swagger'],
    featured: false,
    github: `${GH}/MicroServices-CourceWork`,
    repoSlug: 'kbimsara/MicroServices-CourceWork',
    stars: null,
  },
  {
    title: 'MovieHub',
    year: '2025',
    type: 'FULL-STACK',
    description:
      'Full-stack movie platform with a TypeScript frontend and C# .NET backend services, orchestrated via Docker Compose.',
    tech: ['TypeScript', 'C#', '.NET', 'Docker Compose', 'Postman'],
    featured: false,
    github: `${GH}/movieHub`,
    repoSlug: 'kbimsara/movieHub',
    stars: null,
  },
  {
    title: 'QReturn – Lost & Found Web App',
    year: '2025',
    type: 'RESEARCH PROJECT',
    description:
      'Addresses loss of items, pets, and missing persons in Sri Lanka using QR code tagging, map-based notifications, and privacy-focused crowdsourced communication.',
    tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'QR Code'],
    featured: false,
    github: `${GH}/Chat-Qreturn`,
    repoSlug: 'kbimsara/Chat-Qreturn',
    stars: null,
  },
  {
    title: 'To-Do App (MERN + Docker)',
    year: '2024',
    type: 'WEB PROJECT',
    description:
      'Full-stack task management app with REST API, containerised with Docker for local development and deployment.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Docker'],
    featured: false,
    github: `${GH}/Docker-Dev`,
    repoSlug: 'kbimsara/Docker-Dev',
    stars: 1,
  },
  {
    title: 'OnCloudOTP – Mail Verification SaaS',
    year: '2023',
    type: 'SAAS PROJECT',
    description:
      'API-driven system allowing developers to manage users and verify email validity using a custom cURL API integrated with Google Cloud.',
    tech: ['PHP', 'MySQL', 'cURL', 'JSON', 'Bootstrap', 'Google Cloud'],
    featured: false,
    github: `${GH}/OnCloudOTP-SaaS`,
    repoSlug: 'kbimsara/OnCloudOTP-SaaS',
    stars: 1,
  },
  {
    title: 'Online Chat Application',
    year: '2024',
    type: 'WEB PROJECT',
    description:
      'Real-time PHP chat app with contact management and dynamic Ajax updates.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'Ajax', 'Bootstrap'],
    featured: false,
    github: `${GH}/ChatWebApplication-php`,
    repoSlug: 'kbimsara/ChatWebApplication-php',
    stars: 1,
  },
];

export default function Projects() {
  const [openSpecs, setOpenSpecs] = useState<Record<string, boolean>>({});
  const featured = projects.filter((p) => p.featured);
  const grid = projects.filter((p) => !p.featured);

  const toggleSpec = (title: string) => {
    setOpenSpecs((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section className="border-b border-surface-container-highest pb-12" id="monographs">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-[0.06em] text-secondary mb-1 uppercase">
            05 // ENGINEERING PROJECTS
          </div>
          <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight">
            Featured Project Dossiers
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-[0.06em] text-outline uppercase">
          PRODUCTION APPS, CLOUD IAC &amp; AI SYSTEMS
        </div>
      </div>

      {/* Featured Dossiers */}
      <div className="space-y-6">
        {featured.map((p, idx) => {
          const isOpen = !!openSpecs[p.title];
          return (
            <article
              key={p.title}
              className="bg-surface-container-low border border-surface-container-highest rounded-lg p-6 sm:p-8 transition-colors hover:border-outline"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-container pb-4 mb-5 text-[11px] font-mono tracking-[0.06em]">
                <span className="text-secondary font-semibold">
                  {`DOSSIER #0${idx + 1} // ${p.type}`}
                </span>
                <div className="flex items-center gap-3 text-outline">
                  {p.stars !== null && (
                    <span className="text-primary font-medium">★ {p.stars} STARS</span>
                  )}
                  <span>YEAR: {p.year}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                  <h3 className="text-xl font-medium text-primary tracking-[-0.01em] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-[1.625rem] text-on-surface-variant mb-4">
                    {p.description}
                  </p>

                  {p.metrics && (
                    <div className="flex flex-wrap gap-6 font-mono text-[13px] pt-2">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="border-l-2 border-primary pl-3">
                          <span className="text-outline text-[10px] block">{m.label}</span>
                          <span className="text-primary font-semibold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-surface-container pt-4 lg:pt-0 lg:pl-6 font-mono">
                  <div>
                    <span className="text-[11px] text-outline uppercase block mb-2">
                      TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] tracking-[0.04em] bg-surface border border-surface-container-highest rounded text-on-surface-variant"
                        >
                          {t.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => toggleSpec(p.title)}
                      className="w-full py-2 bg-surface hover:bg-surface-bright border border-surface-container-highest text-primary text-xs rounded text-center transition-colors cursor-pointer"
                    >
                      {isOpen ? '[-] Hide Stack Spec' : '[+] View Stack Spec'}
                    </button>

                    <div className="flex items-center justify-between gap-2 pt-1 text-[11px]">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary underline decoration-secondary underline-offset-4"
                      >
                        GitHub Repo →
                      </a>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-primary underline decoration-secondary underline-offset-4"
                        >
                          Live App →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {isOpen && p.specBody && (
                <div className="mt-6 pt-4 border-t border-surface-container-highest font-mono text-xs bg-surface p-4 rounded">
                  <div className="text-secondary text-[11px] mb-2">{p.specTitle}</div>
                  <pre className="text-on-surface-variant overflow-x-auto leading-relaxed custom-scrollbar">
                    {p.specBody}
                  </pre>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Additional Projects Archive Grid */}
      <div className="mt-10 space-y-4">
        <div className="font-mono text-[11px] tracking-[0.06em] text-outline uppercase">
          {`// ADDITIONAL REPOSITORIES & ACADEMIC SYSTEMS (${grid.length})`}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {grid.map((p) => (
            <article
              key={p.title}
              className="p-5 bg-surface-container-low border border-surface-container-highest rounded hover:border-outline transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 font-mono text-[11px]">
                  <span className="text-secondary font-medium">{p.type}</span>
                  <div className="flex items-center gap-2 text-outline">
                    {p.stars !== null && <span className="text-primary">★ {p.stars}</span>}
                    <span>{p.year}</span>
                  </div>
                </div>

                <h3 className="text-[16px] font-medium text-primary leading-snug">
                  {p.title}
                </h3>

                <p className="text-[13px] leading-[1.375rem] text-on-surface-variant">
                  {p.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-surface-container">
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 text-[10px] font-mono bg-surface text-on-surface-variant border border-surface-container-highest rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-outline truncate pr-2">{p.repoSlug}</span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary underline decoration-secondary underline-offset-4 whitespace-nowrap"
                  >
                    Source →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-4">
          <a
            href={`${GH}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-surface-container-low border border-surface-container-highest hover:border-outline rounded font-mono text-[12px] text-primary hover:text-secondary transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span>See all 55 repos on GitHub →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

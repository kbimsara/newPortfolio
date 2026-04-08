'use client';

const GH = 'https://github.com/kbimsara';

const projects = [
  // ── FEATURED ──────────────────────────────────────────────
  {
    title: 'Z-Score University Finder',
    year: '2025',
    type: 'ML / AI Project',
    typeColor: 'pink',
    description:
      'AI-powered web app that recommends Sri Lankan universities and courses based on A/L Z-scores, academic stream, and district. Uses LightGBM for personalised rankings with real-time searchable dropdowns.',
    tech: ['Next.js', 'FastAPI', 'Python', 'LightGBM', 'scikit-learn', 'Tailwind'],
    featured: true,
    icon: '🤖',
    github: `${GH}/Z-ScoreUniFinder`,
    stars: 3,
  },
  {
    title: 'Todo App Cloud Infrastructure',
    year: '2026',
    type: 'DevOps Project',
    typeColor: 'cyan',
    description:
      'Full-stack Todo app deployed on GCP using modern DevOps practices. Infrastructure provisioned with Terraform, app containerised with Docker, and deployments fully automated via GitHub Actions CI/CD pipelines.',
    tech: ['Terraform', 'GCP', 'Docker', 'GitHub Actions', 'Next.js', 'MongoDB'],
    featured: true,
    icon: '☁',
    github: `${GH}/todo_infrastructure`,
    stars: null,
  },
  {
    title: 'TripGo – AI Trip Planner',
    year: '2025',
    type: 'AI / Full-Stack',
    typeColor: 'pink',
    description:
      'AI-powered travel itinerary generator that creates day-by-day trip plans with GPS-validated locations, real road routing, and an interactive map. Prevents AI hallucination via bounding-box filtering and haversine checks. Supports Claude, OpenRouter, and Ollama.',
    tech: ['Next.js', 'TypeScript', 'Claude AI', 'MongoDB', 'Leaflet', 'NextAuth', 'Tailwind'],
    featured: true,
    icon: '✈',
    github: `${GH}/tripGo`,
    stars: null,
  },
  // ── GRID ──────────────────────────────────────────────────
  {
    title: 'LMS Cloud Infrastructure (AWS)',
    year: '2024',
    type: 'DevOps Project',
    typeColor: 'cyan',
    description:
      'AWS-based Terraform IaC for a scalable library management system — VPC, EC2 auto-scaling, RDS MySQL, ALB, S3, Lambda, CloudWatch, GitHub Actions CI/CD.',
    tech: ['Terraform', 'AWS', 'EC2', 'RDS', 'Lambda', 'S3', 'GitHub Actions'],
    featured: false,
    icon: '🏗',
    github: `${GH}/lms-infrastructure`,
    stars: 1,
  },
  {
    title: 'GlobalBooks Microservices ESB',
    year: '2024',
    type: 'Microservices',
    typeColor: 'orange',
    description:
      'Enterprise Service Bus orchestrating book purchase lifecycles across order, payment, and shipping microservices using RabbitMQ, BPEL workflows, and OAuth2/JWT.',
    tech: ['Node.js', 'Java Spring Boot', 'RabbitMQ', 'MongoDB', 'Docker', 'Swagger'],
    featured: false,
    icon: '⚙',
    github: `${GH}/MicroServices-CourceWork`,
    stars: null,
  },
  {
    title: 'MovieHub',
    year: '2025',
    type: 'Full-Stack',
    typeColor: 'purple',
    description:
      'Full-stack movie platform with a TypeScript frontend and C# .NET backend services, orchestrated via Docker Compose.',
    tech: ['TypeScript', 'C#', '.NET', 'Docker Compose', 'Postman'],
    featured: false,
    icon: '🎬',
    github: `${GH}/movieHub`,
    stars: null,
  },
  {
    title: 'QReturn – Lost & Found Web App',
    year: '2025',
    type: 'Research Project',
    typeColor: 'blue',
    description:
      'Addresses loss of items, pets, and missing persons in Sri Lanka using QR code tagging, map-based notifications, and privacy-focused crowdsourced communication.',
    tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'QR Code'],
    featured: false,
    icon: '🔍',
    github: `${GH}/Chat-Qreturn`,
    stars: null,
  },
  {
    title: 'To-Do App (MERN + Docker)',
    year: '2024',
    type: 'Web Project',
    typeColor: 'green',
    description:
      'Full-stack task management app with REST API, containerised with Docker for local development and deployment.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Docker'],
    featured: false,
    icon: '✓',
    github: `${GH}/Docker-Dev`,
    stars: 1,
  },
  {
    title: 'OnCloudOTP – Mail Verification SaaS',
    year: '2023',
    type: 'SaaS Project',
    typeColor: 'yellow',
    description:
      'API-driven system allowing developers to manage users and verify email validity using a custom cURL API integrated with Google Cloud.',
    tech: ['PHP', 'MySQL', 'cURL', 'JSON', 'Bootstrap', 'Google Cloud'],
    featured: false,
    icon: '✉',
    github: `${GH}/OnCloudOTP-SaaS`,
    stars: 1,
  },
  {
    title: 'Online Chat Application',
    year: '2024',
    type: 'Web Project',
    typeColor: 'purple',
    description:
      'Real-time PHP chat app with contact management and dynamic Ajax updates.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'Ajax', 'Bootstrap'],
    featured: false,
    icon: '💬',
    github: `${GH}/ChatWebApplication-php`,
    stars: 1,
  },
];

const typeColors: Record<string, string> = {
  cyan:   'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
  blue:   'bg-blue-500/20 text-blue-400 border-blue-500/40',
  green:  'bg-green-500/20 text-green-400 border-green-500/40',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
  yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
  pink:   'bg-pink-500/20 text-pink-400 border-pink-500/40',
};

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const grid = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Work</p>
        <h2 className="text-4xl font-bold text-white mb-4 section-heading">Projects</h2>
        <p className="text-slate-400 mt-10 mb-12">Things I&apos;ve built across web, cloud, DevOps and AI.</p>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((p) => (
            <div
              key={p.title}
              className="glass rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                  {p.icon}
                </div>
                <div className="flex items-center gap-2">
                  {p.stars && (
                    <span className="flex items-center gap-1 text-yellow-400 text-xs font-medium">
                      <StarIcon />{p.stars}
                    </span>
                  )}
                  <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${typeColors[p.typeColor]}`}>
                    {p.type}
                  </span>
                  <span className="text-slate-600 text-xs">{p.year}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>

              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-xs flex-shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHubIcon />
                  <span>View</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {grid.map((p) => (
            <div
              key={p.title}
              className="glass rounded-2xl p-5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{p.icon}</span>
                  {p.stars && (
                    <span className="flex items-center gap-1 text-yellow-400 text-xs">
                      <StarIcon />{p.stars}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-xs rounded-full border ${typeColors[p.typeColor]}`}>
                    {p.type}
                  </span>
                  <span className="text-slate-600 text-xs">{p.year}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                {p.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">{p.description}</p>

              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge text-[11px] px-2 py-0.5">{t}</span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-600 hover:text-white transition-colors text-xs flex-shrink-0 mt-1"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href={`${GH}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-slate-300 hover:text-white hover:border-blue-500/40 transition-all duration-200 group"
          >
            <GitHubIcon />
            <span>See all 55 repos on GitHub</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

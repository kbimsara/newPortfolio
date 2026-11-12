'use client';

export default function Expertise() {
  return (
    <section className="border-b border-surface-container-highest pb-12" id="expertise">
      <div className="mb-8">
        <div className="text-[11px] font-mono tracking-[0.06em] text-secondary mb-1 uppercase">
          03 // ARCHITECTURAL DUALITY
        </div>
        <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight">
          Cloud Infrastructure &amp; Full-Stack Engineering
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pillar A: DevOps & Platform Infrastructure */}
        <div className="p-6 bg-surface-container-low border border-surface-container-highest rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-surface-container pb-3 mb-4">
              <span className="font-mono text-[11px] tracking-[0.06em] text-secondary uppercase font-semibold">
                PILLAR A // DEVOPS &amp; INFRASTRUCTURE
              </span>
              <svg className="w-5 h-5 text-outline" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>

            <h3 className="text-xl font-medium text-primary tracking-[-0.01em] mb-3">
              Automated Cloud &amp; Container Operations
            </h3>
            <p className="text-[15px] leading-[1.625rem] text-on-surface-variant mb-6">
              Containerizing applications with Docker, managing Kubernetes workloads on GCP, provisioning GCP and AWS environments with Terraform, and automating delivery with GitHub Actions, Jenkins, and Bash.
            </p>

            {/* Technical Invariant Chips */}
            <div className="grid grid-cols-2 gap-3 font-mono mb-6">
              <div className="p-2.5 bg-surface border border-surface-container-highest rounded">
                <span className="block text-[10px] text-outline">IAC PROVISIONING</span>
                <span className="text-primary font-medium text-xs">Terraform (GCP &amp; AWS)</span>
              </div>
              <div className="p-2.5 bg-surface border border-surface-container-highest rounded">
                <span className="block text-[10px] text-outline">ORCHESTRATION</span>
                <span className="text-primary font-medium text-xs">Docker &amp; Kubernetes</span>
              </div>
              <div className="p-2.5 bg-surface border border-surface-container-highest rounded">
                <span className="block text-[10px] text-outline">CI / CD PIPELINES</span>
                <span className="text-primary font-medium text-xs">GitHub Actions / Jenkins</span>
              </div>
              <div className="p-2.5 bg-surface border border-surface-container-highest rounded">
                <span className="block text-[10px] text-outline">OBSERVABILITY</span>
                <span className="text-primary font-medium text-xs">Grafana &amp; Prometheus</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-surface-container flex flex-wrap gap-2">
            {['GCP / AWS', 'TERRAFORM', 'KUBERNETES', 'DOCKER', 'GITHUB ACTIONS', 'GRAFANA'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-mono tracking-[0.06em] bg-surface border border-surface-container-highest text-on-surface-variant rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Pillar B: Full-Stack Software Engineering */}
        <div className="p-6 bg-surface-container-low border border-surface-container-highest rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-surface-container pb-3 mb-4">
              <span className="font-mono text-[11px] tracking-[0.06em] text-secondary uppercase font-semibold">
                PILLAR B // FULL-STACK SOFTWARE
              </span>
              <svg className="w-5 h-5 text-outline" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h3 className="text-xl font-medium text-primary tracking-[-0.01em] mb-3">
              Scalable Web, Mobile &amp; API Systems
            </h3>
            <p className="text-[15px] leading-[1.625rem] text-on-surface-variant mb-6">
              Building full-stack web and mobile applications in TypeScript, JavaScript, Python, and PHP — pairing Next.js and React interfaces with Node.js, FastAPI, Laravel, Django, and SQL/NoSQL persistence.
            </p>

            {/* Technical Invariant Chips */}
            <div className="grid grid-cols-2 gap-3 font-mono mb-6">
              <div className="p-2.5 bg-surface border border-surface-container-highest rounded">
                <span className="block text-[10px] text-outline">FRONTEND STACK</span>
                <span className="text-primary font-medium text-xs">Next.js / React / Flutter</span>
              </div>
              <div className="p-2.5 bg-surface border border-surface-container-highest rounded">
                <span className="block text-[10px] text-outline">BACKEND RUNTIME</span>
                <span className="text-primary font-medium text-xs">Node.js / FastAPI / Laravel</span>
              </div>
              <div className="p-2.5 bg-surface border border-surface-container-highest rounded">
                <span className="block text-[10px] text-outline">DATA STORAGE</span>
                <span className="text-primary font-medium text-xs">MongoDB / PG / MySQL</span>
              </div>
              <div className="p-2.5 bg-surface border border-surface-container-highest rounded">
                <span className="block text-[10px] text-outline">APPLIED AI / ESB</span>
                <span className="text-primary font-medium text-xs">LightGBM / Claude / RabbitMQ</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-surface-container flex flex-wrap gap-2">
            {['TYPESCRIPT', 'NEXT.JS', 'NODE.JS', 'PYTHON', 'POSTGRESQL', 'MONGODB'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-mono tracking-[0.06em] bg-surface border border-surface-container-highest text-on-surface-variant rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

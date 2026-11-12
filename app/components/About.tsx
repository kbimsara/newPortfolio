'use client';

const axioms = [
  {
    num: '01',
    title: 'Declarative Infrastructure',
    description:
      'Provisioning GCP and AWS resources through Terraform IaC so environments remain repeatable, auditable, and free of manual console drift.',
  },
  {
    num: '02',
    title: 'Continuous Observability',
    description:
      'Pairing deployments with Prometheus metrics and Grafana dashboards so cluster health, latency, and resource usage stay visible in real time.',
  },
  {
    num: '03',
    title: 'Automated Delivery',
    description:
      'Packaging services in Docker and automating build, test, and deployment pipelines through GitHub Actions, Jenkins, and Bash scripting.',
  },
  {
    num: '04',
    title: 'Full-Stack Ownership',
    description:
      'Bridging software engineering and DevOps - connecting clean Next.js, Node.js, and FastAPI codebases directly with reliable cloud runtimes.',
  },
];

export default function About() {
  return (
    <section className="border-b border-surface-container-highest pb-12" id="about">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-[0.06em] text-secondary mb-1 uppercase">
            06 // CORE INVARIANTS &amp; PHILOSOPHY
          </div>
          <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight">
            Engineering Axioms &amp; Background
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-[0.06em] text-outline uppercase">
          SLTC RESEARCH UNIVERSITY • BEHAVIOL PTY LTD
        </div>
      </div>

      <p className="text-[15px] leading-[1.625rem] text-on-surface-variant max-w-3xl mb-8">
        I&apos;m a Software Engineering undergraduate at <strong className="text-primary font-medium">SLTC Research University</strong> and currently work as an <strong className="text-secondary font-medium">Associate DevOps Engineer</strong> at Behaviol Pty Ltd, where I containerize applications, provision GCP infrastructure with Terraform, and automate CI/CD pipelines. Based in Kalutara, Sri Lanka - open to remote opportunities worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {axioms.map((item) => (
          <div
            key={item.num}
            className="p-5 bg-surface-container-low border border-surface-container-highest rounded hover:border-outline transition-colors"
          >
            <div className="text-[3.5rem] text-outline-variant font-light leading-none mb-2">
              {item.num}
            </div>
            <h4 className="font-medium text-primary mb-2 text-base">{item.title}</h4>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

type NodeKey = 'frontend' | 'backend' | 'containers' | 'iac' | 'observability';

interface TopologyNode {
  key: NodeKey;
  index: string;
  label: string;
  tag: string;
  consoleTitle: string;
  status: string;
  metrics: { label: string; value: string }[];
  summary: string;
}

const NODES: TopologyNode[] = [
  {
    key: 'frontend',
    index: '01',
    label: '01. Web & Mobile Client Layer',
    tag: 'Next.js / React / Flutter',
    consoleTitle: 'NODE_SPEC: [01_CLIENT_INTERFACE]',
    status: 'VERCEL + WEB',
    metrics: [
      { label: 'FRAMEWORKS', value: 'Next.js / React' },
      { label: 'MOBILE / 3D', value: 'Flutter / Three.js' },
      { label: 'STYLING', value: 'Tailwind CSS' },
    ],
    summary:
      'Responsive interfaces built across Next.js, React.js, React Native, Flutter, Three.js, and Tailwind CSS (used in JobScrapper, TripGo, and Z-Score Finder).',
  },
  {
    key: 'backend',
    index: '02',
    label: '02. API & Service Runtime',
    tag: 'Node.js / FastAPI / PHP',
    consoleTitle: 'NODE_SPEC: [02_APPLICATION_APIS]',
    status: 'REST + ML + ESB',
    metrics: [
      { label: 'NODE / PHP', value: 'Express / Laravel' },
      { label: 'PYTHON / ML', value: 'FastAPI / LightGBM' },
      { label: 'MESSAGING', value: 'RabbitMQ / JWT' },
    ],
    summary:
      'Backend services in Node.js, Express.js, FastAPI, Laravel, Django, C# .NET, and PHP - spanning REST APIs, ML inference, and RabbitMQ microservices.',
  },
  {
    key: 'containers',
    index: '03',
    label: '03. Container & Kubernetes Plane',
    tag: 'Docker / K8s (GCP)',
    consoleTitle: 'NODE_SPEC: [03_ORCHESTRATION]',
    status: 'PRODUCTION',
    metrics: [
      { label: 'PACKAGING', value: 'Docker / Compose' },
      { label: 'ORCHESTRATOR', value: 'Kubernetes (GCP)' },
      { label: 'ROLE', value: 'Behaviol Pty Ltd' },
    ],
    summary:
      'Containerizing multi-service workloads with Docker and Docker Compose, and managing application deployments on Kubernetes (GCP) at Behaviol Pty Ltd.',
  },
  {
    key: 'iac',
    index: '04',
    label: '04. IaC & CI/CD Automation',
    tag: 'Terraform / GH Actions / Jenkins',
    consoleTitle: 'NODE_SPEC: [04_IAC_AND_CICD]',
    status: 'AUTOMATED',
    metrics: [
      { label: 'CLOUD IAC', value: 'Terraform (GCP/AWS)' },
      { label: 'PIPELINES', value: 'GH Actions / Jenkins' },
      { label: 'SCRIPTING', value: 'Bash Automation' },
    ],
    summary:
      'Provisioning GCP and AWS infrastructure with Terraform following IaC practices, paired with GitHub Actions, Jenkins pipelines, and Bash operational scripts.',
  },
  {
    key: 'observability',
    index: '05',
    label: '05. Datastores & Observability',
    tag: 'MongoDB / PG / Grafana',
    consoleTitle: 'NODE_SPEC: [05_DATA_MONITORING]',
    status: 'INSTRUMENTED',
    metrics: [
      { label: 'DATABASES', value: 'MongoDB / PG / MySQL' },
      { label: 'METRICS', value: 'Prometheus' },
      { label: 'DASHBOARDS', value: 'Grafana' },
    ],
    summary:
      'Relational and document persistence across PostgreSQL, MySQL, MongoDB, and SQLite, monitored with Prometheus metrics and Grafana dashboards.',
  },
];

export default function TopologyInspector() {
  const [selected, setSelected] = useState<NodeKey>('containers');
  const current = NODES.find((n) => n.key === selected) ?? NODES[0];

  return (
    <div
      className="bg-surface-container-low border border-surface-container-highest p-5 sm:p-6 rounded-lg flex flex-col gap-4 relative"
      id="topology"
    >
      <div className="flex items-center justify-between border-b border-surface-container-highest pb-3">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <span className="font-mono text-[11px] tracking-[0.06em] text-primary uppercase font-medium">
            Stack Topology Inspector
          </span>
        </div>
        <span className="text-[11px] font-mono tracking-[0.06em] text-outline">
          INTERACTIVE LAYER MAP
        </span>
      </div>

      <p className="text-on-surface-variant text-xs leading-relaxed">
        Inspect Kavindu&apos;s end-to-end engineering stack. Select any layer to view tools and production context:
      </p>

      {/* Interactive Node Map */}
      <div className="space-y-2 font-mono my-1">
        {NODES.map((node, idx) => {
          const isActive = node.key === selected;
          return (
            <div key={node.key}>
              <button
                type="button"
                onClick={() => setSelected(node.key)}
                className={`w-full p-2.5 text-left flex items-center justify-between transition-all rounded border cursor-pointer ${
                  isActive
                    ? 'bg-surface-bright border-secondary'
                    : 'bg-surface border-surface-container-highest hover:border-outline hover:bg-surface-bright'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      isActive ? 'bg-emerald-600' : 'bg-outline-variant'
                    }`}
                  />
                  <span className="text-primary font-medium text-xs truncate">
                    {node.label}
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.04em] text-outline ml-2 whitespace-nowrap">
                  {node.tag}
                </span>
              </button>
              {idx < NODES.length - 1 && (
                <div className="h-2 w-px bg-surface-container-highest mx-6" />
              )}
            </div>
          );
        })}
      </div>

      {/* Dynamic Layer Console */}
      <div className="bg-surface p-3.5 border border-surface-container-highest rounded font-mono">
        <div className="flex items-center justify-between text-[11px] tracking-[0.06em] border-b border-surface-container-highest pb-2 mb-2.5 gap-2">
          <span className="text-outline uppercase truncate">{current.consoleTitle}</span>
          <span className="text-emerald-700 font-semibold whitespace-nowrap">{current.status}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          {current.metrics.map((m) => (
            <div key={m.label} className="p-1.5 bg-surface-container-low rounded">
              <span className="block text-[9px] text-outline">{m.label}</span>
              <span className="text-primary font-semibold text-[11px] block truncate mt-0.5">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2.5 text-[11px] text-on-surface-variant leading-relaxed pt-2 border-t border-surface-container">
          {current.summary}
        </div>
      </div>
    </div>
  );
}


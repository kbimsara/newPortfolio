'use client';

import { useState } from 'react';

interface PipelineStage {
  id: number;
  title: string;
  badge: string;
  logTitle: string;
  scope: string;
  lines: { prefix: string; prefixClass: string; text: string }[];
}

const STAGES: PipelineStage[] = [
  {
    id: 1,
    title: 'Code & Version',
    badge: 'GIT_FLOW',
    logTitle: 'STAGE_01 // VERSION_CONTROL & CONTRACTS',
    scope: 'LOCAL → GITHUB',
    lines: [
      { prefix: '$ git status', prefixClass: 'text-emerald-700 font-semibold', text: 'Working branch synced with main; typed Next.js / TypeScript & Node.js / FastAPI modules.' },
      { prefix: '[docker]', prefixClass: 'text-secondary', text: 'Local service parity verified via Docker Compose (app + MongoDB / PostgreSQL).' },
      { prefix: '[trigger]', prefixClass: 'text-primary', text: 'Push to GitHub repository initiates CI workflow.' },
    ],
  },
  {
    id: 2,
    title: 'CI Build & Test',
    badge: 'GH_ACTIONS',
    logTitle: 'STAGE_02 // CI_PIPELINE (GITHUB ACTIONS / JENKINS)',
    scope: 'AUTOMATED CHECKS',
    lines: [
      { prefix: '[ci-runner]', prefixClass: 'text-secondary', text: 'Running TypeScript check (tsc --noEmit) & ESLint verification.' },
      { prefix: '[jenkins/gha]', prefixClass: 'text-secondary', text: 'Automated build and test steps configured via GitHub Actions and Jenkins.' },
      { prefix: '✓ status:', prefixClass: 'text-emerald-700 font-semibold', text: 'Static checks and application build passed.' },
    ],
  },
  {
    id: 3,
    title: 'Docker Package',
    badge: 'OCI_IMAGE',
    logTitle: 'STAGE_03 // CONTAINERIZATION (DOCKER)',
    scope: 'REPRODUCIBLE BUILD',
    lines: [
      { prefix: '$ docker build', prefixClass: 'text-emerald-700 font-semibold', text: 'Packaging application runtime into versioned container image.' },
      { prefix: '[layers]', prefixClass: 'text-secondary', text: 'Multi-stage build isolates dependencies and keeps runtime image lean.' },
      { prefix: '✓ registry:', prefixClass: 'text-emerald-700 font-semibold', text: 'Image tagged and pushed for Kubernetes / cloud deployment.' },
    ],
  },
  {
    id: 4,
    title: 'Terraform IaC',
    badge: 'GCP / AWS',
    logTitle: 'STAGE_04 // INFRASTRUCTURE_AS_CODE (TERRAFORM)',
    scope: 'GCP & AWS',
    lines: [
      { prefix: '$ terraform plan', prefixClass: 'text-emerald-700 font-semibold', text: 'Evaluating declarative VPC, compute, IAM, and managed database modules.' },
      { prefix: '[gcp/aws]', prefixClass: 'text-secondary', text: 'Provisioning cloud infrastructure on GCP and AWS (EC2, RDS, Lambda, S3, ALB) via Terraform.' },
      { prefix: '✓ state:', prefixClass: 'text-emerald-700 font-semibold', text: 'Infrastructure configuration codified and aligned.' },
    ],
  },
  {
    id: 5,
    title: 'Cloud Deploy',
    badge: 'KUBERNETES',
    logTitle: 'STAGE_05 // CLUSTER_ORCHESTRATION & ROLLOUT',
    scope: 'K8S / VERCEL / ORACLE',
    lines: [
      { prefix: '[k8s-gcp]', prefixClass: 'text-secondary', text: 'Rolling out containerized workloads to Kubernetes clusters on Google Cloud Platform.' },
      { prefix: '[automation]', prefixClass: 'text-secondary', text: 'Bash operational scripts and CI/CD triggers remove manual deployment steps.' },
      { prefix: '✓ rollout:', prefixClass: 'text-emerald-700 font-semibold', text: 'Application pods healthy and serving production traffic.' },
    ],
  },
  {
    id: 6,
    title: 'Monitor & Alert',
    badge: 'PROM_GRAFANA',
    logTitle: 'STAGE_06 // OBSERVABILITY (PROMETHEUS + GRAFANA)',
    scope: 'LIVE METRICS',
    lines: [
      { prefix: '[prometheus]', prefixClass: 'text-secondary', text: 'Scraping container, node, and application health metrics.' },
      { prefix: '[grafana]', prefixClass: 'text-secondary', text: 'Visualizing system telemetry and cluster performance on Grafana dashboards.' },
      { prefix: '✓ health:', prefixClass: 'text-emerald-700 font-semibold', text: 'Continuous visibility across infrastructure and application tiers.' },
    ],
  },
];

export default function Workflow() {
  const [activeId, setActiveId] = useState<number>(1);
  const current = STAGES.find((s) => s.id === activeId) ?? STAGES[0];

  return (
    <section className="border-b border-surface-container-highest pb-12" id="pipelines">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-[0.06em] text-secondary mb-1 uppercase">
            02 // DELIVERY WORKFLOW
          </div>
          <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight">
            Software &amp; Cloud Delivery Pipeline
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-[0.06em] text-outline uppercase">
          STACK: DOCKER + TERRAFORM + KUBERNETES + GH ACTIONS
        </div>
      </div>

      <div className="bg-surface-container-low border border-surface-container-highest p-4 sm:p-6 rounded-lg">
        <div className="text-[11px] font-mono tracking-[0.06em] text-on-surface-variant mb-4 flex flex-wrap items-center justify-between gap-2">
          <span>WORKFLOW SIMULATION (CLICK A STAGE TO INSPECT WORKFLOW DETAILS):</span>
          <span className="text-emerald-700 font-semibold">END-TO-END AUTOMATION</span>
        </div>

        {/* 6 Responsive Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {STAGES.map((stage) => {
            const isActive = stage.id === activeId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                className={`p-3 border text-left rounded transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-surface border-primary'
                    : 'bg-surface border-surface-container-highest hover:border-outline'
                }`}
              >
                <span
                  className={`block text-[10px] font-mono ${
                    isActive ? 'opacity-75 text-surface' : 'text-outline'
                  }`}
                >
                  STAGE 0{stage.id}
                </span>
                <span
                  className={`block font-mono text-xs font-semibold mt-1 ${
                    isActive ? 'text-surface' : 'text-primary'
                  }`}
                >
                  {stage.title}
                </span>
                <span
                  className={`block text-[9px] font-mono mt-2 ${
                    isActive ? 'text-emerald-300' : 'text-secondary'
                  }`}
                >
                  {stage.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Execution Log Panel */}
        <div className="mt-5 bg-surface border border-surface-container-highest rounded p-4 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between border-b border-surface-container-highest pb-2 mb-3 text-[11px] gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-primary font-semibold">{current.logTitle}</span>
            </div>
            <span className="text-outline text-[11px]">{current.scope}</span>
          </div>

          <div className="space-y-1.5 text-[12px] leading-relaxed text-on-surface-variant">
            {current.lines.map((line, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-2">
                <span className={`${line.prefixClass} flex-shrink-0`}>{line.prefix}</span>
                <span>{line.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

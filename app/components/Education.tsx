'use client';

const education = [
  {
    degree: 'B.Sc. Hons in Software Engineering',
    institution: 'SLTC Research University, Padukka',
    period: '2022 – Present',
    current: true,
    code: 'DEGREE_01',
  },
  {
    degree: 'Certificate in DevOps Master Program',
    institution: 'NetXperts (PVT) LTD',
    period: '2025',
    current: false,
    code: 'CERT_02',
  },
  {
    degree: 'Software Developer NVQ Level 4',
    institution: 'Vocational Training Authority, Kalutara South',
    period: '2021 – 2022',
    current: false,
    code: 'NVQ_03',
  },
  {
    degree: 'Certificate in Applied IT',
    institution: 'SLT Moratuwa',
    period: '2018',
    current: false,
    code: 'CERT_04',
  },
];

const extras = [
  {
    title: 'Developer – CodeMania Hackathon v4',
    org: 'SLTC Research University',
    year: '2023',
  },
];

export default function Education() {
  return (
    <section className="border-b border-surface-container-highest pb-12" id="education">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="text-[11px] font-mono tracking-[0.06em] text-secondary mb-1 uppercase">
            08 // ACADEMIC CREDENTIALS
          </div>
          <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight">
            Education &amp; Certifications
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-[0.06em] text-outline uppercase">
          UNIVERSITY, VOCATIONAL &amp; DEVOPS TRAINING
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Education List (8 cols) */}
        <div className="lg:col-span-8 space-y-3">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-4 sm:p-5 bg-surface-container-low border border-surface-container-highest rounded hover:border-outline transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-[11px] text-secondary">{edu.code}</span>
                  <h3 className="text-[15px] font-medium text-primary">{edu.degree}</h3>
                  {edu.current && (
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-surface border border-emerald-600/40 text-emerald-700 rounded">
                      CURRENT
                    </span>
                  )}
                </div>
                <p className="text-xs text-on-surface-variant">{edu.institution}</p>
              </div>
              <span className="font-mono text-xs text-outline whitespace-nowrap">
                {edu.period}
              </span>
            </div>
          ))}
        </div>

        {/* Additional & Availability (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {extras.map((item) => (
            <div
              key={item.title}
              className="p-5 bg-surface-container-low border border-surface-container-highest rounded space-y-1.5"
            >
              <span className="font-mono text-[11px] text-secondary block">
                HACKATHON // {item.year}
              </span>
              <h3 className="text-[15px] font-medium text-primary">{item.title}</h3>
              <p className="text-xs text-on-surface-variant">{item.org}</p>
            </div>
          ))}

          <div className="p-5 bg-surface-container-low border border-surface-container-highest border-l-2 border-l-emerald-600 rounded space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-mono text-[11px] text-primary font-semibold uppercase">
                Availability
              </span>
            </div>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              Open to full-time roles, internships, and collaborative freelance engineering opportunities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Navbar from './components/Navbar';
import TopologyInspector from './components/TopologyInspector';
import Workflow from './components/Workflow';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import TypingText from './components/TypingText';
import VisitorCounter from './components/VisitorCounter';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Structural Blueprint Corner Coordinate Overlays */}
      <div className="fixed top-2 left-3 z-50 pointer-events-none hidden 2xl:flex items-center gap-2 text-outline text-[10px] font-mono">
        <span>+ REF: 06°35&apos;N 79°58&apos;E</span>
        <span>{'//'}</span>
        <span className="text-secondary">KB_PORTFOLIO_SYS</span>
      </div>
      <div className="fixed bottom-2 right-4 z-50 pointer-events-none hidden 2xl:flex items-center gap-2 text-outline text-[10px] font-mono">
        <span>KAVINDU_BIMSARA</span>
        <span>{'//'}</span>
        <span>LK-WEST (2025)</span>
      </div>

      <Navbar />

      {/* Main Content Canvas */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 py-8 md:py-12 flex flex-col gap-16">
        {/* ================================================================= */}
        {/* HERO SECTION: Editorial Presentation & Interactive Stack Topology */}
        {/* ================================================================= */}
        <section className="relative pt-2 pb-10 border-b border-surface-container-highest" id="architecture">
          {/* Top Meta Eyebrow */}
          <div className="flex flex-wrap items-center justify-between border-b border-surface-container-highest pb-3 mb-8 text-on-surface-variant font-mono text-[11px] tracking-[0.06em] gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-primary font-semibold">KAVINDU BIMSARA</span>
              <span>/</span>
              <span>SOFTWARE ENGINEER &amp; ASSOCIATE DEVOPS ENGINEER</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <VisitorCounter />
              <span className="hidden sm:inline">{'//'}</span>
              <span className="hidden sm:inline">KALUTARA, SRI LANKA</span>
            </div>
          </div>

          {/* Hero 12-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Spine: Editorial Statement & Identity Spec Card (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h1 className="text-[2.25rem] leading-[2.75rem] md:text-[3.5rem] md:leading-[4rem] tracking-[-0.035em] font-light text-primary">
                BUILDING <span className="font-bold">SCALABLE SYSTEMS.</span> BRIDGING SOFTWARE &amp;{' '}
                <span className="italic text-secondary">CLOUD.</span>
              </h1>

              <p className="text-[17px] md:text-[1.125rem] leading-[1.875rem] tracking-[-0.005em] text-on-surface-variant max-w-2xl">
                Software Engineering undergraduate at SLTC Research University and Associate DevOps Engineer at Behaviol Pty Ltd — building full-stack web applications, provisioning GCP &amp; AWS infrastructure with Terraform, and automating CI/CD pipelines.
              </p>

              {/* Identity & Technical Spec Card */}
              <div className="mt-2 p-4 sm:p-5 bg-surface-container-low border border-surface-container-highest rounded-lg grid grid-cols-1 sm:grid-cols-12 gap-5 items-center relative">
                <span className="absolute top-2 right-2.5 text-outline font-mono text-[11px]">
                  ⌜ 06°N ⌟
                </span>

                {/* Monogram / Role Anchor */}
                <div className="sm:col-span-4 flex flex-col items-center">
                  <div className="w-full aspect-square max-w-[160px] rounded border border-surface-container-highest bg-surface flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-4xl font-mono font-semibold tracking-tight text-primary">
                      KB<span className="text-secondary">.</span>
                    </span>
                    <span className="mt-2 px-2 py-0.5 bg-surface-container-low border border-surface-container-highest rounded text-[10px] font-mono text-secondary">
                      <TypingText />
                    </span>
                  </div>
                  <span className="block mt-1.5 text-[10px] font-mono text-outline uppercase tracking-wider text-center">
                    Identity: Bimsara, K.
                  </span>
                </div>

                {/* Spec Rows */}
                <div className="sm:col-span-8 flex flex-col justify-center space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-surface-container pb-1.5 gap-2">
                    <span className="text-outline text-[11px]">LOCATION</span>
                    <span className="text-primary font-medium text-right">
                      Kalutara, Sri Lanka
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-surface-container pb-1.5 gap-2">
                    <span className="text-outline text-[11px]">CURRENT ROLE</span>
                    <span className="text-primary font-medium text-right">
                      Associate DevOps @ Behaviol
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-surface-container pb-1.5 gap-2">
                    <span className="text-outline text-[11px]">EDUCATION</span>
                    <span className="text-primary font-medium text-right">
                      B.Sc. Hons SE (SLTC)
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-outline text-[11px]">TRACK RECORD</span>
                    <span className="text-secondary font-medium text-right">
                      3+ Yrs · 10+ Projects · 55 Repos
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Hero Actions */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <a
                  className="px-6 py-3 bg-primary-container text-surface hover:bg-secondary transition-colors duration-150 font-mono text-xs font-medium rounded flex items-center gap-2"
                  href="#monographs"
                >
                  <span>Explore Project Dossiers</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  className="px-6 py-3 border border-surface-container-highest hover:border-outline text-primary hover:bg-surface-container-low transition-colors duration-150 font-mono text-xs font-medium rounded flex items-center gap-2"
                  href="/Kavindu_Bimsara_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume CV</span>
                </a>
                <div className="flex items-center gap-3 pl-1 font-mono text-xs">
                  <a
                    href="https://github.com/kbimsara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary underline decoration-secondary underline-offset-4"
                  >
                    GitHub
                  </a>
                  <span className="text-outline-variant">/</span>
                  <a
                    href="https://linkedin.com/in/kavidu-bimsara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary underline decoration-secondary underline-offset-4"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Stack Topology Inspector (5 Cols) */}
            <div className="lg:col-span-5">
              <TopologyInspector />
            </div>
          </div>
        </section>

        <Workflow />
        <Expertise />
        <Skills />
        <Projects />
        <About />
        <Experience />
        <Education />
        <Terminal />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        className="w-full bg-surface-container-low border-t border-surface-container-highest"
        id="telemetry"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 py-12 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-surface-container pb-4">
            <div className="font-mono text-[11px] text-on-surface-variant tracking-widest uppercase">
              SYS.ARCH // KAVINDU BIMSARA
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-secondary">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              <span>OPEN TO REMOTE &amp; ENGINEERING ROLES</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-mono text-xs">
            <a
              className="text-primary hover:text-secondary transition-colors duration-150"
              href="#architecture"
            >
              Architecture
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary transition-colors duration-150"
              href="#stack"
            >
              Stack Matrix
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary transition-colors duration-150"
              href="#monographs"
            >
              Project Dossiers
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary transition-colors duration-150"
              href="#experience"
            >
              Career Timeline
            </a>
            <a
              className="text-on-surface-variant hover:text-secondary transition-colors duration-150"
              href="/Kavindu_Bimsara_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume CV
            </a>
          </div>

          <div className="pt-4 border-t border-surface-container flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs text-on-surface-variant">
            <div>
              © 2025 // KAVINDU BIMSARA. DESIGNED &amp; BUILT WITH NEXT.JS, TAILWIND CSS &amp; MONGODB.
            </div>
            <div className="text-[11px] text-outline">
              GITHUB: kbimsara
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

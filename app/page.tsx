import SpaceStationWrapper from './components/SpaceStationWrapper';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Education from './components/Education';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050f] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        {/* Star background — full canvas but only right half shows the model */}
        <div className="absolute inset-0">
          <SpaceStationWrapper />
        </div>

        {/* Left-side dark overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05050f] via-[#05050f]/80 to-transparent pointer-events-none" />

        {/* Radial glow on left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />

        {/* Two-column layout */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-8 flex items-center">
          {/* Left — text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-5 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: 'forwards' }}>
              Software Engineer · DevOps Engineer
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
              <span className="gradient-text">Kavindu</span>
              <br />
              <span className="text-white">Bimsara</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-md leading-relaxed opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}>
              Building scalable systems that bridge software engineering and cloud infrastructure.
            </p>

            <div className="flex items-center gap-4 mt-8 opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: 'forwards' }}>
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 text-sm"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 glass text-slate-300 hover:text-white hover:border-blue-500/50 font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs animate-bounce">
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <About />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-6 max-w-5xl xl:mx-auto" />
      <Experience />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-6 max-w-5xl xl:mx-auto" />
      <Skills />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-6 max-w-5xl xl:mx-auto" />
      <Terminal />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-6 max-w-5xl xl:mx-auto" />
      <Projects />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-6 max-w-5xl xl:mx-auto" />
      <Education />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-6 max-w-5xl xl:mx-auto" />
      <Contact />

      {/* Footer */}
      <footer className="py-10 px-6 text-center border-t border-white/5">
        <p className="text-slate-600 text-sm">
          Designed & Built by{' '}
          <span className="text-slate-400 font-medium">Kavindu Bimsara</span>
          {' · '}
          <span className="text-blue-500/60">2025</span>
        </p>
        <p className="text-slate-700 text-xs mt-2">
          Built with Next.js · Three.js · Tailwind CSS
        </p>
      </footer>
    </main>
  );
}

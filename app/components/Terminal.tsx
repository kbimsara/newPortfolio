'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    '<span class="text-yellow-400">Available commands:</span>',
    '  <span class="text-blue-400">whoami</span>       — About me',
    '  <span class="text-blue-400">skills</span>       — Tech stack',
    '  <span class="text-blue-400">experience</span>   — Work history',
    '  <span class="text-blue-400">projects</span>     — Things I built',
    '  <span class="text-blue-400">education</span>    — Academic background',
    '  <span class="text-blue-400">contact</span>      — Get in touch',
    '  <span class="text-blue-400">ls</span>           — List sections',
    '  <span class="text-blue-400">clear</span>        — Clear terminal',
  ],
  whoami: () => [
    '<span class="text-green-400">Kavindu Bimsara</span>',
    'Software Engineer & DevOps Engineer',
    'Location   : Kalutara, Sri Lanka',
    'University : SLTC Research University',
    'Status     : <span class="text-green-400">Open to opportunities</span>',
    '',
    'Passionate about bridging software engineering and DevOps',
    'to deliver reliable, production-ready systems.',
  ],
  skills: () => [
    '<span class="text-yellow-400">Languages   :</span> JavaScript, TypeScript, Python, PHP, Java, Dart, C',
    '<span class="text-yellow-400">Frontend    :</span> React.js, Next.js, React Native, Flutter, Three.js, Tailwind',
    '<span class="text-yellow-400">Backend     :</span> Node.js, Express.js, Laravel, Django',
    '<span class="text-yellow-400">Databases   :</span> MySQL, MongoDB, PostgreSQL, SQLite',
    '<span class="text-yellow-400">DevOps/Cloud:</span> Docker, Kubernetes, Terraform, GCP, AWS',
    '<span class="text-yellow-400">CI/CD       :</span> GitHub Actions, Jenkins',
    '<span class="text-yellow-400">Monitoring  :</span> Grafana, Prometheus',
    '<span class="text-yellow-400">Tools       :</span> Git, Postman, Firebase, Arduino',
  ],
  experience: () => [
    '<span class="text-cyan-400">► Intern DevOps Engineer</span>  <span class="text-slate-500">Nov 2025 – Present</span>',
    '  Behaviol Pty Ltd',
    '  · Docker, Kubernetes (GCP), Terraform (IaC)',
    '  · CI/CD — GitHub Actions, Jenkins',
    '  · Monitoring — Grafana, Prometheus',
    '',
    '<span class="text-cyan-400">► Software Developer Trainee</span>  <span class="text-slate-500">Jul 2022 – Jan 2023</span>',
    '  Mahapola Ports And Maritime Academy',
    '  · PHP, MySQL, JavaScript, Ajax, Bootstrap',
  ],
  projects: () => [
    '<span class="text-purple-400">[2026]</span> Todo App Cloud Infrastructure',
    '       Terraform · GCP · Docker · GitHub Actions · Next.js · MongoDB',
    '',
    '<span class="text-purple-400">[2025]</span> QReturn – Lost & Found Web App',
    '       React · Node.js · MongoDB · Google Maps API · QR Code',
    '',
    '<span class="text-purple-400">[2024]</span> MERN Todo App',
    '       React · Node.js · Express · MongoDB · Docker',
    '',
    '<span class="text-purple-400">[2024]</span> Online Chat Application',
    '       PHP · MySQL · Ajax · Bootstrap',
    '',
    '<span class="text-purple-400">[2023]</span> User Mail Verification System',
    '       PHP · MySQL · cURL · Google Cloud',
    '',
    '<span class="text-purple-400">[2022]</span> Certificate & Enrollment Management',
    '       PHP · JavaScript · MySQL · Bootstrap',
  ],
  education: () => [
    '<span class="text-green-400">►</span> B.Sc. Hons in Software Engineering  <span class="text-slate-500">2022 – Present</span>',
    '  SLTC Research University, Padukka',
    '',
    '<span class="text-green-400">►</span> Certificate in DevOps Master Program  <span class="text-slate-500">2025</span>',
    '  NetXperts (PVT) LTD',
    '',
    '<span class="text-green-400">►</span> Software Developer NVQ Level 4  <span class="text-slate-500">2021 – 2022</span>',
    '  Vocational Training Authority, Kalutara South',
    '',
    '<span class="text-green-400">►</span> Certificate in Applied IT  <span class="text-slate-500">2018</span>',
    '  SLT Moratuwa',
  ],
  contact: () => [
    '<span class="text-blue-400">Email   :</span> kavidubim2gamaethige@gmail.com',
    '<span class="text-blue-400">Phone   :</span> +94 71 49 85 833',
    '<span class="text-blue-400">GitHub  :</span> github.com/kbimsara',
    '<span class="text-blue-400">LinkedIn:</span> linkedin.com/in/kavidu-bimsara',
  ],
  ls: () => [
    '<span class="text-blue-400">about/</span>      <span class="text-blue-400">experience/</span>      <span class="text-blue-400">skills/</span>',
    '<span class="text-blue-400">projects/</span>   <span class="text-blue-400">education/</span>       <span class="text-blue-400">contact/</span>',
  ],
};

const SUGGESTIONS = Object.keys(COMMANDS);

interface Line {
  type: 'input' | 'output' | 'error';
  content: string;
}

const WELCOME: Line[] = [
  { type: 'output', content: '<span class="text-green-400 font-bold">Kavindu Bimsara</span> — Interactive Portfolio Terminal' },
  { type: 'output', content: 'Type <span class="text-blue-400">help</span> to see available commands.' },
  { type: 'output', content: '' },
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [suggestion, setSuggestion] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleInput = (val: string) => {
    setInput(val);
    const match = SUGGESTIONS.find((s) => s.startsWith(val) && val.length > 0);
    setSuggestion(match && match !== val ? match : '');
  };

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [...lines, { type: 'input', content: cmd }];

    if (!trimmed) {
      setLines([...newLines]);
    } else if (trimmed === 'clear') {
      setLines(WELCOME);
    } else if (COMMANDS[trimmed]) {
      const output = COMMANDS[trimmed]();
      setLines([...newLines, ...output.map((c) => ({ type: 'output' as const, content: c })), { type: 'output', content: '' }]);
    } else {
      setLines([...newLines, { type: 'error', content: `command not found: ${trimmed}. Type <span class="text-blue-400">help</span> for commands.` }, { type: 'output', content: '' }]);
    }

    if (trimmed) setHistory((h) => [trimmed, ...h.slice(0, 49)]);
    setHistoryIdx(-1);
    setInput('');
    setSuggestion('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestion) { setInput(suggestion); setSuggestion(''); }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(idx);
      if (history[idx]) setInput(history[idx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(idx);
      setInput(idx === -1 ? '' : history[idx]);
    }
  };

  return (
    <section id="terminal" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Interactive</p>
        <h2 className="text-4xl font-bold text-white mb-10 section-heading">Terminal</h2>

        {/* Terminal window */}
        <div
          className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-slate-500 font-mono">kbimsara@portfolio:~</span>
          </div>

          {/* Output */}
          <div ref={scrollRef} className="bg-[#0d0d1a] p-5 h-80 overflow-y-auto font-mono text-sm leading-relaxed cursor-text">
            {lines.map((line, i) => (
              <div key={i} className="flex items-start gap-2 min-h-[1.5rem]">
                {line.type === 'input' && (
                  <>
                    <span className="text-green-400 select-none flex-shrink-0">❯</span>
                    <span className="text-white">{line.content}</span>
                  </>
                )}
                {line.type === 'output' && (
                  <span
                    className="text-slate-300 pl-0"
                    dangerouslySetInnerHTML={{ __html: line.content || '&nbsp;' }}
                  />
                )}
                {line.type === 'error' && (
                  <span
                    className="text-red-400 pl-0"
                    dangerouslySetInnerHTML={{ __html: line.content }}
                  />
                )}
              </div>
            ))}

            {/* Input row */}
            <div className="flex items-center gap-2 mt-1 relative">
              <span className="text-green-400 select-none flex-shrink-0">❯</span>
              <div className="relative flex-1 flex items-center">
                {/* Ghost suggestion */}
                {suggestion && (
                  <span className="absolute left-0 text-slate-600 pointer-events-none select-none">
                    {input}<span>{suggestion.slice(input.length)}</span>
                  </span>
                )}
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => handleInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  spellCheck={false}
                  className="w-full bg-transparent text-white outline-none caret-blue-400 relative z-10"
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </div>

          {/* Hint bar */}
          <div className="bg-[#0d0d1a] border-t border-white/5 px-5 py-2 flex items-center gap-4 text-[11px] text-slate-600 font-mono">
            <span><kbd className="px-1.5 py-0.5 bg-white/5 rounded text-slate-500">Tab</kbd> autocomplete</span>
            <span><kbd className="px-1.5 py-0.5 bg-white/5 rounded text-slate-500">↑↓</kbd> history</span>
            <span><kbd className="px-1.5 py-0.5 bg-white/5 rounded text-slate-500">Enter</kbd> run</span>
            <span className="ml-auto">try: <span className="text-blue-400">help</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

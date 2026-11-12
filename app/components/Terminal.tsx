'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    '<span class="text-[#cae6ff] font-semibold">Available commands:</span>',
    '  <span class="text-[#aecae2]">whoami</span>       - About me',
    '  <span class="text-[#aecae2]">skills</span>       - Tech stack',
    '  <span class="text-[#aecae2]">experience</span>   - Work history',
    '  <span class="text-[#aecae2]">projects</span>     - Featured &amp; recent builds',
    '  <span class="text-[#aecae2]">education</span>    - Academic background',
    '  <span class="text-[#aecae2]">contact</span>      - Get in touch',
    '  <span class="text-[#aecae2]">ls</span>           - List sections',
    '  <span class="text-[#aecae2]">clear</span>        - Clear terminal',
  ],
  whoami: () => [
    '<span class="text-[#cae6ff] font-semibold">Kavindu Bimsara</span>',
    'Associate DevOps Engineer &amp; Software Engineer',
    'Location   : Kalutara, Sri Lanka',
    'Company    : Behaviol Pty Ltd',
    'University : SLTC Research University',
    'Status     : <span class="text-[#cae6ff]">Open to remote &amp; engineering opportunities</span>',
  ],
  skills: () => [
    '<span class="text-[#aecae2]">Languages   :</span> JavaScript, TypeScript, Python, PHP, Java, Dart, C',
    '<span class="text-[#aecae2]">Frontend    :</span> React.js, Next.js, React Native, Flutter, Three.js, Tailwind CSS, Bootstrap',
    '<span class="text-[#aecae2]">Backend     :</span> Node.js, Express.js, Laravel, Django',
    '<span class="text-[#aecae2]">Databases   :</span> MySQL, MongoDB, PostgreSQL, SQLite',
    '<span class="text-[#aecae2]">DevOps/Cloud:</span> Docker, Kubernetes, Terraform, GCP, AWS',
    '<span class="text-[#aecae2]">CI/CD       :</span> GitHub Actions, Jenkins',
    '<span class="text-[#aecae2]">Monitoring  :</span> Grafana, Prometheus',
    '<span class="text-[#aecae2]">Tools       :</span> Git, Postman, Firebase, Arduino',
  ],
  experience: () => [
    '<span class="text-[#cae6ff]">► Associate DevOps Engineer</span>  <span class="text-[#878b87]">May 2026 – Present</span>',
    '  Behaviol Pty Ltd',
    '',
    '<span class="text-[#cae6ff]">► Intern DevOps Engineer</span>  <span class="text-[#878b87]">Nov 2025 – May 2026</span>',
    '  Behaviol Pty Ltd',
    '  · Docker, Kubernetes (GCP), Terraform, GitHub Actions, Jenkins, Grafana, Prometheus',
    '',
    '<span class="text-[#cae6ff]">► Software Developer Trainee</span>  <span class="text-[#878b87]">Jul 2022 – Jan 2023</span>',
    '  Mahapola Ports And Maritime Academy',
    '  · PHP, MySQL, JavaScript, Ajax, Bootstrap',
  ],
  projects: () => [
    '<span class="text-[#aecae2]">[2026]</span> JobScrapper - Next.js · Vercel · Oracle Cloud · MongoDB',
    '<span class="text-[#aecae2]">[2026]</span> Todo App Cloud Infrastructure - Terraform · GCP · Docker · GitHub Actions',
    '<span class="text-[#aecae2]">[2025]</span> Z-Score University Finder - Next.js · FastAPI · Python · LightGBM',
    '<span class="text-[#aecae2]">[2025]</span> TripGo – AI Trip Planner - Next.js · TypeScript · Claude AI · MongoDB',
    '<span class="text-[#aecae2]">[2025]</span> MovieHub - TypeScript · C# .NET · Docker Compose',
    '<span class="text-[#aecae2]">[2025]</span> QReturn – Lost &amp; Found Web App - React · Node.js · MongoDB',
    '<span class="text-[#aecae2]">[2024]</span> LMS Cloud Infrastructure (AWS) - Terraform · AWS · GitHub Actions',
  ],
  education: () => [
    '<span class="text-[#cae6ff]">►</span> B.Sc. Hons in Software Engineering  <span class="text-[#878b87]">2022 – Present</span>',
    '  SLTC Research University, Padukka',
    '',
    '<span class="text-[#cae6ff]">►</span> Certificate in DevOps Master Program  <span class="text-[#878b87]">2025</span>',
    '  NetXperts (PVT) LTD',
    '',
    '<span class="text-[#cae6ff]">►</span> Software Developer NVQ Level 4  <span class="text-[#878b87]">2021 – 2022</span>',
    '  Vocational Training Authority, Kalutara South',
    '',
    '<span class="text-[#cae6ff]">►</span> Certificate in Applied IT  <span class="text-[#878b87]">2018</span>',
    '  SLT Moratuwa',
  ],
  contact: () => [
    '<span class="text-[#aecae2]">Email   :</span> kavidubim2gamaethige@gmail.com',
    '<span class="text-[#aecae2]">GitHub  :</span> github.com/kbimsara',
    '<span class="text-[#aecae2]">LinkedIn:</span> linkedin.com/in/kavidu-bimsara',
  ],
  ls: () => [
    '<span class="text-[#aecae2]">expertise/</span>  <span class="text-[#aecae2]">about/</span>      <span class="text-[#aecae2]">skills/</span>',
    '<span class="text-[#aecae2]">experience/</span> <span class="text-[#aecae2]">projects/</span>   <span class="text-[#aecae2]">workflow/</span>',
    '<span class="text-[#aecae2]">education/</span>  <span class="text-[#aecae2]">contact/</span>',
  ],
};

const SUGGESTIONS = Object.keys(COMMANDS);

interface Line {
  type: 'input' | 'output' | 'error';
  content: string;
}

const WELCOME: Line[] = [
  { type: 'output', content: '<span class="text-[#cae6ff] font-semibold">kbimsara@portfolio</span> - Interactive System Shell' },
  { type: 'output', content: 'Type <span class="text-[#aecae2]">help</span> or click a quick command below to inspect portfolio data.' },
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
    const match = SUGGESTIONS.find((s) => s.startsWith(val.toLowerCase()) && val.length > 0);
    setSuggestion(match && match !== val.toLowerCase() ? match : '');
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
      setLines([
        ...newLines,
        ...output.map((c) => ({ type: 'output' as const, content: c })),
        { type: 'output', content: '' },
      ]);
    } else {
      setLines([
        ...newLines,
        {
          type: 'error',
          content: `command not found: ${trimmed}. Type <span class="text-[#aecae2]">help</span> for commands.`,
        },
        { type: 'output', content: '' },
      ]);
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
      if (suggestion) {
        setInput(suggestion);
        setSuggestion('');
      }
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
    <section className="space-y-6 border-b border-surface-container-highest pb-12" id="terminal">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-2 gap-4">
        <div>
          <span className="text-[11px] font-mono tracking-[0.06em] text-secondary block uppercase">
            {'// INTERACTIVE_SHELL'}
          </span>
          <h2 className="text-2xl md:text-[2rem] font-medium text-primary tracking-[-0.02em] leading-tight mt-1">
            Interactive Terminal
          </h2>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['whoami', 'skills', 'experience', 'projects', 'education', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => runCommand(cmd)}
              className="px-2.5 py-1 text-[11px] font-mono bg-surface-container-low border border-outline-variant rounded text-primary hover:border-secondary hover:text-secondary transition-colors cursor-pointer"
            >
              $ {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Window */}
      <div
        className="rounded-lg overflow-hidden border border-outline-variant bg-primary-container text-[#e0e3de]"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-primary border-b border-[#2f3130]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#747874]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#878b87]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#c4c7c3]" />
            <span className="ml-2 text-[11px] text-[#c4c7c3] font-mono">
              kbimsara@portfolio:~
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#878b87]">BASH // INTERACTIVE</span>
        </div>

        {/* Output */}
        <div
          ref={scrollRef}
          className="p-5 h-72 overflow-y-auto font-mono text-[13px] leading-relaxed cursor-text"
        >
          {lines.map((line, i) => (
            <div key={i} className="flex items-start gap-2 min-h-[1.4rem]">
              {line.type === 'input' && (
                <>
                  <span className="text-[#aecae2] select-none flex-shrink-0">❯</span>
                  <span className="text-white">{line.content}</span>
                </>
              )}
              {line.type === 'output' && (
                <span
                  className="text-[#e0e3de]"
                  dangerouslySetInnerHTML={{ __html: line.content || '&nbsp;' }}
                />
              )}
              {line.type === 'error' && (
                <span
                  className="text-[#ffdad6]"
                  dangerouslySetInnerHTML={{ __html: line.content }}
                />
              )}
            </div>
          ))}

          {/* Input row */}
          <div className="flex items-center gap-2 mt-1 relative">
            <span className="text-[#aecae2] select-none flex-shrink-0">❯</span>
            <div className="relative flex-1 flex items-center">
              {suggestion && (
                <span className="absolute left-0 text-[#878b87] pointer-events-none select-none">
                  {input}
                  <span>{suggestion.slice(input.length)}</span>
                </span>
              )}
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => handleInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-transparent text-white outline-none caret-[#cae6ff] relative z-10"
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>

        {/* Hint bar */}
        <div className="bg-primary border-t border-[#2f3130] px-5 py-2 flex items-center gap-4 text-[11px] text-[#878b87] font-mono">
          <span>
            <kbd className="px-1.5 py-0.5 bg-[#202421] border border-[#444844] rounded text-[#c4c7c3]">
              Tab
            </kbd>{' '}
            autocomplete
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 bg-[#202421] border border-[#444844] rounded text-[#c4c7c3]">
              ↑↓
            </kbd>{' '}
            history
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 bg-[#202421] border border-[#444844] rounded text-[#c4c7c3]">
              Enter
            </kbd>{' '}
            run
          </span>
          <span className="ml-auto">
            try: <span className="text-[#cae6ff]">help</span>
          </span>
        </div>
      </div>
    </section>
  );
}

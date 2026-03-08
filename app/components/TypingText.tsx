'use client';

import { useState, useEffect } from 'react';

const PHRASES = [
  { text: 'Software Engineer', color: 'text-blue-400' },
  { text: 'DevOps Engineer',   color: 'text-cyan-400' },
];

const TYPE_SPEED   = 80;   // ms per character typed
const DELETE_SPEED = 45;   // ms per character deleted
const PAUSE_AFTER  = 1800; // ms to hold full word
const PAUSE_BEFORE = 400;  // ms before starting to type next word

export default function TypingText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');

  const { text, color } = PHRASES[phraseIdx];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), PAUSE_AFTER);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 0);
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed((d) => d.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setPhraseIdx((i) => (i + 1) % PHRASES.length);
          setPhase('waiting');
        }, PAUSE_BEFORE);
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('typing'), 0);
    }

    return () => clearTimeout(timeout);
  }, [phase, displayed, text]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className={`font-semibold transition-colors duration-300 ${color}`}>
        {displayed}
      </span>
      {/* blinking cursor */}
      <span
        className={`inline-block w-[2px] h-[1em] rounded-full align-middle ${color} opacity-90`}
        style={{ animation: 'blink 1s step-end infinite' }}
      />
    </span>
  );
}

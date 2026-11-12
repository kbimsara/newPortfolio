'use client';

import { useState, useEffect } from 'react';

const PHRASES = [
  'Software Engineer',
  'Associate DevOps Engineer',
];

const TYPE_SPEED = 75;
const DELETE_SPEED = 40;
const PAUSE_AFTER = 2000;
const PAUSE_BEFORE = 350;

export default function TypingText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('Software Engineer');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('pausing');

  const text = PHRASES[phraseIdx];

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
      timeout = setTimeout(() => setPhase('deleting'), PAUSE_AFTER);
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
    <span className="inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.06em] text-secondary">
      <span>{displayed}</span>
      <span
        className="inline-block w-[1.5px] h-[1em] bg-secondary align-middle"
        style={{ animation: 'blink 1s step-end infinite' }}
      />
    </span>
  );
}

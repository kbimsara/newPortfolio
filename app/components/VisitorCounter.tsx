'use client';

import { useEffect, useRef, useState } from 'react';

export default function VisitorCounter() {
  const [targetCount, setTargetCount] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(0);
  const [source, setSource] = useState<'mongodb' | 'local' | null>(null);
  const [status, setStatus] = useState<'loading' | 'live' | 'error'>('loading');
  const requestedRef = useRef(false);

  useEffect(() => {
    if (requestedRef.current) return;
    requestedRef.current = true;

    const counted = sessionStorage.getItem('kb_visited');

    const fetchCount = async () => {
      try {
        const method = counted ? 'GET' : 'POST';
        const res = await fetch('/api/visitors', { method, cache: 'no-store' });
        if (!res.ok) throw new Error('failed');
        const data = await res.json();

        if (typeof data.count === 'number') {
          setTargetCount(data.count);
          setSource(data.source === 'local' ? 'local' : 'mongodb');
          setStatus('live');
          if (!counted) sessionStorage.setItem('kb_visited', '1');
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    };

    fetchCount();
  }, []);

  // Smooth odometer roll-up animation when live count arrives
  useEffect(() => {
    if (targetCount === null) return;
    if (targetCount === 0) {
      setDisplayCount(0);
      return;
    }

    const duration = 700;
    const start = performance.now();
    let rafId = 0;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayCount(Math.round(eased * targetCount));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [targetCount]);

  const formattedChars =
    status === 'live'
      ? String(displayCount).padStart(4, '0').split('')
      : status === 'loading'
        ? ['·', '·', '·', '·']
        : ['-', '-', '-', '-'];

  const subLabel =
    status === 'live'
      ? source === 'local'
        ? 'TELEMETRY // LOCAL SESSION STORE'
        : 'TELEMETRY // MONGODB SYNCED'
      : status === 'loading'
        ? 'TELEMETRY // QUERYING...'
        : 'TELEMETRY // UNAVAILABLE';

  return (
    <div
      className="bg-surface-container-low border border-surface-container-highest rounded-lg px-4 py-3 flex flex-wrap items-center justify-between gap-3 font-mono"
      title="Portfolio view counter (/api/visitors)"
    >
      {/* Left: Prometheus-style metric label */}
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          {status === 'live' && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-65" />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              status === 'live'
                ? 'bg-emerald-600'
                : status === 'loading'
                  ? 'bg-secondary'
                  : 'bg-outline'
            }`}
          />
        </span>

        <div className="min-w-0">
          <div className="text-[11px] text-primary font-semibold tracking-tight truncate">
            portfolio_visitors_total
          </div>
          <div className="text-[10px] text-outline tracking-[0.04em]">
            {subLabel}
          </div>
        </div>
      </div>

      {/* Right: Split-flap mechanical digit cells + micro pulse bars */}
      <div className="flex items-center gap-3 ml-auto">
        <div className="hidden sm:flex items-end gap-0.5 h-4" aria-hidden="true">
          <span className="w-0.5 h-1.5 bg-outline-variant rounded-full" />
          <span className="w-0.5 h-2.5 bg-outline-variant rounded-full" />
          <span className="w-0.5 h-2 bg-secondary/70 rounded-full" />
          <span className="w-0.5 h-3.5 bg-secondary rounded-full" />
          <span
            className={`w-0.5 h-4 rounded-full ${
              status === 'live' ? 'bg-emerald-600' : 'bg-outline-variant'
            }`}
          />
        </div>

        <div className="flex items-center gap-1" aria-label={`Total views: ${targetCount ?? 'unavailable'}`}>
          {formattedChars.map((ch, idx) => (
            <span
              key={idx}
              className="relative inline-flex items-center justify-center w-6 h-7 bg-surface border border-surface-container-highest rounded text-xs font-semibold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <span className="relative z-10">{ch}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-1/2 h-px bg-surface-container-highest/70 pointer-events-none"
              />
            </span>
          ))}
        </div>

        <span className="text-[10px] tracking-[0.06em] text-on-surface-variant uppercase">
          VIEWS
        </span>
      </div>
    </div>
  );
}

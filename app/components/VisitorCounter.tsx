'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const counted = sessionStorage.getItem('kb_visited');

    const fetchCount = async () => {
      try {
        const method = counted ? 'GET' : 'POST';
        const res = await fetch('/api/visitors', { method });
        if (!res.ok) throw new Error('failed');
        const data = await res.json();
        setCount(data.count);
        if (!counted) sessionStorage.setItem('kb_visited', '1');
      } catch {
        setError(true);
      }
    };

    fetchCount();
  }, []);

  if (error || count === null) return null;

  return (
    <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono tracking-[0.06em] text-on-surface-variant bg-surface-container-low border border-outline-variant rounded">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
      </span>
      <span>
        <span className="text-primary font-semibold">{count.toLocaleString()}</span>
        {' '}SESSION{count !== 1 ? 'S' : ''} LOGGED
      </span>
    </div>
  );
}

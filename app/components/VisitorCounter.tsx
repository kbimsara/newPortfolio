'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Increment on first load, store flag in sessionStorage so refreshes
    // don't double-count within the same session
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
    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span>
        <span className="text-slate-400 font-semibold">{count.toLocaleString()}</span>
        {' '}visitor{count !== 1 ? 's' : ''}
      </span>
    </div>
  );
}

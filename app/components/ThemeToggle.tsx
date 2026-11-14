'use client';

import { useSyncExternalStore } from 'react';

interface ThemeToggleProps {
  className?: string;
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'class') {
        callback();
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  return () => {
    window.removeEventListener('storage', callback);
    observer.disconnect();
  };
}

function getSnapshot(): 'dark' | 'light' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getServerSnapshot(): 'dark' | 'light' {
  return 'light';
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // ignore storage quota/security restrictions
    }

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`px-2.5 py-1 text-[11px] font-mono tracking-[0.06em] border border-surface-container-highest bg-surface hover:bg-surface-container-low text-primary transition-colors flex items-center gap-1.5 rounded cursor-pointer select-none ${className}`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <>
          <svg
            className="w-3.5 h-3.5 text-secondary flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
            />
          </svg>
          <span className="font-semibold text-secondary">LIGHT</span>
        </>
      ) : (
        <>
          <svg
            className="w-3.5 h-3.5 text-secondary flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <span className="font-semibold text-secondary">DARK</span>
        </>
      )}
    </button>
  );
}

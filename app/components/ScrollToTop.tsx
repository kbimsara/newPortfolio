'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const isScrollingToTop = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateVisibility = useCallback((currentY: number) => {
    // If currently animating to the top via button click, keep hidden
    if (isScrollingToTop.current) {
      setIsVisible(false);
      lastScrollY.current = currentY;
      return;
    }

    // Near the top of the page (< 200px), always hide
    if (currentY < 200) {
      setIsVisible(false);
    } else {
      const diff = currentY - lastScrollY.current;
      // Scrolling UP: show the button
      if (diff < -5) {
        setIsVisible(true);
      }
      // Scrolling DOWN: hide the button
      else if (diff > 5) {
        setIsVisible(false);
      }
    }

    lastScrollY.current = currentY;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      updateVisibility(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [updateVisibility]);

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    isScrollingToTop.current = true;
    setIsVisible(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const done = () => {
      isScrollingToTop.current = false;
      setIsVisible(false);
      lastScrollY.current = 0;
    };

    const lenis = typeof window !== 'undefined' ? window.__lenis : undefined;

    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, {
        duration: 1.0,
        onComplete: done,
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Safety timeout ensuring state is never stuck
    timeoutRef.current = setTimeout(done, 1200);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center gap-1.5 px-3 py-2 bg-surface/95 backdrop-blur-sm border border-surface-container-highest hover:border-secondary text-primary font-mono text-[11px] tracking-[0.06em] rounded shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg
        className="w-3.5 h-3.5 text-secondary group-hover:-translate-y-0.5 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <span className="font-semibold">TOP</span>
    </button>
  );
}

'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * 0.07;
      current.current.y += dy * 0.07;

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${current.current.x - 220}px, ${current.current.y - 220}px)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-30 will-change-transform"
      style={{
        width: 440,
        height: 440,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, rgba(124,58,237,0.04) 50%, transparent 75%)',
        filter: 'blur(24px)',
      }}
    />
  );
}

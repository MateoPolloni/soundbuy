'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '@/lib/context/CartContext';

// Same platform-level bug found and fixed on the Dettagli project: iOS
// Safari has a system component bug (WebKit Bugzilla #297779) where
// window.visualViewport.offsetTop loses sync with the real viewport during
// scroll/keyboard-dismissal, causing position:fixed/sticky elements to
// render away from their correctly-measured position. Confirmed affecting
// other major sites independently (LinkedIn, via a public Mastodon issue),
// so this isn't site-specific — any position:fixed header is exposed to it.
// Version-sniffing for "iOS 26" specifically doesn't work: Safari freezes/
// reduces the OS version it reports in the User-Agent for fingerprinting
// resistance, so it never matches even on a confirmed affected device. The
// device type token (iPhone/iPad) isn't subject to that freezing.
function isIOSSafari(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /iP(hone|ad|od)/.test(ua) || (/Macintosh/.test(ua) && 'ontouchend' in document);
}

const links = [
  { label: 'Browse', href: '/browse' },
  { label: 'Producers', href: '/producers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Sell', href: '/sell' },
];

export default function Navbar() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [staticHeader, setStaticHeader] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setStaticHeader(isIOSSafari());
  }, []);

  // Transparent-over-hero until scrolled, then blurred/solid — unchanged
  // from the original design. Pure background/border transition, doesn't
  // touch position, so it's safe regardless of which positioning mode
  // (JS-pinned or iOS static fallback) is active below.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-driven "stays pinned to top" behavior, skipped on iOS Safari
  // (see isIOSSafari above) where the header instead renders as a normal,
  // fully static in-flow element — no positioning mechanism left for the
  // platform bug to corrupt, at the cost of the header scrolling away on
  // that platform specifically instead of staying pinned.
  useEffect(() => {
    if (staticHeader) return;
    let ticking = false;
    let lastGood = window.scrollY;
    let lowStreak = 0;

    const apply = () => {
      ticking = false;
      const current = window.scrollY;
      const looksGlitched = current <= 2 && lastGood > 40;

      if (looksGlitched) {
        lowStreak++;
        if (lowStreak < 4) {
          const el = headerRef.current;
          if (el) el.style.transform = `translate3d(0, ${lastGood}px, 0)`;
          return;
        }
      } else {
        lowStreak = 0;
      }

      lastGood = current;
      const el = headerRef.current;
      if (el) el.style.transform = `translate3d(0, ${current}px, 0)`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [staticHeader]);

  // Lock background scroll while the mobile menu is open. The menu is an
  // inline dropdown inside the (now in-flow) header rather than a
  // full-screen overlay, so without this the page behind it can still
  // scroll. Uses overflow/overscroll-behavior rather than position:fixed
  // on body — a position:fixed ancestor would create a new containing
  // block for the header's own translate3d positioning and hijack it.
  useEffect(() => {
    if (!menuOpen) return;
    const html = document.documentElement.style;
    const body = document.body.style;
    const prevHtmlOverflow = html.overflow;
    const prevBodyOverflow = body.overflow;
    const prevOverscroll = html.overscrollBehaviorY;
    html.overflow = 'hidden';
    body.overflow = 'hidden';
    html.overscrollBehaviorY = 'none';
    return () => {
      html.overflow = prevHtmlOverflow;
      body.overflow = prevBodyOverflow;
      html.overscrollBehaviorY = prevOverscroll;
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`relative z-50 will-change-transform transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl bg-[#06060a]/88 border-b border-[rgba(124,58,237,0.14)]'
          : 'bg-transparent'
      }`}
      style={staticHeader ? undefined : { transform: 'translate3d(0, 0, 0)' }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-14 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-display font-extrabold text-lg tracking-[0.16em] gradient-text hover:glow-text transition-all duration-300">
          SOUNDBUY
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link font-display font-bold text-[9px] tracking-[0.28em] uppercase text-[#8080a8] hover:text-[#eeeeff] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <Link href="/cart" className="relative text-[#8080a8] hover:text-[#eeeeff] transition-colors duration-300 p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#7c3aed] text-white font-mono text-[8px] font-bold rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          {/* Sign In */}
          <Link href="/login" className="hidden md:block btn-ghost !py-2 !px-5 !text-[9px]">
            Sign In
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#8080a8] hover:text-[#eeeeff] transition-colors p-1"
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0c0c16] border-t border-[rgba(124,58,237,0.12)] px-8 py-6 flex flex-col gap-5 animate-slide-down">
          {[...links, { label: 'Sign In', href: '/login' }].map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display font-bold text-[9px] tracking-[0.28em] uppercase text-[#8080a8] hover:text-[#eeeeff] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

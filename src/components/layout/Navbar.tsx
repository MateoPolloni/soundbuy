'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/lib/context/CartContext';

export default function Navbar() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl bg-[#06060a]/88 border-b border-[rgba(124,58,237,0.14)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-14 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-display font-extrabold text-lg tracking-[0.16em] gradient-text hover:glow-text transition-all duration-300">
          SOUNDBUY
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Browse', href: '/browse' },
            { label: 'Producers', href: '/producers' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Sell', href: '/sell' },
          ].map(link => (
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
          {[
            { label: 'Browse', href: '/browse' },
            { label: 'Producers', href: '/producers' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Sell', href: '/sell' },
            { label: 'Sign In', href: '/login' },
          ].map(link => (
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

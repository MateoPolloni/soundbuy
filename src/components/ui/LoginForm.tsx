'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => setDone(false), 2200);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#48486a] mb-2 block">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="form-input"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#48486a]">
            Password
          </label>
          <Link href="#" className="font-mono text-[9px] text-[#7c3aed] hover:text-[#c084fc] transition-colors duration-300">
            Forgot?
          </Link>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            className="form-input pr-11"
          />
          <button
            type="button"
            onClick={() => setShowPassword(s => !s)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#48486a] hover:text-[#8080a8] transition-colors duration-300"
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-10-8-10-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 10 8 10 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full justify-center mt-1 disabled:opacity-70">
        {loading ? (
          <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25"/>
            <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : done ? (
          'Welcome Back ✓'
        ) : (
          'Sign In'
        )}
      </button>

      <p className="font-mono text-[9px] text-[#3a3a58] text-center pt-1 tracking-wide">
        Demo mode — authentication isn&apos;t connected yet.
      </p>

      <div className="flex items-center gap-3 py-2">
        <div className="flex-1 h-px bg-[rgba(124,58,237,0.12)]" />
        <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-[#3a3a58]">or</span>
        <div className="flex-1 h-px bg-[rgba(124,58,237,0.12)]" />
      </div>

      <button type="button" className="btn-ghost w-full justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24">
          <path fill="#8080a8" d="M21.35 11.1h-9.17v2.95h5.4c-.23 1.34-1.6 3.93-5.4 3.93-3.25 0-5.9-2.7-5.9-6.03s2.65-6.03 5.9-6.03c1.85 0 3.09.79 3.8 1.47l2.6-2.5C16.96 3.4 14.7 2.4 12.18 2.4 6.93 2.4 2.7 6.6 2.7 11.85s4.23 9.45 9.48 9.45c5.47 0 9.1-3.84 9.1-9.25 0-.62-.07-1.1-.13-1.7z"/>
        </svg>
        Continue with Google
      </button>
    </form>
  );
}

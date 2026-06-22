'use client';

import { useState } from 'react';

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-surface">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-display font-bold text-sm text-[#eeeeff]">{question}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"
          className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-sm text-[#8080a8] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

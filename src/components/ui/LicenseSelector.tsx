'use client';

import { useState } from 'react';
import { Track } from '@/lib/types';
import { useCart } from '@/lib/context/CartContext';
import Price from './Price';

const licenseDetails = {
  basic: {
    label: 'Basic License',
    features: ['MP3 download', 'Up to 100k streams', 'Non-exclusive', '1 music video'],
  },
  premium: {
    label: 'Premium License',
    features: ['WAV + MP3 download', 'Unlimited streams', 'Non-exclusive', 'Unlimited videos', 'Radio broadcast'],
  },
  exclusive: {
    label: 'Exclusive License',
    features: ['WAV + MP3 + Stems', 'Full ownership', 'Exclusive forever', 'All commercial rights', 'Track removed from sale'],
  },
} as const;

export default function LicenseSelector({ track }: { track: Track }) {
  const [selected, setSelected] = useState<keyof typeof licenseDetails>('basic');
  const { addToCart, items } = useCart();

  const inCart = items.some(i => i.track.id === track.id);

  return (
    <div className="sticky top-28">
      <h2 className="font-display font-extrabold text-xl tracking-tight text-[#eeeeff] mb-5">
        Choose License
      </h2>

      <div className="space-y-3 mb-6">
        {(Object.keys(licenseDetails) as (keyof typeof licenseDetails)[]).map(type => {
          const details = licenseDetails[type];
          const isSelected = selected === type;
          return (
            <button
              key={type}
              onClick={() => setSelected(type)}
              className={`w-full text-left p-4 border transition-all duration-300 ${
                isSelected
                  ? 'border-[#7c3aed] bg-[rgba(124,58,237,0.08)]'
                  : 'border-[rgba(124,58,237,0.14)] bg-[#0c0c16] hover:border-[rgba(124,58,237,0.35)]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-sm font-bold text-[#eeeeff]">{details.label}</span>
                <span className="font-mono font-bold gradient-text-gold text-lg"><Price value={track.licenses[type]} /></span>
              </div>
              <ul className="space-y-1.5">
                {details.features.map(f => (
                  <li key={f} className="text-xs text-[#8080a8] flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" className="flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => addToCart(track, selected)}
        className={`w-full justify-center ${inCart ? '' : 'btn-primary'}`}
        style={inCart ? {
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '14px 30px', fontFamily: 'var(--font-bricolage), sans-serif',
          fontWeight: 800, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
          background: 'rgba(124,58,237,0.12)', border: '1px solid #7c3aed', color: '#c084fc',
        } : undefined}
      >
        {inCart ? '✓ Added to Cart' : <>Add to Cart — <Price value={track.licenses[selected]} /></>}
      </button>

      <p className="font-mono text-[9px] text-[#48486a] text-center mt-4 uppercase tracking-[0.2em]">
        Instant download · Secure checkout
      </p>
    </div>
  );
}

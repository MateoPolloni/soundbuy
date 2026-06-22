'use client';

import Link from 'next/link';
import { useState, useMemo, useRef, useEffect } from 'react';
import { Track } from '@/lib/types';
import { useCart } from '@/lib/context/CartContext';
import Price from './Price';

let activeAudio: HTMLAudioElement | null = null;

function seededBar(trackId: string, index: number): number {
  const seed = trackId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const x = Math.sin(seed * 9301 + index * 49297 + 233) * 10000;
  const h = 12 + Math.abs(x - Math.floor(x)) * 68;
  return Math.round(h * 100) / 100;
}

function fmtDur(s: number) {
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
}

function fmtPlays(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toString();
}

export default function TrackCard({ track, index }: { track: Track; index?: number }) {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return () => {
      if (activeAudio === audioRef.current) activeAudio = null;
    };
  }, []);

  const bars = useMemo(
    () => Array.from({ length: 32 }, (_, i) => seededBar(track.id, i)),
    [track.id]
  );

  const durations = useMemo(
    () => Array.from({ length: 32 }, (_, i) => 0.6 + (i % 5) * 0.14),
    []
  );

  const delays = useMemo(
    () => Array.from({ length: 32 }, (_, i) => (i % 9) * 0.07),
    []
  );

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      if (activeAudio && activeAudio !== audio) activeAudio.pause();
      activeAudio = audio;
      audio.play();
      setPlaying(true);
    }
  };

  const handleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(track, 'basic');
  };

  return (
    <Link
      href={`/track/${track.id}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article className="card-surface overflow-hidden">
        {track.audioUrl && (
          <audio
            ref={audioRef}
            src={track.audioUrl}
            preload="none"
            onEnded={() => setPlaying(false)}
            onPause={() => setPlaying(false)}
          />
        )}

        {/* Cover */}
        <div
          className="relative overflow-hidden"
          style={{ background: track.coverGradient, aspectRatio: '1/1' }}
        >
          {/* Index */}
          {index !== undefined && (
            <span className="absolute top-3 left-3 font-mono text-[9px] text-white/25 tracking-widest z-10">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}

          {/* Waveform */}
          <div className="absolute inset-x-0 bottom-0 h-[52px] flex items-end gap-[2px] px-3 pb-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full ${hovered ? 'wave-bar-anim' : ''}`}
                style={{
                  height: hovered ? `${h}%` : `${h * 0.28}%`,
                  background: hovered
                    ? `rgba(168,85,247,${0.5 + (i % 3) * 0.15})`
                    : 'rgba(255,255,255,0.25)',
                  transformOrigin: 'bottom center',
                  transition: `height 0.35s ease ${i * 0.008}s, background 0.4s ease`,
                  ...(hovered ? {
                    '--dur': `${durations[i]}s`,
                    '--delay': `${delays[i]}s`,
                  } as React.CSSProperties : {}),
                }}
              />
            ))}
          </div>

          {/* Play button */}
          <button
            onClick={handlePlay}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-[#7c3aed]/85 backdrop-blur-sm flex items-center justify-center glow-purple hover:scale-110 transition-transform duration-200">
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <rect x="6" y="4" width="4" height="16"/>
                  <rect x="14" y="4" width="4" height="16"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <polygon points="7,3 21,12 7,21"/>
                </svg>
              )}
            </div>
          </button>

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
            {track.isNew && (
              <span className="font-display text-[8px] font-extrabold tracking-[0.2em] uppercase bg-[#7c3aed] text-white px-2.5 py-1 whitespace-nowrap">
                New
              </span>
            )}
            {track.featured && (
              <span className="font-display text-[8px] font-extrabold tracking-[0.2em] uppercase border border-[#c9a84c]/50 text-[#c9a84c] px-2.5 py-1 bg-[#c9a84c]/08 whitespace-nowrap">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className={`font-display font-extrabold text-[15px] leading-normal tracking-tight mb-0.5 transition-colors duration-300 ${
            hovered ? 'text-[#c084fc]' : 'text-[#eeeeff]'
          }`}>
            {track.title}
          </h3>

          <p className="font-mono text-[9px] text-[#48486a] tracking-[0.15em] uppercase mb-3">
            {track.producer}
          </p>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="font-display text-[8px] font-bold tracking-[0.2em] uppercase border border-[rgba(124,58,237,0.22)] text-[#8080a8] px-2.5 py-1 whitespace-nowrap">
              {track.genre}
            </span>
            <span className="font-mono text-[9px] text-[#48486a]">{track.bpm} BPM</span>
            <span className="font-mono text-[9px] text-[#48486a]">{track.key}</span>
            <span className="font-mono text-[9px] text-[#48486a] ml-auto">{fmtDur(track.duration)}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-display font-extrabold gradient-text-gold text-xl"><Price value={track.licenses.basic} /></span>
              <span className="font-mono text-[8px] text-[#48486a] ml-1 tracking-widest uppercase">basic</span>
            </div>
            <button
              onClick={handleCart}
              className={`font-display font-bold text-[8px] tracking-[0.2em] uppercase btn-primary !py-1.5 !px-3 transition-opacity duration-300 ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              + Cart
            </button>
          </div>

          <div className="mt-2 flex items-center gap-1.5 font-mono text-[9px] text-[#48486a]">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            {fmtPlays(track.plays)}
          </div>
        </div>
      </article>
    </Link>
  );
}

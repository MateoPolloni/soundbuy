'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import type WaveSurfer from 'wavesurfer.js';

function seededBar(seed: number, index: number): number {
  const x = Math.sin(seed * 9301 + index * 49297 + 233) * 10000;
  const h = 10 + Math.abs(x - Math.floor(x)) * 75;
  return Math.round(h * 100) / 100;
}

interface WaveformPlayerProps {
  audioUrl?: string;
  trackId: string;
  trackTitle: string;
}

export default function WaveformPlayer({ audioUrl, trackId, trackTitle }: WaveformPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isReady, setIsReady] = useState(false);

  const seed = parseInt(trackId) || 1;
  const bars = useMemo(() => Array.from({ length: 90 }, (_, i) => seededBar(seed, i)), [seed]);

  useEffect(() => {
    if (!containerRef.current || !audioUrl) return;

    let ws: WaveSurfer | undefined;

    import('wavesurfer.js').then(({ default: WaveSurferLib }) => {
      ws = WaveSurferLib.create({
        container: containerRef.current!,
        waveColor: 'rgba(124, 58, 237, 0.45)',
        progressColor: '#a855f7',
        cursorColor: '#c084fc',
        barWidth: 2,
        barGap: 1,
        barRadius: 2,
        height: 72,
        normalize: true,
      });

      ws.load(audioUrl);

      ws.on('ready', () => {
        setIsReady(true);
        setDuration(ws!.getDuration());
      });

      ws.on('audioprocess', () => setCurrentTime(ws!.getCurrentTime()));
      ws.on('finish', () => setIsPlaying(false));

      wsRef.current = ws;
    });

    return () => ws?.destroy();
  }, [audioUrl]);

  const togglePlay = () => {
    const ws = wsRef.current;
    if (!ws || !isReady) return;
    ws.playPause();
    setIsPlaying(p => !p);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    wsRef.current?.setVolume(v);
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="card-surface p-6">
      {/* Waveform */}
      <div className="mb-6">
        {audioUrl ? (
          <div ref={containerRef} className="w-full" />
        ) : (
          <div className="h-[72px] flex items-center gap-px">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-full"
                style={{
                  height: `${h}%`,
                  background: i / bars.length < 0.3
                    ? '#a855f7'
                    : 'rgba(124, 58, 237, 0.4)',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5">
        <button
          onClick={togglePlay}
          className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center glow-purple flex-shrink-0 hover:scale-105 transition-transform"
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <polygon points="6,3 20,12 6,21"/>
            </svg>
          )}
        </button>

        <span className="text-xs font-mono text-[#8080a8]">
          {fmt(currentTime)} / {fmt(duration)}
        </span>

        <div className="flex items-center gap-2 ml-auto">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8080a8" strokeWidth="1.5">
            <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
            <path d="M15.54,8.46a5,5 0 0 1 0,7.07"/>
          </svg>
          <input
            type="range" min="0" max="1" step="0.01" value={volume}
            onChange={handleVolume}
            className="w-20 accent-[#7c3aed]"
          />
        </div>
      </div>

      {!audioUrl && (
        <p className="text-center font-mono text-[10px] text-[#48486a] mt-4 uppercase tracking-widest">
          30-second preview available upon licensing
        </p>
      )}
    </div>
  );
}

import Link from 'next/link';
import AnimatedNumber from '@/components/ui/AnimatedNumber';

function seededH(i: number): number {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5;
  const h = 6 + Math.abs(x - Math.floor(x)) * 22;
  return Math.round(h * 100) / 100;
}

const WAVE_COUNT = 54;
const waveHeights = Array.from({ length: WAVE_COUNT }, (_, i) => seededH(i));
const waveDurs = Array.from({ length: WAVE_COUNT }, (_, i) => 0.7 + (i % 7) * 0.13);
const waveDelays = Array.from({ length: WAVE_COUNT }, (_, i) => (i % 11) * 0.09);

const stats = [
  { label: 'Tracks', value: 12000, suffix: '+' },
  { label: 'Producers', value: 3400, suffix: '' },
  { label: 'Licenses Sold', value: 98000, suffix: '+' },
];

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: '100vh', marginTop: '-4rem' }}
    >

      {/* ── Dark base ─────────────────── */}
      <div className="absolute inset-0 bg-[#06060a]" />

      {/* ── Primary orb ───────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 750,
          height: 750,
          left: '50%',
          top: '38%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 68%)',
          filter: 'blur(70px)',
          animation: 'orb-breathe 12s ease-in-out infinite, orb-drift 24s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* ── Secondary orb ─────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          left: '75%',
          top: '70%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'orb-breathe 8s ease-in-out infinite reverse',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* ── Grid ──────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,58,237,1) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,1) 1px,transparent 1px)',
          backgroundSize: '58px 58px',
        }}
      />

      {/* ── Left edge label ───────────── */}
      <div className="absolute left-5 top-1/2 pointer-events-none select-none"
        style={{ transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center center' }}
      >
        <span className="font-mono text-[9px] tracking-[0.35em] text-[#48486a] uppercase whitespace-nowrap">
          SOUNDBUY © 2026
        </span>
      </div>

      {/* ── Right waveform ────────────── */}
      <div className="absolute right-7 top-0 h-full flex flex-col items-center justify-center gap-[3px] opacity-[0.22] pointer-events-none overflow-hidden">
        {waveHeights.map((h, i) => (
          <div
            key={i}
            className="w-[5px] rounded-full bg-[#7c3aed] wave-bar-anim"
            style={{
              height: `${h}px`,
              '--dur': `${waveDurs[i]}s`,
              '--delay': `${waveDelays[i]}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* ── Main content ──────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-20">

        {/* Index line */}
        <div className="flex items-center gap-4 mb-10 animate-slide-down" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="font-mono text-[9px] text-[#48486a] tracking-[0.3em]">001</span>
          <div className="h-px w-10 bg-[#3d1f8a]" />
          <span className="font-mono text-[9px] text-[#48486a] tracking-[0.3em] uppercase">
            Premium Music Marketplace
          </span>
        </div>

        {/* Hero heading */}
        <h1 className="font-display leading-[0.94] tracking-[-0.01em] mb-10"
          style={{ fontWeight: 800 }}
        >
          <span
            className="block text-outline animate-fade-up"
            style={{
              fontSize: 'clamp(56px, 9.5vw, 128px)',
              animationDelay: '0.25s',
              opacity: 0,
            }}
          >
            WHERE SOUND
          </span>
          <span
            className="block gradient-text glow-text animate-fade-up"
            style={{
              fontSize: 'clamp(56px, 9.5vw, 128px)',
              animationDelay: '0.38s',
              opacity: 0,
            }}
          >
            BECOMES
          </span>
          <span
            className="block text-outline animate-fade-up"
            style={{
              fontSize: 'clamp(56px, 9.5vw, 128px)',
              animationDelay: '0.51s',
              opacity: 0,
            }}
          >
            CURRENCY
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-[#8080a8] text-base leading-relaxed max-w-sm mb-10 animate-fade-up"
          style={{ animationDelay: '0.68s', opacity: 0 }}
        >
          License premium instrumentals and sound design from producers
          who understand what your project demands.
        </p>

        {/* CTAs + Stats — aligned as direct siblings, same row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div
            className="flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.78s', opacity: 0 }}
          >
            <Link href="/browse" className="btn-primary">
              Browse Tracks
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/sell" className="btn-ghost">Start Selling</Link>
          </div>

          {/* Stats */}
          <div
            className="flex gap-5 sm:gap-10 lg:gap-14 animate-fade-up"
            style={{ animationDelay: '0.88s', opacity: 0 }}
          >
            {stats.map(s => (
              <div key={s.label} className="text-right">
                <div className="font-display font-extrabold gradient-text-gold whitespace-nowrap"
                  style={{ fontSize: 'clamp(19px, 5.5vw, 44px)', lineHeight: 1 }}
                >
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.28em] uppercase text-[#48486a] mt-2 whitespace-nowrap">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 pointer-events-none">
        <span className="font-mono text-[8px] tracking-[0.35em] text-[#48486a] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#7c3aed] to-transparent" />
      </div>
    </section>
  );
}

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const moods = [
  {
    name: 'Dark & Cinematic',
    tag: 'Epic · Emotional · Tension',
    gradient: 'linear-gradient(145deg, #0d0020 0%, #1a0a35 55%, #2d0060 100%)',
    filter: 'cinematic',
    accent: '#7c3aed',
  },
  {
    name: 'Trap & Drill',
    tag: 'Street · Aggressive · Hard',
    gradient: 'linear-gradient(145deg, #06060a 0%, #1e1040 55%, #3d1f8a 100%)',
    filter: 'trap',
    accent: '#a855f7',
  },
  {
    name: 'Electronic',
    tag: 'Hypnotic · Rave · Euphoric',
    gradient: 'linear-gradient(145deg, #04041a 0%, #1a0a35 45%, #4a1f8a 100%)',
    filter: 'electronic',
    accent: '#c084fc',
  },
  {
    name: 'R&B & Soul',
    tag: 'Smooth · Romantic · Deep',
    gradient: 'linear-gradient(145deg, #180020 0%, #4d0070 55%, #1a0a35 100%)',
    filter: 'rnb',
    accent: '#a855f7',
  },
  {
    name: 'Lo-Fi & Chill',
    tag: 'Vintage · Nostalgic · Warm',
    gradient: 'linear-gradient(145deg, #12122a 0%, #3d2060 60%, #1a0a35 100%)',
    filter: 'lofi',
    accent: '#8080a8',
  },
  {
    name: 'Ambient & Space',
    tag: 'Ethereal · Atmospheric · Still',
    gradient: 'linear-gradient(145deg, #040410 0%, #1a0a35 55%, #0d2040 100%)',
    filter: 'ambient',
    accent: '#7c3aed',
  },
];

export default function MoodCategories() {
  return (
    <section className="py-24 bg-[#06060a] border-y border-[rgba(124,58,237,0.1)]">
      <div className="max-w-7xl mx-auto px-8 md:px-14">
        <RevealOnScroll>
          <div className="mb-14">
            <div className="section-label">Explore</div>
            <h2
              className="font-display font-extrabold text-[#eeeeff] leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Browse
              <br />
              <span className="text-outline-sm">by Mood</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {moods.map((mood, i) => (
            <RevealOnScroll key={mood.name} delay={i * 70}>
              <Link
                href={`/browse?mood=${mood.filter}`}
                className="group relative flex flex-col justify-end p-7 min-h-[160px] card-surface"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-65 transition-opacity duration-700"
                  style={{ background: mood.gradient }}
                />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060a]/85 via-transparent to-transparent" />

                {/* Top-right accent dot */}
                <div
                  className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: mood.accent }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <span className="font-mono text-[8px] tracking-[0.28em] uppercase text-[#48486a] group-hover:text-[#8080a8] transition-colors duration-400 block mb-2">
                    {mood.tag}
                  </span>
                  <h3
                    className="font-display font-extrabold leading-normal tracking-tight text-balance text-[#eeeeff] group-hover:text-[#c084fc] transition-colors duration-400"
                    style={{ fontSize: 'clamp(17px, 1.9vw, 24px)' }}
                  >
                    {mood.name}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 text-[#7c3aed] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

                {/* Bottom border glow on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${mood.accent}, transparent)` }}
                />
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import AnimatedNumber from '@/components/ui/AnimatedNumber';

const values = [
  {
    title: 'Fair Compensation',
    description: 'Producers keep 85% of every sale. No hidden cuts, no opaque fee structures — the math is published and it doesn\'t change.',
  },
  {
    title: 'Curated Quality',
    description: 'Every submission is reviewed before it reaches the catalog. We\'d rather have 12,000 great tracks than 100,000 mediocre ones.',
  },
  {
    title: 'Creator-First Licensing',
    description: 'Licenses are written in plain language. You should never need a lawyer to understand what you\'re allowed to do with a track.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Producers set their own rates. We don\'t arbitrage between what buyers pay and what sellers receive.',
  },
];

const stats = [
  { label: 'Founded', value: 2024, suffix: '' },
  { label: 'Tracks Licensed', value: 98000, suffix: '+' },
  { label: 'Active Producers', value: 3400, suffix: '+' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">

        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label">Our Story</div>
            <h1
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              <span className="text-outline-sm">Built by people</span>
              <br />
              <span className="gradient-text glow-text">who make music too</span>
            </h1>
            <p className="text-[#8080a8] text-base leading-relaxed">
              SoundBuy started as a frustration with how the instrumental marketplace
              treated producers — opaque pricing, buried licensing terms, and platforms
              that took more than they gave back. We built the platform we wished existed.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats */}
        <RevealOnScroll>
          <div className="flex flex-wrap gap-10 md:gap-16 mb-24 pb-12 border-b border-[rgba(124,58,237,0.12)]">
            {stats.map(s => (
              <div key={s.label}>
                <div
                  className="font-display font-extrabold gradient-text-gold"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
                >
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#48486a] mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Narrative */}
        <RevealOnScroll>
          <div className="max-w-3xl mb-24">
            <div className="section-label">The Beginning</div>
            <h2
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              From a shared frustration to a working platform
            </h2>
            <div className="space-y-5 text-[#8080a8] text-[15px] leading-relaxed">
              <p>
                Most marketplaces for instrumentals and sound design were built for
                transactions, not relationships. Producers uploaded tracks into a void,
                buyers searched through walls of identical-looking thumbnails, and nobody
                on either side felt like the platform was actually on their side.
              </p>
              <p>
                We wanted something different: a catalog small enough to feel curated,
                licensing terms simple enough to read in two minutes, and a payout
                structure that didn&apos;t quietly erode every time the company needed
                to hit a number.
              </p>
              <p>
                SoundBuy is still growing — every track in the catalog was selected, not
                just uploaded, and every producer on the roster is someone actively
                releasing music, not a dormant account from years ago.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Values grid */}
        <RevealOnScroll>
          <div className="mb-12">
            <div className="section-label">What We Stand For</div>
            <h2
              className="font-display font-extrabold leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              Principles, not slogans
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
          {values.map((v, i) => (
            <RevealOnScroll key={v.title} delay={i * 90}>
              <div className="card-surface p-7 h-full">
                <h3 className="font-display font-extrabold text-lg tracking-tight text-[#eeeeff] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#48486a] leading-relaxed">{v.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll>
          <div className="card-surface p-12 md:p-16 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 60%)' }}
            />
            <div className="relative z-10">
              <h2
                className="font-display font-extrabold text-balance mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                <span className="gradient-text">Come see the catalog</span>
              </h2>
              <p className="text-[#8080a8] mb-8 max-w-md mx-auto">
                No account required to browse. Just good tracks, fairly priced.
              </p>
              <Link href="/browse" className="btn-primary">Browse Tracks</Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

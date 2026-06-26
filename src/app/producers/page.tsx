import Link from 'next/link';
import { producers, trackCountFor } from '@/lib/data/producers';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import ProducerCard from '@/components/ui/ProducerCard';

export default function ProducersPage() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">

        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <div className="section-label">The Roster</div>
            <h1
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance mb-5"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              <span className="text-[#eeeeff]">Meet the</span>{' '}
              <span className="text-outline-sm">Producers</span>
            </h1>
            <p className="text-[#8080a8] text-base leading-relaxed">
              Every track on SoundBuy comes from a working producer with a distinct
              voice. These are the people behind the catalog.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {producers.map((p, i) => (
            <RevealOnScroll key={p.id} delay={i * 100}>
              <ProducerCard producer={p} trackCount={trackCountFor(p.slug)} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="mt-20 card-surface p-12 md:p-16 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 60%)' }}
            />
            <div className="relative z-10">
              <h2
                className="font-display font-extrabold text-balance mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                <span className="gradient-text">Got a sound worth selling?</span>
              </h2>
              <p className="text-[#8080a8] mb-8 max-w-md mx-auto">
                Join the roster and start earning from every track you upload.
              </p>
              <Link href="/sell" className="btn-primary">Start Selling</Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

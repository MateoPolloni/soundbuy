import Link from 'next/link';
import { featuredTracks } from '@/lib/data/tracks';
import TrackCard from '@/components/ui/TrackCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function FeaturedTracks() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-14">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label">Curated Selection</div>
              <h2
                className="font-display font-extrabold text-[#eeeeff] leading-[1.15] tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
              >
                Featured
                <br />
                <span className="text-outline-sm">Releases</span>
              </h2>
            </div>
            <Link
              href="/browse"
              className="hidden sm:flex items-center gap-3 font-display font-bold text-[9px] tracking-[0.25em] uppercase text-[#8080a8] hover:text-[#c084fc] transition-colors duration-300 group"
            >
              View All
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </RevealOnScroll>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:snap-none">
          {featuredTracks.map((track, i) => (
            <div
              key={track.id}
              className="flex-shrink-0 w-[72vw] max-w-[280px] snap-start md:w-auto md:max-w-none"
            >
              <RevealOnScroll delay={i * 90}>
                <TrackCard track={track} index={i} />
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

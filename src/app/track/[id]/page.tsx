import { getTrackById, tracks } from '@/lib/data/tracks';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import WaveformPlayer from '@/components/ui/WaveformPlayer';
import LicenseSelector from '@/components/ui/LicenseSelector';
import TrackCard from '@/components/ui/TrackCard';

export function generateStaticParams() {
  return tracks.map(t => ({ id: t.id }));
}

function seededBar(seed: number, index: number): number {
  const x = Math.sin(seed * 9301 + index * 49297 + 233) * 10000;
  const h = 8 + Math.abs(x - Math.floor(x)) * 80;
  return Math.round(h * 100) / 100;
}

function fmt(s: number) {
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
}

export default async function TrackPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const track = getTrackById(id);
  if (!track) notFound();

  const related = tracks.filter(t => t.id !== id && t.genre === track.genre).slice(0, 4);
  const seed = parseInt(id) || 1;
  const coverBars = Array.from({ length: 70 }, (_, i) => seededBar(seed, i));

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">
        {/* Breadcrumb */}
        <nav className="font-mono text-[9px] text-[#48486a] mb-10 flex items-center gap-2.5 uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-[#8080a8] transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link href="/browse" className="hover:text-[#8080a8] transition-colors duration-300">Browse</Link>
          <span>/</span>
          <span className="text-[#8080a8]">{track.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: cover + player + info */}
          <div className="lg:col-span-2">
            {/* Cover */}
            <div
              className="w-full mb-6 relative overflow-hidden"
              style={{ background: track.coverGradient, aspectRatio: '16/7' }}
            >
              <div className="absolute inset-x-0 bottom-0 h-32 flex items-end gap-px px-0 opacity-15">
                {coverBars.map((h, i) => (
                  <div key={i} className="flex-1 bg-white rounded-t-full" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1
                  className="font-display font-extrabold text-outline text-center px-8 leading-[1.15]"
                  style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
                >
                  {track.title}
                </h1>
              </div>
            </div>

            {/* Player */}
            <WaveformPlayer trackId={track.id} trackTitle={track.title} audioUrl={track.audioUrl} />

            {/* Track info */}
            <div className="mt-8">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h1
                    className="font-display font-extrabold leading-[1.15] tracking-tight text-[#eeeeff] mb-1"
                    style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
                  >
                    {track.title}
                  </h1>
                  <p className="font-mono text-xs text-[#8080a8] tracking-[0.05em]">
                    by <span className="text-[#c084fc]">{track.producer}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#48486a] flex-shrink-0 pt-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                  {track.plays.toLocaleString()}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] border border-[rgba(124,58,237,0.3)] text-[#8080a8] px-3 py-1.5 whitespace-nowrap">
                  {track.genre}
                </span>
                {track.subgenre && (
                  <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] border border-[rgba(124,58,237,0.12)] text-[#48486a] px-3 py-1.5 whitespace-nowrap">
                    {track.subgenre}
                  </span>
                )}
                {track.mood.map(m => (
                  <span key={m} className="font-mono text-[10px] bg-[rgba(124,58,237,0.1)] text-[#8080a8] px-3 py-1.5 whitespace-nowrap">
                    {m}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 p-6 card-surface">
                {[
                  { label: 'BPM', value: track.bpm },
                  { label: 'Key', value: track.key },
                  { label: 'Duration', value: fmt(track.duration) },
                ].map(item => (
                  <div key={item.label} className="text-center">
                    <div className="font-mono text-xl font-semibold text-[#eeeeff]">{item.value}</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#48486a] mt-1.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: license selector */}
          <div>
            <LicenseSelector track={track} />
          </div>
        </div>

        {/* Related tracks */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2
              className="font-display font-extrabold leading-[1.15] tracking-tight mb-8"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              <span className="text-[#eeeeff]">More</span>{' '}
              <span className="gradient-text">{track.genre}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((t, i) => (
                <TrackCard key={t.id} track={t} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

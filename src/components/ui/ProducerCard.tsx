import { Producer } from '@/lib/data/producers';
import AnimatedNumber from './AnimatedNumber';

export default function ProducerCard({ producer, trackCount }: { producer: Producer; trackCount: number }) {
  const initials = producer.name.slice(0, 2);

  return (
    <div className="card-surface p-7 relative overflow-hidden group">
      <div
        className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
        style={{ background: producer.gradient, filter: 'blur(20px)' }}
      />

      <div className="relative z-10 flex items-start gap-5 mb-5">
        <div
          className="w-16 h-16 flex-shrink-0 flex items-center justify-center font-display font-extrabold text-lg text-white/90"
          style={{ background: producer.gradient }}
        >
          {initials}
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <h3 className="font-display font-extrabold text-xl tracking-tight text-[#eeeeff] group-hover:text-[#c084fc] transition-colors duration-300">
            {producer.name}
          </h3>
          <p className="font-mono text-[10px] text-[#48486a] tracking-[0.08em] mt-1">
            {producer.tagline}
          </p>
        </div>
      </div>

      <p className="relative z-10 text-sm text-[#8080a8] leading-relaxed mb-6">
        {producer.bio}
      </p>

      <div className="relative z-10 flex flex-wrap gap-2 mb-6">
        {producer.genres.map(g => (
          <span
            key={g}
            className="font-display text-[8px] font-bold tracking-[0.2em] uppercase border border-[rgba(124,58,237,0.22)] text-[#8080a8] px-2.5 py-1 whitespace-nowrap"
          >
            {g}
          </span>
        ))}
      </div>

      <div className="relative z-10 flex items-center gap-8 pt-5 border-t border-[rgba(124,58,237,0.1)]">
        <div>
          <div className="font-display font-extrabold gradient-text-gold text-lg">
            <AnimatedNumber value={producer.followers} />
          </div>
          <div className="font-mono text-[8px] text-[#48486a] tracking-[0.2em] uppercase mt-1">Followers</div>
        </div>
        <div>
          <div className="font-display font-extrabold text-[#eeeeff] text-lg">{trackCount}</div>
          <div className="font-mono text-[8px] text-[#48486a] tracking-[0.2em] uppercase mt-1">Tracks</div>
        </div>
      </div>
    </div>
  );
}

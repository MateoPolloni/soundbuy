import RevealOnScroll from '@/components/ui/RevealOnScroll';

const tiers = [
  {
    name: 'Basic License',
    summary: 'Non-exclusive rights for independent and early-stage releases.',
    points: [
      'Delivered as MP3 (320kbps)',
      'Up to 100,000 combined streams across all platforms',
      'One music video, including monetized YouTube uploads',
      'No radio or broadcast rights',
      'Track remains available to other buyers',
    ],
  },
  {
    name: 'Premium License',
    summary: 'Non-exclusive rights for releases expecting wide distribution.',
    points: [
      'Delivered as WAV and MP3',
      'Unlimited streams across all platforms',
      'Unlimited music videos',
      'Radio and broadcast rights included',
      'Track remains available to other buyers',
    ],
  },
  {
    name: 'Exclusive License',
    summary: 'Full, permanent ownership transfer for the licensed track.',
    points: [
      'Delivered as WAV, MP3, and individual stems',
      'All rights described above, without limitation',
      'Track is permanently removed from the SoundBuy catalog',
      'You become the only party authorized to use the composition',
      'Original producer retains songwriting credit only',
    ],
  },
];

const general = [
  {
    title: 'What every license covers',
    body: 'All licenses on SoundBuy grant the right to use the licensed audio in a derivative work — meaning combined with vocals, dialogue, or other original content. A license is not a sale of the underlying composition unless you\'ve purchased an Exclusive tier.',
  },
  {
    title: 'What no license covers',
    body: 'No license — at any tier — grants resale rights to the unmodified audio file. You may not redistribute, re-license, or upload the instrumental itself (without your original content layered on top) to any other marketplace, sample pack, or library.',
  },
  {
    title: 'Attribution',
    body: 'Crediting the producer is appreciated but not contractually required at any license tier. Many buyers choose to credit voluntarily; we encourage it but don\'t enforce it.',
  },
  {
    title: 'Upgrading a license',
    body: 'If you\'ve purchased a Basic or Premium license and later need broader rights, contact us with your order number. We apply the price difference toward the higher tier rather than requiring a full repurchase.',
  },
  {
    title: 'Disputes and takedowns',
    body: 'If a platform flags your release over licensing, your SoundBuy purchase receipt serves as proof of rights. Contact our support team and we\'ll provide documentation directly to the platform in question.',
  },
];

export default function LicensingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-8 md:px-14">

        <RevealOnScroll>
          <div className="mb-16">
            <div className="section-label">Legal</div>
            <h1
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance mb-4"
              style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
            >
              <span className="text-[#eeeeff]">Licensing</span>{' '}
              <span className="text-outline-sm">Terms</span>
            </h1>
            <p className="font-mono text-[10px] text-[#48486a] tracking-[0.15em] uppercase">
              Last updated June 1, 2026
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-4 mb-20">
          {tiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={i * 90}>
              <div className="card-surface p-8">
                <h2 className="font-display font-extrabold text-xl tracking-tight text-[#eeeeff] mb-2">
                  {tier.name}
                </h2>
                <p className="text-sm text-[#8080a8] mb-5">{tier.summary}</p>
                <ul className="space-y-2.5">
                  {tier.points.map(p => (
                    <li key={p} className="text-sm text-[#48486a] flex items-start gap-2.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="mb-8">
            <div className="section-label">General Terms</div>
            <h2
              className="font-display font-extrabold leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              The fine print, in plain language
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-8">
          {general.map((g, i) => (
            <RevealOnScroll key={g.title} delay={i * 70}>
              <div className="pb-8 border-b border-[rgba(124,58,237,0.1)] last:border-0">
                <h3 className="font-display font-bold text-base text-[#eeeeff] mb-2.5">{g.title}</h3>
                <p className="text-sm text-[#8080a8] leading-relaxed">{g.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

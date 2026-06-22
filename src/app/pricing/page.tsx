import Link from 'next/link';
import { tracks } from '@/lib/data/tracks';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import FAQItem from '@/components/ui/FAQItem';
import Price from '@/components/ui/Price';

type LicenseKey = 'basic' | 'premium' | 'exclusive';

function minPrice(key: LicenseKey) {
  return Math.min(...tracks.map(t => t.licenses[key]));
}

const tiers: { id: LicenseKey; name: string; description: string; features: string[]; popular: boolean }[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'For demos, mixtapes, and early-stage projects.',
    features: ['MP3 download', 'Up to 100k streams', 'Non-exclusive use', '1 music video', 'No credit required'],
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'For releases that need unlimited reach.',
    features: ['WAV + MP3 download', 'Unlimited streams', 'Non-exclusive use', 'Unlimited music videos', 'Radio broadcast rights'],
    popular: true,
  },
  {
    id: 'exclusive',
    name: 'Exclusive',
    description: 'Full ownership. The track is yours alone.',
    features: ['WAV + MP3 + Stems', 'Full ownership rights', 'Exclusive forever', 'All commercial rights', 'Track removed from sale'],
    popular: false,
  },
];

const faqs = [
  {
    q: 'What does a license actually include?',
    a: 'Every license grants you commercial usage rights to the audio file based on its tier — file format, streaming limits, and broadcast rights all scale with the license you choose. Full terms are included with every download.',
  },
  {
    q: 'Can I use a Basic license on monetized YouTube videos?',
    a: 'Yes. Basic licenses cover one music video and up to 100k total streams across platforms, including monetized YouTube content, as long as you stay within that streaming cap.',
  },
  {
    q: "What's the real difference between Premium and Exclusive?",
    a: 'Premium gives you unlimited streams and broadcast rights, but the track stays available for other buyers. Exclusive removes the track from sale entirely — you become the only person who can ever use it.',
  },
  {
    q: 'Do you offer refunds after download?',
    a: 'Because licensed files are delivered instantly, we don’t offer refunds once a download has completed. If a file is corrupted or doesn’t match the preview, contact us and we’ll resolve it.',
  },
  {
    q: 'Can I upgrade a license after purchase?',
    a: 'Yes — contact us with your order details and we’ll apply the price difference toward a higher tier on the same track.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">

        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center"><span>Simple, Transparent</span></div>
            <h1
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              <span className="text-[#eeeeff]">Choose Your</span>
              <br />
              <span className="text-outline-sm">License</span>
            </h1>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {tiers.map((tier, i) => (
            <RevealOnScroll key={tier.id} delay={i * 100}>
              <div
                className={`card-surface p-8 relative flex flex-col h-full ${
                  tier.popular ? '!border-[rgba(124,58,237,0.5)]' : ''
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-display text-[8px] font-extrabold tracking-[0.2em] uppercase bg-[#7c3aed] text-white px-3 py-1 whitespace-nowrap">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display font-extrabold text-2xl tracking-tight text-[#eeeeff] mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-[#8080a8] mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="font-display font-extrabold gradient-text-gold text-3xl">
                    <Price value={minPrice(tier.id)} />
                  </span>
                  <span className="font-mono text-[10px] text-[#48486a] ml-2 uppercase tracking-widest">starting</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map(f => (
                    <li key={f} className="text-sm text-[#8080a8] flex items-center gap-2.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" className="flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/browse" className={`justify-center ${tier.popular ? 'btn-primary' : 'btn-ghost'}`}>
                  Browse Tracks
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="max-w-3xl mx-auto">
            <div className="section-label justify-center"><span>Questions</span></div>
            <h2
              className="font-display font-extrabold text-balance text-center mb-10"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              Frequently Asked
            </h2>
            <div className="space-y-3">
              {faqs.map(f => <FAQItem key={f.q} question={f.q} answer={f.a} />)}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

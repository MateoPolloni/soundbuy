import RevealOnScroll from '@/components/ui/RevealOnScroll';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import ApplyForm from '@/components/ui/ApplyForm';

const steps = [
  {
    number: '01',
    title: 'Upload Your Catalog',
    description: 'Submit your best instrumentals, beats, and sound design. We review every submission for quality and originality.',
  },
  {
    number: '02',
    title: 'Set Your Pricing',
    description: 'Choose your own rates across Basic, Premium, and Exclusive tiers. You stay in full control of your catalog.',
  },
  {
    number: '03',
    title: 'Get Paid',
    description: 'Earn 85% of every sale, paid out monthly directly to your account. No hidden fees, no surprises.',
  },
];

const stats = [
  { label: 'Active Producers', value: 3400, suffix: '+' },
  { label: 'Avg. Monthly Payout', value: 1240, prefix: '$' },
  { label: 'Tracks Sold This Month', value: 8900, suffix: '+' },
];

export default function SellPage() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">

        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label">For Producers</div>
            <h1
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance mb-6"
              style={{ fontSize: 'clamp(40px, 7vw, 84px)' }}
            >
              <span className="text-outline-sm">Turn Your Sound</span>
              <br />
              <span className="gradient-text glow-text">Into Income</span>
            </h1>
            <p className="text-[#8080a8] text-base leading-relaxed max-w-md">
              Join thousands of producers earning real revenue from tracks they
              already made. No gatekeepers, no exclusivity required.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-wrap gap-10 md:gap-16 mb-24 pb-10 border-b border-[rgba(124,58,237,0.12)]">
            {stats.map(s => (
              <div key={s.label}>
                <div
                  className="font-display font-extrabold gradient-text-gold"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
                >
                  <AnimatedNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#48486a] mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.35)] to-transparent" />
          {steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 120}>
              <div className="card-surface p-8 relative group h-full">
                <div
                  className="absolute top-4 right-5 font-display font-extrabold text-[#7c3aed]/[0.06] leading-none pointer-events-none select-none"
                  style={{ fontSize: 80 }}
                >
                  {step.number}
                </div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-[#7c3aed] mb-5 uppercase">
                  {step.number}
                </div>
                <h3 className="font-display font-extrabold text-xl tracking-tight text-[#eeeeff] mb-3 group-hover:text-[#c084fc] transition-colors duration-400">
                  {step.title}
                </h3>
                <p className="text-sm text-[#48486a] leading-relaxed">{step.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#7c3aed] group-hover:w-full transition-all duration-500" />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="max-w-xl">
            <div className="section-label">Apply Now</div>
            <h2
              className="font-display font-extrabold text-balance mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              Ready to join the roster?
            </h2>
            <ApplyForm />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

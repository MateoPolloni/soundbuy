import RevealOnScroll from '@/components/ui/RevealOnScroll';

const steps = [
  {
    number: '01',
    title: 'Browse & Preview',
    description: 'Explore premium tracks filtered by genre, BPM, key, and mood. Hear the energy before you commit.',
  },
  {
    number: '02',
    title: 'License & Download',
    description: 'Choose Basic, Premium, or Exclusive. Every license includes instant download and full documentation.',
  },
  {
    number: '03',
    title: 'Create & Release',
    description: 'Use your track commercially with confidence. Rights are yours from the moment of purchase.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">
        <RevealOnScroll>
          <div className="mb-16 text-center">
            <div className="section-label justify-center">
              <span>Simple Process</span>
            </div>
            <h2
              className="font-display font-extrabold leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              <span className="text-[#eeeeff]">How It</span>{' '}
              <span className="text-outline-sm">Works</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.35)] to-transparent" />

          {steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 120}>
              <div className="card-surface p-8 relative group">
                {/* Big background number */}
                <div
                  className="absolute top-4 right-5 font-display font-extrabold text-[#7c3aed]/[0.06] leading-none pointer-events-none select-none"
                  style={{ fontSize: 80 }}
                >
                  {step.number}
                </div>

                {/* Foreground number */}
                <div className="font-mono text-[10px] tracking-[0.3em] text-[#7c3aed] mb-5 uppercase">
                  {step.number}
                </div>

                <h3 className="font-display font-extrabold text-xl tracking-tight text-[#eeeeff] mb-3 group-hover:text-[#c084fc] transition-colors duration-400">
                  {step.title}
                </h3>

                <p className="text-sm text-[#48486a] leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#7c3aed] group-hover:w-full transition-all duration-500" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

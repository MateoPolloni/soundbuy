import RevealOnScroll from '@/components/ui/RevealOnScroll';
import ContactForm from '@/components/ui/ContactForm';

const channels = [
  { label: 'General Support', value: 'support@soundbuy.app' },
  { label: 'Producer Relations', value: 'producers@soundbuy.app' },
  { label: 'Press & Partnerships', value: 'press@soundbuy.app' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-8 md:px-14">

        <RevealOnScroll>
          <div className="max-w-xl mb-16">
            <div className="section-label">Get in Touch</div>
            <h1
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance mb-5"
              style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
            >
              <span className="text-[#eeeeff]">Let&apos;s</span>{' '}
              <span className="text-outline-sm">Talk</span>
            </h1>
            <p className="text-[#8080a8] text-base leading-relaxed">
              Questions about a license, a producer application, or anything else —
              we read every message and respond within 2 business days.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <RevealOnScroll>
              <ContactForm />
            </RevealOnScroll>
          </div>

          <div>
            <RevealOnScroll delay={100}>
              <div className="card-surface p-7">
                <h3 className="font-display font-extrabold text-sm tracking-[0.1em] uppercase text-[#8080a8] mb-6">
                  Direct Channels
                </h3>
                <div className="space-y-5">
                  {channels.map(c => (
                    <div key={c.label}>
                      <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#48486a] mb-1.5">
                        {c.label}
                      </div>
                      <div className="text-sm text-[#c084fc]">{c.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(124,58,237,0.1)]">
                  <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#48486a] mb-1.5">
                    Response Time
                  </div>
                  <div className="text-sm text-[#8080a8]">Within 2 business days</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

import RevealOnScroll from '@/components/ui/RevealOnScroll';

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly — account details, billing information, and any content you submit as a producer. We also collect usage data automatically: pages visited, tracks previewed, and general device information used to keep the platform secure and performant.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Account data is used to process licenses, deliver purchased files, and pay out producer earnings. Usage data helps us understand which features matter, fix what\'s broken, and recommend tracks relevant to what you\'ve already browsed.',
  },
  {
    title: 'Cookies',
    body: 'SoundBuy uses essential cookies to keep you signed in and remember your cart contents. We do not use third-party advertising cookies or sell browsing data to ad networks.',
  },
  {
    title: 'Third-Party Services',
    body: 'Payment processing is handled by PCI-compliant third-party providers — we never store raw card numbers on our own servers. Audio delivery may be served through a content delivery network for performance, which can log standard request metadata.',
  },
  {
    title: 'Data Retention',
    body: 'Purchase records are retained for as long as your account is active, plus the period required by applicable tax law. You may request account deletion at any time; license purchase history is retained in anonymized form for legal compliance.',
  },
  {
    title: 'Your Rights',
    body: 'You can request a copy of the personal data we hold about you, ask us to correct inaccuracies, or request deletion of your account. Depending on your jurisdiction, you may have additional rights under regulations such as GDPR or CCPA.',
  },
  {
    title: 'Children\'s Privacy',
    body: 'SoundBuy is not directed at individuals under 16. We do not knowingly collect personal information from children. If you believe a minor has provided us data, contact us and we will remove it.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We\'ll update the date below whenever this policy changes materially. Continued use of SoundBuy after an update constitutes acceptance of the revised terms.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-8 md:px-14">

        <RevealOnScroll>
          <div className="mb-16">
            <div className="section-label">Legal</div>
            <h1
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance mb-4"
              style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
            >
              <span className="text-[#eeeeff]">Privacy</span>{' '}
              <span className="text-outline-sm">Policy</span>
            </h1>
            <p className="font-mono text-[10px] text-[#48486a] tracking-[0.15em] uppercase">
              Last updated June 1, 2026
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="text-[#8080a8] text-[15px] leading-relaxed mb-14">
            This policy explains what information SoundBuy collects, how it&apos;s used,
            and what control you have over it. We&apos;ve tried to write it the way
            we&apos;d want to read it ourselves — without the legal padding that makes
            most privacy policies unreadable.
          </p>
        </RevealOnScroll>

        <div className="space-y-9">
          {sections.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 60}>
              <div className="pb-9 border-b border-[rgba(124,58,237,0.1)] last:border-0">
                <h2 className="font-display font-extrabold text-lg tracking-tight text-[#eeeeff] mb-3">
                  {s.title}
                </h2>
                <p className="text-sm text-[#8080a8] leading-relaxed">{s.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <p className="text-sm text-[#48486a] mt-10">
            Questions about this policy? Reach us through the{' '}
            <a href="/contact" className="text-[#7c3aed] hover:text-[#c084fc] transition-colors duration-300">
              contact page
            </a>.
          </p>
        </RevealOnScroll>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(124,58,237,0.12)] bg-[#06060a] mt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display font-extrabold text-xl tracking-[0.16em] gradient-text mb-5">
              SOUNDBUY
            </div>
            <p className="text-[#48486a] text-sm leading-relaxed max-w-[260px]">
              The premier marketplace for premium instrumentals,
              beats, and sound effects. Built for creators who
              refuse to settle.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-[8px] tracking-[0.3em] uppercase text-[#8080a8] mb-6">
              Marketplace
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Browse Tracks', href: '/browse' },
                { label: 'New Releases', href: '/browse' },
                { label: 'Producers', href: '/producers' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Start Selling', href: '/sell' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs text-[#48486a] hover:text-[#c084fc] transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-[8px] tracking-[0.3em] uppercase text-[#8080a8] mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Licensing Terms', href: '/licensing' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Contact', href: '/contact' },
                { label: 'Blog', href: '/blog' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs text-[#48486a] hover:text-[#c084fc] transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[rgba(124,58,237,0.08)] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[9px] text-[#48486a] tracking-[0.15em]">
            © 2026 SOUNDBUY — ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[9px] text-[#48486a] tracking-[0.1em]">
            Designed &amp; Developed by{' '}
            <span className="text-[#8080a8] hover:text-[#c084fc] transition-colors duration-300 cursor-default">
              Mateo Polloni
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

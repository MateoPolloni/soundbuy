import Link from 'next/link';
import LoginForm from '@/components/ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">

      {/* Left visual panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-[#06060a]" />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 620, height: 620, left: '50%', top: '45%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 68%)',
            filter: 'blur(70px)',
            animation: 'orb-breathe 12s ease-in-out infinite, orb-drift 24s ease-in-out infinite',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(124,58,237,1) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,1) 1px,transparent 1px)',
            backgroundSize: '58px 58px',
          }}
        />

        <div className="relative z-10 text-center px-14">
          <Link href="/" className="font-display font-extrabold text-2xl tracking-[0.16em] gradient-text glow-text">
            SOUNDBUY
          </Link>
          <p className="mt-7 text-[#8080a8] text-sm leading-relaxed max-w-xs mx-auto">
            Where sound becomes currency. Sign in to manage your licenses,
            downloads, and sales.
          </p>

          <div className="mt-12 flex items-center justify-center gap-1.5">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-[#7c3aed] wave-bar-anim opacity-40"
                style={{
                  height: `${Math.round((8 + Math.abs(Math.sin(i * 0.5)) * 26) * 100) / 100}px`,
                  '--dur': `${0.8 + (i % 6) * 0.12}s`,
                  '--delay': `${(i % 8) * 0.08}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-8 py-28 relative">
        <div className="w-full max-w-sm relative z-10">

          <div className="lg:hidden text-center mb-12">
            <Link href="/" className="font-display font-extrabold text-xl tracking-[0.16em] gradient-text">
              SOUNDBUY
            </Link>
          </div>

          <div className="section-label">Welcome Back</div>
          <h1
            className="font-display font-extrabold leading-[1.15] text-balance mb-3 text-[#eeeeff]"
            style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
          >
            Sign In
          </h1>
          <p className="text-sm text-[#48486a] mb-10">
            New here?{' '}
            <Link href="/sell" className="text-[#7c3aed] hover:text-[#c084fc] transition-colors duration-300">
              Start selling
            </Link>{' '}
            or just{' '}
            <Link href="/browse" className="text-[#7c3aed] hover:text-[#c084fc] transition-colors duration-300">
              browse the catalog
            </Link>
            .
          </p>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}

import RevealOnScroll from '@/components/ui/RevealOnScroll';

const posts = [
  {
    title: 'How to Price Your Beats in 2026',
    excerpt: 'A breakdown of how the most successful producers on SoundBuy structure their Basic, Premium, and Exclusive tiers — and why underpricing hurts everyone.',
    category: 'Producer Tips',
    date: 'Jun 18, 2026',
    readTime: '6 min',
    gradient: 'linear-gradient(135deg, #1a0a35 0%, #3d1f8a 50%, #06060a 100%)',
  },
  {
    title: 'Behind the Boards: A Conversation with NOVA',
    excerpt: 'We sat down with NOVA to talk about building atmosphere into trap production, and why restraint matters more than 808 volume.',
    category: 'Producer Spotlight',
    date: 'Jun 10, 2026',
    readTime: '9 min',
    gradient: 'linear-gradient(135deg, #2d0030 0%, #7c3aed 60%, #1a0a35 100%)',
  },
  {
    title: 'Understanding Music Licensing as an Independent Artist',
    excerpt: 'Basic, Premium, Exclusive — what the tiers actually mean for your release, and the mistakes that get independent artists into trouble.',
    category: 'Guides',
    date: 'Jun 2, 2026',
    readTime: '8 min',
    gradient: 'linear-gradient(135deg, #06060a 0%, #1e1040 40%, #3d1f8a 100%)',
  },
  {
    title: '5 Mixing Tricks for Modern Trap Productions',
    excerpt: 'How top SoundBuy producers carve space for vocals without losing low-end weight — practical techniques, not theory.',
    category: 'Production',
    date: 'May 26, 2026',
    readTime: '7 min',
    gradient: 'linear-gradient(135deg, #0d0020 0%, #1a0a35 40%, #5b1a8a 100%)',
  },
  {
    title: 'The Producer\'s Guide to Building a Sustainable Catalog',
    excerpt: 'Why dropping 200 mediocre beats a month performs worse than 10 carefully finished ones — a look at the data from our top earners.',
    category: 'Producer Tips',
    date: 'May 14, 2026',
    readTime: '10 min',
    gradient: 'linear-gradient(135deg, #180020 0%, #4d0070 55%, #1a0a35 100%)',
  },
  {
    title: 'Inside SoundBuy: Why We Cap Catalog Growth',
    excerpt: 'A look at our review process and why we turn down roughly 40% of producer applications — and what that protects for buyers.',
    category: 'Company',
    date: 'May 3, 2026',
    readTime: '5 min',
    gradient: 'linear-gradient(135deg, #040410 0%, #1a0a35 55%, #0d2040 100%)',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">

        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <div className="section-label">Notes & Guides</div>
            <h1
              className="font-display font-extrabold leading-[1.15] tracking-tight text-balance"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              <span className="text-[#eeeeff]">From the</span>{' '}
              <span className="text-outline-sm">SoundBuy</span>{' '}
              <span className="gradient-text">Desk</span>
            </h1>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <RevealOnScroll key={post.title} delay={i * 80}>
              <article className="card-surface overflow-hidden h-full flex flex-col">
                <div
                  className="relative h-36"
                  style={{ background: post.gradient }}
                >
                  <span className="absolute top-3 left-3 font-display text-[8px] font-extrabold tracking-[0.2em] uppercase bg-[#06060a]/60 backdrop-blur-sm text-[#eeeeff] px-2.5 py-1 whitespace-nowrap">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display font-extrabold text-base leading-normal tracking-tight text-[#eeeeff] mb-2.5 text-balance">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#48486a] leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 font-mono text-[9px] text-[#48486a] tracking-[0.1em] uppercase pt-4 border-t border-[rgba(124,58,237,0.1)]">
                    <span>{post.date}</span>
                    <span className="text-[#3d1f8a]">·</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

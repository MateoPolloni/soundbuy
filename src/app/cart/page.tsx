'use client';

import Link from 'next/link';
import { useCart } from '@/lib/context/CartContext';
import Price from '@/components/ui/Price';

export default function CartPage() {
  const { items, removeFromCart, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="font-display text-7xl font-extrabold text-outline-sm mb-6">♪</div>
          <h1 className="font-display font-extrabold text-3xl tracking-tight text-[#eeeeff] mb-2">
            Your cart is empty
          </h1>
          <p className="text-[#48486a] mb-8 text-sm">Discover tracks worth licensing</p>
          <Link href="/browse" className="btn-primary">Browse Tracks</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-8 md:px-14">
        <div className="mb-12">
          <div className="section-label">Checkout</div>
          <h1
            className="font-display font-extrabold leading-[1.15] tracking-tight text-[#eeeeff] mb-2"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Your Cart
          </h1>
          <p className="text-[#48486a] text-sm font-mono">
            {items.length} license{items.length !== 1 ? 's' : ''} selected
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map(item => (
              <div key={item.track.id} className="card-surface p-4 flex gap-4 items-center">
                <div className="w-14 h-14 flex-shrink-0" style={{ background: item.track.coverGradient }} />
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/track/${item.track.id}`}
                    className="font-display font-bold text-[#eeeeff] hover:text-[#c084fc] transition-colors duration-300 block truncate text-sm tracking-tight"
                  >
                    {item.track.title}
                  </Link>
                  <p className="font-mono text-[10px] text-[#48486a] tracking-[0.1em] uppercase mt-0.5">
                    {item.track.producer}
                  </p>
                  <span className="font-display text-[8px] font-extrabold uppercase tracking-[0.2em] bg-[rgba(124,58,237,0.12)] text-[#8080a8] px-2 py-1 mt-1.5 inline-block whitespace-nowrap">
                    {item.licenseType} license
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className="font-mono font-bold gradient-text-gold"><Price value={item.price} /></span>
                  <button
                    onClick={() => removeFromCart(item.track.id)}
                    className="font-mono text-[9px] text-[#48486a] hover:text-red-400 transition-colors uppercase tracking-widest"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <div className="card-surface p-6 sticky top-28">
              <h2 className="font-display font-extrabold text-lg tracking-tight text-[#eeeeff] mb-5">
                Order Summary
              </h2>

              <div className="space-y-2 mb-4 pb-4 border-b border-[rgba(124,58,237,0.1)]">
                {items.map(item => (
                  <div key={item.track.id} className="flex justify-between text-sm">
                    <span className="text-[#8080a8] truncate mr-4 text-xs">{item.track.title}</span>
                    <span className="text-[#eeeeff] flex-shrink-0 text-xs font-mono"><Price value={item.price} /></span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-baseline font-semibold mb-6">
                <span className="font-display font-bold text-[#eeeeff]">Total</span>
                <span className="font-mono gradient-text-gold text-2xl"><Price value={total} /></span>
              </div>

              <button className="w-full btn-primary justify-center mb-3">
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full font-mono text-[9px] text-[#48486a] hover:text-[#8080a8] transition-colors py-2 uppercase tracking-widest"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

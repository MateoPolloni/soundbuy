'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Track } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (track: Track, licenseType: 'basic' | 'premium' | 'exclusive') => void;
  removeFromCart: (trackId: string) => void;
  clearCart: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (track: Track, licenseType: 'basic' | 'premium' | 'exclusive') => {
    const price = track.licenses[licenseType];
    setItems(prev => {
      const existing = prev.find(i => i.track.id === track.id);
      if (existing) {
        return prev.map(i => i.track.id === track.id ? { ...i, licenseType, price } : i);
      }
      return [...prev, { track, licenseType, price }];
    });
  };

  const removeFromCart = (trackId: string) => {
    setItems(prev => prev.filter(i => i.track.id !== trackId));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.price, 0);
  const count = items.length;

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

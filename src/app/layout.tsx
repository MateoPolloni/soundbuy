import type { Metadata } from 'next';
import { Bricolage_Grotesque, Space_Grotesk, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CursorGlow from '@/components/ui/CursorGlow';
import { CartProvider } from '@/lib/context/CartContext';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SoundBuy — Premium Music Marketplace',
  description: 'License premium instrumentals, beats, and sound effects from world-class producers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#06060a] text-[#eeeeff] antialiased">
        <CartProvider>
          <CursorGlow />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

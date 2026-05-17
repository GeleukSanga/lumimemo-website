'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Gallery = dynamic(() => import('@/components/Gallery'));
const Emotional = dynamic(() => import('@/components/Emotional'));
const CTASection = dynamic(() => import('@/components/CTASection'));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <Emotional />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

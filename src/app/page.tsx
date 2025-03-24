import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { FeaturedCollections } from '@/components/FeaturedCollections';

export const metadata: Metadata = {
  title: 'M.A.D - Most Affordable Designs | Premium Fashion Store',
  description: 'Discover the perfect blend of style and affordability at M.A.D. Shop our latest collections of premium fashion that doesn\'t break the bank.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCollections />
    </main>
  );
}

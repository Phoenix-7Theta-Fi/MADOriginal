import { Metadata } from 'next';
import { AboutHero } from '@/components/AboutHero';
import { StorySection } from '@/components/StorySection';
import { ValuesGrid } from '@/components/ValuesGrid';

export const metadata: Metadata = {
  title: 'About | M.A.D - Most Affordable Designs',
  description: 'Discover our story and values. M.A.D brings you premium fashion at affordable prices without compromising on quality or style.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 text-black"> {/* pt-16 to account for fixed navbar */}
      <AboutHero />
      <StorySection />
      <ValuesGrid />
    </main>
  );
}

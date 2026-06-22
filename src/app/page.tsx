import Hero from '@/components/sections/Hero';
import Marquee from '@/components/ui/Marquee';
import FeaturedTracks from '@/components/sections/FeaturedTracks';
import MoodCategories from '@/components/sections/MoodCategories';
import HowItWorks from '@/components/sections/HowItWorks';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedTracks />
      <MoodCategories />
      <HowItWorks />
    </>
  );
}

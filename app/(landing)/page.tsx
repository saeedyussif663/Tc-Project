import Benefits from '@/components/landing/Benefits';
import FAQs from '@/components/landing/FAQs';
import HeroSection from '@/components/landing/HeroSection';

export default function Home() {
  return (
    <main className="pb-10">
      <HeroSection />
      <Benefits />
      <FAQs />
    </main>
  );
}

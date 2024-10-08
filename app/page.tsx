import Benefits from '@/components/landing/Benefits';
import FAQs from '@/components/landing/FAQs';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl overflow-x-hidden pb-10">
      <Header />
      <HeroSection />
      <Benefits />
      <FAQs />
      <Footer />
    </main>
  );
}

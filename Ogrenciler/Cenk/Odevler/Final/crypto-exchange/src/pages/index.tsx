import Hero from '@/components/sections/Hero';
import CryptoList from '@/components/sections/CryptoList';
import MarketUpdate from '@/components/sections/MarketUpdate';
import HowItWorks from '@/components/sections/HowItWorks';
import About from '@/components/sections/About';
import DownloadApp from '@/components/sections/DownloadApp';
import Testimonials from '@/components/sections/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CryptoList />
      <MarketUpdate />
      <HowItWorks />
      <About />
      <DownloadApp />
      <Testimonials />
    </>
  );
}

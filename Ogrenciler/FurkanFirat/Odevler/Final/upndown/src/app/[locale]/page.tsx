import DownloadApp from '@/components/Home/DownloadApp/DownloadApp';
import About from '@/components/Home/About/About';
import CryptoList from '@/components/Home/CryptoList/CryptoList';
import HowItWork from '@/components/Home/HowItWork/HowItWork';
import MarketUpdateTable from '@/components/Home/MarketUpdateTable/MarketUpdateTable';
import Slider from '@/components/Home/Slider/Slider';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import CallToAction from '@/components/Home/CallToAction/CallToAction';

export default function HomePage() {
  return (
    <>
      <Slider />
      <CryptoList />
      <MarketUpdateTable />
      <HowItWork />
      <About />
      <DownloadApp />
      <Testimonials />
      <CallToAction />
    </>
  );
}

import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import CryptoList from '@/components/sections/CryptoList';
import MarketUpdate from '@/components/sections/MarketUpdate';

export default function HomePage() {
  return (
    <Layout>
        <Hero />
      <CryptoList />
      <MarketUpdate/>
    </Layout>
  );
}

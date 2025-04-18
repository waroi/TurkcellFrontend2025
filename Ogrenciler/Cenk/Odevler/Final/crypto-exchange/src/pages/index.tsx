import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import CryptoList from '@/components/sections/CryptoList';

export default function HomePage() {
  return (
    <Layout>
        <Hero />
              <CryptoList />
    </Layout>
  );
}

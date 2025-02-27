import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Products from '../src/components/Products';

export default function HomeView() {
  return (
    <>
      <Hero />
      <Header text={'YENİ GELENLER'} />
      <Products />
    </>
  );
}

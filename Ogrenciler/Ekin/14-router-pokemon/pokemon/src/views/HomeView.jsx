import Header from "../components/Header";
import Pokemons from "../components/Pokemons";
import Marquee from "../components/Marquee";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";

export default function HomeView() {
  return (
    <>
      <Header />
      <Pokemons />
      <Marquee />
      <AboutUs />
      <FAQ />
    </>
  );
}

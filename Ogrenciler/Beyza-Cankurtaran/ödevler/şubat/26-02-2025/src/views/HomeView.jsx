import Header from "../components/Header/header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/about";
import BestSeller from "../components/BestSeller/bestSeller";
import Product from "../components/Product/product";
import Footer from "../components/Footer/Footer";
import { useRef } from "react";
const HomeView = () => {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRef = {
      about: aboutRef,
      products: productsRef,
      contact: contactRef,
    }[section];

    sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Banner />
      <About scrollToSection={scrollToSection} />
      <BestSeller scrollToSection={scrollToSection} />
      <Product scrollToSection={scrollToSection} />
      <Footer />
    </>
  );
};

export default HomeView;

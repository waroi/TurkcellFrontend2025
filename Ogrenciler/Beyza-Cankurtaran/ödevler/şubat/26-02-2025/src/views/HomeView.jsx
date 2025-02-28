import Header from "../components/Header/header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/about";
import BestSeller from "../components/BestSeller/bestSeller";
import Product from "../components/Product/product";
import Footer from "../components/Footer/Footer";
import { useRef } from "react";
const HomeView = ({ getirProduct, setSelector }) => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <BestSeller />
      <Product getirProduct={getirProduct} setSelector={setSelector} />
      <Footer />
    </>
  );
};

export default HomeView;

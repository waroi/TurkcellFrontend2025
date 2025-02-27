import Header from "../components/Header/header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/about";
import BestSeller from "../components/BestSeller/bestSeller";
import Product from "../components/Product/product";
import Footer from "../components/Footer/Footer";
const HomeView = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <BestSeller />
      <Product />
      <Footer />
    </>
  );
};

export default HomeView;

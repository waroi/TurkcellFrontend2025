import { useEffect } from "react";
import SSS from "../components/SSS/sss";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";

const SssView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <SSS />
      <Footer />
    </>
  );
};

export default SssView;

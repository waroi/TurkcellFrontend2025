import { useEffect } from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const ContactView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactView;

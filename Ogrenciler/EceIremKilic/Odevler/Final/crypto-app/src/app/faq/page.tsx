import React from "react";
import NavbarComponent from "@/components/organisms/Navbar/NavbarComponent";
import Footer from "@/components/organisms/Footer/Footer";
import Faq from "@/components/organisms/FAQ/Faq";
import CreateAccount from "@/components/organisms/CreateAccount/CreateAccount";
import "../../style/main.scss";

const FAQ = () => {
  return (
    <div>
      <NavbarComponent />
      <Faq />
      <CreateAccount />
      <Footer />
    </div>
  );
};

export default FAQ;

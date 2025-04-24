import CreateAccount from "@/components/organisms/CreateAccount/CreateAccount";
import DownloadApp from "@/components/organisms/DownloadApp/DownloadApp";
import Footer from "@/components/organisms/Footer/Footer";
import HowItWork from "@/components/organisms/HowItWork/HowItWork";
import ListCrypto from "@/components/organisms/ListCrypto/ListCrypto";
import MarketUpdate from "@/components/organisms/MarketUpdate/MarketUpdate";
import NavbarComponent from "@/components/organisms/Navbar/NavbarComponent";
import Slider from "@/components/organisms/Slider";
import Testimonials from "@/components/organisms/Testimonials/Testimonials";
import WhatIsRockie from "@/components/organisms/WhatIsRockie/WhatIsRockie";
import React from "react";
import "@/style/main.scss";

const HomeView = () => {
  return (
    <div>
      <NavbarComponent />
      <Slider />
      <ListCrypto />
      <MarketUpdate />
      <HowItWork />
      <WhatIsRockie />
      <DownloadApp />
      <Testimonials />
      <CreateAccount />
      <Footer />
    </div>
  );
};

export default HomeView;

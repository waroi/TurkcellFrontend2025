import LearnAndEarn from "@/components/molecules/LearnAndEarn";
import MarketTable from "@/components/molecules/MarketTable";
import Footer from "@/components/organisms/Footer/Footer";
import MarketBanner from "@/components/organisms/MarketBanner/MarketBanner";
import MarketListCrypto from "@/components/organisms/MarketListCrypto/MarketListCrypto";
import NavbarComponent from "@/components/organisms/Navbar/NavbarComponent";
import "../../style/main.scss";

import React from "react";

const Market = () => {
  return (
    <div>
      <NavbarComponent />
      <MarketBanner />
      <MarketListCrypto />
      <MarketTable />
      <LearnAndEarn />
      <Footer />
    </div>
  );
};

export default Market;

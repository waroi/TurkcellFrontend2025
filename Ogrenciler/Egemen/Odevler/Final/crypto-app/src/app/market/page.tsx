import React from "react";
import Slider from "../pages/todaysMarket/components/organism/slider/Slider";
import ListCrypto from "../pages/todaysMarket/components/organism/listcrypto/ListCrypto";
import MarketTrends from "../pages/todaysMarket/components/organism/markettrends/MarketTrends";
import LearnEarnBlog from "../pages/todaysMarket/components/organism/LearnEarnBlog/LearnEarnBlog";

const Market = () => {
  return (
    <>
      <Slider />
      <ListCrypto />
      <MarketTrends />
      <LearnEarnBlog />
    </>
  );
};

export default Market;

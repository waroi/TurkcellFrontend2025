import React from "react";
import HeaderView from "./HeaderView";
import HeroController from "../controller/HeroController";
import NewsletterController from "../controller/NewsletterController";
import FooterView from "./FooterView";

const HomeView = () => {
  return (
    <>
      <HeaderView />
      <HeroController />
      <NewsletterController />
      <FooterView />
    </>
  );
};

export default HomeView;

import React from "react";
import NavbarView from "../components/NavbarView";
import BannerView from "../components/BannerView";
import BooksView from "../components/BooksView";
import SpecialOfferView from "../components/SpecialOfferView";
import SubscribeView from "../components/SubscribeView";
import Footer from "../components/FooterView";
import "../App.scss";

const Home = () => {
  return (
    <>
      <NavbarView />
      <BannerView />
      <BooksView />
      <SpecialOfferView />
      <SubscribeView />
      <Footer />
    </>
  );
};

export default Home;

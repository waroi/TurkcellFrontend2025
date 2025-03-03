import React from "react";
import banner from "../assets/banner.png";
import "bootstrap/dist/css/bootstrap.css";

const BannerView = () => {
  return (
    <div className="container-fluid">
      <img src={banner} alt="banner-logo" className="w-100" />
      <div className="row">
        <div className="offer">
          <img
            src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-4.png?v=1613723084&width=275"
            alt="free-shipping"
          />
          <p>Free Shipping</p>
        </div>
        <div className="offer">
          <img
            src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-3.png?v=1613723084&width=275"
            alt="secure-payment"
          />
          <p>Secure Payment</p>
        </div>
        <div className="offer">
          <img
            src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-2.png?v=1613723084&width=275"
            alt="best-price"
          />
          <p>Best Price</p>
        </div>
        <div className="offer">
          <img
            src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-1.png?v=1613723084&width=275"
            alt="free-return"
          />
          <p>Free Return</p>
        </div>
      </div>
    </div>
  );
};

export default BannerView;

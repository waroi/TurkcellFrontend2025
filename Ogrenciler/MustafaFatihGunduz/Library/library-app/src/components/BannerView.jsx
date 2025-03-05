import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import banner from "../assets/banner.png";

const BannerView = () => {
  return (
    <section className="w-100 ">
      <img src={banner} alt="banner-logo" className="w-100" />
      <div className="p-4 mb-4 offer-section w-100 ">
        <div className="container d-flex align-items-center justify-content-around">
          <div className="offer text-white d-flex flex-column align-items-center justify-content-center gap-2">
            <img
              src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-4.png?v=1613723084&width=275"
              alt="free-shipping"
            />
            <p>Bedava Kargo</p>
          </div>
          <div className="offer text-white d-flex flex-column align-items-center justify-content-center gap-2">
            <img
              src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-3.png?v=1613723084&width=275"
              alt="secure-payment"
            />
            <p>Güvenli Ödeme</p>
          </div>
          <div className="offer text-white d-flex flex-column align-items-center justify-content-center gap-2">
            <img
              src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-2.png?v=1613723084&width=275"
              alt="best-price"
            />
            <p>En iyi Fiyat</p>
          </div>
          <div className="offer text-white d-flex flex-column align-items-center justify-content-center gap-2">
            <img
              src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-1.png?v=1613723084&width=275"
              alt="free-return"
            />
            <p>Ücretsiz İade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerView;

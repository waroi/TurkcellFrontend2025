import React from "react";
import candle from "../../assets/candle.png";
import hp from "../../assets/hp.webp";

const Banner = () => {
  return (
    <>
      <section className="banner-wrap position-relative">
        <div className=" py-5 banner d-grid">
          <div className="candles position-relative">
            <img src={candle} alt="" className="img-fluid position-absolute" />
            <img src={candle} alt="" className="img-fluid position-absolute" />
            <img src={candle} alt="" className="img-fluid position-absolute" />
            <img src={candle} alt="" className="img-fluid position-absolute" />
          </div>
          <div className="banner-text text-center">
            <img src={hp} alt="" className="hp img-fluid" />
            <h1 className="text-white">Sihirli Dükkan'a Hoş Geldin!</h1>
          </div>
          <div className="candles position-relative">
            <img src={candle} alt="" className="img-fluid position-absolute" />
            <img src={candle} alt="" className="img-fluid position-absolute" />
            <img src={candle} alt="" className="img-fluid position-absolute" />
            <img src={candle} alt="" className="img-fluid position-absolute" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

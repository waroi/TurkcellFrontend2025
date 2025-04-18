"use client";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const categories = [
    "Crypto",
    "Defi",
    "BSC",
    "NFT",
    "Polkadot",
    "Solana",
    "Opensea",
    "Makersplace",
  ];

  return (
    <>
      <main className="container-fluid header-container">
        <div className="row  ">
          <div className="col col-lg-6 col-md-12 col-sm-12 banner-left">
            <div className="slider-text">
              <p className="slider-header">
                Buy & Sell Digital Assets In The Rocket
              </p>
              <div className="slider-subtext">
                <p className="slider-subheader">
                  Coin rocket is easiest, safest and fastest way to buy & sell
                  crypto asset exchange.
                </p>
              </div>
              <div className="custom-button">
                <button className="btn btn-primary rounded-pill start-button">
                  Get Started Now
                </button>
              </div>
              <div className="partners">
                <p className="headline-5">Our Partners</p>
              </div>
              <div className="partners-group">
                <img src="/assets/header/Group.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-white list-crypto">
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <button
                type="button"
                className="btn btn-primary btn-active rounded-pill"
              >
                Crypto
              </button>
              <button type="button" className="mx-2 btn btn-white rounded-pill">
                Defi
              </button>
              <button type="button" className="mx-2 btn btn-white rounded-pill">
                BSC
              </button>
              <button type="button" className="mx-2 btn btn-white rounded-pill">
                NFT
              </button>
              <button type="button" className="mx-2 btn btn-white rounded-pill">
                Metaverse
              </button>
              <button type="button" className="mx-2 btn btn-white rounded-pill">
                Polkadot
              </button>
              <button type="button" className="mx-2 btn btn-white rounded-pill">
                Solana
              </button>
              <button type="button" className="mx-2 btn btn-white rounded-pill">
                Opensea
              </button>
              <button type="button" className="mx-2 btn btn-white rounded-pill">
                Makersplace
              </button>
            </div>
          </div>
          <div className="d-flex gap-2 mb-4 overflow-auto">
            {categories.map((category) => (
              <button
                key={category}
                className="btn btn-outline-secondary rounded-pill"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="col col-lg-3">
            <div className="static-market d-flex flex-column">
              <div className="market-icon flex-row ">
                <Image
                  src="/assets/header/btc.svg"
                  alt="Ethereum"
                  width={24}
                  height={24}
                />
                <h3 className="market-title mx-2 mt-2">Bitcoin BTC/USD</h3>
              </div>
              <div className="market-value">$4,267.90</div>
              <div className="market-change positive">+2.22%</div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="static-market d-flex flex-column">
              <div className="market-icon d-flex flex-row">
                <Image
                  src="/assets/header/eth.svg"
                  alt="Ethereum"
                  width={24}
                  height={24}
                />
                <h3 className="market-title mx-2 mt-2">Ethereum ETH / USD</h3>
              </div>
              <div className="market-value">$4,267.90</div>
              <div className="market-change positive">+2.22%</div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="static-market d-flex flex-column">
              <div className="market-icon d-flex flex-row">
                <Image
                  src="/assets/header/tether.svg"
                  alt="Tether"
                  width={24}
                  height={24}
                />
                <h3 className="market-title mx-2 mt-2">Tether USDT/USD</h3>
              </div>
              <div className="market-value">$587.36</div>
              <div className="market-change negative">-0.82%</div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="static-market d-flex flex-column">
              <div className="market-icon d-flex flex-row">
                <Image
                  src="/assets/header/bnb.svg"
                  alt="Solana"
                  width={24}
                  height={24}
                />
                <h3 className="market-title mx-2 mt-2">BNB BNB/USD</h3>
              </div>
              <div className="market-value">$213.67</div>
              <div className="market-change positive">+3.56%</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Slider;

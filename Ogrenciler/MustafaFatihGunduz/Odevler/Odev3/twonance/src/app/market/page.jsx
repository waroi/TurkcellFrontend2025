"use client";
import React from "react";
import Image from "next/image";
import MarketCryptoBox from "./components/MarketCryptoBox";
import MarketTable from "./components/MarketTable";
import useGetCryptos from "../../hooks/useGetCryptos";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useLanguage } from "../../context/LanguageContext";
const MarketPage = () => {
  const { translations } = useLanguage();
  const { onlyTwentyCrypto } = useGetCryptos();
  return (
    <div>
      <header className="bg-primary bg-opacity-10 py-21">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <h1 className="disğlay-4 fw-bold text-dark pb-97">
                {translations.today} <br /> {translations.cyrptoCurrency} <br />{" "}
                {translations.prices}
              </h1>
              <p className="fs-3 text-secondary fw-normal">
                {translations.globalCryptoMarket}
                <span className="text-dark fw-bold">$1.86T</span>
              </p>
            </div>
            <Image
              src={"/assets/marketHeader.svg"}
              width={478}
              height={339}
              alt="market-header"
            />
          </div>
        </div>
      </header>
      <div className="container">
        <MarketCryptoBox />
        <MarketTable cryptos={onlyTwentyCrypto} />
        <div className="d-flex flex-column align-items-center py-21">
          <h2 className="fs-1 fw-bold text-dark">
            {" "}
            {translations.learnAndEarn}{" "}
          </h2>
          <p className="fs-4 fw-normal text-secondary pt-11 pb-13">
            {translations.stackIsProduction}
          </p>
          <div className="row">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;

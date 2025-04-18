"use client";

import React from "react";
import Image from "next/image";
import MarketTabs from "@/components/molecules/MarketTabs";
import styles from "./MarketCardList.module.css";

const MarketCardList = ({ data }) => {
  console.log(data);

  return (
    <div className="container mb-5">
      <div className={`${styles.wrapper} p-4 rounded-4 shadow`}>
        <MarketTabs />

        <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-between mt-4">
          {data.map((coin) => (
            <div
              key={coin.id}
              className={`${styles.card} ${
                coin.price_change_percentage_24h > 0 ? "shadow" : ""
              } p-4 d-flex flex-column justify-content-between rounded-4`}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={20}
                  height={20}
                />
                <span className="fw-semibold">
                  {coin.name} <small>{coin.symbol.toUpperCase()}/USD</small>
                </span>
              </div>

              <div className="fw-bold fs-5">
                USD {coin.current_price.toLocaleString()}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <small>{coin.ath}</small>
                <span
                  className={`badge px-2 py-1 rounded-pill fw-semibold ${
                    coin.price_change_percentage_24h > 0
                      ? styles.badgeGreen
                      : styles.badgeRed
                  }`}
                >
                  {coin.price_change_percentage_24h > 0 ? "+" : ""}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketCardList;

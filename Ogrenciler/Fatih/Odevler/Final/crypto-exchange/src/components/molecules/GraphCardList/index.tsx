import React from "react";
import Image from "next/image";
import styles from "./GraphCardList.module.css";
import MarketTabs from "../MarketTabs";
import Sparkline from "@/components/molecules/Sparkline";

const GraphCardList = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <MarketTabs />

      <div className={styles.cardContainer}>
        {data.map((coin, idx) => (
          <div key={coin.id} className={styles.card}>
            {idx !== 0 && <div className={styles.cardDivider} />}

            <div className={styles.cardTop}>
              <Image src={coin.image} alt={coin.name} width={40} height={40} />
              <div>
                {coin.sparkline_in_7d?.price?.length > 0 && (
                  <Sparkline
                    data={coin.sparkline_in_7d.price}
                    color={
                      coin.sparkline_in_7d.price[0] <
                      coin.sparkline_in_7d.price[
                        coin.sparkline_in_7d.price.length - 1
                      ]
                        ? "var(--success)"
                        : "var(--critical)"
                    }
                  />
                )}
              </div>
            </div>

            <div className={styles.cardTitleLine}>
              <div className={styles.coinName}>{coin.name}</div>
              <span
                className={`${styles.priceChange} ${
                  coin.price_change_percentage_24h > 0
                    ? styles.positive
                    : styles.negative
                }`}
              >
                {coin.price_change_percentage_24h > 0 ? "▲" : "▼"}
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
            </div>

            <div className={styles.cardBottom}>
              <span className={styles.price}>
                USD {coin.current_price.toLocaleString()}
              </span>
              <div className={styles.symbol}>{coin.symbol.toUpperCase()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphCardList;

'use client';

import styles from '@/styles/components/sections/MarketTable.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Coin = {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      percent_change_24h: number;
    };
  };
};

const MarketTable = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch('/api/coinmarketcap');
        const data = await res.json();
        setCoins(data.data.slice(0, 20)); 
      } catch (err) {
        console.error('MarketTable API Error:', err);
      }
    };

    fetchCoins();
  }, []);

  return (
    <section className={styles.marketTable}>
      <div className={styles.tabs}>
        <div className={styles.tabGroup}>
          <button className={`${styles.tab} ${styles.active}`}>Favorites</button>
          <button className={styles.tab}>Derivatives</button>
          <button className={styles.tab}>Spot</button>
        </div>
        <div className={styles.filterGroup}>
          <button className={styles.filterBtn}>Hot</button>
          <button className={styles.filterBtn}>New</button>
          <button className={styles.filterBtn}>DeFi</button>
          <button className={styles.filterBtn}>NFT</button>
        </div>
      </div>

      <div className={styles.tableHeader}>
        <span>#</span>
        <span>Trading Pairs</span>
        <span>Last Traded</span>
        <span>24H Change%</span>
        <span>24H High</span>
        <span>24H Low</span>
        <span>24H Turnover</span>
        <span>Chart</span>
        <span></span>
      </div>

      {coins.map((coin, i) => (
        <div key={coin.id} className={styles.tableRow}>
          <span>{i + 1}</span>
          <span className={styles.coinInfo}>
            <Image
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
              alt={coin.name}
              width={20}
              height={20}
            />
            <strong>{coin.name}</strong>
            <span className={styles.symbol}>{coin.symbol}</span>
          </span>
          <span>${coin.quote.USD.price.toFixed(3)}</span>
          <span
            className={
              coin.quote.USD.percent_change_24h >= 0
                ? styles.positive
                : styles.negative
            }
          >
            {coin.quote.USD.percent_change_24h.toFixed(2)}%
          </span>
          <span>62,749.00</span>
          <span>57,600.00</span>
          <span>5.04B (USD)</span>
          <span>
            <Image
              src={
                coin.quote.USD.percent_change_24h >= 0
                  ? '/images/graph-up.png'
                  : '/images/graph-down.png'
              }
              alt="graph"
              width={70}
              height={24}
            />
          </span>
          <span>
            <button className={styles.tradeBtn}>Trade</button>
          </span>
        </div>
      ))}
    </section>
  );
};

export default MarketTable;

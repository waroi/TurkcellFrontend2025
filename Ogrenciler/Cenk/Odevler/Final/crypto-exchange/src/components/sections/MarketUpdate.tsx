'use client';
import styles from '@/styles/components/sections/MarketUpdate.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Coin = {
  id: number;
  name: string;
  symbol: string;
  cmc_rank: number;
  quote: {
    USD: {
      price: number;
      percent_change_24h: number;
      market_cap: number;
    };
  };
};

const categories = ['View All', 'Metaverse', 'Entertainment', 'Energy', 'NFT', 'Gaming', 'Music'];

const MarketUpdate = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [activeCategory, setActiveCategory] = useState('View All');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch('/api/coinmarketcap');
        const data = await res.json();
        setCoins(data.data);
      } catch (err) {
        console.error('API error:', err);
      }
    };
    fetchCoins();
  }, []);

  return (
    <section className={styles.marketUpdate}>
      <div className={styles.header}>
        <h2>Market Update</h2>
        <input className={styles.search} type="text" placeholder="Search Coin" />
      </div>

      <ul className={styles.categories}>
        {categories.map((cat) => (
          <li
            key={cat}
            className={cat === activeCategory ? styles.active : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
            <th>Last 7 Days</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.slice(0, 8).map((coin) => (
            <tr key={coin.id}>
              <td>{coin.cmc_rank}</td>
              <td className={styles.nameCell}>
                <Image
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                  alt={coin.name}
                  width={24}
                  height={24}
                />
                <span className={styles.name}>{coin.name}</span>
                <span className={styles.symbol}>{coin.symbol}</span>
              </td>
              <td>${coin.quote.USD.price.toFixed(2)}</td>
              <td
                className={
                  coin.quote.USD.percent_change_24h >= 0 ? styles.percentUp : styles.percentDown
                }
              >
                {coin.quote.USD.percent_change_24h.toFixed(2)}%
              </td>
              <td>${coin.quote.USD.market_cap.toLocaleString()}</td>
              <td>
                {/* Sparkline placeholder */}
                <Image
                  src={
                    coin.quote.USD.percent_change_24h >= 0
                      ? '/icons/line-green.svg'
                      : '/icons/line-red.svg'
                  }
                  alt="sparkline"
                  width={80}
                  height={32}
                />
              </td>
              <td>
                <button className={styles.tradeBtn}>Trade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MarketUpdate;

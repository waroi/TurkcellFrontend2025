'use client';

import styles from '@/styles/components/sections/MarketHero.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

const categories = ['Crypto', 'DeFi', 'BSC', 'NFT', 'Metaverse', 'Polkadot', 'Solana', 'Opensea', 'Makersplace'];

const MarketHero = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [activeCategory, setActiveCategory] = useState('Crypto');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch('/api/coinmarketcap');
        const data = await res.json();
        setCoins(data.data.slice(0, 5)); 
      } catch (err) {
        console.error('API error:', err);
      }
    };

    fetchCoins();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1>Today’s Cryptocurrency prices</h1>
        <p>
          The global crypto market cap is <strong>$1.86T</strong>
        </p>
      </div>

      <div className={styles.right}>
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

        <div className={styles.cards}>
          {coins.map((coin) => (
            <div key={coin.id} className={styles.card}>
              <div className={styles.icon}>
                <Image
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                  alt={coin.name}
                  width={32}
                  height={32}
                />
              </div>
              <div className={styles.name}>{coin.name}</div>
              <div
                className={`${styles.change} ${
                  coin.quote.USD.percent_change_24h >= 0 ? styles.up : styles.down
                }`}
              >
                {coin.quote.USD.percent_change_24h.toFixed(2)}%
              </div>
              <div className={styles.price}>${coin.quote.USD.price.toFixed(2)}</div>
              <div className={styles.symbol}>{coin.symbol}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketHero;

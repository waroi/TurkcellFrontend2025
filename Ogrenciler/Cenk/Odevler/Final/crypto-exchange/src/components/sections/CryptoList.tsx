'use client';
import styles from '@/styles/components/sections/CryptoList.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const categories = ['Crypto', 'DeFi', 'BSC', 'NFT', 'Metaverse', 'Polkadot', 'Solana', 'Opensea', 'Makersplace'];

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

const CryptoList = () => {
  const [activeCategory, setActiveCategory] = useState('Crypto');
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch('/api/coinmarketcap');
        const data = await res.json();
        setCoins(data.data);
      } catch (err) {
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <section className={styles.cryptoList}>
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

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cards}>
          {coins.map((coin) => (
            <div key={coin.id} className={styles.card}>
              <div className={styles.header}>
                <Image
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                  alt={coin.name}
                  width={24}
                  height={24}
                />
                <span>{coin.name}</span>
                <span className={styles.pair}>{coin.symbol}/USD</span>
              </div>
              <div className={styles.price}>${coin.quote.USD.price.toFixed(2)}</div>
              <div
                className={`${styles.change} ${
                  coin.quote.USD.percent_change_24h >= 0 ? styles.up : styles.down
                }`}
              >
                {coin.quote.USD.percent_change_24h.toFixed(2)}%
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CryptoList;

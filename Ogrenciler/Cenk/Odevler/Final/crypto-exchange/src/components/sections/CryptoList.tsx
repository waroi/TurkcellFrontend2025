'use client';
import styles from '@/styles/components/sections/CryptoList.module.scss';
import Image from 'next/image';
import { useState } from 'react';

const categories = ['Crypto', 'DeFi', 'BSC', 'NFT', 'Metaverse', 'Polkadot', 'Solana', 'Opensea', 'Makersplace'];

const coins = [
  {
    icon: '/icons/bitcoin.svg',
    name: 'Bitcoin',
    pair: 'BTC/USD',
    price: 'USD 46,168.95',
    change: '-0.97%',
    changeType: 'down',
  },
  {
    icon: '/icons/ethereum.svg',
    name: 'Ethereum',
    pair: 'ETH/USD',
    price: 'USD 3,480.04',
    change: '+10.55%',
    changeType: 'up',
  },
  {
    icon: '/icons/tether.svg',
    name: 'Tether',
    pair: 'USDT/USD',
    price: 'USD 1.00',
    change: '-0.01%',
    changeType: 'down',
  },
  {
    icon: '/icons/bnb.svg',
    name: 'BNB',
    pair: 'BNB/USD',
    price: 'USD 443.56',
    change: '-1.24%',
    changeType: 'down',
  },
];

const CryptoList = () => {
  const [activeCategory, setActiveCategory] = useState('Crypto');

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

      <div className={styles.cards}>
        {coins.map((coin, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.header}>
              <Image src={coin.icon} alt={coin.name} width={24} height={24} />
              <span>{coin.name}</span>
              <span className={styles.pair}>{coin.pair}</span>
            </div>
            <div className={styles.price}>{coin.price}</div>
            <div
              className={`${styles.change} ${
                coin.changeType === 'up' ? styles.up : styles.down
              }`}
            >
              {coin.change}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CryptoList;

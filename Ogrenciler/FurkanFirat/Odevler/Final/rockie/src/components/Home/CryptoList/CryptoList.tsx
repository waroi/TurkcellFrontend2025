'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const categories = [
  'Crypto',
  'DeFi',
  'BSC',
  'NFT',
  'Metaverse',
  'Polkadot',
  'Solana',
  'Opensea',
  'Makersplace',
];

interface CoinData {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price?: number;
  volume_24h?: number;
  percent_change_24h?: number;
}

export default function CryptoList() {
  const { theme } = useTheme();

  const [coins, setCoins] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/crypto');
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        setCoins(json.slice(0, 4));
      } catch (err) {
        console.error('Error fetching crypto data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      className={`${
        theme === 'dark' ? 'bg-dark text-white' : 'bg-surface'
      }rounded-4 shadow-sm container p-32`}
    >
      <div className='mb-16 border-bottom pb-16 d-flex flex-wrap gap-16'>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-sm fw-semibold px-24 py-4 rounded-pill ${
              theme === 'dark' ? 'text-white' : 'text-dark'
            } ${category === 'Crypto' ? 'btn-primary' : 'btn-light'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='row gy-4'>
        {coins.map((coin) => (
          <div className='col-12 col-sm-6 col-lg-3' key={coin.id}>
            <div className='rounded-4 p-16 h-100 shadow-sm'>
              <div className='d-flex align-items-center gap-8 mb-8'>
                <Image src={coin.logo} alt={coin.name} width={20} height={20} />
                <span className='fw-bold'>{coin.name}</span>
                <span className='text-secondary small'>{coin.symbol}/USD</span>
              </div>
              <div className='fw-bold fs-24 mb-8'>
                {coin.price ? `USD ${coin.price.toFixed(2)}` : 'Loading...'}
              </div>
              <div className='d-flex align-items-center gap-8 fs-14'>
                <span className='text-secondary small'>
                  {coin.volume_24h ? coin.volume_24h.toLocaleString() : 'Vol'}
                </span>
                <span
                  className={`badge bg-${
                    coin.percent_change_24h !== undefined
                      ? coin.percent_change_24h > 0
                        ? 'success'
                        : 'critical'
                      : 'secondary'
                  } fs-12`}
                >
                  {coin.percent_change_24h !== undefined
                    ? `${
                        coin.percent_change_24h > 0 ? '+' : ''
                      }${coin.percent_change_24h.toFixed(2)}%`
                    : '%N/A'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

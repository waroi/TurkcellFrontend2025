'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import TradingViewMiniChart from './TradingViewMiniChart';
import { useTranslations } from 'next-intl';

interface CoinData {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price?: number;
  volume_24h?: number;
  percent_change_24h?: number;
  favorite?: boolean;
}

export default function MarketUpdateTable() {
  const t = useTranslations('HomePage.MarketTable');

  const { theme } = useTheme();
  const [coins, setCoins] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/crypto');
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();

        const formatted = json.map((coin: CoinData) => ({
          ...coin,
          graphColor:
            coin.percent_change_24h !== undefined && coin.percent_change_24h < 0
              ? 'red'
              : 'green',
        }));

        setCoins(formatted);
      } catch (err) {
        console.error('Error fetching crypto data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <h2 className='font-bold mb-24 fs-48'>{t('title')}</h2>
      <div className='table-responsive'>
        <table className='w-100'>
          <thead>
            <tr
              className={
                theme === 'light' ? 'text-secondary' : 'text-surface-main'
              }
            >
              <th className='p-12'>#</th>
              <th className='p-12 text-left'>{t('Name')}</th>
              <th className='p-12'>{t('Last Price')}</th>
              <th className='p-12'>{t('24h')}</th>
              <th className='p-12'>{t('Market Cap')}</th>
              <th className='p-12'>{t('Last 7 Days')}</th>
              <th className='p-12'>{t('Action')}</th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin, index) => (
              <tr
                key={coin.id}
                className={`border-bottom ${
                  coin.favorite
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                    ? 'bg-black text-white'
                    : ''
                }`}
              >
                <td className='p-12'>{index + 1}</td>
                <td className='p-12'>
                  <div className='d-flex align-items-center gap-8'>
                    <Image
                      src={coin.logo}
                      alt={coin.name}
                      width={20}
                      height={20}
                    />
                    <span className='fw-semibold'>{coin.name}</span>
                    <span className='text-secondary small'>{coin.symbol}</span>
                  </div>
                </td>
                <td className='p-12'>
                  {coin.price ? `$${coin.price.toFixed(2)}` : 'Loading...'}
                </td>
                <td
                  className={`p-12 fw-medium text-${
                    coin.percent_change_24h !== undefined &&
                    coin.percent_change_24h < 0
                      ? 'critical'
                      : 'success'
                  }`}
                >
                  {coin.percent_change_24h !== undefined
                    ? `${
                        coin.percent_change_24h > 0 ? '+' : ''
                      }${coin.percent_change_24h.toFixed(2)}%`
                    : '0.00%'}
                </td>
                <td className='p-12'>
                  {coin.volume_24h ? coin.volume_24h.toLocaleString() : '-'}
                </td>
                <td className='p-12'>
                  <div className='d-flex justify-content-center'>
                    <TradingViewMiniChart
                      symbol={coin.symbol}
                      width={120}
                      height={50}
                    />
                  </div>
                </td>
                <td className='p-12'>
                  <button className='btn btn-primary px-16 py-8 rounded-pill'>
                    {t('Trade')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import styles from './MarketUpdate.module.scss';
import { getTopCoins, CoinSummary } from '@/app/api/coingeckoApi';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const MarketUpdate: React.FC = () => {
  const [coins, setCoins] = useState<CoinSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopCoins();
      setCoins(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.marketUpdateContainer}>
      <h2 className={styles.title}>Market Update</h2>

      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <table className={styles.coinTable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Last Price</th>
              <th>24h %</th>
              <th>Market Cap</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={coin.id}>
                <td>{index + 1}</td>
                <td className={styles.coinInfo}>
                  <img src={coin.image} alt={coin.symbol} className={styles.coinLogo} />
                  <span>{coin.name} ({coin.symbol})</span>
                </td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td className={coin.price_change_percentage_24h >= 0 ? styles.positive : styles.negative}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${coin.market_cap.toLocaleString()}</td>
                <td>
                  <Sparklines data={coin.sparkline_in_7d?.price}>
                    <SparklinesLine
                      color={coin.price_change_percentage_24h < 0 ? "red" : "green"}
                      style={{ strokeWidth: 2, fill: "none" }}
                    />
                    <SparklinesSpots />
                  </Sparklines>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MarketUpdate;

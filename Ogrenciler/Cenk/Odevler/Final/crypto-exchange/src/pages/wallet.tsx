'use client';

import styles from '@/styles/components/pages/Wallet.module.scss';
import { useEffect, useState } from 'react';

type CoinBalance = {
  asset: string;
  free: string;
  locked: string;
};

export default function WalletPage() {
  const [balances, setBalances] = useState<CoinBalance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const res = await fetch('/api/wallet');
        const data = await res.json();
        setBalances(data.balances);
      } catch (error) {
        console.error('Failed to load wallet:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, []);

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <button className={styles.active}>Overview</button>
        <button>Buy Crypto</button>
        <button>Sell Crypto</button>
      </aside>

      <main className={styles.content}>
        <h2>Overview</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className={styles.walletTable}>
            <thead>
              <tr>
                <th>#</th>
                <th>Asset</th>
                <th>Earn</th>
                <th>On Orders</th>
                <th>Available</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {balances.map((coin, i) => {
                const free = parseFloat(coin.free);
                const locked = parseFloat(coin.locked);
                const total = free + locked;

                if (total <= 0) return null;

                return (
                  <tr key={coin.asset}>
                    <td>{i + 1}</td>
                    <td>{coin.asset}</td>
                    <td>7.46% APR</td>
                    <td>{locked.toFixed(6)}</td>
                    <td>{free.toFixed(6)}</td>
                    <td>{total.toFixed(6)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

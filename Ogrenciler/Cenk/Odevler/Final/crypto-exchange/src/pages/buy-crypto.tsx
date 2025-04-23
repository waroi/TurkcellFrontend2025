'use client';
import styles from '@/styles/components/pages/BuyCrypto.module.scss';
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

export default function BuyCryptoPage() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [coins, setCoins] = useState<Coin[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCoins();
  }, [activeTab]);

  const fetchCoins = async () => {
    try {
      const res = await fetch('/api/coinmarketcap');
      const data = await res.json();
      setCoins(data.data);
    } catch (err) {
      console.error('API Error:', err);
    }
  };

  const handleTrade = async (symbol: string, side: 'BUY' | 'SELL') => {
    try {
      const res = await fetch('/api/binance/trade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          symbol: symbol + 'USDT',
          quantity: 0.001,
          side,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert(`Trade successful: Order ID ${result.orderId}`);
      } else {
        alert(`Trade failed: ${result.error?.msg || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Network error');
    }
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <button
          className={`${styles.tabButton} ${activeTab === 'buy' ? styles.active : ''}`}
          onClick={() => setActiveTab('buy')}
        >
          Buy Crypto
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'sell' ? styles.active : ''}`}
          onClick={() => setActiveTab('sell')}
        >
          Sell Crypto
        </button>
      </div>

      <div className={styles.content}>
        {/* === BUY SECTION === */}
        {activeTab === 'buy' && (
          <>
            <div className={styles.stepper}>
              <div className={styles.step}>Select currency</div>
              <div className={styles.step}>Important Notes</div>
              <div className={styles.step}>Payment Details</div>
            </div>

            <div className={styles.currencyBox}>
              <h4>Select Currency</h4>
              <p className={styles.reference}>
                Reference Price: 1,450,939,280.43 VND/BTC
              </p>

              <div className={styles.currencyInputs}>
                <input type="text" defaultValue="3,000,000" />
                <select>
                  <option>VND</option>
                </select>
              </div>

              <div className={styles.swapIcon}>
                <Image src="/icons/swap.svg" alt="Swap" width={24} height={24} />
              </div>

              <div className={styles.currencyInputs}>
                <input type="text" defaultValue="0.00207026" />
                <select>
                  <option>BTC</option>
                </select>
              </div>

              <button
                className={styles.continueBtn}
                onClick={() => handleTrade('BTC', 'BUY')}
              >
                Continue
              </button>
            </div>
          </>
        )}

        {/* === SELL SECTION === */}
        {activeTab === 'sell' && (
          <>
            <div className={styles.stepper}>
              <div className={styles.step}>Select crypto</div>
              <div className={styles.step}>Confirm Payment</div>
              <div className={styles.step}>Payment Details</div>
              <div className={styles.step}>Payment Confirmed</div>
            </div>

            <div className={styles.sellSearchBox}>
              <h4>Select Crypto</h4>
              <p className={styles.reference}>Which Crypto Do You Want To Search?</p>

              <div className={styles.searchBar}>
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <select>
                  <option>USD</option>
                </select>
                <button>Search</button>
              </div>
            </div>

            <div className={styles.coinTable}>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24%</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoins.slice(0, 10).map((coin, idx) => (
                    <tr key={coin.id}>
                      <td>{idx + 1}</td>
                      <td className={styles.coinInfo}>
                        <Image
                          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                          alt={coin.name}
                          width={24}
                          height={24}
                        />
                        <div>
                          <div>{coin.name}</div>
                          <small>{coin.symbol}/USD</small>
                        </div>
                      </td>
                      <td>${coin.quote.USD.price.toFixed(2)}</td>
                      <td
                        className={
                          coin.quote.USD.percent_change_24h >= 0
                            ? styles.green
                            : styles.red
                        }
                      >
                        {coin.quote.USD.percent_change_24h.toFixed(2)}%
                      </td>
                      <td>
                        <button
                          className={styles.tradeBtn}
                          onClick={() => handleTrade(coin.symbol, 'SELL')}
                        >
                          Trade
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

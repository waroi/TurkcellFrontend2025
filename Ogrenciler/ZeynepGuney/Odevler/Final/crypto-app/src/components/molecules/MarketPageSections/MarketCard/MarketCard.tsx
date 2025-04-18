'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from "../../../../context/ThemeContext";
import ButtonGroup from '@/components/atoms/ButtonGroup/ButtonGroup';
import "../../../../app/global.scss";
import styles from './MarketCard.module.scss';
import { fetchCryptoData } from '@/services/services';
import { CombinedData, CryptoPrice } from '@/app/types';
import MiniChart from '../../../atoms/MiniChart/MiniChart';

const MarketCard = () => {
  const [activeButton, setActiveButton] = useState(0);
  const { theme } = useTheme();
  const [cryptoData, setCryptoData] = useState<CombinedData[]>([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const priceData = await fetchCryptoData('listings');
        const filteredPriceData = priceData.data.filter((crypto: CryptoPrice) =>
          ["BTC", "ETH", "USDT", "BNB"].includes(crypto.symbol)
        );

        const ids = filteredPriceData.map((crypto: CryptoPrice) => crypto.id.toString());
        const infoData = await fetchCryptoData('info', ids);

        const merged: CombinedData[] = filteredPriceData.map((crypto: CryptoPrice) => ({
          id: crypto.id,
          name: crypto.name,
          symbol: crypto.symbol,
          logo: infoData.data[crypto.id]?.logo || '',
          price: crypto.quote.USD.price,
          market_cap: crypto.quote.USD.market_cap,
          percent_change_1h: crypto.quote.USD.percent_change_1h,
          percent_change_24h: crypto.quote.USD.percent_change_24h,
          percent_change_7d: crypto.quote.USD.percent_change_7d,
          percent_change_30d: crypto.quote.USD.percent_change_30d,
          percent_change_60d: crypto.quote.USD.percent_change_60d,
          percent_change_90d: crypto.quote.USD.percent_change_90d,
          sparklineData: generateDummySparkline(crypto.quote.USD.price),
        }));

        setCryptoData(merged);
      } catch (err) {
        console.error("Veri çekme hatası:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const generateDummySparkline = (price: number): number[] => {
    return Array.from({ length: 6 }, () => {
      const randomChange = (Math.random() - 0.5) * 2;
      return price + price * (randomChange / 100);
    });
  };

  return (
    <div>


      <div className={`${styles.marketContainer} ${theme === 'dark' ? styles.dark : ''}`}>
        <ButtonGroup
          data={["Crypto", "DeFi", "BSC", "NFT", "Metaverse", "Polkadot", "Solana", "Opensea", "Makersplace"]}
          activeIndex={activeButton}
          onChange={handleClick}
          theme={theme}
        />
        {loading ? (
          <div>Yükleniyor...</div>
        ) : (
          <div className={`${styles.cardContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
            {cryptoData.map((coin) => (
              <div key={coin.id} className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
                <div className={styles.topSection}>
                  <div className={styles.left}>
                    <img src={coin.logo} alt={coin.name} className={styles.icon} />
                    <div className={styles.name}>{coin.name}</div>
                  </div>
                  <div className={styles.right}>
                    <MiniChart data={coin.sparklineData} />
                    <div className={`${styles.volumeChange} ${coin.percent_change_24h < 0 ? styles.negative : styles.positive}`}>
                      {coin.percent_change_24h < 0 ? (
                        <>↓ {Math.abs(coin.percent_change_24h).toFixed(2)}%</>
                      ) : (
                        <>↑ {coin.percent_change_24h.toFixed(2)}%</>
                      )}
                    </div>

                  </div>
                </div>
                <div className={styles.priceContainer}>
                  <div className={styles.price}>USD {coin.price.toFixed(2)}</div>
                  <div className={styles.symbol}>{coin.symbol}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketCard;

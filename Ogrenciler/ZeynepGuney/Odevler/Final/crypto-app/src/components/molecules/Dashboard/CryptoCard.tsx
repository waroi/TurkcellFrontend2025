'use client';

import React, { useEffect, useState } from 'react';
import { fetchCryptoData } from '@/services/services';
import { CombinedData, CryptoPrice } from '@/app/types';
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../context/ThemeContext";
import styles from './CryptoCard.module.scss';

interface CryptoCardProps {
    selectedSymbol: string;
    onSymbolChange: (symbol: string) => void;
  }
  
  const CryptoCard: React.FC<CryptoCardProps> = ({ selectedSymbol, onSymbolChange }) => {
    const [coinData, setCoinData] = useState<CombinedData | null>(null);
    const [loading, setLoading] = useState(true);
    const [availableCoins, setAvailableCoins] = useState<CryptoPrice[]>([]);
    const { t } = useTranslation();
    const { theme } = useTheme();
  
    useEffect(() => {
      const loadData = async () => {
        setLoading(true);
        try {
          const listingsData = await fetchCryptoData('listings');
          setAvailableCoins(listingsData.data);
  
          const coin = listingsData.data.find((crypto: CryptoPrice) => crypto.symbol === selectedSymbol);
  
          if (!coin) {
            console.warn(`Symbol "${selectedSymbol}" için coin bulunamadı.`);
            return;
          }
  
          const infoData = await fetchCryptoData('info', [coin.id.toString()]);
  
          const mergedCoin: CombinedData = {
            id: coin.id,
            rank: coin.rank || 0,
            name: coin.name,
            symbol: coin.symbol,
            logo: infoData.data[coin.id]?.logo || '',
            price: coin.quote.USD.price,
            market_cap: coin.quote.USD.market_cap,
            percent_change_1h: coin.quote.USD.percent_change_1h,
            percent_change_24h: coin.quote.USD.percent_change_24h,
            percent_change_7d: coin.quote.USD.percent_change_7d,
            percent_change_30d: coin.quote.USD.percent_change_30d || 0,
            percent_change_60d: coin.quote.USD.percent_change_60d || 0,
            percent_change_90d: coin.quote.USD.percent_change_90d || 0,
            sparklineData: coin.quote.USD.price || '',
          };
  
          setCoinData(mergedCoin);
        } catch (error) {
          console.error("Veri çekme hatası:", error);
        } finally {
          setLoading(false);
        }
      };
  
      loadData();
    }, [selectedSymbol]);
  
    const handleSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onSymbolChange(event.target.value); 
    };
  
    if (loading) return <div className={styles.card}>Yükleniyor...</div>;
    if (!coinData) return <div className={`${styles.card} ${styles.error}`}>Veri yüklenemedi.</div>;
  
    return (
      <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
        <div className={styles.header}>
          {coinData.logo && <img src={coinData.logo} alt={coinData.symbol} className={styles.logo} />}
          <h2 className={styles.title}>{coinData.name} ({coinData.symbol})</h2>
        </div>
        <div className={styles.selectContainer}>
          <select value={selectedSymbol} onChange={handleSymbolChange} className={styles.selectBox}>
            {availableCoins.map((coin) => (
              <option key={coin.id} value={coin.symbol}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.details} ${theme === 'dark' ? styles.dark : ''}`}>
          <p><strong>{t("marketUpdate.lastPrice")}</strong> ${coinData.price.toFixed(2)}</p>
          <p>
            <strong>{t("marketUpdate.change24h")}</strong>
            <span className={`${styles.volumeChange} ${coinData.percent_change_24h < 0 ? styles.negative : styles.positive}`}>
              {coinData.percent_change_24h.toFixed(2)}
            </span>
          </p>
          <p><strong>{t("marketUpdate.marketCap")}</strong> ${coinData.market_cap.toLocaleString()}</p>
        </div>
      </div>
    );
  };

export default CryptoCard;

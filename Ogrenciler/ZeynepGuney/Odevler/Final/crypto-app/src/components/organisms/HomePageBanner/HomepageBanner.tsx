'use client';

import React, { useEffect, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { fetchCryptoData } from '../../../services/services';
import { CryptoPrice } from '../../../app/types';
import Button from "../../atoms/Button/Button";
import ButtonGroup from "../../atoms/ButtonGroup/ButtonGroup";
import "../../../app/global.scss";
import styles from "./HomaPageBanner.module.scss";

interface CombinedData {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  market_cap: number;
  volume_change_24h: number;
}

const HomepageBanner = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("banner");
  const [activeButton, setActiveButton] = useState(0);

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
          volume_change_24h: crypto.quote.USD.volume_change_24h,
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

  return (
    <div>
      <section className={`${styles.bannerSection} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
          <div className={styles.left}>
            <h1 className={styles.title}>{t("banner.title")}</h1>
            <p className={styles.description}>{t("banner.description")}</p>
            <Button className={styles.button}>{t("banner.button")}</Button>
            <h3 className={styles.partners}>{t("banner.partners")}</h3>
            <img
              src="/assets/Pertners.svg"
              alt="Partners"
              className={styles.partnersImage}
            />
          </div>
          <div className={styles.right}>
            <img
              src="/assets/Banner.svg"
              alt="Banner"
              className={styles.bannerImage}
            />
          </div>
        </div>
      </section>

      <section>
        <div className={`${styles.container} ${styles.cryptoContainer}`}>
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
                <div key={coin.id} className={styles.card}>
                  <div className={styles.header}>
                    <img
                      src={coin.logo}
                      alt={coin.name}
                      className={styles.icon}
                    />
                    <span className={styles.coinInfo}>
                      <span className={`${styles.coinName} ${theme === "dark" ? styles.dark : styles.light}`}>{coin.name}</span>
                      <span className={styles.coinSymbol}>{coin.symbol}/USD</span>
                    </span>
                  </div>
                  <div className={styles.price}>USD {coin.price.toFixed(2)}</div>
                  <div className={styles.marketVolumeContainer}>
                    <div className={styles.marketCap}>
                      {coin.market_cap.toLocaleString()}
                    </div>
                    <div className={`${styles.volumeChange} ${coin.volume_change_24h < 0 ? styles.negative : styles.positive}`}>
                      {coin.volume_change_24h.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomepageBanner;

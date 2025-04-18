"use client";

import React, { useEffect, useState } from 'react';
import { fetchCryptoData } from '@/services/services';
import { CombinedData, CryptoPrice } from '@/app/types';
import { useTranslation } from 'react-i18next';
import { useTheme } from "../../../context/ThemeContext";
import Button from '@/components/atoms/Button/Button';
import styles from './Balance.module.scss';


const Balance = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);
    const [cryptoData, setCryptoData] = useState<CombinedData[]>([]);


    useEffect(() => {
        const load = async () => {
            try {
                const priceData = await fetchCryptoData('listings');
                console.log('Price Data:', priceData);
                const filteredPriceData = priceData.data.filter((crypto: CryptoPrice) =>
                    ["BTC", "ETH", "USDT", "BNB"].includes(crypto.symbol)
                );

                const ids = filteredPriceData.map((crypto: CryptoPrice) => crypto.id.toString());
                const infoData = await fetchCryptoData('info', ids);
                console.log('Info Data:', infoData);

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


    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (!cryptoData) return <div className={styles.loading}>No data available.</div>;

    return (
        <div>
            <div className={`${styles.card} ${theme === 'dark' ? styles.dark : ''}`}>
                <div className={styles.topSection}>
                    <p className={styles.balanceTitle}>{t("balance.balance")}</p>
                    <h2 className={styles.balanceAmount}>${cryptoData.reduce((total, coin) => total + coin.price, 0).toFixed(2)}</h2>
                    <Button className={`${styles.topUpBtn} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        {t("balance.topBalance")}
                    </Button>

                </div>
                <div className={styles.bottomSection}>
                    <p className={styles.balanceTitle}>{t("balance.title")}</p>
                    {cryptoData.map((coin) => (
                        <div key={coin.id} className={`${styles.assetBlock} ${theme === 'dark' ? styles.dark : ''}`}>
                            <div className={styles.left}>
                                <div className={styles.assetDetails}>
                                    <img src={coin.logo} alt={coin.symbol} className={styles.logo} />
                                    <div className={styles.assetInfo}>
                                        <span className={styles.symbol}>{coin.symbol}</span>
                                        <span className={styles.marketCap}>{coin.market_cap.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.priceBlock}>
                                    <span className={styles.value}>${coin.price.toFixed(2)}</span>
                                </div>
                                <div className={styles.priceBlock}>
                                    <span
                                        className={`${styles.value} ${coin.percent_change_24h < 0 ? styles.negative : styles.positive}`}
                                    >
                                        {coin.percent_change_24h.toFixed(2)}%
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Balance;

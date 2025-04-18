import React, { useState } from "react";
import styles from "./MarketUpdateRow.module.scss";
import Button from "../../atoms/Button/Button";
import { useTheme } from "../../../context/ThemeContext";
import MiniChart from "../../atoms/MiniChart/MiniChart";
import { FavoriteButton } from "../../atoms/FavoriteButton/FavoriteButton";
import { CombinedData } from "../../../app/types";
import { useRouter } from "next/navigation";


interface MarketUpdateRowProps extends CombinedData {
    isActive: boolean;
    onTradeClick: () => void;
    onFavoriteToggle: (coinId: number) => void;
    isFavorite: boolean;
    coinId: number;
}

const MarketUpdateRow = ({
    rank,
    logo,
    name,
    symbol,
    price,
    market_cap,
    sparklineData,
    isActive,
    onTradeClick,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
    percent_change_30d,
    percent_change_60d,
    percent_change_90d,
    onFavoriteToggle,
    isFavorite,
    coinId
}: MarketUpdateRowProps) => {
    const { theme } = useTheme();
    const router = useRouter();
    const handleTradeClick = () => {
        onTradeClick();
        setTimeout(() => {
            router.push("/dashboard");
        }, 5000);
    };
    const percentageChanges = [
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        percent_change_30d,
        percent_change_60d,
        percent_change_90d
    ];
    return (
        <div className={`${styles.row} ${theme === 'dark' ? styles.dark : ''}`}>
            <div>
                <FavoriteButton
                    coinId={coinId}
                    onFavoriteToggle={onFavoriteToggle}
                    isFavorite={isFavorite}
                />
            </div>
            <div className={styles.rank}>
                {rank}
            </div>
            <div className={styles.coin}>
                <img src={logo} alt={name} className={styles.logo} />
                <div className={styles.nameSymbol}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.symbol}>{symbol}</div>
                </div>
            </div>
            <div className={styles.price}>${price.toFixed(2)}</div>
            <div className={`${styles.change} ${percent_change_24h < 0 ? styles.red : styles.green}`}>
                {percent_change_24h > 0 ? `+${percent_change_24h.toFixed(2)}` : percent_change_24h.toFixed(2)}%
            </div>
            <div className={styles.marketCap}>${market_cap.toLocaleString()}</div>
            <div className={styles.sparkline}>
                <MiniChart data={percentageChanges} />
            </div>
            {/* <Button
                className={[
                    styles.tradeButton,
                    theme === 'dark' ? styles.dark : styles.light,
                    isActive ? styles.active : ''
                ].join(' ')}
                onClick={onTradeClick}
            >
                Trade
            </Button> */}
            <Button
                className={[
                    styles.tradeButton,
                    theme === 'dark' ? styles.dark : styles.light,
                    isActive ? styles.active : ''
                ].join(' ')}
                onClick={handleTradeClick}
            >
                Trade
            </Button>
        </div>
    );
};

export default MarketUpdateRow;

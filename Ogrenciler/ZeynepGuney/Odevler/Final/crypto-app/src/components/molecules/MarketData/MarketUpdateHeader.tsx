import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../context/ThemeContext";
import styles from "./MarketUpdateRow.module.scss";

interface MarketUpdateHeaderProps {
    onSortChange?: (key: 'name' | 'price' | 'percent_change_24h' | 'marketCap') => void;
    sortKey?: 'name' | 'price' | 'percent_change_24h' | 'marketCap'; 
    sortOrder?: 'asc' | 'desc'; 
}

const MarketUpdateHeader: React.FC<MarketUpdateHeaderProps> = ({ onSortChange, sortKey = 'name', sortOrder = 'asc' }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const handleSortChange = (key: 'name' | 'price' | 'percent_change_24h'| 'marketCap') => {
        if (onSortChange) {
            onSortChange(key); 
        }
    };

    return (
        <div className={`${styles.row} ${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.rank}>#</div>
            <div className={styles.coin}>
                <div className={styles.name} onClick={() => handleSortChange('name')}>
                    {t("marketUpdate.name")}
                </div>
            </div>
            <div className={styles.price} onClick={() => handleSortChange('price')}>
                {t("marketUpdate.lastPrice")}
            </div>
            <div className={styles.change} onClick={() => handleSortChange('percent_change_24h')}>
                {t("marketUpdate.change24h")}
            </div>
            <div className={styles.marketCap} onClick={() => handleSortChange('marketCap')}>
                {t("marketUpdate.marketCap")}
            </div>
            <div className={styles.sparkline}>{t("marketUpdate.last7Days")}</div>
            <div className={styles.tradeButtonDiv}></div>
        </div>
    );
};

export default MarketUpdateHeader;

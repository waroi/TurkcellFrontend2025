"use client";

import React, { useState } from 'react';
import SecondaryButtons from '@/components/atoms/MarketButtons/SecondaryButtons';
import Button from "@/components/atoms/Button/Button"
import ButtonGroup from '@/components/atoms/ButtonGroup/ButtonGroup';
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../context/ThemeContext";
import styles from './BuySell.module.scss';

const BuySell = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const [activeButton, setActiveButton] = useState(0); 
    const [payAmount, setPayAmount] = useState(3000000);
    const [receiveAmount, setReceiveAmount] = useState(0.00207026);

    const handleClick = (index: number) => {
        setActiveButton(index);
    };

    return (
        <div className={styles.container}>
            <SecondaryButtons
                buttons={[
                    { key: "buy", label: t("buySell.buy") },
                    { key: "sell", label: t("buySell.sell") },
                ]}
            />
            <ButtonGroup
                data={[t("buySell.limit"), t("buySell.market"), t("buySell.stopLimit"), t("buySell.stopMarket")]}
                activeIndex={activeButton}
                onChange={handleClick}
                theme={theme}
            />
            <div className={styles.inputBox}>
                <div>
                    <p className={styles.label}>Pay</p>
                    <input
                        type="number"
                        value={payAmount}
                        onChange={(e) => setPayAmount(Number(e.target.value))}
                        className={`${styles.input} ${theme === 'dark' ? styles.dark : ''}`}
                    />
                </div>
                <span className={styles.currency + ' ' + styles.usd}>USD</span>
            </div>
            <div className={styles.inputBox}>
                <div>
                    <p className={styles.label}>Receive</p>
                    <input
                        type="number"
                        value={receiveAmount}
                        onChange={(e) => setReceiveAmount(Number(e.target.value))}
                        className={`${styles.input} ${theme === 'dark' ? styles.dark : ''}`}
                    />
                </div>
                <span className={styles.currency + ' ' + styles.btc}>BTC</span>
            </div>
            <p className={styles.text}>1 BTC ≈ 38,677.94 USD</p>
            <Button>{t("buySell.buy")}</Button>
        </div>
    );
};

export default BuySell;

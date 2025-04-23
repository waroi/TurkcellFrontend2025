"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./MarketButton.module.scss";
import { useTheme } from "@/context/ThemeContext";


const MarketButtons = () => {
    const { t } = useTranslation();
    const [activeItem, setActiveItem] = useState("favorites");
    const { theme } = useTheme();

    return (
        <section className={`${styles.marketButtons} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.left}>
                <span
                    className={activeItem === "favorites" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("favorites")}
                >
                    {t("marketButtons.favorites")}
                </span>
                <span
                    className={activeItem === "derivates" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("derivates")}
                >
                    {t("marketButtons.derivates")}
                </span>
                <span
                    className={activeItem === "spot" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("spot")}
                >
                    {t("marketButtons.spot")}
                </span>
            </div>


        </section>
    );
};

export default MarketButtons;
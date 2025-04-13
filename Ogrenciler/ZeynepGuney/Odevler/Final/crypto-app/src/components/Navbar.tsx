"use client";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "./ThemeToggleButton";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const { theme, dropIcon, notificationIcon, logoIcon } = useTheme();
    const { t, i18n } = useTranslation("");
    const [currentLang, setCurrentLang] = useState("en");

    const toggleLanguage = () => {
        const newLang = currentLang === "en" ? "tr" : "en";
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <img src={logoIcon} alt="Logo" />
                <div className={styles.dropdown}>
                    <button className={styles.menuItemActive}>
                        {t("navbar.homepage")} <img src="/assets/drop-white.svg" alt="dropdown" />
                    </button>
                </div>
                <span className={styles.menuItem}>{t("navbar.buy_crypto")}</span>
                <span className={styles.menuItem}>{t("navbar.markets")}</span>
                <span className={styles.menuItem}>{t("navbar.exchange")}</span>
                <span className={styles.menuItem}>{t("navbar.spot")}</span>
                <span className={styles.menuItem}>
                    {t("navbar.bitusdt")} <img src="/assets/dot.svg" alt="dot" />
                </span>
                <span className={styles.menuItem}>
                    {t("navbar.pages")} <img src={dropIcon} alt="dropdown" />
                </span>
            </div>

            <div className={styles.right}>
                <span className={styles.menuItem}>
                    {t("navbar.assets")} <img src={dropIcon} alt="dropdown" />
                </span>
                <span className={styles.menuItem}>
                    {t("navbar.orders_trades")} <img src={dropIcon} alt="dropdown" />
                </span>
                <button className={`${styles.menuItem} ${styles.lngBtn} ${theme === 'dark' ? styles.dark : styles.light}`} onClick={toggleLanguage}>
                    {currentLang === "en" ? "EN/USD" : "TR/USD"} <img src={dropIcon} alt="dropdown" />
                </button>
                <ThemeToggleButton />
                <img src={notificationIcon} alt="notification" />
                <button className={styles.walletBtn}>{t("navbar.wallet")}</button>
                <div className={styles.avatar}>xx</div>
            </div>
        </nav>
    );
};

export default Navbar;
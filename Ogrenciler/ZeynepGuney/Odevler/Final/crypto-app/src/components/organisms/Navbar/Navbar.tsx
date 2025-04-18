"use client";
import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "../../molecules/NavbarElements/ThemeToggleButton";
import styles from "./Navbar.module.scss";
import "../../../app/global.scss";
import LanguageButton from '../../molecules/NavbarElements/LanguageButton';
import Link from 'next/link';

const Navbar = () => {
    const { theme, dropIcon, notificationIcon, logoIcon } = useTheme();
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState("en");
    const [activeItem, setActiveItem] = useState("homepage");

    const toggleLanguage = () => {
        const newLang = currentLang === "en" ? "tr" : "en";
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Link href="/">
                    <img src={logoIcon} alt="Logo" />
                </Link>

                <div className={styles.dropdown}>
                    <Link
                        href="/"
                        className={activeItem === "homepage" ? styles.menuItemActive : styles.menuItem}
                        onClick={() => setActiveItem("homepage")}
                    >
                        {t("navbar.homepage")} <img src="/assets/drop-white.svg" alt="dropdown" />
                    </Link>

                </div>
                <span
                    className={activeItem === "buy_crypto" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("buy_crypto")}
                >
                    {t("navbar.buy_crypto")}
                </span>
                <Link
                    href="/market"
                    className={activeItem === "markets" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("markets")}
                >
                    {t("navbar.markets")}
                </Link>

                <span
                    className={activeItem === "exchange" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("exchange")}
                >
                    {t("navbar.exchange")}
                </span>
                <span
                    className={activeItem === "spot" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("spot")}
                >
                    {t("navbar.spot")}
                </span>
                <span
                    className={activeItem === "bitusdt" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("bitusdt")}
                >
                    {t("navbar.bitusdt")} <img src="/assets/dot.svg" alt="dot" />
                </span>
                <span
                    className={activeItem === "pages" ? styles.menuItemActive : styles.menuItem}
                    onClick={() => setActiveItem("pages")}
                >
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
                <LanguageButton />
                <ThemeToggleButton />
                <img src={notificationIcon} alt="notification" />
                <button className={styles.walletBtn}>{t("navbar.wallet")}</button>
                <div className={styles.avatar}>xx</div>
            </div>
        </nav>
    );
};

export default Navbar;
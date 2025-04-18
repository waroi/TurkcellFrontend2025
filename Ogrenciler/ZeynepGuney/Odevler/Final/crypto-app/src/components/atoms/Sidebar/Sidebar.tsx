"use client";
import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import useAuth from "@/hooks/useAuth";
import styles from "./Sidebar.module.scss";
import "../../../app/global.scss";
import Link from 'next/link';

interface SidebarProps {
    className?: string;
}


const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const { theme, dropIcon, notificationIcon, logoIcon } = useTheme();
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState("en");
    const [activeItem, setActiveItem] = useState("homepage");
    const { logout } = useAuth();

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
                        className={activeItem === "homepage" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                        onClick={() => setActiveItem("homepage")}
                    >
                        {activeItem === "homepage" && (
                            <img
                                src="/assets/home-2.svg"
                                alt="home"
                            />
                        )}
                        {t("sidebar.homepage")} <img src="/assets/drop-white.svg" alt="dropdown" />
                    </Link>

                </div>
                <span
                    className={activeItem === "buy_crypto" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("buy_crypto")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/buy-crypto.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.buy_crypto")}
                </span>
                <Link
                    href="/market"
                    className={activeItem === "markets" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("markets")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/market.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.markets")}
                </Link>

                <span
                    className={activeItem === "exchange" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("exchange")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/exchange.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.exchange")}
                </span>
                <span
                    className={activeItem === "spot" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("spot")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/spot.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.spot")}
                </span>
                <span
                    className={activeItem === "byfi" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("byfi")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/byfi.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.byfi")} <img src="/assets/dot.svg" alt="dot" />
                </span>
                <span
                    className={activeItem === "more" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("more")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/more.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.more")} <img src={dropIcon} alt="dropdown" />
                </span>
            </div>

            <div className={styles.right}>
                <span
                    className={activeItem === "assets" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("assets")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/assets.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.assets")} <img src={dropIcon} alt="dropdown" />
                </span>
                <span
                    className={activeItem === "order" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("orders_trades")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/order.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.orders_trades")} <img src={dropIcon} alt="dropdown" />
                </span>
                <span
                    className={activeItem === "wallet" ? `${styles.menuItemActive} ${theme === 'dark' ? styles.dark : ''}` : `${styles.menuItem} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("wallet")}
                >
                    {activeItem !== "buy_crypto" && (
                        <img src="/assets/wallet.svg" alt="buy_crypto" />
                    )}
                    {t("sidebar.wallet")}
                </span>
            </div>
            <div style={{ marginTop: 'auto', padding: '1rem' }}>
                <span
                    onClick={logout}
                    className={styles.logout}

                >
                    <img src="/assets/logout.svg" alt="logout" />
                    {t("navbar.logout") ?? "Logout"}
                </span>
            </div>
        </nav>
    );
};

export default Sidebar;
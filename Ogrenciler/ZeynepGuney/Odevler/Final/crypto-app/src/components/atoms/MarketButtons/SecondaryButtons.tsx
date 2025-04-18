"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./SecondaryButtons.module.scss";
import { useTheme } from "@/context/ThemeContext";


interface ButtonLabel {
    key: string;
    label: string;
}
interface SecondaryButtonsProps {
    buttons: ButtonLabel[];
}
const SecondaryButtons: React.FC<SecondaryButtonsProps> = ({ buttons }) => {
    const { t } = useTranslation();
    const [activeItem, setActiveItem] = useState("all");
    const { theme } = useTheme();

    return (
        <section className={`${styles.secondaryButtons} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.left}>
                {buttons.map((btn) => (
                    <span
                    key={btn.key}
                    className={`
                      ${styles.menuItem} 
                      ${activeItem === btn.key ? styles.menuItemActive : ""} 
                      ${theme === "dark" ? styles.dark : ""}
                    `}
                    onClick={() => setActiveItem(btn.key)}
                  >
                    {btn.label}
                  </span>
                ))}
                {/* <span
                    className={`${styles.menuItem} ${activeItem === "all" ? styles.menuItemActive : ""} ${theme === 'dark' ? styles.dark : ''}`}
                    onClick={() => setActiveItem("all")}
                >
                    {t("secondaryButtons.all")}
                </span>
                <span
                    className={`${styles.menuItem} ${activeItem === "perpetual" ? styles.menuItemActive : ""}`}
                    onClick={() => setActiveItem("perpetual")}
                >
                    {t("secondaryButtons.perpetual")}
                </span>
                <span
                    className={`${styles.menuItem} ${activeItem === "USDT" ? styles.menuItemActive : ""}`}
                    onClick={() => setActiveItem("USDT")}
                >
                    {t("secondaryButtons.USDT")}
                </span>
                <span
                    className={`${styles.menuItem} ${activeItem === "futures" ? styles.menuItemActive : ""}`}
                    onClick={() => setActiveItem("futures")}
                >
                    {t("secondaryButtons.futures")}
                </span> */}
            </div>


        </section>
    );
};

export default SecondaryButtons;
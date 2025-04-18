"use client";
import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "../../molecules/NavbarElements/ThemeToggleButton";
import styles from "./MiniNav.module.scss";
import "../../../app/global.scss";
import LanguageButton from '../../molecules/NavbarElements/LanguageButton';
import Link from 'next/link';

const MiniNav = () => {
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
            <div className={styles.right}>
                <LanguageButton />
                <ThemeToggleButton />
                <img src={notificationIcon} alt="notification" />
                <div className={styles.avatar}>xx</div>
            </div>
        </nav>
    );
};

export default MiniNav;
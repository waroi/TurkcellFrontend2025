import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageButton.module.scss";
import { useTheme } from "../../../context/ThemeContext";

const LanguageButton = () => {
    const { dropIcon, theme } = useTheme();
    const { i18n } = useTranslation();

    const [currentLang, setCurrentLang] = useState<string | null>(null);

    useEffect(() => {
        if (currentLang === null) {
            setCurrentLang(i18n.language); 
        }
    }, [i18n.language]);

    const toggleLanguage = () => {
        const newLang = currentLang === "en" ? "tr" : "en";
        i18n.changeLanguage(newLang);
        setCurrentLang(newLang); 
    };
    if (currentLang === null) {
        return null;
    }

    return (
        <button
            className={`${styles.languageButton} ${theme === "light" ? styles.light : styles.dark}`}
            onClick={toggleLanguage}
        >
            {currentLang === "en" ? "EN/USD" : "TR/USD"}
            <img src={dropIcon} alt="dropdown" />
        </button>
    );
};

export default LanguageButton;

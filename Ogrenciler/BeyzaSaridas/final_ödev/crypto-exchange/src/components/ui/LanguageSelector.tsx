"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("language", langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button
        className="language-selector__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Dil seçin"
      >
        <span className="language-selector__flag">{currentLanguage.flag}</span>
        <span className="language-selector__name">{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="language-selector__dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-selector__item ${
                language.code === i18n.language
                  ? "language-selector__item--active"
                  : ""
              }`}
              onClick={() => changeLanguage(language.code)}
            >
              <span className="language-selector__flag">{language.flag}</span>
              <span className="language-selector__name">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

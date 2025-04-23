// context/LanguageContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Varsayılan dil 'en'
  const [translations, setTranslations] = useState({}); // Başlangıçta boş

  // Dil verilerini yüklemek için useEffect kullanıyoruz
  useEffect(() => {
    const loadTranslations = async () => {
      const languageData = await import(`../locales/${language}.json`);
      setTranslations(languageData);
    };

    loadTranslations();
  }, [language]); // Dil değiştiğinde veriyi yükle

  const switchLanguage = (lang) => {
    setLanguage(lang); // Dil değiştiğinde, switchLanguage çalışacak
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

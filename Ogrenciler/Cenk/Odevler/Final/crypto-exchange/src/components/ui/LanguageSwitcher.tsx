'use client';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
<button
  onClick={toggleLanguage}
  style={{
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    padding: '8px',
    color: 'var(--color-on-surface)', 
  }}
>
  {lang.toUpperCase()}
</button>

  );
};

export default LanguageSwitcher;

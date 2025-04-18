"use client";

import styles from "./LanguageSelect.module.css";
import { useEffect, useState } from "react";

const LanguageSelect = () => {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") || "en";
    setLocale(stored);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setLocale(selected);

    localStorage.setItem("lang", selected);

    window.location.reload();
  };

  return (
    <select value={locale} onChange={handleChange} className={styles.select}>
      <option value="en">EN/USD</option>
      <option value="tr">TR/USD</option>
    </select>
  );
};

export default LanguageSelect;

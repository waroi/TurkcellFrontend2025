'use client';
import "../../../app/global.scss";
import styles from "./Referrals.module.scss";
import Button from "@/components/atoms/Button/Button";
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from "react-i18next";

import React from 'react';

const Referrals = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className={`${styles.referrals} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <h2 className={styles.title}>{t("referrals.title")}</h2>
      <p>$1,056.00 <span className={styles.span}>USD</span></p>
      <p className={styles.desc}>{t("referrals.desc")}</p>
      <div className={`${styles.referralCodeContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <h3>{t("referrals.referralCodeDesc")}</h3>
        <div className={`${styles.referralCode} ${theme === 'dark' ? styles.dark : styles.light}`}>
          <label className={styles.labelReferralLink}>
            <span>{t("referrals.referralLink")}</span>
            <input
              type="text"
              value={"https://accounts.rockie.com/login"}
              className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
              readOnly
            />
          </label>
          <label className={styles.labelReferralCode}>
            <span>{t("referrals.referralCode")}</span>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                value={"N84CRDKK"}
                readOnly
                className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
              />
              <Button className={styles.copyBtn}>{t("referrals.copied")}</Button>
            </div>
          </label>
        </div>
      </div>
      <Button className={styles.wallet}>{t("referrals.myWallet")}</Button>
    </div>
  );
};

export default Referrals;

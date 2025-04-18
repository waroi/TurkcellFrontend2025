'use client';
import "../../../app/global.scss";

import React from 'react';
import { useTranslation } from "react-i18next";
import useUserStore from "@/store/users";
import styles from "./UserProfile.module.scss";
import { useTheme } from '@/context/ThemeContext';
import Button from "@/components/atoms/Button/Button";
import Switch from "@/components/atoms/Switch/Switch";


const UserProfile = () => {
  const { user } = useUserStore();
  const { t } = useTranslation();
  const { theme } = useTheme();


  if (!user) return <div>Kullanıcı verisi bulunamadı.</div>;

  return (
    <div className={styles.userProfile}>
      <h2 className={styles.title}>{t("profile.title")}</h2>
      <p className={styles.desc}>{t("profile.desc")}</p>
      <form className={styles.form}>
        <label className={styles.label}>
          {t("profile.email")}
          <input type="text" value={user.email} readOnly className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`} />
        </label>

        <label className={styles.label}>
          {t("profile.nickname")}
          <input type="text" value={user.nickname} readOnly className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`} />
        </label>

        <label className={styles.label}>
          UID:
          <input type="text" value={user.uid} readOnly className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`} />
        </label>

        <label className={styles.label}>
          {t("profile.uidCode")}
          <input type="text" value={user.uidCode} readOnly className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`} />
        </label>

        <label className={styles.label}>
          {t("profile.phoneNumber")}
          <input type="text" value={`${user.countryCode} ${user.phoneNumber}`} readOnly className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`} />
        </label>
      </form>
      <p className={`${styles.desc} ${theme === 'dark' ? styles.dark : styles.light}`}>{t("profile.title2")}</p>
      <div className={styles.levelContainer}>
        <div className={styles.left}>
          <h3 className={styles.subtitle}>{t("profile.level1")}</h3>
          <div className={styles.levelBox}>
            <p>{t("profile.depositAssets")} <Switch /></p>
            <hr />
            <p>{t("profile.withdrawAssets")} - <span>{t("profile.withdrawLimit")}</span></p>
            <p>{t("profile.cardPurchases")} <Switch /></p>
            <p>{t("profile.bankDeposit")} <Switch /></p>
          </div>
          <Button className={styles.updateBtn}>{t("profile.updateBtn")}</Button>
        </div>

        <div className={styles.right}>
          <h3 className={styles.subtitle}>{t("profile.level2")}</h3>
          <div className={styles.levelBox}>
            <p>{t("profile.fiatSpot")} <Switch /></p>
            <p>{t("profile.marginWallet")} - <span>{t("profile.marginEnabled")}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

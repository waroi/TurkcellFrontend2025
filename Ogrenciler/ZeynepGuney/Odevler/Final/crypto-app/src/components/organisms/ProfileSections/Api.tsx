'use client';
import "../../../app/global.scss";
import styles from "./Api.module.scss";
import Button from "@/components/atoms/Button/Button";
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from "react-i18next";

import React from 'react';

const Api = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <div className={`${styles.referrals} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <h2 className={styles.title}>{t("api.title")}</h2>
            <p className={styles.desc}>{t("api.desc")}</p>
            <div className={styles.emailRow}>
                <img
                    src={theme === 'dark' ? '/assets/mail-dark.svg' : '/assets/mail-light.svg'}
                    alt="mail icon"
                    className={styles.mailIcon}
                />
                <p>petersonkenn@demo.com</p>
            </div>
            <div className={`${styles.referralCodeContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <h3>{t("api.referralCodeDesc")}</h3>
                <div className={`${styles.referralCode} ${theme === 'dark' ? styles.dark : styles.light}`}>
                    <label className={styles.labelReferralLink}>
                        <span>{t("api.password")}</span>
                        <input
                            type="text"
                            placeholder={t("api.passwordPlaceholder")}
                            className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                            readOnly
                        />
                    </label>
                    <label className={styles.labelReferralCode}>
                        <span>{t("api.2fa")}</span>
                        <div className={styles.inputWithButton}>
                            <input
                                type="text"
                                placeholder={t("api.2faPlaceholder")}

                                readOnly
                                className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                            />
                        </div>
                    </label>
                </div>
            </div>
            <Button className={styles.button}>{t("api.button")}</Button>
        </div>
    );
};

export default Api;

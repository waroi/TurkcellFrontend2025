'use client';
import "../../../app/global.scss";
import styles from "./Auth.module.scss";
import Button from "@/components/atoms/Button/Button";
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from "react-i18next";

import React from 'react';

const Auth = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <div className={`${styles.referrals} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <h2 className={styles.title}>{t("2fa.title")}<span className={styles.title2}>{t("2fa.title2")}</span></h2>
            <p className={styles.desc}>{t("2fa.desc")}<span className={styles.desc2}>{t("2fa.desc2")}</span></p>
            <p></p>
            <div className={`${styles.referralCodeContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <h3>{t("2fa.referralCodeDesc")}</h3>
                <div className={`${styles.referralCode} ${theme === 'dark' ? styles.dark : styles.light}`}>
                    <label className={styles.labelReferralLink}>
                        <span>{t("2fa.password")}</span>
                        <input
                            type="text"
                            placeholder={t("api.passwordPlaceholder")}
                            className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                            readOnly
                        />
                    </label>
                    <label className={styles.labelReferralCode}>
                        <span>{t("2fa.2fa")}</span>
                        <div className={styles.inputWithButton}>
                            <input
                                type="text"
                                placeholder={t("2fa.2faPlaceholder")}

                                readOnly
                                className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                            />
                        </div>
                    </label>
                </div>
            </div>
            <Button className={styles.button}>{t("2fa.button")}</Button>
        </div>
    );
};

export default Auth;

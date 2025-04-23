'use client';
import "../../../app/global.scss";
import styles from "./ChangePassword.module.scss";
import Button from "@/components/atoms/Button/Button";
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import { changePassword } from "@/services/firebase";

const ChangePassword = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const eyeIcon = "/assets/eye.svg";

  const handleChangePassword = async () => {
    console.log("Old:", oldPassword, "New:", newPassword, "Confirm:", confirmPassword);
    setError("");
    setSuccess("");
  
    if (newPassword !== confirmPassword) {
      setError(t("password.errorMismatch"));
      return;
    }
  
    if (!oldPassword) {
      setError(t("password.errorMissingOldPassword"));
      return;
    }
  
    try {
      await changePassword(oldPassword, newPassword);
      setSuccess(t("password.success"));
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      setError(error.message || t("password.errorGeneric"));
    }
  };
  
  return (
    <div className={`${styles.referrals} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <h2 className={styles.title}>{t("password.title")}</h2>
      <p className={styles.desc}>{t("password.desc")}</p>

      <div className={`${styles.referralCodeContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <div className={`${styles.referralCode} ${theme === 'dark' ? styles.dark : styles.light}`}>

          <label className={styles.labelReferralLink}>
            <span>{t("password.passwordOld")}</span>
            <div className={styles.inputWithButton}>
              <input
                type={showOld ? "text" : "password"}
                placeholder={t("password.passwordOld")}
                className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />

              <img
                src={eyeIcon}
                alt="Toggle visibility"
                className={`${styles.eyeIcon} ${showOld ? styles.visible : styles.hidden}`}
                onClick={() => setShowOld(!showOld)}
              />
            </div>
          </label>

          <label className={styles.labelReferralLink}>
            <span>{t("password.passwordNew")}</span>
            <div className={styles.inputWithButton}>
              <input
                type={showNew ? "text" : "password"}
                placeholder={t("password.passwordNew")}
                className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <img
                src={eyeIcon}
                alt="Toggle visibility"
                className={`${styles.eyeIcon} ${showNew ? styles.visible : styles.hidden}`}
                onClick={() => setShowNew(!showNew)}
              />
            </div>
          </label>

          <label className={styles.labelReferralCode}>
            <span>{t("password.passwordConfirm")}</span>
            <div className={styles.inputWithButton}>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder={t("password.passwordConfirm")}
                className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                src={eyeIcon}
                alt="Toggle visibility"
                className={`${styles.eyeIcon} ${showConfirm ? styles.visible : styles.hidden}`}
                onClick={() => setShowConfirm(!showConfirm)}
              />
            </div>
          </label>
        </div>
      </div>
      <Button className={styles.button} onClick={handleChangePassword}>
        {t("password.button")}
      </Button>
    </div>
  );
};
export default ChangePassword;
"use client";

import Image from "next/image";
import styles from "./QrLogin.module.css";
import { useTranslations } from "next-intl";

const QrLogin = () => {
  const t = useTranslations("QrLogin");

  return (
    <div className={styles.wrapper}>
      <div className={styles.qrBox}></div>
      <h6 className={styles.title}>{t("title")}</h6>
      <p className={styles.desc}>
        {t("desc")}{" "}
        <a href="#" className={styles.link}>
          {t("link")}
        </a>{" "}
        {t("descAfter")}
      </p>
    </div>
  );
};

export default QrLogin;

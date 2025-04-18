"use client";

import React from "react";
import { useTranslations } from "next-intl";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  const t = useTranslations("Footer");

  return (
    <ul className={`list-unstyled d-flex gap-5 flex-wrap ${styles.nav}`}>
      <li>
        <span className={styles.title}>{t("products")}</span>
        <ul className="list-unstyled">
          <li>{t("productList.spot")}</li>
          <li>{t("productList.inverse")}</li>
          <li>{t("productList.usdt")}</li>
          <li>{t("productList.exchange")}</li>
          <li>{t("productList.launchpad")}</li>
          <li>{t("productList.pay")}</li>
        </ul>
      </li>
      <li>
        <span className={styles.title}>{t("services")}</span>
        <ul className="list-unstyled">
          <li>{t("serviceList.buy")}</li>
          <li>{t("serviceList.markets")}</li>
          <li>{t("serviceList.fee")}</li>
          <li>{t("serviceList.affiliate")}</li>
          <li>{t("serviceList.referral")}</li>
          <li>{t("serviceList.api")}</li>
        </ul>
      </li>
    </ul>
  );
};

export default FooterLinks;

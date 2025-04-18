import { useTranslations } from "next-intl";
import React from "react";
import styles from "./OrderBookStats.module.css";

interface Props {
  lastPrice: number | null;
  priceChange: number | null;
}

const OrderBookStats = ({ lastPrice, priceChange }: Props) => {
  const t = useTranslations("Dashboard.OrderBookStats");
  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <div>
        <small className={styles.text}>{t("lastPrice")}</small>
        <div className={styles.text}>{lastPrice?.toFixed(2)}</div>
      </div>
      <div>
        <small className={styles.text}>{t("usd")}</small>
        <div className={styles.text}>{(lastPrice || 0).toFixed(2)}</div>
      </div>
      <div>
        <small className={styles.text}>{t("change")}</small>
        <div
          className={`fw-semibold ${
            priceChange && priceChange < 0 ? "text-danger" : "text-success"
          }`}
        >
          {priceChange ? `${priceChange.toFixed(2)}%` : "0.00%"}
        </div>
      </div>
    </div>
  );
};

export default OrderBookStats;

"use client";

import React from "react";
import Image from "next/image";
import type { CoinData } from "@/types/coin";
import styles from "./DashboardStats.module.css";
import { useTranslations } from "next-intl";

const DashboardStats = ({ coin }: CoinData) => {
  const t = useTranslations("Dashboard.Stats");

  if (!coin) return null;

  return (
    <div className={`container ${styles.wrapper} rounded py-4 px-3`}>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center text-center text-md-start">
        <div className="d-flex flex-column align-items-center align-items-md-start gap-2">
          <h5 className={`${styles.title} fw-semibold`}>BTC/USD</h5>
        </div>

        <div className="d-flex flex-column gap-1">
          <small className={styles.title}>{t("lastPrice")}</small>
          <div>
            <span className="text-danger fw-bold">
              {coin.price_change_24h.toFixed(6)}
            </span>{" "}
            <span className={styles.title}>
              ${coin.current_price.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="d-flex flex-column gap-2">
          <small className={`${styles.title} d-flex align-items-center gap-2`}>
            <Image
              src="/dashboardStats/Time Circle.svg"
              width={20}
              height={20}
              alt="Time Circle"
            />
            {t("change")}
          </small>
          <div>
            <span className={styles.title}>
              {coin.price_change_24h.toFixed(6)}
            </span>{" "}
            <span
              className={`badge rounded-pill fw-semibold px-2 py-1 ${
                coin.price_change_percentage_24h > 0
                  ? "bg-success-subtle text-success"
                  : "bg-danger-subtle text-danger"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        </div>

        <div>
          <small className={`${styles.title} d-flex align-items-center gap-2`}>
            <Image
              src="/dashboardStats/Arrow - Up 3.svg"
              width={20}
              height={20}
              alt="Arrow Up"
            />
            {t("high")}
          </small>
          <div className={styles.title}>{coin.high_24h.toFixed(6)}</div>
        </div>

        <div>
          <small className={`${styles.title} d-flex align-items-center gap-2`}>
            <Image
              src="/dashboardStats/Arrow - Down 3.svg"
              width={20}
              height={20}
              alt="Arrow Down"
            />
            {t("low")}
          </small>
          <div className={styles.title}>{coin.low_24h.toFixed(6)}</div>
        </div>

        <div>
          <small className={`${styles.title} d-flex align-items-center gap-2`}>
            <Image
              src="/dashboardStats/Chart.svg"
              width={20}
              height={20}
              alt="Chart"
            />
            {t("volume")}
          </small>
          <div className={styles.title}>
            {coin.total_volume.toLocaleString()} BTC
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;

"use client";

import React, { useEffect, useState } from "react";
import styles from "./WalletOverview.module.css";
import { FiSearch } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { db } from "@/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import type { WalletOverviewProps } from "@/types/wallet";

const WalletOverview = ({
  searchQuery,
  onSearchChange,
}: WalletOverviewProps) => {
  const t = useTranslations("Wallet");
  const user = useSelector((state: RootState) => state.auth.user);
  const theme = useSelector((state: RootState) => state.theme.mode);

  const [currency, setCurrency] = useState("USD");
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [totalUsd, setTotalUsd] = useState(0);
  const [btcPrice, setBtcPrice] = useState(0);

  useEffect(() => {
    const fetchTotal = async () => {
      if (!user?.uid) return;

      const snapshot = await getDocs(
        collection(db, "users", user.uid, "wallet")
      );
      const rawData = snapshot.docs.map((doc) => doc.data());

      let total = 0;
      for (const item of rawData) {
        const usd = parseFloat(item.payAmount || 0);
        total += usd;
      }

      setTotalUsd(total);
    };

    const fetchBTCPrice = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
        );
        const data = await res.json();
        setBtcPrice(data.bitcoin.usd);
      } catch (error) {
        console.error("BTC fiyatı alınamadı:", error);
      }
    };

    fetchTotal();
    fetchBTCPrice();
  }, [user]);

  const btcAmount =
    btcPrice > 0 ? (totalUsd / btcPrice).toFixed(8) : "0.00000000";

  return (
    <div className={`p-4 rounded-4 shadow-sm ${styles.wrapper}`}>
      <div className="row align-items-center mb-3">
        <div className="col-md-6">
          <h5 className={`${styles.title} fw-bold`}>{t("overview")}</h5>
          <p className={`${styles.text} mb-1 small`}>{t("totalBalance")}</p>

          <div className="d-flex align-items-center gap-2">
            <h4 className={styles.title}>
              {balanceVisible ? btcAmount : "•••••••"}
            </h4>
            <span className="badge bg-success-subtle text-success">BTC</span>
          </div>

          <p className={styles.text}>
            {balanceVisible
              ? `$${totalUsd.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}`
              : "•••••••"}
          </p>
        </div>

        <div className="col-md-6 d-flex flex-column align-items-end gap-2">
          <div className="d-flex align-items-center gap-2 w-100 justify-content-between">
            <div className="position-relative w-75">
              <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted" />
              <input
                type="text"
                placeholder={t("search")}
                className="form-control ps-5"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>

            <select
              className="form-select w-auto"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="TRY">TRY</option>
            </select>
          </div>

          <button
            className="btn btn-primary w-100 rounded-pill"
            onClick={() => setBalanceVisible(!balanceVisible)}
          >
            {balanceVisible ? t("hideBalance") : t("showBalance")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletOverview;

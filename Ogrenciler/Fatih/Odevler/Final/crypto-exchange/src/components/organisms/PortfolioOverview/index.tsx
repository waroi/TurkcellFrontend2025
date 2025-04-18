"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "@/firebase/firebase.config";
import { RootState } from "@/store/store";
import styles from "./PortfolioOverview.module.css";
import { useTranslations } from "next-intl";

interface Asset {
  name: string;
  symbol: string;
  image: string;
  amount: number;
  usdValue: number;
  change: number;
}

const PortfolioOverview = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [totalUsdValue, setTotalUsdValue] = useState(0);
  const t = useTranslations("Dashboard.Portfolio");
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const fetchAssets = async () => {
      if (!user?.uid) return;

      const snapshot = await getDocs(
        collection(db, "users", user.uid, "wallet")
      );
      const rawData = snapshot.docs.map((doc) => doc.data());

      const grouped: {
        [symbol: string]: { amount: number; totalUsd: number };
      } = {};

      for (const item of rawData) {
        const coinId = item.toCurrency || item.receiveCoin;
        const amount = parseFloat(item.receiveAmount || 0);
        const usd = parseFloat(item.payAmount || 0);

        if (!grouped[coinId]) {
          grouped[coinId] = { amount: 0, totalUsd: 0 };
        }

        grouped[coinId].amount += amount;
        grouped[coinId].totalUsd += usd;
      }

      const coinList = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      ).then((res) => res.json());

      const result: Asset[] = Object.entries(grouped).map(
        ([id, { amount, totalUsd }]) => {
          const coin = coinList.find((c: any) => c.id === id);
          return {
            name: coin?.name || id,
            symbol: coin?.symbol?.toUpperCase() || id,
            image: coin?.image || "/icons/coin-placeholder.svg",
            amount,
            usdValue: totalUsd,
            change: coin?.price_change_percentage_24h || 0,
          };
        }
      );

      const total = result.reduce((sum, asset) => sum + asset.usdValue, 0);

      setAssets(result);
      setTotalUsdValue(total);
    };

    fetchAssets();
  }, [user]);

  return (
    <div className={`${styles.wrapper} p-4 rounded-4 shadow-sm mt-4`}>
      <h6 className={`${styles.title} text-center`}>{t("yourBalance")}</h6>
      <h3 className={`${styles.text} fw-bold text-center mb-3`}>
        ${totalUsdValue.toFixed(2)}
      </h3>

      <button
        className={`${styles.text} btn btn-outline-secondary w-100 rounded-pill mb-4`}
      >
        {t("topUp")}
      </button>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className={`${styles.title} fw-semibold`}>{t("yourAssets")}</h6>
        <Image src="/global/search.svg" width={16} height={16} alt="search" />
      </div>

      <div className="d-flex flex-column gap-3">
        {assets.map((asset, i) => (
          <div
            key={i}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center gap-2">
              <Image
                src={asset.image}
                alt={asset.name}
                width={32}
                height={32}
              />
              <div>
                <strong className={styles.text}>{asset.name}</strong>
                <div className={styles.title}>
                  {asset.amount.toFixed(4)} {asset.symbol}
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className={`${styles.text} fw-semibold`}>
                ${asset.usdValue.toFixed(2)}
              </div>
              <div
                className={`small fw-semibold ${
                  asset?.change >= 0 ? "text-success" : "text-danger"
                }`}
              >
                {asset?.change >= 0 ? "+" : ""}
                {asset?.change.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOverview;

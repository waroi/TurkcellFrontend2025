"use client";

import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./WalletDetail.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

const WalletDetail = ({ coin, onBack }: { coin: any; onBack?: () => void }) => {
  const t = useTranslations("WalletDetail");

  if (!coin) return null;

  const {
    symbol,
    name,
    totalAmount = 0,
    usdValue = 0,
    image,
    sparkline = [],
    availableAmount = 0,
  } = coin;

  const priceChange =
    sparkline.length > 1 ? sparkline[sparkline.length - 1] - sparkline[0] : 0;
  const isPositive = priceChange >= 0;
  const priceChangePercent =
    sparkline.length > 1
      ? ((priceChange / sparkline[0]) * 100).toFixed(2)
      : "0.00";

  return (
    <div className={`rounded-4 p-4 mt-4 shadow-sm ${styles.detailWrapper}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          {onBack && (
            <button onClick={onBack} className="btn btn-sm p-1">
              <FiArrowLeft size={20} />
            </button>
          )}
          <img
            src={image || "/icons/coin-placeholder.svg"}
            width={24}
            height={24}
            alt={symbol}
          />
          <h5 className="mb-0 text-uppercase fw-semibold">{symbol}</h5>
          <span className="text-muted small">{name}</span>
        </div>
        <div className="d-flex gap-2">
          <Link href="/buy-crypto">
            <button className="btn btn-primary rounded-pill px-4">
              {t("buy")}
            </button>
          </Link>
          <Link href="/sell-crypto">
            <button className="btn btn-outline-primary rounded-pill px-4">
              {t("sell")}
            </button>
          </Link>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="p-3 rounded border h-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <div className="fw-semibold">{symbol}/USDC</div>
                <span className="text-muted small">{t("totalBalance")}</span>
              </div>
              <span
                className={`badge px-2 py-1 ${
                  isPositive ? "bg-success" : "bg-danger"
                }`}
              >
                {priceChangePercent}%
              </span>
            </div>
            <h5 className="fw-bold mb-0">
              {totalAmount.toFixed(8)} {symbol}
            </h5>
            <span className="text-muted">${usdValue.toFixed(2)}</span>

            <div className="mt-3">
              <Sparklines data={sparkline}>
                <SparklinesLine
                  color={isPositive ? "#10B981" : "#EF4444"}
                  style={{ strokeWidth: 2, fill: "none" }}
                />
              </Sparklines>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column gap-2">
          {[
            {
              label: t("exchange"),
              amount: (totalAmount * 0.85).toFixed(8),
              usd: (usdValue * 0.85).toFixed(2),
            },
            {
              label: t("spot"),
              amount: "0.0000000000",
              usd: "0.00",
            },
            {
              label: t("available"),
              amount: availableAmount.toFixed(8),
              usd: "0.00",
            },
          ].map((box, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center border rounded p-3"
            >
              <div className="d-flex align-items-center gap-2">
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#2563eb",
                  }}
                />
                <span className="fw-semibold">{box.label}</span>
              </div>
              <div className="text-end">
                <div className="fw-semibold">
                  {box.amount} {symbol}
                </div>
                <div className="text-muted small">${box.usd}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletDetail;

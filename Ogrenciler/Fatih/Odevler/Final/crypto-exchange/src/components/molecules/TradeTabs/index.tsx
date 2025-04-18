"use client";

import React from "react";
import type { TradeTabs as TradeTabsProps } from "@/types/trades";
import styles from "./TradeTabs.module.css";
import { useTranslations } from "next-intl";

const TradeTabs = ({ side, onChange }: TradeTabsProps) => {
  const t = useTranslations("Trade");

  return (
    <div className="d-flex w-100 mb-3 border-bottom">
      {["buy", "sell"].map((value) => (
        <button
          key={value}
          className={`${
            styles.wrapper
          } fw-semibold px-4 py-2 border-0 flex-fill ${
            side === value ? "border-bottom border-2 border-primary" : ""
          }`}
          onClick={() => onChange(value as "buy" | "sell")}
        >
          {t(value)}
        </button>
      ))}
    </div>
  );
};

export default TradeTabs;

"use client";

import React from "react";
import type { OrderTypeProps } from "@/types/trades";
import styles from "./OrderTypeSelector.module.css";
import { useTranslations } from "next-intl";

const OrderTypeSelector = ({ selected, onSelect }: OrderTypeProps) => {
  const t = useTranslations("Dashboard.Trade.OrderTypes");
  const types = ["limit", "market", "stop-limit", "stop-market"];

  return (
    <div className="d-flex justify-content-between gap-2 mb-4 flex-wrap">
      {types.map((type) => (
        <button
          key={type}
          className={`btn btn-sm px-1 py-1 rounded-pill fw-medium ${
            selected === type
              ? "bg-primary text-white"
              : `${styles.text} bg-transparent`
          }`}
          onClick={() => onSelect(type)}
        >
          {t(type)}
        </button>
      ))}
    </div>
  );
};

export default OrderTypeSelector;

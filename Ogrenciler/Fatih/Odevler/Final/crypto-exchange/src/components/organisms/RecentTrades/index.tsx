"use client";

import React from "react";
import styles from "./RecentTrades.module.css";
import { useTranslations } from "next-intl";
import { useRecentTrades } from "@/hooks/useRecentTrades";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const RecentTrades = () => {
  const trades = useRecentTrades();
  const t = useTranslations("Dashboard.RecentTrades");
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={`rounded-4 p-4 shadow-sm mt-4 ${styles.wrapper}`}>
      <h5 className={`${styles.title} fw-semibold mb-3`}>{t("title")}</h5>
      <div className="table-responsive">
        <table className={`table ${theme === "dark" ? "table-dark" : ""} m-0`}>
          <thead>
            <tr className="small">
              <th>{t("time")}</th>
              <th>{t("price")}</th>
              <th>{t("amount")}</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => {
              const date = new Date(trade.time);
              const timeStr = date.toLocaleTimeString();
              const up = trade.isBuyerMaker === false;
              return (
                <tr key={trade.id}>
                  <td>{timeStr}</td>
                  <td
                    className={
                      up
                        ? "text-success fw-semibold"
                        : "text-danger fw-semibold"
                    }
                  >
                    {parseFloat(trade.price).toFixed(6)}
                  </td>
                  <td>{parseFloat(trade.qty).toFixed(6)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTrades;

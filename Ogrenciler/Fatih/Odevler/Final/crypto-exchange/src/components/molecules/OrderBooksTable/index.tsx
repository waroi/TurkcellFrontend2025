"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { OrderBooksTable as OrderTable } from "@/types/orders";
import styles from "./OrderBooksTable.module.css";

const OrderBooksTable = ({ type, data }: OrderTable) => {
  const isAsk = type === "ask";
  const color = isAsk ? "danger" : "success";
  const t = useTranslations("Dashboard.OrderBook");

  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <table
      className={`table table-borderless ${
        theme === "dark" ? "table-dark" : ""
      }`}
    >
      {isAsk && (
        <thead>
          <tr className="small">
            <th>{t("price")}</th>
            <th>{t("amount")}</th>
            <th>{t("total")}</th>
          </tr>
        </thead>
      )}
      <tbody className={styles.rowWrapper}>
        {data.map((order, i) => {
          const price = parseFloat(order.price);
          const amount = parseFloat(order.amount);
          const total = (price * amount).toFixed(6);

          return (
            <tr key={`${type}-${i}`}>
              <td
                className={`text-${color} ${styles.priceCell}`}
                style={{ width: "33%" }}
              >
                {price}
              </td>
              <td style={{ width: "33%" }}>{amount}</td>
              <td>
                <div
                  className={`${styles.totalBar}`}
                  style={{
                    backgroundColor: isAsk ? "#d33535" : "#58bd7d",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <span className={styles.totalValue}>{total}</span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OrderBooksTable;

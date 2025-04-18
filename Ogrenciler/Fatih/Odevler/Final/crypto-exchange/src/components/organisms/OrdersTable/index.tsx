"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import styles from "./OrdersTable.module.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const mockOrders = [
  {
    date: "17-04 16:40",
    pair: "BTC/ETH",
    side: "BUY",
    price: "$1583,85",
    executed: true,
    total: "0.52 BTC",
  },
  {
    date: "16-04 14:43",
    pair: "BTC/ETH",
    side: "SELL",
    price: "$285,32",
    executed: true,
    total: "0.026 BTC",
  },
  {
    date: "15-04 23:13",
    pair: "BTC/ETH",
    side: "BUY",
    price: "$1372,70",
    executed: false,
    total: "0.43 BTC",
  },
];

const OrdersTable = () => {
  const t = useTranslations("Dashboard.Orders");
  const [activeTab, setActiveTab] = useState("history");
  const theme = useSelector((state: RootState) => state.theme.mode);

  const tabs = [
    { key: "history", label: t("tabs.history") },
    { key: "open", label: t("tabs.open") },
    { key: "closed", label: t("tabs.closed") },
  ];

  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div className="d-flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`${styles.tabButton} ${
                activeTab === tab.key ? styles.active : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          className={`form-control rounded-pill ${styles.input}`}
          placeholder={t("search")}
          style={{ maxWidth: 200 }}
        />
      </div>

      <div className={`table-responsive ${styles.tableContainer}`}>
        <table
          className={`table align-middle ${
            theme === "dark" ? "table-dark" : ""
          }`}
        >
          <thead>
            <tr>
              <th>{t("table.date")}</th>
              <th>{t("table.pair")}</th>
              <th>{t("table.side")}</th>
              <th>{t("table.price")}</th>
              <th>{t("table.executed")}</th>
              <th>{t("table.total")}</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order, idx) => (
              <tr key={idx} className={idx === 2 ? "bg-primary-subtle" : ""}>
                <td>{order.date}</td>
                <td>{order.pair}</td>
                <td
                  className={
                    order.side === "BUY" ? "text-success" : "text-danger"
                  }
                >
                  {order.side}
                </td>
                <td>{order.price}</td>
                <td>
                  {order.executed ? (
                    <FaCheckCircle className="text-success" />
                  ) : (
                    <FaTimesCircle className="text-danger" />
                  )}
                </td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;

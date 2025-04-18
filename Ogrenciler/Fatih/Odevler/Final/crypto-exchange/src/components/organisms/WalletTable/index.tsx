"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { WalletTableProps } from "@/types/wallet";
import { RootState } from "@/store/store";
import styles from "./WalletTable.module.css";

const WalletTable = ({ data, searchQuery, onSelect }: WalletTableProps) => {
  const t = useTranslations("Wallet");
  const theme = useSelector((state: RootState) => state.theme.mode);

  const filteredData = data.filter(
    (item) =>
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-responsive rounded-4 p-4 mt-4 shadow-sm">
      <h5 className={`${styles.title} fw-semibold mb-3`}>{t("tableTitle")}</h5>
      <table
        className={`table align-middle ${theme === "dark" ? "table-dark" : ""}`}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>{t("asset")}</th>
            <th>{t("earn")}</th>
            <th>{t("onOrders")}</th>
            <th>{t("available")}</th>
            <th>{t("total")}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, i) => {
            const earnApr = (item.earnApr || 0).toFixed(2);
            const onOrdersAmount = item.onOrdersAmount || 0;
            const availableAmount = item.availableAmount || 0;
            const totalAmount = item.totalAmount || 0;
            const usdValue = item.usdValue || 0;

            const onOrdersUsd = (
              (usdValue * onOrdersAmount) /
              (totalAmount || 1)
            ).toFixed(2);
            const availableUsd = (
              (usdValue * availableAmount) /
              (totalAmount || 1)
            ).toFixed(2);
            const totalUsd = usdValue.toFixed(2);

            return (
              <tr
                key={item.id}
                onClick={() => onSelect(item)}
                style={{ cursor: "pointer" }}
              >
                <td>{i + 1}</td>
                <td className="text-uppercase fw-semibold">
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      src={item.image || "/icons/coin-placeholder.svg"}
                      alt={item.symbol}
                      width={24}
                      height={24}
                    />
                    <div>
                      <div>{item.symbol}</div>
                      <div className={`${styles.text} small `}>{item.name}</div>
                    </div>
                  </div>
                </td>

                <td className="text-success fw-bold">{earnApr}% APR</td>
                <td>
                  {onOrdersAmount.toFixed(8)} {item.symbol}
                  <br />
                  <span className={`${styles.text} small `}>
                    ${onOrdersUsd}
                  </span>
                </td>
                <td>
                  {availableAmount.toFixed(8)} {item.symbol}
                  <br />
                  <span className={`${styles.text} small`}>
                    ${availableUsd}
                  </span>
                </td>
                <td>
                  {totalAmount.toFixed(8)} {item.symbol}
                  <br />
                  <span className={`${styles.text} small `}>${totalUsd}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WalletTable;

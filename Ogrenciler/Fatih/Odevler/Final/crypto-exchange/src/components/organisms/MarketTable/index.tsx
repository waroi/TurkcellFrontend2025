"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { RootState } from "@/store/store";
import CategoryFilter from "@/components/molecules/CategoryFilter";
import SearchBox from "@/components/molecules/SearchBox";
import CoinRow from "@/components/molecules/CoinRow";
import styles from "./MarketTable.module.css";

const MarketTable = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const t = useTranslations("Home.Market");

  const theme = useSelector((state: RootState) => state.theme.mode);

  const filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    t("categories.all"),
    t("categories.metaverse"),
    t("categories.entertainment"),
    t("categories.energy"),
    t("categories.nft"),
    t("categories.gaming"),
    t("categories.music"),
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-semibold mb-3">{t("title")}</h2>

      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <CategoryFilter
          categories={categories}
          activeIndex={activeCategory}
          onSelect={setActiveCategory}
        />
        <SearchBox value={searchTerm} onChange={setSearchTerm} />
      </div>

      <div className={`table-responsive ${styles.tableContainer}`}>
        <table
          className={`table ${styles.tableContainer} ${
            theme === "dark" ? "table-dark" : ""
          }`}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>{t("tableHeaders.name")}</th>
              <th>{t("tableHeaders.lastPrice")}</th>
              <th>24h %</th>
              <th>{t("tableHeaders.marketCap")}</th>
              <th>{t("tableHeaders.last7days")}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((coin, i) => (
              <CoinRow key={coin.id} coin={coin} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTable;

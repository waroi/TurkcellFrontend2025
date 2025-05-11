"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { useCoinStore } from "@/store/useCoinStore";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const MarketTable = () => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const { coins, fetchData, sortCoins, addFav, removeFav, isFav, favCoins } =
    useCoinStore();
  const [coin, setCoin] = useState(coins);
  const { theme } = useTheme();
  const t = useTranslations();
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setCoin(coins);
  }, [coins]);
  return (
    <div className="py-5">
      <div className={`container table-responsive mt-4 rounded-4 px-0 shadow`}>
        <div className="d-flex top-bar px-4">
          <Button
            variant="light"
            className="rounded-0 py-3"
            onClick={() => {
              coin == coins ? setCoin(favCoins) : setCoin(coins);
            }}
          >
            {t("marketTable.topBar.favorites")}
          </Button>
          <Button variant="light" className="mx-3 rounded-0">
            {t("marketTable.topBar.derivates")}
          </Button>
          <Button variant="light" className="mx-3 rounded-0">
            {t("marketTable.topBar.spot")}
          </Button>
        </div>
        <div className="d-flex py-3 mid-bar px-4">
          <Button variant="white" className="rounded-0">
            {t("marketTable.categories.all")}
          </Button>
          <Button variant="white" className="mx-4 rounded-0">
            {t("marketTable.categories.inverse_perpetual")}
          </Button>
          <Button variant="white" className="mx-4 rounded-0">
            {t("marketTable.categories.usdt_perpetual")}
          </Button>
          <Button variant="white" className="rounded-0">
            {t("marketTable.categories.inverse_features")}
          </Button>
        </div>
        <div className="d-flex px-4 mb-4 bottom-bar">
          <Button variant="white" className="mx-3 px-3 rounded-pill">
            Hot
          </Button>
          <Button variant="white" className="mx-3 px-3 rounded-pill">
            New
          </Button>
          <Button variant="white" className="mx-3 px-3 rounded-pill">
            DeFi
          </Button>
          <Button variant="white" className="mx-3 px-3 rounded-pill">
            NFT
          </Button>
        </div>
        <Table
          hover
          responsive
          className={`table ${
            theme === "light" ? "bg-white" : "bg-dark"
          } align-middle text-center mb-0`}
        >
          <thead className={``}>
            <tr className="">
              <th></th>
              <th>#</th>
              <th
                onClick={() => {
                  const sorted = sortCoins("name", sortDirection);
                  setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
                  setCoin(sorted);
                }}
                className="cursor-pointer"
              >
                Trading Pair
              </th>
              <th
                onClick={() => {
                  const sorted = sortCoins("current_price", sortDirection);
                  setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
                  setCoin(sorted);
                }}
                className="cursor-pointer"
              >
                Last Traded
              </th>
              <th
                onClick={() => {
                  const sorted = sortCoins(
                    "price_change_percentage_24h",
                    sortDirection
                  );
                  setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
                  setCoin(sorted);
                }}
                className="cursor-pointer"
              >
                24H Change%
              </th>
              <th>24H High</th>
              <th>24H Low</th>
              <th
                onClick={() => {
                  const sorted = sortCoins("total_volume", sortDirection);
                  setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
                  setCoin(sorted);
                }}
                className="cursor-pointer"
              >
                24H Turnover
              </th>
              <th>Chart</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coin.slice(0, 20).map((c, index) => {
              const fav = isFav(c.id);
              return (
                <tr key={c.id} className="t-row2">
                  <td>
                    <Button
                      variant="none"
                      className="border-0"
                      onClick={() => {
                        isFav(c.id) ? removeFav(c.id) : addFav(c);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faStar}
                        color={isFav(c.id) ? "#ffc107" : "#d3d3d3"}
                      />
                    </Button>
                  </td>
                  <td>{index + 1}</td>
                  <td className="">
                    <div className="d-flex align-items-center gap-2 ps-3">
                      <Image
                        src={c.image}
                        alt={c.name}
                        width={24}
                        height={24}
                      />
                      {c.name}{" "}
                      <span className="text-secondary text-uppercase ms-1">
                        {c.symbol}
                      </span>
                    </div>
                  </td>
                  <td>{c.current_price}</td>
                  <td
                    className={
                      c.price_change_percentage_24h < 0
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    {c.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td>{c.high_24h?.toLocaleString()}</td>
                  <td>{c.low_24h?.toLocaleString()}</td>
                  <td>${c.total_volume?.toLocaleString()}</td>
                  <td>
                    <div style={{ width: 100, height: 30 }}>
                      <Sparklines data={c.sparkline_in_7d?.price}>
                        <SparklinesLine
                          color={
                            c.price_change_percentage_24h < 0 ? "red" : "green"
                          }
                          style={{ strokeWidth: 2, fill: "none" }}
                        />
                        <SparklinesSpots />
                      </Sparklines>
                    </div>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="none"
                      className="rounded-pill px-3 trade-btn"
                    >
                      Trade
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MarketTable;

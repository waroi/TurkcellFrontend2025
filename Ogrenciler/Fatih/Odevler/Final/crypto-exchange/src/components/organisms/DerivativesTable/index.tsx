import React, { useState } from "react";
import Image from "next/image";
import Sparkline from "@/components/molecules/Sparkline";
import Button from "@/components/atoms/Button";

const DerivativesTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="container mt-5 bg-white rounded-4 p-4 shadow">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex gap-3">
          <button className="btn btn-light fw-semibold">Favorites</button>
          <button className="btn btn-light fw-semibold">Derivatives</button>
          <button className="btn btn-light fw-semibold">Spot</button>
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-light">All</button>
          <button className="btn btn-light">Inverse Perpetual</button>
          <button className="btn btn-light">USDT Perpetual</button>
          <button className="btn btn-light">Inserve Futures</button>
        </div>
      </div>

      <div className="d-flex gap-3 mb-3">
        <button className="btn btn-light btn-sm px-3 py-1 rounded-pill">
          Hot
        </button>
        <button className="btn btn-light btn-sm px-3 py-1 rounded-pill">
          New
        </button>
        <button className="btn btn-light btn-sm px-3 py-1 rounded-pill">
          DeFi
        </button>
        <button className="btn btn-light btn-sm px-3 py-1 rounded-pill">
          NFT
        </button>
      </div>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("name")}
              >
                Trading Paris{" "}
                <Image
                  src="/global/order.svg"
                  alt="sort"
                  width={12}
                  height={12}
                />
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("current_price")}
              >
                Last Traded{" "}
                <Image
                  src="/global/order.svg"
                  alt="sort"
                  width={12}
                  height={12}
                />
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("price_change_percentage_24h")}
              >
                24H Change%{" "}
                <Image
                  src="/global/order.svg"
                  alt="sort"
                  width={12}
                  height={12}
                />
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("high_24h")}
              >
                24H High{" "}
                <Image
                  src="/global/order.svg"
                  alt="sort"
                  width={12}
                  height={12}
                />
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("low_24h")}
              >
                24H Low{" "}
                <Image
                  src="/global/order.svg"
                  alt="sort"
                  width={12}
                  height={12}
                />
              </th>
              <th>24H Turnover</th>
              <th>Chart</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((coin, index) => (
              <tr
                key={coin.id}
                className={index === 1 ? "bg-primary-subtle rounded-4" : ""}
              >
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={24}
                      height={24}
                    />
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-semibold">{coin.name}</span>
                      <span className="text-muted">|</span>
                      <span className="text-muted small">
                        {coin.symbol.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </td>
                <td>{coin.current_price}</td>
                <td
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {coin.price_change_percentage_24h > 0 ? "+" : ""}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>{coin.high_24h}</td>
                <td>{coin.low_24h}</td>
                <td>{(coin.total_volume / 1_000_000_000).toFixed(2)}B (USD)</td>
                <td style={{ width: 100 }}>
                  {coin.sparkline_in_7d?.price?.length > 0 && (
                    <Sparkline
                      data={coin.sparkline_in_7d.price}
                      color={
                        coin.sparkline_in_7d.price[0] <
                        coin.sparkline_in_7d.price[
                          coin.sparkline_in_7d.price.length - 1
                        ]
                          ? "#16c784"
                          : "#ea3943"
                      }
                    />
                  )}
                </td>
                <td>
                  <Button variant="outline">Trade</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DerivativesTable;

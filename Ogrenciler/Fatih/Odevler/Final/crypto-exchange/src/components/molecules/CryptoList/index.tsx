"use client";

import React from "react";
import Image from "next/image";
import styles from "./CryptoList.module.css";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

interface CryptoListProps {
  coins: Coin[];
  onSelect: (coin: Coin) => void;
  selectedCoinId?: string;
}

const CryptoList: React.FC<CryptoListProps> = ({
  coins,
  onSelect,
  selectedCoinId,
}) => {
  return (
    <div className="mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th className="text-end">24%</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, i) => {
            const isSelected = selectedCoinId === coin.id;
            return (
              <tr
                key={coin.id}
                className={`align-middle ${
                  isSelected ? styles.selectedRow : ""
                }`}
                onClick={() => onSelect(coin)}
                style={{ cursor: "pointer" }}
              >
                <td>{i + 1}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={24}
                      height={24}
                    />
                    <div>
                      <div className="fw-semibold">{coin.name}</div>
                      <small className="text-muted">
                        {coin.symbol.toUpperCase()}
                      </small>
                    </div>
                  </div>
                </td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td className="text-end">
                  <span
                    className={
                      coin.price_change_percentage_24h >= 0
                        ? "text-success fw-semibold"
                        : "text-danger fw-semibold"
                    }
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;

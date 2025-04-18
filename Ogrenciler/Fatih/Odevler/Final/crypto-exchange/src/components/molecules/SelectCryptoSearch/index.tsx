"use client";

import React, { useEffect, useState } from "react";
import styles from "./SelectCryptoSearch.module.css";
import { FaSearch } from "react-icons/fa";
import { Coin } from "@/types/coin";

interface SelectCryptoSearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  currencyOptions?: string[];
  coins: Coin[];
  onSelectCoin: (coin: Coin) => void;
  selectedCoinId?: string;
}

const SelectCryptoSearch: React.FC<SelectCryptoSearchProps> = ({
  value,
  onChange,
  onSearch,
  selectedCurrency,
  onCurrencyChange,
  currencyOptions = ["USD", "EUR", "VND"],
  coins,
  onSelectCoin,
  selectedCoinId,
}) => {
  const displayCurrency = selectedCurrency
    ? selectedCurrency.toUpperCase()
    : "";

  console.log(coins);
  return (
    <div className="bg-light rounded-4 p-4">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div>
          <h5 className="fw-bold mb-1">Select Crypto</h5>
          <p className="text-muted mb-0 small">
            Which Crypto Do You Want To Search?
          </p>
        </div>

        <div className="d-flex align-items-center gap-2 flex-grow-1">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaSearch size={14} className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search"
              value={value}
              onChange={onChange}
            />
          </div>

          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {displayCurrency}
            </button>
            <ul className="dropdown-menu">
              {currencyOptions.map((cur) => (
                <li key={cur}>
                  <button
                    className="dropdown-item"
                    onClick={() => onCurrencyChange(cur)}
                  >
                    {cur.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={onSearch}
          className="btn btn-primary rounded-pill px-4 fw-semibold"
          type="button"
        >
          Search
        </button>
      </div>

      <table className="table mb-0">
        <thead>
          <tr className="text-muted small">
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24%</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(coins) && coins.length > 0 ? (
            coins.map((coin, index) => (
              <tr
                key={coin.id}
                onClick={() => onSelectCoin(coin)}
                className={`cursor-pointer ${
                  selectedCoinId === coin.id ? "bg-primary-subtle" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      width={24}
                      height={24}
                    />
                    <div>
                      <div className="fw-semibold">{coin.name}</div>
                      <div className="text-muted small">
                        {coin.symbol?.toUpperCase() || "-"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center text-muted py-4">
                No coins found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SelectCryptoSearch;

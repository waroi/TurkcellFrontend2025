"use client";

import React, { useState } from "react";
import styles from "./TradeTable.module.css";
import { CheckCircle, XCircle } from "lucide-react";

const tabs = ["Order History", "Open Orders", "Closed Orders"];

const mockData = [
  {
    date: "24-04 14:40",
    pair: "BTC/ETH",
    type: "buy",
    price: "$222",
    executed: true,
    total: "0.4314 BTC",
  },
  {
    date: "24-04 14:40",
    pair: "BTC/ETH",
    type: "sell",
    price: "$222",
    executed: true,
    total: "0.4314 BTC",
  },
  {
    date: "24-04 14:40",
    pair: "BTC/ETH",
    type: "buy",
    price: "$222",
    executed: false,
    total: "0.4314 BTC",
  },
];

const TradeTable = () => {
  const [activeTab, setActiveTab] = useState("Order History");

  return (
    <section className="container bg-white p-4 rounded-4 shadow-sm mt-4">
      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
        <div className="d-flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`border-0 bg-transparent fw-semibold pb-2 px-1 ${
                activeTab === tab
                  ? "border-bottom border-primary text-dark"
                  : "text-muted"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search By Date"
        />
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Pair</th>
              <th>Buy/Sell</th>
              <th>Price</th>
              <th>Executed</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item, index) => (
              <tr
                key={index}
                className={index === 2 ? "bg-primary-subtle" : ""}
              >
                <td>{item.date}</td>
                <td>{item.pair}</td>
                <td
                  className={`fw-semibold ${
                    item.type === "buy" ? "text-success" : "text-danger"
                  }`}
                >
                  {item.type.toUpperCase()}
                </td>
                <td>{item.price}</td>
                <td>
                  {item.executed ? (
                    <CheckCircle size={18} className="text-success" />
                  ) : (
                    <XCircle size={18} className="text-danger" />
                  )}
                </td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TradeTable;

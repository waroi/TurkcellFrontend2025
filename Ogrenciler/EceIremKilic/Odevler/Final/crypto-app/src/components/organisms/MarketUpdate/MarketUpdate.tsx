"use client";
import { useCoinStore } from "@/store/useCoinStore";
import React from "react";
import { Container } from "react-bootstrap";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const MarketUpdate = () => {
  const { coins } = useCoinStore();
  return (
    <Container className="p-5">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h2 className="display-4 fw-semibold mb-0">Market Update</h2>
        <div>
          <p className="mb-0">See All Coins</p>
          <hr className="my-1" />
        </div>
      </div>
      <table className="w-100 table-auto text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Last Price</th>
            <th className="p-2">24h %</th>
            <th className="p-2">Market Cap</th>
            <th className="p-2">Last 7 Days</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id} className="">
              <td className="p-2">{index + 1}</td>
              <td className="p-2 d-flex align-items-center gap-2">
                <img src={coin.image} alt={coin.name} width={24} height={24} />

                <h6 className="fw-bold mb-0">{coin.name}</h6>
                <div className="text-sm text-gray-500 uppercase">
                  {coin.symbol.toLocaleUpperCase()}
                </div>
              </td>
              <td className="p-2">${coin.current_price.toLocaleString()}</td>
              <td
                className={`p-2 font-semibold ${
                  coin.price_change_percentage_24h < 0
                    ? "text-danger"
                    : "text-success"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="p-2">${coin.market_cap.toLocaleString()}</td>
              <td className="p-2">
                <div className="">
                  <Sparklines data={coin.sparkline_in_7d.price}>
                    <SparklinesLine
                      color={
                        coin.price_change_percentage_24h < 0 ? "red" : "green"
                      }
                      style={{ strokeWidth: 1.5, fill: "none" }}
                    />
                    <SparklinesSpots />
                  </Sparklines>
                </div>
              </td>
              <td className="p-2">
                <button className="btn btn-light border-1 border-secondary px-3 py-2 rounded-pill text-sm">
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default MarketUpdate;

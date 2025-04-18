"use client";

import React from "react";
import Image from "next/image";
import Sparkline from "@/components/molecules/Sparkline";
import Button from "@/components/atoms/Button";

const CoinRow = ({ coin, index }) => {
  const trendColor =
    coin.price_change_percentage_24h > 0 ? "#16c784" : "#ea3943";

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <Image src={coin.image} alt={coin.name} width={24} height={24} />
          <div>
            <strong>{coin.name}</strong>{" "}
            <small>{coin.symbol.toUpperCase()}</small>
          </div>
        </div>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td style={{ color: trendColor }}>
        {coin.price_change_percentage_24h > 0 ? "+" : ""}
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>${coin.market_cap.toLocaleString()}</td>
      <td style={{ width: 100 }}>
        {coin.sparkline_in_7d?.price?.length > 0 && (
          <Sparkline
            data={coin.sparkline_in_7d.price}
            color={
              coin.sparkline_in_7d.price[0] <
              coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1]
                ? "#16c784"
                : "#ea3943"
            }
          />
        )}
      </td>
      <td>
        <Button variant="secondary">Trade</Button>
      </td>
    </tr>
  );
};

export default CoinRow;

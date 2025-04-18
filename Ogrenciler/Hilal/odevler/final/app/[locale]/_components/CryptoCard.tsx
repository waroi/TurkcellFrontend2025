import { CoinData } from "@/constants/types";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Badge } from "react-bootstrap";


type CryptoCardProps = {
  coin: CoinData;
};

const CryptoCard = ({ coin }: CryptoCardProps) => {
  const change = coin?.quote?.USD?.percent_change_24h ?? 0;
  const isPositive = change >= 0;

  return (
    <div
      className={clsx(
        isPositive && "shadow-sm",
        "rounded py-2 px-8 d-flex flex-column gap-3 w-100"
      )}
    >
      <div className="currency-logo-group d-flex gap-2 align-items-center">
        <span className="rounded-circle crypto-icon d-inline overflow-hidden bg-secondary2 d-flex justify-content-center align-items-center">
          <Image
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
            alt={`${coin.symbol} logo`}
            width={24}
            height={24}
            className="w-100 h-100"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </span>
        <span className="caption1 fw-bold">{coin?.name}</span>
        <span className="caption1 fw-bold text-secondary">{coin?.symbol}/USD</span>
      </div>
      <div className="value-group d-flex gap-2 align-items-end">
    
        <h5 className="m-0">  <span>USD</span> <span>${coin?.quote?.USD.price.toFixed(2)}</span></h5>
      </div>
      <div className="crypto-footer d-flex justify-content-between align-items-center">
        <span className="caption1 text-secondary">
          ${coin?.quote.USD.market_cap.toLocaleString()}
        </span>
        <Badge
          pill
          bg={isPositive ? "success" : "critical"}
          className="caption2 ms-2"
        >
          {isPositive ? "+" : ""}
          {change.toFixed(2)}%
        </Badge>
      </div>
    </div>
  );
};

export default CryptoCard;

import Image from "next/image";
import React from "react";

function MarketCard({ coin }: { coin: any }) {
  const { id, name, symbol, quote } = coin;
  const percentChange = quote.USD.percent_change_24h;
  const price = quote.USD.price;

  return (
    <div className="card p-3 w-100 border-0 shadow-sm rounded-4" key={id}>
      <div className="card-body p-0 d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-start">
          <Image
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
            width={32}
            height={32}
            alt={name}
          />
          {percentChange > 0 ? (
            <Image
              src="/market-update-green-chart.png"
              alt="chart"
              width={130}
              height={30}
            />
          ) : percentChange < 0 ? (
            <Image
              src="/market-update-red-chart.png"
              alt="chart"
              width={130}
              height={30}
            />
          ) : (
            ""
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="fw-medium fs-5">{name}</div>
          <span
            className={`rounded-pill px-2 py-1 text-white text-sm ${
              percentChange >= 0 ? "bg-success" : "bg-danger"
            }`}
          >
            {percentChange.toFixed(2)}%
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold fs-2">
            USD{" "}
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h5>
          <span className="text-muted fs-18">{symbol}</span>
        </div>
      </div>
    </div>
  );
}

export default MarketCard;
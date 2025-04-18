import Image from "next/image";
import React from "react";

function CoinCard({ coin }: { coin: any }) {
  const { id, name, symbol, quote } = coin;
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-4" key={id}>
      <div className="card p-3 h-100 border-0">
        <div className="card-body">
          <div className="card-subtitle mb-2 text-body-secondary d-flex align-items-center">
            <Image
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
              width={27}
              height={27}
              alt="partner"
              className="me-2"
            />
            <div className="d-flex gap-2">
              <span className="text-black"> {name}</span>
              <span>{symbol}/USDT</span>
            </div>
          </div>
          <h4 className="card-text fw-bold">USD {quote.USD.price.toFixed(2)}</h4>
          <div className="crypto-percent-change d-flex align-items-center gap-2">
            36,641.20
            <span
              className={`rounded-pill py-1 px-2 text-white ${
                quote.USD.percent_change_24h >= 0 ? "bg-success" : "bg-danger"
              }`}
            >
              {quote.USD.percent_change_24h.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoinCard
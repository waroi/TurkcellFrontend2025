"use client";
import Image from "next/image";
import Button from "./Button";

type MarketPair = {
  pair: string;
  lastPrice: number;
  change: number;
  favorite: boolean;
};

const pairs: MarketPair[] = [
  { pair: "ETH/BTC", lastPrice: 0.022572, change: 1.54, favorite: true },
  { pair: "XRP/BTC", lastPrice: 0.020371, change: 1.54, favorite: true },
  { pair: "USDT/BTC", lastPrice: 0.022572, change: -1.54, favorite: false },
  { pair: "BNB/BTC", lastPrice: 0.022572, change: 1.54, favorite: false },
  { pair: "SOL/BTC", lastPrice: 0.020371, change: 1.54, favorite: false },
  { pair: "ADA/BTC", lastPrice: 0.022572, change: 1.54, favorite: false },
  { pair: "LTC/BTC", lastPrice: 0.022572, change: -1.54, favorite: false },
  { pair: "NEO/BTC", lastPrice: 0.032378, change: 1.54, favorite: false },
  { pair: "MAP/BTC", lastPrice: 0.023572, change: -1.54, favorite: false },
  { pair: "GO/BTC", lastPrice: 0.023572, change: -1.54, favorite: false },
  { pair: "DBC/BTC", lastPrice: 0.032378, change: 1.54, favorite: false },
  { pair: "XMR/BTC", lastPrice: 0.032378, change: 1.54, favorite: false },
  { pair: "TRY/BTC", lastPrice: 0.0322573, change: 1.54, favorite: false },
];

const MarketTable = () => {
  return (
    <div className="p-4 bg-white rounded-2 mb-4 pair-price">
      <div className="mb-3 fs-2">
        <Image
          src="/star.svg"
          alt="star"
          width={16}
          height={16}
          className="me-3"
        />
        {["BTC", "ETH", "USDT"].map((category, index) => (
          <Button
            key={index}
            className={`btn fs-5 ${
              index === 0 ? "btn-primary text-white" : "btn-white text-muted"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
      <table className="table table-sm table-borderless fs-4">
        <thead>
          <tr className="text-muted small">
            <th className="fs-18 fw-bold text-start ps-4">Pair</th>
            <th className="fs-18 fw-bold text-start">Last Price</th>
            <th className="fs-18 fw-bold text-start">Change</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map((trade, index) => {
            const prevPrice = pairs[index - 1]?.lastPrice;
           

            return (
              <tr key={index} className="align-middle">
                <td className="text-start fs-4 td-height ps-4">
                  <Image
                    src="/star.svg"
                    alt={trade.pair}
                    width={16}
                    height={16}
                    className="me-3"
                  />
                  {trade.pair}
                </td>
                <td className="text-start fs-4 td-height">
                  {trade.lastPrice.toFixed(6)}
                </td>
                <td
                  className={`text-start fs-4 fw-bold td-height ${
                    trade.change > 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {trade.change > 0 ? "+" : ""}
                  {trade.change.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
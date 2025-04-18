"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "@/app/context/ThemeContext";
interface MarketData {
  current_price: { usd: number };
  price_change_percentage_24h_in_currency: { usd: number };
  low_24h: { usd: number };
  high_24h: { usd: number };
  market_cap: { usd: number };
  fully_diluted_valuation: { usd: number };
  total_volume: { usd: number };
  circulating_supply: number;
  max_supply: number;
}

interface CoinData {
  name: string;
  symbol: string;
  image: { large: string };
  market_cap_rank: number;
  market_data: MarketData;
}

export default function Bitcoin() {
  const { theme } = useTheme();
  const [data, setData] = useState<CoinData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CoinData>(
          "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=false"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="text-center py-5">Loading...</div>;
  }

  const marketData = data.market_data;

  return (
    <div className={`py-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
      <div className="container my-5">
        <div className="card shadow-sm rounded-4 p-4">
          <h2 className="h5 fw-bold mb-3">Market Stats</h2>

          <div className="d-flex align-items-center gap-3 mb-4">
            <img src={data.image.large} alt="Bitcoin" width={40} height={40} />
            <h1 className="h4 mb-0">
              {data.name} <span className="text-muted text-uppercase">({data.symbol})</span>
            </h1>
            <span className="badge bg-primary">Rank #{data.market_cap_rank}</span>
          </div>

          <div className="display-6 fw-bold mb-2">
            ${marketData.current_price.usd.toLocaleString()}
            <span className="text-success fs-5 ms-2">
              {marketData.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
            </span>
          </div>

          <p className="text-muted mb-4">
            24h Low: ${marketData.low_24h.usd.toLocaleString()} | High: ${marketData.high_24h.usd.toLocaleString()}
          </p>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-light p-3 rounded">
                <div className="text-muted">Market Cap</div>
                <div className="fw-semibold">${marketData.market_cap.usd.toLocaleString()}</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-light p-3 rounded">
                <div className="text-muted">Fully Diluted</div>
                <div className="fw-semibold">${marketData.fully_diluted_valuation.usd.toLocaleString()}</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-light p-3 rounded">
                <div className="text-muted">24h Volume</div>
                <div className="fw-semibold">${marketData.total_volume.usd.toLocaleString()}</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-light p-3 rounded">
                <div className="text-muted">Circulating Supply</div>
                <div className="fw-semibold">
                  {marketData.circulating_supply.toLocaleString()} BTC
                  <br />
                  <small className="text-muted">Max: {marketData.max_supply.toLocaleString()} BTC</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

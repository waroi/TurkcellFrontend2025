"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sparklines, SparklinesLine } from "react-sparklines";

interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  lastPrice: number;
  change24h: number;
  marketCap: number;
  sparkline?: number[];
}

const Market = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("View All");
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    "View All",
    "Metaverse",
    "Entertainment",
    "Energy",
    "NFT",
    "Gaming",
    "Music",
  ];

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/homepagemarket");
        const data = await res.json();

        const formattedData: CryptoData[] = data.map((coin: any) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          lastPrice: coin.quote.USD.price,
          change24h: coin.quote.USD.price,
          marketCap: coin.quote.USD.market_cap,
          sparkline: [5, 10, 7, 12, 6, 7, 10],
        }));

        setCryptoData(formattedData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch crypto data:", err);
        setError("Failed to load cryptocurrency data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const filteredCryptos = cryptoData.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">Market Update</h1>
        <a href="#" className="text-decoration-none">
          See All Coins
        </a>
      </div>

      <div className="d-flex gap-2 mb-4 overflow-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${
              selectedCategory === category
                ? "btn-primary"
                : "btn-outline-secondary"
            } rounded-pill`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="input-group mb-4">
        <span className="input-group-text bg-white border-end-0">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search Coin"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr className="table-active">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Last Price</th>
                <th scope="col">24h %</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Last 7 Days</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredCryptos.map((crypto) => (
                <tr key={crypto.id}>
                  <td>{crypto.id}</td>
                  <td className="d-flex align-items-center gap-2">
                    <img
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`}
                      alt={crypto.name}
                      width={32}
                      height={32}
                      className="me-2"
                    />

                    <div>
                      <div className="fw-bold">{crypto.name}</div>
                      <div className="text-muted">{crypto.symbol}</div>
                    </div>
                  </td>
                  <td>
                    $
                    {crypto.lastPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td
                    className={
                      crypto.change24h >= 0 ? "text-success" : "text-danger"
                    }
                  >
                    {crypto.change24h > 0 ? "+" : ""}
                    {crypto.change24h.toFixed(2)}%
                  </td>
                  <td>${(crypto.marketCap / 1000000000).toFixed(2)}B</td>
                  <td style={{ width: "120px" }}>
                    {crypto.sparkline && crypto.sparkline.length > 0 ? (
                      <Sparklines
                        data={crypto.sparkline}
                        limit={10}
                        width={80}
                        height={28}
                      >
                        <SparklinesLine
                          color="blue"
                          style={{ strokeWidth: 2, fill: "none" }}
                        />
                      </Sparklines>
                    ) : (
                      <span className="text-muted">No data</span>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm rounded-pill">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Market;

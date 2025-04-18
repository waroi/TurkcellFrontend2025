"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

interface Coin {
  id: number;
  symbol: string;
  name: string;
  high_24h: string;
  low_24h: string;
  turnover_24h: string;
  change_24h: string;
  sparkline?: number[];
}

const MarketTrends = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch("/api/market");

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();

        setCoins(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load market data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredBySearch = coins.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCryptos = [...filteredBySearch].sort((a, b) => {
    if (!selectedCategory) return 0;

    let valueA, valueB;

    switch (selectedCategory) {
      case "24h High":
        valueA = parseFloat(a.high_24h);
        valueB = parseFloat(b.high_24h);
        break;
      case "24h Low":
        valueA = parseFloat(a.low_24h);
        valueB = parseFloat(b.low_24h);
        break;
      case "24h Change":
        valueA = parseFloat(a.change_24h);
        valueB = parseFloat(b.change_24h);
        break;
      case "24h Volume":
        valueA = parseFloat(a.turnover_24h);
        valueB = parseFloat(b.turnover_24h);
        break;
      default:
        return 0;
    }

    return valueB - valueA;
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ maxWidth: "400px" }}>
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

        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedCategory != "Mix"
              ? `Sort by: ${selectedCategory} (Ascending Order)`
              : "Sort by"}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleCategoryChange("24h High")}
              >
                24h High {selectedCategory === "24h High" && "↓"}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleCategoryChange("24h Low")}
              >
                24h Low {selectedCategory === "24h Low" && "↓"}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleCategoryChange("24h Change")}
              >
                24h Change {selectedCategory === "24h Change" && "↓"}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleCategoryChange("24h Volume")}
              >
                24h Volume {selectedCategory === "24h Volume" && "↓"}
              </button>
            </li>
            <button
              className="dropdown-item"
              onClick={() => handleCategoryChange("Mix")}
            >
              Mix {selectedCategory === "Mix" && "-"}
            </button>
          </ul>
        </div>
      </div>

      <h2 className="mb-4">Market Trends</h2>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr className="table-active">
              <th scope="col">Coin</th>
              <th
                scope="col"
                className={
                  selectedCategory === "24h High"
                    ? "text-primary fw-bold fs-5"
                    : ""
                }
              >
                24h High {selectedCategory === "24h High" && "↓"}
              </th>
              <th
                scope="col"
                className={
                  selectedCategory === "24h Low"
                    ? "text-primary fw-bold fs-5"
                    : ""
                }
              >
                24h Low {selectedCategory === "24h Low" && "↓"}
              </th>
              <th
                scope="col"
                className={
                  selectedCategory === "24h Change"
                    ? "text-primary fw-bold fs-5"
                    : ""
                }
              >
                24h Change {selectedCategory === "24h Change" && "↓"}
              </th>
              <th
                scope="col"
                className={
                  selectedCategory === "24h Volume"
                    ? "text-primary fw-bold fs-5"
                    : ""
                }
              >
                24h Volume {selectedCategory === "24h Volume" && "↓"}
              </th>
              <th scope="col">Chart</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedCryptos.map((coin) => (
              <tr key={coin.symbol}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                      alt={coin.name}
                      width={32}
                      height={32}
                      className="me-2"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://cryptoicons.org/api/icon/generic/32";
                      }}
                    />
                    <div>
                      <div className="fw-bold">{coin.name}</div>
                      <div className="text-muted">
                        {coin.symbol.replace("USDT", "")}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  $
                  {parseFloat(coin.high_24h).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td>
                  $
                  {parseFloat(coin.low_24h).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td
                  className={
                    parseFloat(coin.change_24h) >= 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {parseFloat(coin.change_24h) >= 0 ? "+" : ""}
                  {parseFloat(coin.change_24h).toFixed(2)}%
                </td>
                <td>
                  ${(parseFloat(coin.turnover_24h) / 1000000).toFixed(2)}M
                </td>
                <td style={{ width: "120px" }}>
                  {coin.sparkline && coin.sparkline.length > 0 ? (
                    <Sparklines
                      data={coin.sparkline}
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
    </div>
  );
};

export default MarketTrends;

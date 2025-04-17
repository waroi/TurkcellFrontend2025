import { useState, ChangeEvent } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Search, Star, ArrowUpDown, TrendingUp } from "lucide-react";

import { apiRequest } from "../lib/queryClient";
import Button from "../components/ui/Button";
import Input from "../components/ui/input";
import Select from "../components/ui/Select";
import CryptoIcon from "../components/common/CryptoIcon";

interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
  sparkline_in_7d: {
    price: number[];
  };
}

export default function Markets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [activeTab, setActiveTab] = useState("all");

  const { data, isLoading } = useQuery<Cryptocurrency[]>({
    queryKey: ["/api/crypto/markets"],
    queryFn: async () => {
      try {
        const response = await apiRequest("/api/crypto/markets");
        return response as Cryptocurrency[];
      } catch (error) {
        console.error("Error fetching crypto markets:", error);
        return [] as Cryptocurrency[];
      }
    },
  });

  const cryptocurrencies = data || [];

  const filteredCryptos = cryptocurrencies.filter(
    (crypto: Cryptocurrency) =>
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="markets-page">
      <div className="container">
        <div className="markets-header">
          <h1 className="markets-title">Cryptocurrency Prices</h1>
          <p className="markets-subtitle">
            The global crypto market cap is $2.19T, a 0.35% increase over the
            last day.
          </p>
        </div>

        <div className="market-stats">
          <div className="stat-card">
            <div className="stat-title">
              Crypto Market Cap <span className="info-icon">ⓘ</span>
            </div>
            <div className="stat-value">$2.19T</div>
            <div className="stat-change positive">
              <TrendingUp size={14} /> 0.35%
            </div>
          </div>
        </div>

        <div className="markets-content">
          <div className="markets-controls">
            <div className="markets-tabs">
              {["all", "trending", "gainers", "losers", "watchlist"].map(
                (tab) => (
                  <div
                    key={tab}
                    className={`market-tab ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </div>
                )
              )}
            </div>
            <div className="markets-filters">
              <div className="search-filter relative">
                <Search
                  className="search-icon absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(e.target.value)
                  }
                />
              </div>
              <div className="sort-filter">
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value)}
                >
                  <option value="market_cap_desc">Market Cap</option>
                  <option value="volume_desc">Volume</option>
                  <option value="price_change_24h_desc">Price Change</option>
                </Select>
              </div>
            </div>
          </div>

          <div className="markets-table-wrapper">
            <table className="markets-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    Rank <ArrowUpDown size={12} />
                  </th>
                  <th>
                    Name <ArrowUpDown size={12} />
                  </th>
                  <th>
                    Price <ArrowUpDown size={12} />
                  </th>
                  <th>
                    24h Change <ArrowUpDown size={12} />
                  </th>
                  <th>
                    Market Cap <ArrowUpDown size={12} />
                  </th>
                  <th>
                    Volume (24h) <ArrowUpDown size={12} />
                  </th>
                  <th>Last 7 days</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={9} className="p-4 text-center">
                      Loading...
                    </td>
                  </tr>
                ) : filteredCryptos.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="p-8 text-center text-gray-500">
                      No cryptocurrencies found.
                    </td>
                  </tr>
                ) : (
                  filteredCryptos.map(
                    (crypto: Cryptocurrency, index: number) => (
                      <tr key={crypto.id}>
                        <td>
                          <Star
                            size={16}
                            className="cursor-pointer hover:text-yellow-500"
                          />
                        </td>
                        <td>{index + 1}</td>
                        <td className="flex items-center gap-2">
                          <CryptoIcon symbol={crypto.symbol} size={24} />
                          <div>
                            <div>{crypto.name}</div>
                            <div className="text-sm text-gray-500">
                              {crypto.symbol.toUpperCase()}
                            </div>
                          </div>
                        </td>
                        <td>${crypto.current_price.toLocaleString()}</td>
                        <td
                          className={
                            crypto.price_change_percentage_24h > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {crypto.price_change_percentage_24h.toFixed(2)}%
                        </td>
                        <td>${crypto.market_cap.toLocaleString()}</td>
                        <td>${crypto.total_volume.toLocaleString()}</td>
                        <td></td>
                        <td>
                          <Link href={`/coin/${crypto.id}`}>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

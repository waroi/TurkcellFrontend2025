import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { Coin, SortKey, SortOrder } from "@/types/types";
import { useTranslations } from "next-intl";
import Link from "next/link";

function MarketCryptoTable({ coins }: { coins: Coin[] }) {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations();

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCoins =
    sortKey === null
      ? filteredCoins
      : [...filteredCoins].sort((a, b) => {
          const getValue = (coin: Coin) => {
            switch (sortKey) {
              case "name":
                return coin.name.toLowerCase();
              case "price":
                return coin.quote.USD.price;
              case "percent":
                return coin.quote.USD.volume_change_24h;
              case "marketCap":
                return coin.quote.USD.market_cap;
              default:
                return 0;
            }
          };

          const aVal = getValue(a);
          const bVal = getValue(b);

          if (typeof aVal === "string" && typeof bVal === "string") {
            return sortOrder === "asc"
              ? aVal.localeCompare(bVal)
              : bVal.localeCompare(aVal);
          } else if (typeof aVal === "number" && typeof bVal === "number") {
            return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
          }

          return 0;
        });

  return (
    <>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 my-3">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          {[t("Hot"), t("New"), "DeFi", "NFT"].map((category, index) => (
            <Button
              key={category}
              px="px-3"
              py="py-1"
              className={`fs-4 ${
                index === 0 ? "btn-primary text-white" : "btn-white text-muted"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="input-group w-25 rounded-pill">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder={t("Search Coin")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="table-responsive mt-4">
        <table className="table align-middle table-borderless">
          <thead>
            <tr>
              <th className="text-muted"></th>
              <th className="text-muted">#</th>
              {[
                { label: "Name", key: "name", visible: false },
                { label: "Last Price", key: "price", visible: false },
                { label: "24h %", key: "percent", visible: false },
                { label: "Market Cap", key: "marketCap", visible: true },
              ].map(({ label, key, visible }) => (
                <th
                  key={key}
                  className={`text-muted ${
                    visible ? "d-none d-lg-table-cell" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSort(key as SortKey)}
                >
                  <span className="d-flex align-items-center gap-1">
                    {label}
                    <Image
                      src="/compare-arrow.svg"
                      alt="sort"
                      width={12}
                      height={12}
                    />
                  </span>
                </th>
              ))}
              <th className="text-muted d-none d-lg-table-cell">Last 7 Days</th>
              <th className="text-muted d-none d-lg-table-cell"></th>
            </tr>
          </thead>

          <tbody>
            {sortedCoins.map((coin, index) => (
              <tr key={coin.id}>
                <td>
                  <Image
                    src="/star.svg"
                    width={20}
                    height={20}
                    alt="favorite"
                  />
                </td>
                <td>{index + 1}</td>
                <td className="d-flex align-items-center gap-2">
                  <Image
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                    width={30}
                    height={30}
                    alt={coin.name}
                  />
                  <div className="d-flex align-items-center gap-3">
                    <span className="fw-semibold">{coin.name}</span>
                    <span
                      className="text-muted text-uppercase"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {coin.symbol}
                    </span>
                  </div>
                </td>
                <td className="fw-bold">${coin.quote.USD.price.toFixed(2)}</td>
                <td
                  className={
                    coin.quote.USD.volume_change_24h > 0
                      ? "text-success"
                      : coin.quote.USD.volume_change_24h < 0
                      ? "text-danger"
                      : ""
                  }
                >
                  {coin.quote.USD.volume_change_24h.toFixed(2)}%
                </td>
                <td className="fw-bold d-none d-lg-table-cell">
                  ${Math.floor(coin.quote.USD.market_cap).toLocaleString()}
                </td>
                <td className="d-none d-lg-table-cell">
                  {coin.quote.USD.volume_change_24h !== 0 && (
                    <Image
                      src={
                        coin.quote.USD.volume_change_24h > 0
                          ? "/market-update-green-chart.png"
                          : "/market-update-red-chart.png"
                      }
                      alt="chart"
                      width={130}
                      height={30}
                    />
                  )}
                </td>
                <td className="d-none d-lg-table-cell">
                  <Link href={`/dashboard/${coin.id}`} className="btn btn-white border rounded-pill px-3 py-1">
                    Trade
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MarketCryptoTable;

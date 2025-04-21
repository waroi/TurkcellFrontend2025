"use client";

import CategoryNav from "@/components/CategoryNav";
import Button from "@/components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import MarketTableWatch from "@/components/MarketTableWatch";

const majors = ["BTC", "ETH", "LTC", "BNB", "TRX", "XRP", "NEO", "QTUM"];

export default function MarketUpdate() {
  const [currencies, setCurrencies] = useState({});
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    setWatchlist(JSON.parse(localStorage.getItem("watchlist")) || []);

    fetch(`/api/currency?symbol=${majors.join(",")}`)
      .then((response) => response.json())
      .then((response) => setCurrencies(response.data));
  }, []);

  function toggleWatch(symbol) {
    if (watchlist.includes(symbol)) {
      setWatchlist((watchlist) => watchlist.filter((watch) => watch != symbol));
    } else setWatchlist((watchlist) => watchlist.concat([symbol]));

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }

  if (Object.keys(currencies).length)
    return (
      <>
        <CategoryNav />
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th className="text-secondary">#</th>
              <th className="text-secondary" style={{ width: "20rem" }}>
                Name
              </th>
              <th className="text-secondary">Last Price</th>
              <th className="text-secondary">24h %</th>
              <th className="text-secondary">Market Cap</th>
              <th className="text-secondary">Last 7 Days</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {majors
              .filter(
                (symbol) => currencies[symbol] && watchlist.includes(symbol)
              )
              .concat(
                majors.filter(
                  (symbol) => currencies[symbol] && !watchlist.includes(symbol)
                )
              )
              .map((symbol, index) => (
                <tr key={index}>
                  <td>
                    <MarketTableWatch
                      watchlist={watchlist}
                      toggleWatch={toggleWatch}
                      symbol={symbol}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <div className="d-inline me-2">
                      <Image
                        src={`https://raw.githubusercontent.com/reddavis/Crypto-Icons-API/refs/heads/master/public/svg/icon/${symbol.toLowerCase()}.svg`}
                        alt="Logo"
                        width={24}
                        height={24}
                      />
                    </div>
                    {currencies[symbol].name} |{" "}
                    <span className="text-secondary">{symbol}</span>
                  </td>
                  <td>
                    $
                    {currencies[symbol].quote.USDT.price.toLocaleString(
                      "en-US"
                    )}
                  </td>
                  <td
                    className={`text-${
                      currencies[symbol].quote.USDT.percent_change_24h >= 0
                        ? "success"
                        : "danger"
                    }`}
                  >
                    {currencies[symbol].quote.USDT.percent_change_24h >= 0
                      ? "+"
                      : ""}
                    {(
                      currencies[symbol].quote.USDT.percent_change_24h + 0.0
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    $
                    {currencies[symbol].quote.USDT.market_cap.toLocaleString(
                      "en-US"
                    )}
                  </td>
                  <td>
                    <Image
                      src={`/TEST_graph${
                        currencies[symbol].quote.USDT.percent_change_24h >= 0
                          ? ""
                          : "2"
                      }.png`}
                      alt="Graph"
                      width={172}
                      height={72}
                    />
                  </td>
                  <td>
                    <Button className="bg-white border-secondary-subtle py-1 px-3 border-2">
                      <Link
                        className="text-black text-decoration-none"
                        href="/buy-crypto"
                      >
                        Trade
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
}

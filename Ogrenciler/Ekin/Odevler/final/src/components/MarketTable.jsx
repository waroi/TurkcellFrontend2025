"use client";

import symbols from "@/util/currencies";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import MarketTableWatch from "@/components/MarketTableWatch";

export default function MarketTable() {
  const [currencies, setCurrencies] = useState({});
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    setWatchlist(JSON.parse(localStorage.getItem("watchlist")) || []);

    fetch(`/api/currency?symbol=${symbols.join(",")}`)
      .then((response) => response.json())
      .then((response) => {
        Object.keys(response.data).map((data, price) => {
          price = response.data[data].quote.USDT.price || 1;

          response.data[data].random_top =
            price + Math.floor(Math.random() * (price / 25));
          response.data[data].random_bottom =
            price - Math.floor(Math.random() * (price / 25));
        });

        setCurrencies(response.data);
      });
  }, []);

  function toggleWatch(symbol) {
    if (watchlist.includes(symbol)) {
      setWatchlist((watchlist) => watchlist.filter((watch) => watch != symbol));
    } else setWatchlist((watchlist) => watchlist.concat([symbol]));

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }

  if (Object.keys(currencies).length)
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th className="text-secondary">#</th>
            <th className="text-secondary" style={{ width: "20rem" }}>
              Name
            </th>
            <th className="text-secondary">Last Traded</th>
            <th className="text-secondary">24H Change%</th>
            <th className="text-secondary">24H High</th>
            <th className="text-secondary">24H Low</th>
            <th className="text-secondary">24H Turnover</th>
            <th className="text-secondary">Chart</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {symbols
            .filter(
              (symbol) => currencies[symbol] && watchlist.includes(symbol)
            )
            .concat(
              symbols.filter(
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
                  {currencies[symbol].name || ""} |{" "}
                  <span className="text-secondary">{symbol}</span>
                </td>
                <td>
                  {(currencies[symbol].quote.USDT.price || 1).toLocaleString(
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
                <td>{currencies[symbol].random_top.toLocaleString("en-US")}</td>
                <td>
                  {currencies[symbol].random_bottom.toLocaleString("en-US")}
                </td>
                <td>
                  {(
                    currencies[symbol].quote.USDT.volume_24h || 0
                  ).toLocaleString("en-US")}
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
    );
}

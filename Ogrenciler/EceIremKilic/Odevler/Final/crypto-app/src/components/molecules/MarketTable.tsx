"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { useCoinStore } from "@/store/useCoinStore";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const MarketTable = () => {
  const { coins, fetchData } = useCoinStore();
  const { theme } = useTheme();
  useEffect(() => {
    fetchData();
    console.log("aa", coins);
  }, [coins]);
  return (
    <div>
      <div
        className={`container table-responsive mt-4 rounded-4 bg-${theme} py-5`}
      >
        <div className="d-flex py-3">
          <Button variant="light">Favorites</Button>
          <Button variant="light" className="mx-3">
            Derivates
          </Button>
          <Button variant="light" className="mx-3">
            Spot
          </Button>
        </div>
        <div className="d-flex py-3">
          <Button variant="light">All</Button>
          <Button variant="light" className="mx-3">
            Inverse Perpetual
          </Button>
          <Button variant="light" className="mx-3">
            USDT Perpetual
          </Button>
          <Button variant="light">Inverse Features</Button>
        </div>
        <div className="d-flex">
          <Button variant="light">Hot</Button>
          <Button variant="light">New</Button>
          <Button variant="light">DeFi</Button>
          <Button variant="light">NFT</Button>
        </div>
        <Table
          hover
          responsive
          className={`table-${theme} align-middle text-center mb-0`}
        >
          <thead className={`table-${theme}`}>
            <tr>
              <th></th>
              <th>#</th>
              <th>Trading Pair</th>
              <th>Last Traded</th>
              <th>24H Change%</th>
              <th>24H High</th>
              <th>24H Low</th>
              <th>24H Turnover</th>
              <th>Chart</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.slice(0, 20).map((coin, index) => (
              <tr key={coin.id}>
                <td>
                  <FontAwesomeIcon icon={faStar} color="grey" />
                </td>
                <td>{index + 1}</td>
                <td className="d-flex align-items-center gap-2 pb-3">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={24}
                    height={24}
                  />
                  {coin.name}{" "}
                  <span className="text-secondary text-uppercase ms-1">
                    {coin.symbol}
                  </span>
                </td>
                <td>{coin.current_price}</td>
                <td
                  className={
                    coin.price_change_percentage_24h < 0
                      ? "text-danger"
                      : "text-success"
                  }
                >
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
                <td>{coin.high_24h?.toLocaleString()}</td>
                <td>{coin.low_24h?.toLocaleString()}</td>
                <td>${coin.total_volume?.toLocaleString()}</td>
                <td>
                  <div style={{ width: 100, height: 30 }}>
                    <Sparklines data={coin.sparkline_in_7d?.price}>
                      <SparklinesLine
                        color={
                          coin.price_change_percentage_24h < 0 ? "red" : "green"
                        }
                        style={{ strokeWidth: 2, fill: "none" }}
                      />
                      <SparklinesSpots />
                    </Sparklines>
                  </div>
                </td>
                <td>
                  <Button
                    size="sm"
                    variant="primary"
                    className="rounded-pill px-3"
                  >
                    Trade
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MarketTable;

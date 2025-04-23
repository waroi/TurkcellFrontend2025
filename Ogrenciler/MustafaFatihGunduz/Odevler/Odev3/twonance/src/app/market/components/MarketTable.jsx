"use client";
import React from "react";
import Image from "next/image";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { safeParseFloat } from "../../../utils/safeParseFloat";

const MarketTable = ({ cryptos }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th scope="col">#</th>
          <th scope="col">Trading Turkey</th>
          <th scope="col">Last Traded</th>
          <th scope="col">24H Change%</th>
          <th scope="col">24H High</th>
          <th scope="col">24H Turnover</th>
          <th scope="col">Chart</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cryptos.length !== 0
          ? cryptos.map((crypto, index) => (
              <tr key={index}>
                <td>
                  <i className="fa fa-star checked"></i>
                </td>
                <th>{index + 1}</th>
                <td>
                  <div className="d-flex">
                    <Image
                      src={crypto.image}
                      width={24}
                      height={24}
                      alt={crypto.symbol}
                    />
                    <div className="span">
                      <span className="fw-bold fs-5 text-dark ms-2">
                        {crypto.name}
                      </span>
                      <span className="border-start ps-2 ms-2 fs-6 text-secondary fw-normal">
                        {crypto.symbol.replace("USDT", "")}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  {/* Render recentTrades - First trade price as an example */}
                  <p className="text-dark fs-6 fw-bold">
                    {crypto.recentTrades && crypto.recentTrades.length > 0
                      ? crypto.recentTrades[0].price
                      : "Veri Yok"}
                  </p>
                </td>
                <td
                  className={`${
                    parseFloat(crypto.dailyPercent) < 0
                      ? "text-danger"
                      : "text-success"
                  } fw-normal fs-6`}
                >
                  {` ${
                    parseFloat(crypto.dailyPercent) > 0 ? `+` : ""
                  }${parseFloat(crypto.dailyPercent).toFixed(2)}%`}
                </td>
                <td>
                  <p className="text-dark fs-6 fw-bold">
                    {parseFloat(crypto.dailyHigh).toFixed(2)}
                  </p>
                </td>
                <td>
                  <p className="text-dark fs-6 fw-bold">
                    {parseFloat(crypto.dailyVolume).toFixed(2)}
                  </p>
                </td>
                <td>
                  {crypto.weeklyChange && crypto.weeklyChange.length > 0 ? (
                    <Sparklines
                      data={crypto.weeklyChange.map((week) =>
                        safeParseFloat(week[4])
                      )}
                      width={100}
                      height={20}
                    >
                      <SparklinesLine
                        color={
                          safeParseFloat(crypto.weeklyChange[6][4]) >
                          safeParseFloat(crypto.weeklyChange[0][4])
                            ? "green"
                            : "red"
                        }
                      />
                    </Sparklines>
                  ) : (
                    <span>Veri Yok</span>
                  )}
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default MarketTable;

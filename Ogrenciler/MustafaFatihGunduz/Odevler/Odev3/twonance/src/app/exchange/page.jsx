"use client";
import React, { useState, useEffect } from "react";
import Button from "../../components/components/Button";
import CryptoLongChart from "./components/CryptoLongChart";
import useGetCryptos from "../../hooks/useGetCryptos";
import Image from "next/image";
import CryptoMarket from "./components/CryptoMarket";
const ExchangePage = () => {
  const { cryptos } = useGetCryptos();
  const [coin, setCoin] = useState(null);
  const handleCoinChange = (symbol) => {
    const selectedCoin = cryptos.find((c) => c.symbol === symbol);
    setCoin(selectedCoin);
  };

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    if (cryptos.length > 0) {
      setCoin(cryptos[0]);
    }
  }, [cryptos]);

  return (
    <div className="bg-light">
      <div className="container">
        <div className="bg-white border-1 rounded mt-91">
          <div className="d-flex">
            <div className="dropdown py-29 px-15">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {coin?.symbol.replace("USDT", " / USDT")}
              </button>
              <ul className="dropdown-menu dropdownScroll">
                {cryptos.length > 0
                  ? cryptos.map((crypto, index) => (
                      <li
                        className="dropdown-item"
                        key={index}
                        onClick={() => handleCoinChange(crypto.symbol)}
                      >
                        <div className="d-flex">
                          <Image
                            src={crypto.image}
                            width={24}
                            height={24}
                            alt={crypto.symbol}
                            className="pe-99"
                          />
                          <p>{crypto.symbol.replace("USDT", " / USDT")}</p>
                        </div>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <div className="d-flex flex-column gap-1">
              <h6 className="fs-4 fw-normal text-secondary">Last price</h6>
              <p className="fs-4 fw-bold text-dark"> {coin?.price} </p>
            </div>
            <div className="d-flex flex-column gap-1">
              <div className="d-flex gap-1 px-30">
                <Image
                  src={"/assets/time.svg"}
                  width={24}
                  height={24}
                  alt="time"
                />
                <h6 className="fs-4 fw-normal text-secondary">24H Change</h6>
              </div>
              <p className="fs-4 fw-bold text-dark">
                {" "}
                {coin?.priceChangePercent}{" "}
              </p>
            </div>
            <div className="d-flex flex-column gap-1">
              <div className="d-flex gap-1">
                <Image
                  src={"/assets/arrowUp.svg"}
                  width={24}
                  height={24}
                  alt="time"
                />
                <h6 className="fs-4 fw-normal text-secondary">24H High</h6>
              </div>
              <p className="fs-4 fw-bold text-dark"> {coin?.dailyHigh} </p>
            </div>
            <div className="d-flex flex-column gap-1 px-30">
              <div className="d-flex gap-1">
                <Image
                  src={"/assets/arrowDown.svg"}
                  width={24}
                  height={24}
                  alt="time"
                />
                <h6 className="fs-4 fw-normal text-secondary">24H Low</h6>
              </div>
              <p className="fs-4 fw-bold text-dark"> {coin?.dailyLow} </p>
            </div>
            <div className="d-flex flex-column gap-1">
              <div className="d-flex gap-1">
                <Image
                  src={"/assets/chart.svg"}
                  width={24}
                  height={24}
                  alt="time"
                />
                <h6 className="fs-4 fw-normal text-secondary">24H Volume</h6>
              </div>
              <p className="fs-4 fw-bold text-dark"> {coin?.dailyVolume} </p>
            </div>
          </div>
        </div>

        <div className="d-flex ">
          <section className="w-100">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="fs-4 fw-bold text-dark py-91">Trading market</h4>
              <div className="buttons-row">
                <Button
                  textColor="text-dark"
                  label={"1m"}
                  color="white"
                  isBold={false}
                  padding={"px-99 py-99 me-16"}
                />
                <Button
                  textColor="text-dark"
                  label={"5m"}
                  color="white"
                  isBold={false}
                  padding={"px-99 py-99 me-16"}
                />
                <Button
                  textColor="text-white"
                  label={"15m"}
                  color="primary"
                  isBold={true}
                  padding={"px-99 py-99 me-16"}
                />
                <Button
                  textColor="text-dark"
                  label={"4h"}
                  color="white"
                  isBold={false}
                  padding={"px-99 py-99 me-16"}
                />
                <Button
                  textColor="text-dark"
                  label={"D"}
                  color="white"
                  isBold={false}
                  padding={"px-99 py-99 me-16"}
                />
                <Button
                  textColor="text-dark"
                  label={"W"}
                  color="white"
                  isBold={false}
                  padding={"px-99 py-99 me-16"}
                />
                <Button
                  textColor="text-dark"
                  label={"M"}
                  color="white"
                  isBold={false}
                  padding={"px-99 py-99 me-16"}
                />
                <Button
                  textColor="text-dark"
                  label={"Y"}
                  color="white"
                  isBold={false}
                  padding={"px-99 py-99 me-16"}
                />
              </div>
            </div>
            <CryptoLongChart symbol={coin?.symbol} containerId={"btc-chart"} />
          </section>
          <aside></aside>
        </div>
        {coin && (
          <CryptoMarket
            orderBook={coin.orderBook}
            orderHistory={coin.orderHistory}
            recentTrades={coin.recentTrades}
          />
        )}
      </div>
    </div>
  );
};

export default ExchangePage;

"use client";

import useCryptoStore from "@/store/useCryptoStore";
import Image from "next/image";
import React from "react";

const CryptoTicker = () => {
  const coin = useCryptoStore((state) => state.singleCoin);

  if (!coin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2">
      <div className="row text-center shadow-md rounded-2 py-3 py-md-5 px-2 bg-white g-3 px-md-3">
        <div className="col-12 col-sm-6 col-lg-3 ps-sm-5 fw-bold d-flex align-items-center justify-content-start fs-2">
          {coin.name}/{coin.symbol}
        </div>

        <div className="col-12 col-sm-6 col-lg-3 fs-3 d-flex flex-column align-items-start justify-content-center">
          <div className="text-muted small">Last price</div>
          <div
            className={`fw-bold ${
              coin.quote?.USD?.percent_change_24h < 0
                ? "text-danger"
                : "text-success"
            }`}
          >
            {coin.quote?.USD?.price.toFixed(4)}
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 fs-3 d-flex flex-column align-items-start justify-content-center ps-sm-5">
          <div className="text-muted small d-flex align-items-center gap-1">
            <Image
              src="/tickerChange.svg"
              alt="Arrow Up"
              width={19}
              height={19}
              className="img-fluid me-1"
            />
            24h Change
          </div>
          <div
            className={`fw-bold d-flex align-items-center gap-2 ${
              coin.quote?.USD?.percent_change_24h < 0
                ? "text-danger"
                : "text-success"
            }`}
          >
            {(
              (coin.quote?.USD?.percent_change_24h * coin.quote?.USD?.price) /
              100
            ).toFixed(4)}
            <span
              className={`badge rounded-pill ${
                coin.quote?.USD?.percent_change_24h < 0
                  ? "bg-danger"
                  : "bg-success"
              }`}
            >
              {coin.quote?.USD?.percent_change_24h.toFixed(4)}%
            </span>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-2 fs-3 d-flex flex-column align-items-start justify-content-center d-lg-none">
          <div className="text-muted small d-flex align-items-center gap-1">
            <Image
              src="/tickerHigh.svg"
              alt="Arrow Up"
              width={10}
              height={17}
              className="img-fluid me-1"
            />
            24h High
          </div>
          <div className="fw-bold">{coin.quote?.USD?.price.toFixed(4)}</div>
        </div>

        <div className="col-12 col-sm-6 fs-3 d-flex flex-column align-items-start justify-content-center ps-sm-5 d-lg-none">
          <div className="text-muted small d-flex align-items-center gap-1">
            <Image
              src="/tickerLow.svg"
              alt="Arrow Down"
              width={10}
              height={17}
              className="img-fluid me-1"
            />
            24h Low
          </div>
          <div className="fw-bold">{coin.quote?.USD?.price.toFixed(4)}</div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 fs-3 d-flex flex-column align-items-start justify-content-center">
          <div className="text-muted small d-flex align-items-center gap-1">
            <Image
              src="/tickerVolume.svg"
              alt="Volume"
              width={20}
              height={20}
              className="img-fluid me-1"
            />
            24h Volume
          </div>
          <div className="fw-bold">
            {coin.quote?.USD?.volume_change_24h} BTC
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;
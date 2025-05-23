"use client";
import CryptoBuySell from "@/components/CryptoBuySell";
import CryptoTicker from "@/components/CryptoTicker";
import MarketTable from "@/components/MarketTable";
import Chart from "@/components/Chart";
import OrderBook from "@/components/OrderBook";
import OrderHistory from "@/components/OrderHistory";
import RecentTrades from "@/components/RecentTrades";
import Sidebar from "@/components/Sidebar";
import useCryptoStore from "@/app/store/useCryptoStore";
import Button from "@/components/Button";
import { CandlestickData, UTCTimestamp } from "lightweight-charts";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


type Candle = {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
};

function convertToCandlestick(data: Candle[]): CandlestickData[] {
  return data.map((item) => ({
    ...item,
    time: item.time as UTCTimestamp,
  }));
}
function Page() {
  const params = useParams();
  
  const [candleData, setCandleData] = useState<Candle[]>([]);
  const wallet = useCryptoStore((state) => state.wallet);
  const setSingleCoin = useCryptoStore((state) => state.setSingleCoin);
  
  const coinId = params.coinId as string;

  useEffect(() => {
    const fetchCandleData = async () => {
      try {
        const res = await fetch("/api/candles");
        const data = await res.json();
        setCandleData(data);
      } catch (error) {
        console.error("Error fetching candle data:", error);
      } 
    };

    fetchCandleData();
  }, []);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`/api/coin/${coinId}`);
        if (!res.ok) throw new Error("Coin bilgisi alınamadı");

        const data = await res.json();
        setSingleCoin(data);
      } catch (error) {
        console.error("Coin verisi alınırken hata:", error);
      }
    };

    if (coinId) fetchCoin();
  }, [coinId, setSingleCoin]);

 


  return (
    <div className="container-fluid mt-nav">
      <div className="row min-vh-100">
       <Sidebar />
       <div  className="col-2"></div>
        <div className="col-10 p-40 bg-secondary">
          <CryptoTicker />
          <div className="row gx-2 mt-4 p-0">
            <div className="col-12 col-md-8 pe-4">
              <div className="bg-white rounded-2 pb-3">
                <div className="p-5 d-flex align-items-center justify-content-between">
                  <h1 className="fs-2 fw-bold">Trading Market</h1>
                  <div className="d-flex align-items-start gap-2">
                    <div className="badge text-bg-primary text-white">1m</div>
                    <div className="badge text-bg-light">5m</div>
                    <div className="badge text-bg-light">15m</div>
                    <div className="badge text-bg-light">4h</div>
                    <div className="badge text-bg-light">D</div>
                    <div className="badge text-bg-light">W</div>
                    <div className="badge text-bg-light">M</div>
                    <div className="badge text-bg-light">Y</div>
                  </div>
                </div>
                <Chart data={convertToCandlestick(candleData)} />
              </div>

              <div className="bg-white rounded-2">
                <OrderHistory />
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="bg-white rounded-2">
                    <OrderBook />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="bg-white rounded-2">
                    <RecentTrades />
                  </div>
                </div>
                <div className="col-12 col-md-6"></div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <CryptoBuySell coinId={coinId} />

              <div className="bg-white rounded-2 px-5 py-4 mb-4">
                <div className="fs-3 fw-normal d-flex align-items-center justify-content-center text-muted">
                  Your Balance
                </div>
                <div className="fs-1 fw-bold d-flex align-items-center justify-content-center pb-3">
                  $132,832.89
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Button className="btn-white border d-flex align-items-center justify-content-center gap-3 w-100">
                    <Image
                      src="/plus.svg"
                      width={15}
                      height={15}
                      alt="Top Up"
                    />
                    Top up balance
                  </Button>
                </div>

                <div className="d-flex align-items-center justify-content-between py-3">
                  <h3 className="fs-2 fw-bold">Your Assets</h3>
                  <Image src="/glass.png" width={20} height={20} alt="Top Up" />
                </div>
                {Object.entries(wallet).map(([symbol, data]) => {
                  const { coinId, value } = data;

                  return (
                    <li
                      key={symbol}
                      className="d-flex align-items-center gap-3 mb-3"
                    >
                      <Image
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`}
                        width={30}
                        height={30}
                        alt={symbol}
                      />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{symbol}</div>
                        <div className="text-muted small">
                          {value.toFixed(4)}
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fw-semibold">$5,642.53</div>
                        <div className="text-danger">+1.45%</div>
                      </div>
                    </li>
                  );
                })}
              </div>
              <MarketTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
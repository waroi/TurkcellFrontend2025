"use client";
import Button from "@/components/Button";
import Chart from "@/components/Chart";
import CryptoBuySell from "@/components/CryptoBuySell";
import CryptoTicker from "@/components/CryptoTicker";
import MarketTable from "@/components/MarketTable";
import MobileSidebar from "@/components/MobileSidebar";
import OrderBook from "@/components/OrderBook";
import OrderHistory from "@/components/OrderHistory";
import RecentTrades from "@/components/RecentTrades";
import Sidebar from "@/components/Sidebar";
import { app } from "@/firebase/firebase";
import useCryptoStore from "@/store/useCryptoStore";
import { Candle, Coin } from "@/types/types";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CandlestickData, UTCTimestamp } from "lightweight-charts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
async function getCryptoData(): Promise<Coin[]> {
  const res = await fetch("/api/coins");
  return await res.json();
}
function Page() {
  const params = useParams();
  const [candleData, setCandleData] = useState<Candle[]>([]);
  const wallet = useCryptoStore((state) => state.wallet);
  const setSingleCoin = useCryptoStore((state) => state.setSingleCoin);
  const t = useTranslations();
  const router = useRouter();
  const { coins, setCoins } = useCryptoStore();
  const coinId = params.coinId as string;
  const coin = useCryptoStore((state) => state.singleCoin);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData();
      setCoins(data);
    };

    fetchData();
  }, [setCoins]);

  function convertToCandlestick(data: Candle[]): CandlestickData[] {
    return data.map((item) => ({
      ...item,
      time: item.time as UTCTimestamp,
    }));
  }

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

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

  useEffect(() => {
    const fetchCandleData = async () => {
      if (!coin?.symbol) return;

      try {
        const res = await fetch(`/api/candles?fsym=${coin.symbol}`);
        const data = await res.json();
        setCandleData(data);
      } catch (error) {
        console.error("Error fetching candle data:", error);
      }
    };

    fetchCandleData();
  }, [coin?.symbol, setCandleData]);

  return (
    <div className="container-fluid mt-nav">
      <div className="row min-vh-100">
        <Sidebar />
        <div className="col-2 d-none d-xl-flex"></div>
        <div className="col-12 col-xl-10 p-40 bg-secondary">
          <MobileSidebar />
          <CryptoTicker coins={coins} />
          <div className="grid-layout mt-4 p-0">
            <div className="bg-white rounded-2 pb-3 trading-market d-flex flex-column">
              <div className="p-5 d-flex align-items-center flex-wrap justify-content-between">
                <h1 className="fs-2 fw-bold">{t("Trading Market")}</h1>
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
              <div style={{ flexGrow: 1, minHeight: "0", padding: "0 1rem" }}>
                <Chart data={convertToCandlestick(candleData)} />
              </div>
            </div>

            <div className="bg-white rounded-2 order-history">
              <OrderHistory />
            </div>

            <div className="bg-white rounded-2 order-book">
              <OrderBook />
            </div>

            <div className="bg-white rounded-2 recent-trades">
              <RecentTrades />
            </div>

            <CryptoBuySell coinId={coinId} />

            <div className="bg-white rounded-2 px-5 py-4 your-balance">
              <div className="fs-3 fw-normal d-flex align-items-center justify-content-center text-muted">
                Your Balance
              </div>
              <div className="fs-1 fw-bold d-flex align-items-center justify-content-center pb-3">
                $132,832.89
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Button className="btn-white border d-flex align-items-center justify-content-center gap-3 w-100">
                  <Image src="/plus.svg" width={15} height={15} alt="Top Up" />
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
                      <div className="text-muted small">{value.toFixed(4)}</div>
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
  );
}

export default Page;

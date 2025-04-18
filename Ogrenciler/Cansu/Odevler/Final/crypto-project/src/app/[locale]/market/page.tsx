// app/page.tsx
"use client";

import { useEffect } from "react";
import useStore from "../../store/useCryptoStore";
import Image from "next/image";
import CategoryButtons from "@/components/CategoryButtons";
import Button from "@/components/Button";
import MarketCoinCard from "@/components/MarketCoinCard";
import LearnAndEarn from "@/components/LearnAndEarn";
import MarketCryptoTable from "@/components/MarketCryptoTable";

type Coin = {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      volume_change_24h: number;
      market_cap: number;
      percent_change_24h: number;
    };
  };
};

async function getCryptoData(): Promise<Coin[]> {
  const res = await fetch("/api/coins");
  return await res.json();
}

export default function HomePage() {
  const { coins, setCoins } = useStore();
  // const t = useTranslations();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData();
      setCoins(data);
      console.log(data);
    };

    fetchData();
  }, [setCoins]);

  return (
    <main>
      <section className="bg-primary bg-opacity-10 d-flex py-6 pb-10">
        <div className="container">
          <div className="d-flex">
            <div className="w-50 d-flex flex-column gap-3 pe-5">
              <h1 className="home-page-title mt-5">
                Today’s Cryptocurrency prices
              </h1>
              <p className="muted-text fs-2">
                The global crypto market cap is $1.86T
              </p>
            </div>
            <div className="w-50 d-flex justify-content-center align-items-center">
              <Image
                src="/market-banner.svg"
                width={480}
                height={340}
                alt="partner"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="position-relative bg-white py-6">
        <div className="buy-sell-absolute w-100 position-absolute start-50 translate-middle-x">
          <div className="container">
            <div className="rounded-4 shadow-lg overflow-hidden">
              <CategoryButtons />
              <div className="d-flex gap-3 p-4 bg-white">
                {coins.slice(0, 4).map((coin) => (
                  <MarketCoinCard key={coin.id} coin={coin} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="market-update-section">
        <div className="container pb-6">
          <div className="d-flex align-items-center gap-5 fw-bold fs-4 bg-secondary mt-6 px-4 rounded-top-4">
            <span className="text-muted py-3">Favorites</span>
            <span className="py-3 bg-primary px-4 text-white">Derivatives</span>
            <span className="py-3 text-muted">Spot</span>
          </div>

          <div className="d-flex align-items-center gap-5 fw-bold fs-4 px-4">
            <span className="border-bottom border-primary py-3">All</span>
            <span className="py-3 text-muted">Inverse Perpetual</span>
            <span className="py-3 text-muted">USDT Perpetual</span>
            <span className="py-3 text-muted">Inserve Futures</span>
          </div>

         

          <MarketCryptoTable coins={coins} />
        </div>
      </section>
      <LearnAndEarn />
      <section className="crypto-banner d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center flex-wrap text-white py-4">
          <div>
            <h2 className="fw-bold mb-2">Earn up to $25 worth of crypto</h2>
            <p className="mb-0">
              Discover How Specific Cryptocurrencies Work — And Get A Bit Of
              Each Crypto To Try Out For Yourself.
            </p>
          </div>
          <div className="mt-4 mt-md-0">
            <Button className="btn-white">Create Account</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
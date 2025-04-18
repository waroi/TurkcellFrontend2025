"use client";

import { useEffect } from "react";
import useStore from "@/store/useCryptoStore";
import Image from "next/image";
import CategoryButtons from "@/components/CategoryButtons";
import Button from "@/components/Button";
import MarketCoinCard from "@/components/MarketCoinCard";
import LearnAndEarn from "@/components/LearnAndEarn";
import MarketCryptoTable from "@/components/MarketCryptoTable";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();

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
      <section className="bg-primary bg-opacity-10 py-6 pb-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <h1 className="home-page-title mt-5">
              {t("Today’s Crypto currency prices")}
              </h1>
              <p className="muted-text">
              {t("the_global_crypto")}
              </p>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
              <Image
                src="/market-banner.svg"
                width={480}
                height={340}
                alt="Crypto Banner"
                className="img-fluid"
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
              <div className="row g-3 p-4 bg-white">
                {coins.slice(0, 4).map((coin) => (
                  <div
                    key={coin.id}
                    className="col-12 col-sm-6 col-xl-3 d-flex"
                  >
                    <MarketCoinCard coin={coin} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="market-update-section">
        <div className="container pb-6 mt-15-sm mt-35-sm">
          <div className="d-flex align-items-center gap-5 fw-bold fs-4 bg-secondary mt-6 px-4 rounded-top-4">
            <span className="text-muted py-3">{t("Favorites")}</span>
            <span className="py-3 bg-primary px-4 text-white">{t("Derivatives")}</span>
            <span className="py-3 text-muted">{t("Spot")}</span>
          </div>

          <div className="d-flex align-items-center gap-5 fw-bold fs-4 px-4">
            <span className="border-bottom border-primary py-3">{t("All")}</span>
            <span className="py-3 text-muted">{t("Inverse Perpetual")}</span>
            <span className="py-3 text-muted">{t("USDT Perpetual")}</span>
            <span className="py-3 text-muted">{t("Inserve Futures")}</span>
          </div>

          <MarketCryptoTable coins={coins} />
        </div>
      </section>
      <LearnAndEarn />
     <Footer/>
    </main>
  );
}

"use client";

import HeroSection from "@/components/organisms/HeroSection";
import MarketCardList from "@/components/organisms/MarketCardList";
import MarketTable from "@/components/organisms/MarketTable";
import HowItWork from "@/components/organisms/HowItWork";
import WhatIsRockie from "@/components/organisms/WhatIsRockie";
import DownloadApp from "@/components/organisms/DownloadApp";
import CustomerReview from "@/components/organisms/CustomerReview";
import EarnUp from "@/components/molecules/EarnUp";
import styles from "./page.module.css";
import { useMarketData } from "@/hooks/useMarketData";

export default function HomePage() {
  const { marketData, loading } = useMarketData();

  return (
    <>
      <div className={styles.page}>
        <div>
          <HeroSection />
          {!loading && (
            <>
              <MarketCardList data={marketData.slice(0, 4)} />
              <MarketTable data={marketData} />
            </>
          )}
          <HowItWork />
          <WhatIsRockie />
          <DownloadApp />
          <CustomerReview />
          <EarnUp />
        </div>
      </div>
    </>
  );
}

"use client";

import GraphCardList from "@/components/molecules/GraphCardList";
import LearnAndEarn from "@/components/molecules/LearnAndEarn";
import MarketBanner from "@/components/molecules/MarketBanner";
import DerivativesTable from "@/components/organisms/DerivativesTable";
import React, { useEffect, useState } from "react";

const MarketPage = () => {
  const [marketData, setMarketData] = useState<any[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true&per_page=20"
      );
      const data = await res.json();
      setMarketData(data);
    };

    fetchAll();
  }, []);

  return (
    <>
      <MarketBanner />
      <GraphCardList data={marketData.slice(0, 4)} />
      <DerivativesTable data={marketData} />
      <LearnAndEarn />
    </>
  );
};

export default MarketPage;

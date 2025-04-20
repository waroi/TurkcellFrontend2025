"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { fetchMarketData } from "@/lib/api/market";
import { CryptoCard } from "@/components/dashboard/CryptoCard";

export function Dashboard() {
  const { theme } = useTheme();
  const t = useTranslations("Dashboard");
  const [marketData, setMarketData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchMarketData();
      setMarketData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <div>{t("loading")}</div>;

  return (
    <div className={`dashboard ${theme}`}>
      <h1>{t("title")}</h1>
      <div className="crypto-grid">
        {marketData.slice(0, 12).map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  );
}
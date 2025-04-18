import { fetchMarketData } from "@/services/marketService";
import { useEffect, useState } from "react";

export const useMarketData = () => {
  const [marketData, setMarketData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchMarketData();
        setMarketData(data);
      } catch (err) {
        console.error("Market data fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { marketData, loading };
};

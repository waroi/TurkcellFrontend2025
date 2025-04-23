import React, { useEffect, useState } from "react";
import MarketUpdateRow from "../../molecules/MarketData/MarketUpdateRow";
import { fetchCryptoData } from "@/services/services";
import "../../../app/global.scss";


interface CombinedData {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  market_cap: number;
  volume_change_24h: number;
  sparkline: number[];
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
}

interface MarketUpdateProps {
  data: string[];
  loading?: boolean;
  sortKey?: 'name' | 'price' | 'percent_change_24h'|'marketCap';
  sortOrder?: 'asc' | 'desc';
  onSortChange?: (key: 'name' | 'price' | 'percent_change_24h'|'marketCap') => void;
}

const MarketUpdate = ({ data: coinSymbols, loading: externalLoading = false, sortKey, sortOrder = 'asc' }: MarketUpdateProps) => {
  const [cryptoData, setCryptoData] = useState<CombinedData[]>([]);
  const [loading, setLoading] = useState(externalLoading);
  const [favoriteCoins, setFavoriteCoins] = useState<number[]>([]);
  const [activeCoinId, setActiveCoinId] = useState<number | null>(null);

  const generateRandomSparkline = (): number[] => {
    return Array.from({ length: 30 }, () => Math.random() * 100 - 50);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const priceData = await fetchCryptoData("listings");
        const filteredPriceData = priceData.data.filter((crypto: any) =>
          coinSymbols.includes(crypto.symbol)
        );
        const ids = filteredPriceData.map((c: any) => c.id.toString());
        const infoData = await fetchCryptoData("info", ids);

        const merged: CombinedData[] = filteredPriceData.map((crypto: any) => ({
          id: crypto.id,
          name: crypto.name,
          symbol: crypto.symbol,
          logo: infoData.data[crypto.id]?.logo || "",
          price: crypto.quote.USD.price,
          market_cap: crypto.quote.USD.market_cap,
          volume_change_24h: crypto.quote.USD.volume_change_24h,
          percent_change_1h: crypto.quote.USD.percent_change_1h,
          percent_change_24h: crypto.quote.USD.percent_change_24h,
          percent_change_7d: crypto.quote.USD.percent_change_7d,
          percent_change_30d: crypto.quote.USD.percent_change_30d,
          percent_change_60d: crypto.quote.USD.percent_change_60d,
          percent_change_90d: crypto.quote.USD.percent_change_90d,
          sparkline: generateRandomSparkline(),
        }));

        setCryptoData(merged);
      } catch (error) {
        console.error("MarketUpdate veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    if (coinSymbols.length) {
      fetchData();
    }
  }, [coinSymbols]);

  const handleFavoriteToggle = (coinId: number) => {
    setFavoriteCoins((prev) =>
      prev.includes(coinId) ? prev.filter((id) => id !== coinId) : [...prev, coinId]
    );
  };
  const sortedData = React.useMemo(() => {
    if (!sortKey) return cryptoData;

    const order = sortOrder === 'asc' ? 1 : -1;

    return [...cryptoData].sort((a, b) => {
      if (sortKey === 'name') {
        return a.name.localeCompare(b.name) * order;
      } else if (sortKey === 'marketCap') {
        return (a.market_cap - b.market_cap) * order;
      } else if (sortKey === 'price') {
        return (a.price - b.price) * order;
      } else if (sortKey === 'percent_change_24h') {
        return (a.percent_change_24h - b.percent_change_24h) * order;
      }
      return 0;
    });
  }, [cryptoData, sortKey, sortOrder]);


  return (
    <div style={{ marginTop: "2rem" }}>
      {loading ? (
        <div>Yükleniyor...</div>
      ) : (
        <>
          {sortedData.map((coin, index) => (
            <MarketUpdateRow
              id={coin.id}
              key={coin.id}
              rank={index + 1}
              logo={coin.logo}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.price}
              market_cap={coin.market_cap}
              sparklineData={coin.sparkline}
              percent_change_1h={coin.percent_change_1h}
              percent_change_24h={coin.percent_change_24h}
              percent_change_7d={coin.percent_change_7d}
              percent_change_30d={coin.percent_change_30d}
              percent_change_60d={coin.percent_change_60d}
              percent_change_90d={coin.percent_change_90d}
              isFavorite={favoriteCoins.includes(coin.id)}
              coinId={coin.id}
              onFavoriteToggle={handleFavoriteToggle}
              isActive={coin.id === activeCoinId}
              onTradeClick={() => setActiveCoinId(coin.id)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MarketUpdate;

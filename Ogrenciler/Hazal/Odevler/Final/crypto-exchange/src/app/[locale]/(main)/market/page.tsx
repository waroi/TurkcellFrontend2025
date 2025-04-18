import { CryptoTable } from '@/components/common/CryptoTable';
import { MarketFilters } from '@/components/pages/Market/MarketFilters';
import { MarketOverview } from '@/components/pages/Market/MarketOverview';
import { getBinanceTickerData } from '@/lib/api/binance';

export default async function MarketPage() {
  const cryptoData = await getBinanceTickerData();

  return (
    <div className="market-page">
      <MarketOverview />
      <MarketFilters />
      <CryptoTable data={cryptoData} />
    </div>
  );
}
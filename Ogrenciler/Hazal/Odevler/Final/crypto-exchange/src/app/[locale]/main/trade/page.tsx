import { TradingViewChart} from '@/components/trade/index';
import { OrderForm } from '@/components/trade/OrderForm';
import { fetchCoinData } from '@/lib/api/market';
import { notFound } from 'next/navigation';

export default async function TradePage({
  params,
}: {
  params: { symbol: string };
}) {
  const coinData = await fetchCoinData(params.symbol);
  
  if (!coinData) notFound();

  return (
    <div className="trade-page">
      <div className="chart-container">
        <TradingViewChart symbol={params.symbol} />
      </div>
      <div className="order-panel">
        <OrderForm coin={coinData} />
      </div>
    </div>
  );
}
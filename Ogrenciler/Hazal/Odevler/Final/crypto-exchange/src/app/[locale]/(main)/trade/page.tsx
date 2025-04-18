import { BuySellForm } from '@/components/pages/Trade/BuySellForm';
import { OrderBook } from '@/components/pages/Trade/OrderBook';
import { TradeHistory } from '@/components/pages/Trade/TradeHistory';
import { TradingViewWidget } from '@/components/common/TradingViewWidget';

export default function TradePage() {
  return (
    <div className="trade-page">
      <div className="chart-section">
        <TradingViewWidget symbol="BTCUSDT" />
      </div>
      <div className="order-section">
        <BuySellForm />
        <OrderBook />
        <TradeHistory />
      </div>
    </div>
  );
}
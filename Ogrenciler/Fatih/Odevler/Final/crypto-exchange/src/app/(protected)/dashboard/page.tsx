"use client";

import { useCoins } from "@/hooks/useCoins";
import DashboardStats from "@/components/molecules/DashboardStats";
import styles from "./Dashboard.module.css";
import TradingView from "@/components/molecules/TradingView";
import TradeBox from "@/components/organisms/TradeBox";
import OrdersTable from "@/components/organisms/OrdersTable";
import PortfolioOverview from "@/components/organisms/PortfolioOverview";
import OrderBook from "@/components/organisms/OrderBook";
import RecentTrades from "@/components/organisms/RecentTrades";
import MarketsOverview from "@/components/organisms/MarketsOverview";

export default function DashboardPage() {
  const { coins, selectedCoin, setSelectedCoin, selectedCoinData } = useCoins();

  return (
    <div className={`d-flex ${styles.wrapper}`}>
      <main className="flex-grow-1 p-4 container">
        <DashboardStats coin={selectedCoinData} />

        <div className="row mt-4">
          <div className="col-lg-8">
            <TradingView />
            <OrdersTable />
            <div className="d-flex flex-column flex-lg-row gap-3">
              <div className="flex-fill">
                <OrderBook />
              </div>
              <div className="flex-fill">
                <RecentTrades />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <TradeBox
              coinOptions={coins}
              selectedCoin={selectedCoin}
              setSelectedCoin={setSelectedCoin}
              coinData={selectedCoinData}
            />
            <PortfolioOverview />
            <MarketsOverview />
          </div>
        </div>
      </main>
    </div>
  );
}

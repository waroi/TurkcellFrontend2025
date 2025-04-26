import { fetchTopCoins } from "@/lib/api";
import TradeClient from "./TradeClient";

export default async function TradePage() {
  const coins = await fetchTopCoins();
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">💰 Coin Alım-Satım</h1>
      <TradeClient initialCoins={coins} />
    </div>
  );
}
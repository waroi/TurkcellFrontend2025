"use client";
import CoinCard from "@/components/coins/CoinCard";
import { useWatchlistStore } from "@/store/watchlistStore";

export default function WatchlistClient({ allCoins }: { allCoins: any[] }) {
  const watchlist = useWatchlistStore((s) => s.watchlist);
  const filtered = allCoins.filter((c) => watchlist.includes(c.id));

  if (filtered.length === 0) return <p>Watchlist’inizde coin yok.</p>;

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {filtered.map((coin) => (
        <div key={coin.id} className="col"><CoinCard coin={coin} /></div>
      ))}
    </div>
  );
}

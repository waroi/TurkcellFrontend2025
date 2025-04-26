import { fetchTopCoins } from "@/lib/api";
import WatchlistClient from "./WatchlistClient";
import { PrivateRoute } from "@/providers/privateRoute";

export default async function WatchlistPage() {
  const coins = await fetchTopCoins();
  return (
    <PrivateRoute>
      <main className="container py-5">
        <h1 className="mb-4">⭐ My Watchlist</h1>
        <WatchlistClient allCoins={coins} />
      </main>
    </PrivateRoute>
  );
}

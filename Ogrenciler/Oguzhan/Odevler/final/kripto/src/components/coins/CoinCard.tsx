"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useWatchlistStore } from "@/store/watchlistStore";
import { useAuthStore } from "@/store/authStore";
import { Button } from "../atoms/Button";

type Coin = { id: string; name: string; image: string; current_price: number; price_change_percentage_24h: number; };

export default function CoinCard({ coin }: { coin: Coin }) {
  const { toggleCoin, isInWatchlist } = useWatchlistStore();
  const fav = isInWatchlist(coin.id);
  const { user } = useAuthStore();

  const handleToggle = () => {
    if (!user) {
      alert("Lütfen giriş yapın!");
      return;
    }
    toggleCoin(coin.id);
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-3 shadow rounded bg-white">
      <Button
        onClick={async () => {
          handleToggle();
          toggleCoin(coin.id);
        }}
        className="btn p-0"
      >
        <FontAwesomeIcon icon={fav ? solidStar : regularStar} style={{ color: fav ? "gold" : "gray" }} />
      </Button>
      <Image src={coin.image} alt={coin.name} width={32} height={32} />
      <strong className="mx-2">{coin.name}</strong>
      <div className={`text-${coin.price_change_percentage_24h > 0 ? "success" : "danger"}`}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
    </div>
  );
}

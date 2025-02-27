import { useEffect, useState } from "react";
import { fetchPlayers } from "../../../service/api";
import Header from "../Header";
import ProductCard from "../ProductCard";



export default function Products() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };

    getPlayers();
  }, []);

  return (
    <>
      <Header text={"YENİ GELENLER"} />
      <section className="new-arrivals">
        <div className="container">
          <div className="player-cards row gy-4">
            {players.length > 0 ? (
              players.map((player) => (
                <ProductCard key={player.playerName} player={player} />
              ))
            ) : (
              <p>Yükleniyor...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

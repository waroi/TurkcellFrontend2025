import { useState, useEffect } from 'react';
import ProductDetailCard from '../src/components/ProductDetailCard';
import { fetchPlayers } from '../service/api';
import { useParams } from 'react-router';
import Footer from '../src/components/Footer';

export default function PlayerView() {
  const { playerName } = useParams();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };

    getPlayers();
  }, []);

  const player = players.find((item) => item.playerName === playerName);

  return (
    <div>
      {player && <ProductDetailCard player={player} />}
      <Footer />
    </div>
  );
}

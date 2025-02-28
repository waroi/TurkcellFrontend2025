import { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import ProductCard from '../src/components/ProductCard';
import { fetchPlayers } from '../service/api';

export default function PlayersView() {
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
      <main className='main-section'>
        <div className='my-20'>
          <Header text={'OYUNCULAR'} />
        </div>
        <section className='players'>
          <div className='container'>
            <div className='player-cards row gy-4'>
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
      </main>
    </>
  );
}

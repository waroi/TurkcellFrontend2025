import { useState, useEffect } from "react";
import ProductDetailCard from "../src/components/ProductDetailCard"
import { fetchPlayers } from "../service/api";

export default function PlayerView() {

const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };

    getPlayers();
  }, []);




  return <div><ProductDetailCard players={players}/>
  
  
  
  
  </div>;
}

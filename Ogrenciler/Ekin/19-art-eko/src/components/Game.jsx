import Players from "#/Players";
import Canvas from "#/Canvas";
import Chat from "#/Chat";
import { useState } from "react";

export default function Home({ setLoading }) {
  const [x, setX] = useState([0]);

  return (
    <>
      {/* <Players /> */}
      <div>
        <button onClick={() => setX([0, 3])}>XXXXXXXXXX</button>
      </div>
      <Canvas word="geçenşağı" hinted={x} />
      <Chat />
    </>
  );
}

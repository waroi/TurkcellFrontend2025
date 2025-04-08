import { useEffect } from "react";
import { useNavigate } from "react-router";

import Players from "#/Players";
import Canvas from "#/Canvas";
import Chat from "#/Chat";
import Screen from "#/Screen";

import useGameStore from "@/store/gameStore";
import { sync, online } from "@/firebase";

export default function Game() {
  const navigate = useNavigate();
  const { set } = useGameStore();
  const player = JSON.parse(localStorage.getItem("player"))?.id;
  const name = JSON.parse(localStorage.getItem("player"))?.name;

  useEffect((interval) => {
    if (!player) navigate("/");

    sync(set);

    interval = setInterval(() => online(player), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Players players={[]} />
      <Canvas word="geçenşağı" player={player} />
      <Chat player={player} name={name} />
      <Screen />
    </>
  );
}

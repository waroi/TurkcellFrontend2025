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
  const { phase, set, turns } = useGameStore();
  const player = JSON.parse(localStorage.getItem("player"))?.id;

  useEffect((interval) => {
    if (!player) navigate("/");

    sync(set);

    interval = setInterval(() => online(player), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!phase) return;

    console.log(phase);
  }, [phase]);

  const DEBUG = useGameStore();
  useEffect(() => {
    // console.log(DEBUG);
  }, [DEBUG]);

  return (
    <>
      <Players players={[]} />
      <Canvas word="geçenşağı" player={player} />
      <Chat />
      <Screen />
    </>
  );
}

import Players from "#/Players";
import Canvas from "#/Canvas";
import Chat from "#/Chat";
import { useState } from "react";

export default function Game() {
  const [p, setP] = useState([
    { id: "bilmemne", name: "Ekin Aslan", score: 28 },
    { id: "user1", name: "Ahmet Yılmaz", score: 23 },
    { id: "user2", name: "Ayşe Demir", score: 15 },
    { id: "user3", name: "Mehmet Can", score: 55 },
    { id: "user4", name: "Zeynep Kaya", score: 19 },
    { id: "user5", name: "Fatma Öz", score: 21 },
    { id: "user6", name: "Emre Aydın", score: 24 },
    { id: "user7", name: "Selin Kurt", score: 16 },
    { id: "user8", name: "Okan Arslan", score: 18 },
    { id: "user9", name: "Burcu Şen", score: 22 },
    { id: "user10", name: "Cem Uslu", score: 20 },
    { id: "user11", name: "Hülya Çelik", score: 24 },
    { id: "user12", name: "Mert Yüce", score: 25 },
    { id: "user13", name: "Gizem Tan", score: 14 },
    { id: "user14", name: "Tolga Er", score: 26 },
  ]);

  function DEB() {
    setP([
      { id: "bilmemne", name: "Ekin Aslan", score: 57 },
      { id: "user1", name: "Ahmet Yılmaz", score: 23 },
      { id: "user2", name: "Ayşe Demir", score: 15 },
      { id: "user3", name: "Mehmet Can", score: 57 },
      { id: "user4", name: "Zeynep Kaya", score: 19 },
      { id: "user5", name: "Fatma Öz", score: 21 },
      { id: "user6", name: "Emre Aydın", score: 24 },
      { id: "user7", name: "Selin Kurt", score: 16 },
      { id: "user8", name: "Okan Arslan", score: 18 },
      { id: "user9", name: "Burcu Şen", score: 22 },
      { id: "user10", name: "Cem Uslu", score: 20 },
      { id: "user11", name: "Hülya Çelik", score: 24 },
      { id: "user12", name: "Mert Yüce", score: 25 },
      { id: "user13", name: "Gizem Tan", score: 14 },
      { id: "user14", name: "Tolga Er", score: 26 },
    ]);
  }

  return (
    <>
      <Players players={p} />
      <Canvas word="geçenşağı" />
      {/* <Chat /> */}
      <button onClick={DEB}>a</button>
    </>
  );
}

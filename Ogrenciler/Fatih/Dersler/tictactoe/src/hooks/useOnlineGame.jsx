import { useEffect, useState } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../services/firebase";
import calculateWinner from "../utils/calculateWinner";

export default function useOnlineGame(gameId) {
  const gameRef = doc(db, "games", gameId);

  const [cubeState, setCubeState] = useState(null);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [highlights, setHighlights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playerSymbol, setPlayerSymbol] = useState(null);

  const playerId = sessionStorage.getItem("playerId") || crypto.randomUUID();
  sessionStorage.setItem("playerId", playerId);

  useEffect(() => {
    const unsubscribe = onSnapshot(gameRef, async (snapshot) => {
      const data = snapshot.data();

      if (data && data.cubeState) {
        setCubeState(data.cubeState);
        setXIsNext(data.xIsNext);
        setWinner(data.winner);
        setHighlights(data.highlights || null);

        const players = data.players || {};
        let symbol = players[playerId];

        if (!symbol) {
          const assigned = Object.values(players);
          symbol = assigned.includes("X") ? "O" : "X";

          await updateDoc(gameRef, {
            [`players.${playerId}`]: symbol,
          });
        }

        sessionStorage.setItem("playerSymbol", symbol);
        setPlayerSymbol(symbol);
      } else {
        setCubeState(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [gameId]);

  async function makeMove(face, index) {
    if (!cubeState || winner) return;
    if (cubeState[face][index]) return;
    if ((xIsNext && playerSymbol !== "X") || (!xIsNext && playerSymbol !== "O"))
      return;

    const updatedFace = [...cubeState[face]];
    updatedFace[index] = playerSymbol;

    const newCube = {
      ...cubeState,
      [face]: updatedFace,
    };

    const result = calculateWinner(newCube);

    await updateDoc(gameRef, {
      cubeState: newCube,
      xIsNext: !xIsNext,
      winner: result?.winner || null,
      highlights: result?.highlights || null,
    });
  }

  async function initializeGame() {
    const initialCube = {
      front: Array(9).fill(null),
      back: Array(9).fill(null),
      left: Array(9).fill(null),
      right: Array(9).fill(null),
      top: Array(9).fill(null),
      bottom: Array(9).fill(null),
    };

    await setDoc(gameRef, {
      cubeState: initialCube,
      xIsNext: true,
      winner: null,
      highlights: null,
      createdAt: serverTimestamp(),
      players: {
        [playerId]: "X",
      },
    });
  }

  return {
    cubeState,
    xIsNext,
    winner,
    highlights,
    makeMove,
    initializeGame,
    loading,
    playerSymbol,
  };
}

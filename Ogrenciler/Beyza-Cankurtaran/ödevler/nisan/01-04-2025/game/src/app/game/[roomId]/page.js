'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../../services/firebase'; 
import MultiplayerLobby from '../../components/MultiplayerLobby';
import MultiplayerGame from '../../components/MultiplayerGame';

export default function GamePage() {
  const params = useParams();
  const roomId = params.roomId;
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const roomRef = ref(realtimeDb, `rooms/${roomId}/status`);
    const unsubscribe = onValue(roomRef, (snapshot) => {
      const status = snapshot.val();
      if (status === 'started') {
        setGameStarted(true);
      }
    });

    return () => unsubscribe();
  }, [roomId]);

  if (!roomId) return <p>Loading...</p>;

  return gameStarted ? (
    <MultiplayerGame roomId={roomId} />
  ) : (
    <MultiplayerLobby roomId={roomId} />
  );
}

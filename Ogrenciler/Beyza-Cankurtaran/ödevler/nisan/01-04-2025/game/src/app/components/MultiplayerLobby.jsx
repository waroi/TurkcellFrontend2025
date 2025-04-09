'use client';

import { useState, useEffect } from 'react';
import { ref, push, set, onValue, update, onChildAdded, onChildRemoved, get } from 'firebase/database';
import { realtimeDb, auth } from '../services/firebase';
import { useRouter, useParams } from 'next/navigation';

export default function MultiplayerLobby() {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [error, setError] = useState(null);
  
  const router = useRouter();
  const params = useParams();
  const roomId = params.roomId; 

  useEffect(() => {
    if (!roomId) return;

    const roomRef = ref(realtimeDb, `rooms/${roomId}`);
    
    const unsubscribe = onValue(roomRef, (snapshot) => {
      const roomData = snapshot.val();
      if (!roomData) {
        setError("Room not found");
        setLoading(false);
        return;
      }
      
      setRoom(roomData);
      setLoading(false);

      if (roomData.players) {
        const currentPlayer = Object.values(roomData.players).find(p => p.id === auth.currentUser?.uid);
        if (currentPlayer) {
          setIsReady(currentPlayer.isReady || false);
          setHasJoined(true);
        }
      }
    });

    return () => unsubscribe();
  }, [roomId]);

  useEffect(() => {
    if (!roomId || !room) return;

    const roomRef = ref(realtimeDb, `rooms/${roomId}`);

    if (room.players) {
      const playersArray = Object.values(room.players);

      if (playersArray.length === 1 && room.status !== "waiting for players") {
        update(roomRef, { status: "waiting for players" });
      }

      if (playersArray.length === 2 && room.status !== "playing") {
        update(roomRef, {
          status: "started", // Changed from "playing" to "started" to match GamePage component
          currentQuestionIndex: 0,
          startTime: Date.now(),
        });
      }
    }
  }, [roomId, room]);

  useEffect(() => {
    if (!auth.currentUser) {
      console.log("User not authenticated");
      return;
    }

    const roomsRef = ref(realtimeDb, 'rooms');
    
    const fetchRooms = async () => {
      setLoading(true);
      
      onValue(roomsRef, (snapshot) => {
        const roomsData = snapshot.val();
        const roomsList = [];
        
        if (roomsData) {
          Object.keys(roomsData).forEach(key => {
            if (roomsData[key].status === 'waiting for players') {
              roomsList.push({
                id: key,
                ...roomsData[key]
              });
            }
          });
        }
        
        setRooms(roomsList);
        setLoading(false);
      }, { onlyOnce: true });
    };
    
    fetchRooms();
    
    const unsubscribeAdded = onChildAdded(roomsRef, (snapshot) => {
      const newRoom = { id: snapshot.key, ...snapshot.val() };
      if (newRoom.status === 'waiting for players') {
        setRooms(prevRooms => {
          const exists = prevRooms.some(room => room.id === newRoom.id);
          if (!exists) {
            return [...prevRooms, newRoom];
          }
          return prevRooms;
        });
      }
    });
    
    const unsubscribeRemoved = onChildRemoved(roomsRef, (snapshot) => {
      setRooms(prevRooms => prevRooms.filter(room => room.id !== snapshot.key));
    });
    
    const unsubscribeChanged = onValue(roomsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setRooms(prevRooms => prevRooms.filter(room => {
          return data[room.id] && data[room.id].status === 'waiting for players';
        }));
      }
    });
    
    return () => { 
      unsubscribeAdded(); 
      unsubscribeRemoved();
      unsubscribeChanged();
    };
  }, []);

  const createRoom = () => {
    if (!auth.currentUser) {
      console.error("Cannot create room: User not authenticated");
      return;
    }

    const roomsRef = ref(realtimeDb, 'rooms');
    const newRoomRef = push(roomsRef);
    
    const roomData = {
      name: `Room by ${auth.currentUser.email}`,
      creator: auth.currentUser.uid,
      creatorEmail: auth.currentUser.email,
      players: {
        [auth.currentUser.uid]: { 
          id: auth.currentUser.uid, 
          email: auth.currentUser.email, 
          score: 0,
          isReady: true 
        }
      },
      status: 'waiting for players', // Changed from 'waiting' to match the check in useEffect
      createdAt: Date.now()
    };
    
    set(newRoomRef, roomData)
      .then(() => {
        console.log('Room created with ID:', newRoomRef.key);
        router.push(`/game/${newRoomRef.key}`);
      })
      .catch(error => {
        console.error('Error creating room:', error);
        alert('Failed to create room. Please try again.');
      });
  };

  async function joinRoom(roomId) {
    const user = auth.currentUser;
    if (!user) {
      console.error("Cannot join room: User not authenticated");
      return;
    }
  
    try {
      // First, get the room reference
      const roomRef = ref(realtimeDb, `rooms/${roomId}`);
      const roomSnapshot = await get(roomRef);
      const roomData = roomSnapshot.val();
      
      if (!roomData) {
        console.error("Room not found");
        return;
      }
      
      // Check if player already exists in the room
      const players = roomData.players || {};
      if (players[user.uid]) {
        console.log("Player already in the room");
      } else {
        // Add player to the room's players object with unique user ID as key
        const playersRef = ref(realtimeDb, `rooms/${roomId}/players`);
        await update(playersRef, {
          [user.uid]: {
            id: user.uid,
            email: user.email,
            isReady: false,
            score: 0
          }
        });
        console.log("Player joined successfully!");
      }
      
      // Navigate to the game room
      router.push(`/game/${roomId}`);
      
    } catch (error) {
      console.error("Error joining room:", error);
      setError("Failed to join room. Please try again.");
    }
  }

  return (
    <div className="container py-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Multiplayer Lobby</h2>
        </div>
        <div className="card-body">
          {error && (
            <div className="alert alert-danger mb-3">
              <i className="bi bi-exclamation-circle me-2"></i>
              {error}
            </div>
          )}
          
          <button 
            className="btn btn-primary mb-4" 
            onClick={createRoom}
            disabled={!auth.currentUser}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Create New Game Room
          </button>
          
          <h3 className="mb-3">Available Rooms</h3>
          
          {loading ? (
            <div className="text-center py-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading available rooms...</p>
            </div>
          ) : rooms.length === 0 ? (
            <div className="alert alert-info">
              <i className="bi bi-info-circle me-2"></i>
              No rooms available. Create one to get started!
            </div>
          ) : (
            <div className="list-group">
              {rooms.map(room => (
                <div 
                  key={room.id} 
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-success me-2">
                        {room.players ? Object.keys(room.players).length : 1} 
                        <i className="bi bi-person-fill ms-1"></i>
                      </span>
                      <h5 className="mb-1">{room.name}</h5>
                    </div>
                    <small className="text-muted">
                      Created by: {room.creatorEmail}
                    </small>
                    <small className="d-block text-muted">
                      Created: {new Date(room.createdAt).toLocaleTimeString()}
                    </small>
                  </div>
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => joinRoom(room.id)}
                    disabled={!auth.currentUser}
                  >
                    Join Room
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
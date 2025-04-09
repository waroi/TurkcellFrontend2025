import { useState, useEffect } from 'react';
import { 
  ref,
  get, 
  onValue, 
  update, 
  push, 
  remove 
} from 'firebase/database';
import { collection, getDocs } from 'firebase/firestore';
import { realtimeDb, db, auth } from '../services/firebase';
import { useRouter } from 'next/navigation';

export default function MultiplayerGame({ roomId }) {
  const [room, setRoom] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const roomRef = ref(realtimeDb, `rooms/${roomId}`);
    
    const unsubscribe = onValue(roomRef, (snapshot) => {
      const roomData = snapshot.val();
      if (!roomData) {
        setError("Room not found");
        setLoading(false);
        return;
      }
      
      // Convert players from object to array if needed
      if (roomData.players && !Array.isArray(roomData.players)) {
        roomData.players = Object.values(roomData.players);
      }
      
      setRoom(roomData);
      setLoading(false);
      
      if (roomData.players) {
        const currentPlayer = roomData.players.find(p => p.id === auth.currentUser?.uid);
        if (currentPlayer) {
          setIsReady(currentPlayer.isReady || false);
          setHasJoined(true); 
        }
      }
    });
  
    return () => unsubscribe();
  }, [roomId]);

  useEffect(() => {
    const joinExistingRoom = async () => {
      if (room.players && !Array.isArray(room.players)) {
        room.players = Object.values(room.players);
      }
      if (!room || !auth.currentUser || hasJoined) return;
      
      if (room.status !== 'waiting') return;
      
      const alreadyJoined = room.players && room.players.some(p => p.id === auth.currentUser.uid);
      
      if (!alreadyJoined) {
        try {
          const roomRef = ref(realtimeDb, `rooms/${roomId}`);
          
          const snapshot = await get(roomRef);
          const latestRoom = snapshot.val();
          
          if (!latestRoom) {
            setError("Room no longer exists");
            setLoading(false);
            return;
          }
          
          const updatedPlayers = [
            ...(latestRoom.players || []),
            {
              id: auth.currentUser.uid,
              email: auth.currentUser.email,
              score: 0,
              isReady: false
            },
          ];
          
          await update(roomRef, { players: updatedPlayers });
          console.log("Successfully joined room");
          setHasJoined(true);
          setLoading(false);
        } catch (error) {
          console.error("Error joining room:", error);
          setError("Failed to join room");
          setLoading(false);
        }
      } else {
        setHasJoined(true);
      }
    };
    
    joinExistingRoom();
  }, [room, roomId, hasJoined]);
  
  useEffect(() => {
    const fetchQuestions = async () => {
      if (!room || room.status !== 'playing') return;
      
      try {
        if (questions.length > 0) return;
        
        setLoading(true);
        const questionsRef = collection(db, 'questions');
        const querySnapshot = await getDocs(questionsRef);
        
        const loadedQuestions = querySnapshot.docs
          .map(doc => doc.data())
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
        
        console.log("Loaded questions:", loadedQuestions.length);
        setQuestions(loadedQuestions);
        setCurrentQuestion(loadedQuestions[0]);
        setCurrentQuestionIndex(0);
        setTimeLeft(30);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions', error);
        setError("Failed to load questions");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [room, questions.length]);

  useEffect(() => {
    if (!room || room.status !== 'playing' || !currentQuestion) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [room, currentQuestion]);

  const toggleReady = async () => {
    try {
      const roomRef = ref(realtimeDb, `rooms/${roomId}`);
      const snapshot = await get(roomRef);
      const latestRoom = snapshot.val();
      
      if (!latestRoom) {
        setError("Room no longer exists");
        return;
      }
      
      const playerIndex = latestRoom.players.findIndex(p => p.id === auth.currentUser.uid);
      
      if (playerIndex === -1) {
        console.error("Player not found in room");
        return;
      }
      
      const updatedPlayers = [...latestRoom.players];
      updatedPlayers[playerIndex].isReady = !isReady;
      
      await update(roomRef, { players: updatedPlayers });
      setIsReady(!isReady);
      
      const allReady = updatedPlayers.every(p => p.isReady);
      if (allReady && updatedPlayers.length >= 2 && latestRoom.creator === auth.currentUser.uid) {
        startGame();
      }
    } catch (error) {
      console.error("Error toggling ready status:", error);
    }
  };

  const startGame = async () => {
    try {
      const roomRef = ref(realtimeDb, `rooms/${roomId}`);
      await update(roomRef, { 
        status: 'playing',
        currentQuestionIndex: 0,
        startTime: Date.now()
      });
    } catch (error) {
      console.error("Error starting game:", error);
      setError("Failed to start game");
    }
  };

  const handleAnswer = async (answer) => {
    if (selectedAnswer) return;
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    setSelectedAnswer(answer);

    try {
      const roomRef = ref(realtimeDb, `rooms/${roomId}`);
      const snapshot = await get(roomRef);
      const latestRoom = snapshot.val();
      
      if (!latestRoom) {
        setError("Room no longer exists");
        return;
      }
      
      const playerIndex = latestRoom.players.findIndex(p => p.id === auth.currentUser.uid);

      if (playerIndex === -1) {
        console.error("Player not found in room");
        return;
      }

      const updatedPlayers = [...latestRoom.players];
      if (isCorrect) {
        const timeBonus = Math.floor(timeLeft / 5);
        const totalPoints = 10 + timeBonus;
        updatedPlayers[playerIndex].score += totalPoints;
        
      }

      await update(roomRef, {
        players: updatedPlayers
      });

      setTimeout(() => {
        if (latestRoom.creator === auth.currentUser.uid) {
          moveToNextQuestion();
        }
      }, 2000);
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  const moveToNextQuestion = async () => {
    if (room.creator !== auth.currentUser.uid) return;
    
    try {
      const nextIndex = currentQuestionIndex + 1;
      
      if (nextIndex < questions.length) {
        const roomRef = ref(realtimeDb, `rooms/${roomId}`);
        await update(roomRef, {
          currentQuestionIndex: nextIndex
        });
        
        setCurrentQuestionIndex(nextIndex);
        setCurrentQuestion(questions[nextIndex]);
        setSelectedAnswer(null);
        setTimeLeft(30);
      } else {
        endGame();
      }
    } catch (error) {
      console.error("Error moving to next question:", error);
    }
  };

  const handleTimeOut = () => {
    if (room.creator === auth.currentUser.uid) {
      moveToNextQuestion();
    }
  };

  const endGame = async () => {
    try {
      const roomRef = ref(realtimeDb, `rooms/${roomId}`);
      await update(roomRef, {
        status: 'finished',
        endTime: Date.now()
      });
    } catch (error) {
      console.error("Error ending game:", error);
    }
  };

  const leaveRoom = async () => {
    try {
      if (!room) return;
      if (room.creator === auth.currentUser.uid) {
        const roomRef = ref(realtimeDb, `rooms/${roomId}`);
        await remove(roomRef);
      } else {
        const roomRef = ref(realtimeDb, `rooms/${roomId}`);
        const snapshot = await get(roomRef);
        const latestRoom = snapshot.val();
        
        if (!latestRoom) return;
        
        const updatedPlayers = latestRoom.players.filter(p => p.id !== auth.currentUser.uid);
        
        await update(roomRef, { players: updatedPlayers });
      }
      
      router.push('/lobby');
    } catch (error) {
      console.error("Error leaving room:", error);
    }
  };
  
  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading game room...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container text-center py-5">
        <div className="alert alert-danger">
          <h4 className="alert-heading">Error</h4>
          <p>{error}</p>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => router.push('/lobby')}
          >
            Back to Lobby
          </button>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="container text-center py-5">
        <div className="alert alert-warning">
          <h4 className="alert-heading">Room Not Found</h4>
          <p>The game room you're looking for doesn't exist or has been closed.</p>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => router.push('/lobby')}
          >
            Back to Lobby
          </button>
        </div>
      </div>
    );
  }

  if (room.status === 'waiting') {
    const allReady = room.players && room.players.every(p => p.isReady);
    const readyCount = room.players ? room.players.filter(p => p.isReady).length : 0;
    
    return (
      <div className="container py-4">
        <div className="card shadow">
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <h2 className="mb-0">Room: {room.name}</h2>
            <span className="badge bg-light text-primary">Waiting</span>
          </div>
          
          <div className="card-body">
            <div className="alert alert-info mb-4">
              <i className="bi bi-info-circle me-2"></i>
              Waiting for players to join and get ready. Minimum 2 players required.
            </div>
            
            <h3 className="mb-3">Players ({room.players ? room.players.length : 0})</h3>
            <div className="list-group mb-4">
              {room.players && room.players.map(player => (
                <div 
                  key={player.id} 
                  className={`list-group-item d-flex justify-content-between align-items-center ${
                    player.id === auth.currentUser.uid ? 'list-group-item-light' : ''
                  }`}
                >
                  <div className="d-flex align-items-center">
                    {player.id === room.creator && (
                      <span className="badge bg-warning me-2" title="Room Creator">
                        <i className="bi bi-star-fill"></i>
                      </span>
                    )}
                    <span>{player.email}</span>
                    {player.id === auth.currentUser.uid && (
                      <span className="badge bg-secondary ms-2">You</span>
                    )}
                  </div>
                  <span className={`badge ${player.isReady ? 'bg-success' : 'bg-secondary'}`}>
                    {player.isReady ? 'Ready' : 'Not Ready'}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="d-flex justify-content-between">
              <button 
                className={`btn ${isReady ? 'btn-success' : 'btn-outline-success'}`}
                onClick={toggleReady}
              >
                {isReady ? (
                  <>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Ready
                  </>
                ) : (
                  <>
                    <i className="bi bi-check-circle me-2"></i>
                    Mark as Ready
                  </>
                )}
              </button>
              
              {room.creator === auth.currentUser.uid && (
                <button 
                  className="btn btn-primary"
                  onClick={startGame}
                  disabled={!room.players || room.players.length < 2 || !allReady}
                >
                  <i className="bi bi-play-fill me-2"></i>
                  Start Game {readyCount}/{room.players ? room.players.length : 0} Ready
                </button>
              )}
              
              <button 
                className="btn btn-outline-danger"
                onClick={leaveRoom}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Leave Room
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (room.status === 'playing' && currentQuestion) {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    return (
      <div className="container py-4">
        <div className="progress">
            <div 
              className="progress-bar" 
              role="progressbar" 
              style={{ width: `${progressPercentage}%` }} 
              aria-valuenow={progressPercentage} 
              aria-valuemin="0" 
              aria-valuemax="100"
            />
          </div>

          <div className="card-body">
            <h4 className="mb-4">{currentQuestion.question}</h4>
            <div className="list-group">
              {currentQuestion.answers.map((answer, idx) => {
                const isSelected = selectedAnswer === answer;
                const isCorrect = selectedAnswer && answer === currentQuestion.correctAnswer;
                const isWrong = selectedAnswer && isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    className={`list-group-item list-group-item-action 
                      ${isSelected ? 'active' : ''}
                      ${selectedAnswer && isCorrect ? 'list-group-item-success' : ''}
                      ${selectedAnswer && isWrong ? 'list-group-item-danger' : ''}
                    `}
                    disabled={!!selectedAnswer}
                    onClick={() => handleAnswer(answer)}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>

            {selectedAnswer && (
              <div className="mt-4 alert alert-info">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <>
                    <i className="bi bi-check-circle-fill me-2 text-success"></i>
                    Correct! Points awarded.
                  </>
                ) : (
                  <>
                    <i className="bi bi-x-circle-fill me-2 text-danger"></i>
                    Wrong answer. The correct answer was: <strong>{currentQuestion.correctAnswer}</strong>
                  </>
                )}
              </div>
            )}

            <div className="mt-4 text-end">
              <button 
                className="btn btn-outline-danger"
                onClick={leaveRoom}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Leave Game
              </button>
            </div>
          </div>
        </div>
    );
  }

  if (room.status === 'playing' && !currentQuestion) {
    return(
        <div className="card shadow">
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <div>
              <h3 className="mb-0">Question {currentQuestionIndex + 1}/{questions.length}</h3>
            </div>
            <div className={`h3 mb-0 ${timeLeft > 15 ? 'text-light' : timeLeft > 5 ? 'text-warning' : 'text-danger'}`}>
              <i className="bi bi-clock"></i> {timeLeft}s
            </div>
          </div>
          
          <div className="card-body">
            <div className="progress mb-3" style={{height: "8px"}}>
              <div 
                className="progress-bar bg-success" 
                role="progressbar" 
                style={{width: `${progressPercentage}%`}}
                aria-valuenow={progressPercentage} 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
            
            <div className="mb-3">
              {room.players && room.players.map(player => (
                <div 
                  key={player.id} 
                  className="badge bg-primary me-2 mb-2 p-2"
                >
                  {player.email}: {player.score} pts
                </div>
              ))}
            </div>
            
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title mb-4">{currentQuestion.question}</h4>
                <div className="d-grid gap-2">
                  {currentQuestion.options.map(option => (
                    <button
                      key={option}
                      className={`btn btn-lg ${
                        selectedAnswer 
                          ? option === currentQuestion.correctAnswer 
                            ? 'btn-success' 
                            : selectedAnswer === option 
                              ? 'btn-danger' 
                              : 'btn-outline-secondary'
                          : 'btn-outline-primary'
                      }`}
                      onClick={() => handleAnswer(option)}
                      disabled={!!selectedAnswer}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {selectedAnswer && room.creator === auth.currentUser.uid && (
              <div className="text-center">
                <button 
                  className="btn btn-primary"
                  onClick={moveToNextQuestion}
                >
                  Next Question <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            )}
          </div>
          
          <div className="card-footer">
            <div className="progress" style={{height: "4px"}}>
              <div 
                className="progress-bar bg-primary" 
                role="progressbar" 
                style={{width: `${(timeLeft / 30) * 100}%`}}
                aria-valuenow={timeLeft} 
                aria-valuemin="0" 
                aria-valuemax="30"
              ></div>
            </div>
          </div>
        </div>
    );
  }

  if (room.status === 'finished') {
    const sortedPlayers = [...(room.players || [])].sort((a, b) => b.score - a.score);
    const winner = sortedPlayers[0];
    const isWinner = winner?.id === auth.currentUser.uid;

    return (
      <div className="container py-5">
        <div className="card shadow">
          <div className="card-header bg-primary text-white text-center">
            <h2 className="mb-0">Game Over!</h2>
          </div>
          
          <div className="card-body text-center py-4">
            <div className="mb-4">
              <h3>Winner: {winner?.email}</h3>
              <div className="display-1 text-warning mb-3">
                <i className="bi bi-trophy-fill"></i>
              </div>
              <h4>Score: {winner?.score} points</h4>
            </div>
            
            <h3 className="mb-3">Leaderboard</h3>
            <div className="list-group mb-4 w-75 mx-auto">
              {sortedPlayers.map((player, index) => (
                <div 
                  key={player.id} 
                  className={`list-group-item d-flex justify-content-between align-items-center
                    ${index === 0 ? 'list-group-item-warning' : ''}
                    ${player.id === auth.currentUser.uid ? 'fw-bold' : ''}
                  `}
                >
                  <div>
                    <span className="badge bg-secondary me-2">{index + 1}</span>
                    {player.email}
                    {player.id === auth.currentUser.uid && (
                      <span className="badge bg-info ms-2">You</span>
                    )}
                  </div>
                  <span className="badge bg-primary">{player.score} pts</span>
                </div>
              ))}
            </div>
            
            {isWinner && (
              <div className="alert alert-success mb-4">
                <h4>Congratulations!</h4>
                <p>You won the game!</p>
              </div>
            )}
            
            <div className="d-flex justify-content-center gap-3">
              {room.creator === auth.currentUser.uid && (
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    const roomRef = ref(realtimeDb, `rooms/${roomId}`);
                    const resetPlayers = room.players.map(p => ({
                      ...p,
                      score: 0,
                      isReady: p.id === auth.currentUser.uid 
                    }));
                    
                    update(roomRef, {
                      status: 'waiting',
                      players: resetPlayers,
                      currentQuestionIndex: 0
                    });
                  }}
                >
                  <i className="bi bi-arrow-repeat me-2"></i>
                  Play Again
                </button>
              )}
              
              <button 
                className="btn btn-outline-secondary"
                onClick={() => router.push('/lobby')}
              >
                <i className="bi bi-house me-2"></i>
                Back to Lobby
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container text-center py-5">
      <div className="alert alert-warning">
        <h4>Waiting for game to begin</h4>
        <p>Please wait while the game is being set up...</p>
        <button 
          className="btn btn-outline-primary mt-3"
          onClick={() => router.push('/lobby')}
        >
          Back to Lobby
        </button>
      </div>
    </div>
  );
}
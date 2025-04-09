'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '../services/firebase';
import { realtimeDb } from '../services/firebase';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [scores, setScores] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    console.log("RealtimeDB Instance:", realtimeDb);
  }, []);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (!currentUser) {
        router.push('/');
        return;
      }
      
      setUser(currentUser);
      
      try {
        const scoresRef = collection(db, 'scores');
        const q = query(
          scoresRef, 
          where('userId', '==', currentUser.uid),
          orderBy('score', 'desc'),
          limit(5)
        );
        
        const querySnapshot = await getDocs(q);
        console.log('Query returned:', querySnapshot.size, 'documents');
        
        const userScores = querySnapshot.docs.map(doc => {
          const data = doc.data();
          console.log('Score document:', data);
          return {
            id: doc.id,
            ...data
          };
        });
        
        console.log('Processed scores:', userScores);
        setScores(userScores);
      } catch (error) {
        console.error('Error fetching scores', error);
      }
    });
    
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    router.push('/');
  };

  const goToLobby = () => {
    router.push('/lobby');
  };

  if (!user) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h1 className="h3 mb-0">Welcome back, <span className="text-primary">{user.email}</span>!</h1>
                    <p className="text-muted mb-0">Ready for some quiz challenges?</p>
                  </div>
                  <button 
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                  </button>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-header bg-white">
                    <h3 className="h5 mb-0">Game Modes</h3>
                  </div>
                  <div className="card-body p-4">
                    <div className="row g-4">
                      <div className="col-12">
                        <div className="card h-100 border-primary">
                          <div className="card-body text-center p-4">
                            <div className="mb-3">
                              <span className="display-6 text-primary">
                                <i className="bi bi-person"></i>
                              </span>
                            </div>
                            <h4>Single Player</h4>
                            <p className="text-muted mb-4">Challenge yourself with a solo quiz experience</p>
                            <button 
                              className="btn btn-primary w-100"
                              onClick={() => router.push('/quiz')}
                            >
                              Start Solo Quiz
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="card h-100 border-success">
                          <div className="card-body text-center p-4">
                            <div className="mb-3">
                              <span className="display-6 text-success">
                                <i className="bi bi-people"></i>
                              </span>
                            </div>
                            <h4>Multiplayer</h4>
                            <p className="text-muted mb-4">Compete with friends in real-time multiplayer quizzes</p>
                            <button 
                              className="btn btn-success w-100"
                              onClick={goToLobby}
                            >
                              Go to Lobby
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-header bg-white d-flex justify-content-between align-items-center">
                    <h3 className="h5 mb-0">Recent Scores</h3>
                    <span className="badge bg-primary rounded-pill">{scores.length}</span>
                  </div>
                  <div className="card-body p-4">
                    {scores.length === 0 ? (
                      <div className="text-center py-5">
                        <div className="mb-3">
                          <i className="bi bi-trophy text-warning" style={{ fontSize: "3rem" }}></i>
                        </div>
                        <h4>No scores yet</h4>
                        <p className="text-muted">Start playing to track your progress!</p>
                      </div>
                    ) : (
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Category</th>
                              <th>Difficulty</th>
                              <th>Score</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {scores.map(score => (
                              <tr key={score.id}>
                                <td>
                                  <span className="badge bg-light text-dark">
                                    {score.category || 'General'}
                                  </span>
                                </td>
                                <td>
                                  <span className={`badge ${
                                    score.difficulty === 'easy' ? 'bg-success' : 
                                    score.difficulty === 'medium' ? 'bg-warning' : 'bg-danger'
                                  }`}>
                                    {score.difficulty || 'Medium'}
                                  </span>
                                </td>
                                <td>
                                  <strong>{score.score}</strong>
                                </td>
                                <td>
                                  {score.timestamp ? new Date(score.timestamp.seconds * 1000).toLocaleDateString() : 'N/A'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                  <div className="card-footer bg-white text-center">
                    <button className="btn btn-sm btn-outline-primary">View All Scores</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row g-4">
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-header bg-white">
                    <h3 className="h5 mb-0">Statistics</h3>
                  </div>
                  <div className="card-body">
                    <div className="row g-4 text-center">
                      <div className="col-md-3 col-6">
                        <div className="p-3 bg-light rounded">
                          <h2 className="h3 text-primary mb-0">{scores.length}</h2>
                          <p className="text-muted mb-0">Games Played</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="p-3 bg-light rounded">
                          <h2 className="h3 text-success mb-0">
                            {scores.length > 0 ? Math.max(...scores.map(s => s.score)) : 0}
                          </h2>
                          <p className="text-muted mb-0">Highest Score</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="p-3 bg-light rounded">
                          <h2 className="h3 text-info mb-0">
                            {scores.length > 0 ? Math.round(scores.reduce((acc, s) => acc + s.score, 0) / scores.length) : 0}
                          </h2>
                          <p className="text-muted mb-0">Avg. Score</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="p-3 bg-light rounded">
                          <h2 className="h3 text-warning mb-0">0</h2>
                          <p className="text-muted mb-0">Achievements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
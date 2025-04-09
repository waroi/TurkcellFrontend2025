"use client";
import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db, auth } from '../services/firebase';

const CATEGORIES = [
  'science', 'history', 'geography', 'sports', 'popculture'
];

const DIFFICULTIES = ['easy', 'medium', 'hard'];

export default function QuizGame() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('setup');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [error, setError] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);

  const fetchQuestions = async (category, difficulty) => {
    try {
      const questionsRef = collection(db, 'questions');
      const querySnapshot = await getDocs(questionsRef);
      
      console.log('Total questions in database:', querySnapshot.docs.length);
      
      const allQuestions = querySnapshot.docs.map(doc => doc.data());
      console.log('All questions:', allQuestions);
      
      const filteredQuestions = allQuestions.filter(q => 
        q.category === category && 
        q.difficulty === difficulty
      );
      
      console.log('Filtered questions:', filteredQuestions);
      
      if (filteredQuestions.length === 0) {
        setError(`No questions found for ${category} at ${difficulty} difficulty.`);
        return;
      }
      
      const shuffledQuestions = filteredQuestions
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
      
      setQuestions(shuffledQuestions);
      setCurrentQuestion(shuffledQuestions[0]);
      setQuestionCount(1);
      setGameState('playing');
      setError(null);
      setTimeLeft(30);
    } catch (error) {
      console.error('Error fetching questions', error);
      setError('Failed to load questions. Please try again.');
    }
  };

  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 10);
    }
    const currentIndex = questions.findIndex(q => q === currentQuestion);
    if (currentIndex < questions.length - 1) {
      setCurrentQuestion(questions[currentIndex + 1]);
      setQuestionCount(prev => prev + 1);
      setTimeLeft(30); 
    } else {
      endGame();
    }
  };
  const endGame = async () => {
    setGameState('finished');
    try {
      await addDoc(collection(db, 'scores'), {
        userId: auth.currentUser.uid,
        score,
        category: selectedCategory,
        difficulty,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error saving score', error);
    }
  };
  const getDifficultyClass = (diff) => {
    switch(diff) {
      case 'easy': return 'btn-success';
      case 'medium': return 'btn-warning';
      case 'hard': return 'btn-danger';
      default: return 'btn-secondary';
    }
  };
  const getTimerClass = () => {
    if (timeLeft > 20) return 'text-success';
    if (timeLeft > 10) return 'text-warning';
    return 'text-danger';
  };

  if (gameState === 'setup') {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h2 className="text-center m-0">Trivia Quest</h2>
              </div>
              <div className="card-body">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-center mb-3">Select Category</h3>
                  <div className="d-flex justify-content-center flex-wrap">
                    {CATEGORIES.map(category => (
                      <button 
                        key={category}
                        className={`btn m-2 ${
                          selectedCategory === category 
                            ? 'btn-primary' 
                            : 'btn-outline-primary'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedCategory && (
                  <div className="mt-4">
                    <h3 className="text-center mb-3">Select Difficulty</h3>
                    <div className="d-flex justify-content-center flex-wrap">
                      {DIFFICULTIES.map(diff => (
                        <button 
                          key={diff}
                          className={`btn m-2 ${getDifficultyClass(diff)}`}
                          onClick={() => {
                            setDifficulty(diff);
                            fetchQuestions(selectedCategory, diff);
                          }}
                        >
                          {diff.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'playing' && currentQuestion) {
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h3 className={`mb-0 ${getTimerClass()}`}>
                  <i className="bi bi-clock"></i> {timeLeft}s
                </h3>
                <h3 className="mb-0">
                  Question {questionCount}/{questions.length}
                </h3>
                <h3 className="mb-0 text-warning">
                  <i className="bi bi-star-fill"></i> {score}
                </h3>
              </div>
              
              <div className="card-body">
                <div className="mb-2 text-muted small">
                  <span className="badge bg-primary me-2">{selectedCategory}</span>
                  <span className="badge bg-secondary">{difficulty}</span>
                </div>
                <h4 className="card-title mb-4">{currentQuestion.question}</h4>
                
                <div className="d-grid gap-3">
                  {currentQuestion.options.map(option => (
                    <button
                      key={option}
                      className="btn btn-lg btn-outline-primary position-relative"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="card-footer text-center">
                <div className="progress" style={{ height: '8px' }}>
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{ width: `${(timeLeft / 30) * 100}%` }}
                    aria-valuenow={timeLeft} 
                    aria-valuemin="0" 
                    aria-valuemax="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow text-center">
              <div className="card-header bg-primary text-white">
                <h2 className="m-0">Game Over!</h2>
              </div>
              <div className="card-body py-5">
                <div className="display-1 mb-3 text-primary">{score}</div>
                <h3 className="mb-4">
                  {score > 80 ? '🏆 Amazing!' : 
                   score > 50 ? '👏 Well done!' : 
                   score > 20 ? '👍 Good effort!' : '😊 Better luck next time!'}
                </h3>
                <div className="mt-4">
                  <button 
                    className="btn btn-primary btn-lg me-2"
                    onClick={() => setGameState('setup')}
                  >
                    <i className="bi bi-arrow-repeat me-2"></i>
                    Play Again
                  </button>
                  <button 
                    className="btn btn-outline-secondary btn-lg"
                    onClick={() => {
                      setSelectedCategory(null);
                      setDifficulty(null);
                      setGameState('setup');
                    }}
                  >
                    <i className="bi bi-house me-2"></i>
                    Home
                  </button>
                </div>
              </div>
              <div className="card-footer text-muted">
                Category: {selectedCategory} • Difficulty: {difficulty}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
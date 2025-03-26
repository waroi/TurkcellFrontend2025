import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc 
} from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const Quiz = () => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isEligibleForTest, setIsEligibleForTest] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [testCompleted, setTestCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await checkTestEligibility(currentUser);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const checkTestEligibility = async (currentUser) => {
    try {
      if (!currentUser?.email) return;
      {/*SELECT * FROM olumlu WHERE email = 'currentUser.email';*/}
      const olumluQuery = query(collection(db, "olumlu"), where("email", "==", currentUser.email));
      const querySnapshot = await getDocs(olumluQuery);

      if (!querySnapshot.empty && querySnapshot.docs[0].data().isAccepted) {
        setIsEligibleForTest(true);
        const questionsRef = collection(db, "questions");
        const questionSnapshot = await getDocs(questionsRef);
        setQuestions(questionSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      }
    } catch (error) {
      console.error("Eligibility Check Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = async () => {
    if (!selectedAnswer) return;
    if (selectedAnswer === questions[currentQuestionIndex].Correct) {
      setScore(prev => prev + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      await saveQuizResult();
      setTestCompleted(true);
    }
    setSelectedAnswer("");
  };

  const saveQuizResult = async () => {
    console.log(user);
    if (!user) return;
    const status = score >= 4 ? "Geçti" : "Kaldı";

    try {
      await addDoc(collection(db, "quizResults"), {
        email: user.email,
        score: score,
        status: status,
      });
    } catch (error) {
      console.error("Error saving quiz result:", error);
    }
  };

  if (isLoading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status"></div>
    </div>;
  }

  if (!isEligibleForTest) {
    return <div className="alert alert-warning text-center">You do not have any tests available</div>;
  }

  if (testCompleted) {
    return <div className="alert alert-success text-center">
      <h2>Test Completed!</h2>
      <p>Your Score: {score} / {questions.length}</p>
    </div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="card-body">
          <h5 className="card-title text-primary">Question {currentQuestionIndex + 1} of {questions.length}</h5>
          <p className="card-text fw-bold">{currentQuestion.question}</p>
          <div className="list-group mb-4">
            {["A", "B", "C", "D"].map(key => (
              <label key={key} className={`list-group-item ${selectedAnswer === currentQuestion[key] ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="answer"
                  className="form-check-input me-2"
                  value={currentQuestion[key]}
                  checked={selectedAnswer === currentQuestion[key]}
                  onChange={() => setSelectedAnswer(currentQuestion[key])}
                />
                {currentQuestion[key]}
              </label>
            ))}
          </div>
          <button
            onClick={handleAnswer}
            className={`btn btn-${selectedAnswer ? 'primary' : 'secondary'} w-100`}
            disabled={!selectedAnswer}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Submit Test'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

import React, { useState, useEffect } from "react";
import questionsData from "../../data/questions.json";
import { useParams, useNavigate } from "react-router";
import { testApplicationStatus } from "../firebase/firebaseUpload";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const OnlineTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [testCompleted, setTestCompleted] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserStatus = async () => {
      if (!userId) return;
      const applicationRef = doc(db, "jobApplications", userId);
      const applicationSnap = await getDoc(applicationRef);

      if (applicationSnap.exists()) {
        const status = applicationSnap.data().status;
        if (status === "Başarılı" || status === "Başarısız") {
          setTestCompleted(status);
        }
      }
      setLoading(false);
    };

    checkUserStatus();
  }, [userId]);

  useEffect(() => {
    if (testCompleted || loading) return;
    const shuffledQuestions = [...questionsData].sort(
      () => 0.5 - Math.random()
    );
    setQuestions(shuffledQuestions.slice(0, 5));
  }, [testCompleted, loading]);

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correct_answer) {
        correctCount++;
      }
    });

    setCorrectAnswers(correctCount);
    const incorrectCount = questions.length - correctCount;

    if (correctCount >= 4) {
      testApplicationStatus(userId, "Başarılı");
      setTestCompleted("Başarılı");
    } else if (incorrectCount > 1) {
      testApplicationStatus(userId, "Başarısız");
      setTestCompleted("Başarısız");
    }
    setShowResults(true);
  };

  if (loading) {
    return (
      <div className="container mt-4 text-center fullscreen">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
        <p className="mt-2">Lütfen bekleyin, test hazırlanıyor...</p>
      </div>
    );
  }

  if (testCompleted) {
    return (
      <div className="container mt-4 fullscreen ">
        <div className="card shadow p-4 text-center ">
          <h1 className="text-danger">Tekrar giriş yapamazsınız!</h1>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 fullscreen">
      <div className="card shadow p-4 test-card">
        <h1 className="text-center text-primary">Teknik Test</h1>
        {!showResults ? (
          questions.length > 0 && (
            <div className="mb-3 p-3 border rounded bg-light">
              <p className="fw-bold">
                {questions[currentQuestionIndex].question}
              </p>
              <div className="form-check">
                {Object.keys(questions[currentQuestionIndex].options).map(
                  (option) => (
                    <div key={option} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id={`${questions[currentQuestionIndex].id}_${option}`}
                        name={`question_${questions[currentQuestionIndex].id}`}
                        value={option}
                        checked={
                          answers[questions[currentQuestionIndex].id] === option
                        }
                        onChange={() =>
                          handleAnswerChange(
                            questions[currentQuestionIndex].id,
                            option
                          )
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${questions[currentQuestionIndex].id}_${option}`}
                      >
                        {questions[currentQuestionIndex].options[option]}
                      </label>
                    </div>
                  )
                )}
              </div>
              <div className="text-center mt-3">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleNextQuestion}
                >
                  {currentQuestionIndex < questions.length - 1
                    ? "Sonraki Soru"
                    : "Testi Bitir"}
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="alert alert-success mt-4 text-center">
            <p className="fs-5">
              Tebrikler! Testi Tamamladınız Sekmeyi Kapatabilirsiniz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineTest;

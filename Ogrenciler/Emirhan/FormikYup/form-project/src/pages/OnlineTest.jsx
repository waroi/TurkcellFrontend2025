import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  testApplicationStatus,
  fetchQuestionType,
} from "../firebase/firebaseUpload";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import questionsEasy from "../../data/questionsEasy.json";
import questionsMiddle from "../../data/questionsMiddle.json";
import questionsHard from "../../data/questionsHard.json";

const OnlineTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [testCompleted, setTestCompleted] = useState(null);
  const [loading, setLoading] = useState(true);
  const [questionType, setQuestionType] = useState(null);

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
    const fetchData = async () => {
      console.log(userId);
      const data = await fetchQuestionType(userId);
      console.log("çekilen data", data);
      if (Array.isArray(data) && data.length > 0) {
        setQuestionType(data[0]);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    if (!questionType) return;

    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

    const fetchQuestions = () => {
      const shuffledEasy = shuffleArray([...questionsEasy]).slice(
        0,
        Number(questionType.easy)
      );
      const shuffledMiddle = shuffleArray([...questionsMiddle]).slice(
        0,
        Number(questionType.middle)
      );
      const shuffledHard = shuffleArray([...questionsHard]).slice(
        0,
        Number(questionType.hard)
      );

      return shuffleArray([
        ...shuffledEasy,
        ...shuffledMiddle,
        ...shuffledHard,
      ]);
    };

    setQuestions(fetchQuestions());
    setLoading(false);
  }, [questionType]);

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
      setShowResults(true);
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

    handleTestCompletion(correctCount);
  };

  const handleTestCompletion = (correctCount) => {
    const result = correctCount / questions.length > 0.7;
    testApplicationStatus(userId, result);
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
      <div className="container mt-4 fullscreen">
        <div className="card shadow p-4 text-center">
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
              Tebrikler! Testi Tamamladınız. Sekmeyi kapatabilirsiniz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineTest;

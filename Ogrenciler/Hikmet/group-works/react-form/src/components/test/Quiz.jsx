import React, { useState, useEffect } from "react";
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const Quiz = () => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isEligibleForTest, setIsEligibleForTest] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [testCompleted, setTestCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [testAttemptStatus, setTestAttemptStatus] = useState(null);

  // Authentication and Test Eligibility Check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          setUser(currentUser);
          await checkTestEligibilityAndAttemptStatus(currentUser);
        } catch (error) {
          console.error("Authentication error:", error);
          setErrorMessage("Authentication failed: " + error.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Check Test Eligibility and Previous Attempts
  const checkTestEligibilityAndAttemptStatus = async (currentUser) => {
    const olumluQuery = query(
      collection(db, "olumlu"),
      where("email", "==", currentUser.email)
    );

    const olumluSnapshot = await getDocs(olumluQuery);

    if (!olumluSnapshot.empty) {
      const olumluData = olumluSnapshot.docs[0].data();

      if (olumluData.isAccepted) {
        const testStatusRef = doc(db, "test_attempts", currentUser.uid);
        const testStatusSnap = await getDoc(testStatusRef);

        // Check if user has already attempted or completed the test
        if (testStatusSnap.exists()) {
          const testStatus = testStatusSnap.data();

          if (testStatus.completed) {
            setErrorMessage("You have already completed the test.");
            setTestAttemptStatus(testStatus);
            return;
          }
        }

        // If no previous test or incomplete test, start new test
        await fetchQuestions();
        setIsEligibleForTest(true);
      } else {
        setErrorMessage("Test access not approved.");
      }
    } else {
      setErrorMessage("No test access found.");
    }
  };

  // Fetch and Validate Questions
  const fetchQuestions = async () => {
    try {
      const questionsRef = collection(db, "questions");
      const questionSnapshot = await getDocs(questionsRef);

      const allQuestions = questionSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const validQuestions = allQuestions.filter(isValidQuestion);

      if (validQuestions.length === 0) {
        setErrorMessage("No valid questions found in the database.");
        return;
      }

      const randomQuestions = selectRandomQuestions(validQuestions);

      if (randomQuestions.length === 0) {
        setErrorMessage(
          "Could not select any questions. Please check database."
        );
        return;
      }

      setQuestions(allQuestions);
      setSelectedQuestions(randomQuestions);
    } catch (error) {
      console.error("Question Fetching Error:", error);
      setErrorMessage("Failed to fetch questions: " + error.message);
    }
  };

  // Validate Individual Questions
  const isValidQuestion = (question) => {
    return (
      question &&
      question.question &&
      question.Correct &&
      question.A &&
      question.B &&
      question.C &&
      (question.Level || question.level)
    );
  };

  // Select Random Questions with Balanced Difficulty
  const selectRandomQuestions = (questions) => {
    const categorizeQuestions = (questions) => {
      const easy = questions.filter(
        (q) =>
          q.Level?.toLowerCase() === "easy" || q.level?.toLowerCase() === "easy"
      );
      const medium = questions.filter(
        (q) =>
          q.Level?.toLowerCase() === "medium" ||
          q.level?.toLowerCase() === "medium"
      );
      const hard = questions.filter(
        (q) =>
          q.Level?.toLowerCase() === "hard" || q.level?.toLowerCase() === "hard"
      );

      return { easy, medium, hard };
    };

    const { easy, medium, hard } = categorizeQuestions(questions);

    const getRandomQuestions = (array, desiredCount) => {
      if (array.length === 0) return [];
      if (array.length <= desiredCount) return array;

      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled.slice(0, desiredCount);
    };

    const selectedQuestions = [
      ...getRandomQuestions(easy, Math.max(3, Math.ceil(easy.length * 0.3))),
      ...getRandomQuestions(
        medium,
        Math.max(3, Math.ceil(medium.length * 0.3))
      ),
      ...getRandomQuestions(hard, Math.max(4, Math.ceil(hard.length * 0.3))),
    ];

    return selectedQuestions;
  };

  // Handle Answer Selection and Quiz Progress
  const handleAnswer = async () => {
    if (!selectedAnswer) return;

    if (
      selectedQuestions[currentQuestionIndex] &&
      selectedAnswer === selectedQuestions[currentQuestionIndex].Correct
    ) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      await saveQuizResult();
      setTestCompleted(true);
    }
    setSelectedAnswer("");
  };

  // Save Quiz Result and Mark Test as Completed
  const saveQuizResult = async () => {
    if (!user) return;

    try {
      await addDoc(collection(db, "quiz_results"), {
        userId: user.uid,
        email: user.email,
        score: score,
        totalQuestions: selectedQuestions.length,
        timestamp: new Date(),
      });

      const testStatusRef = doc(db, "test_attempts", user.uid);
      await setDoc(testStatusRef, {
        userId: user.uid,
        email: user.email,
        attempted: true,
        completed: true,
        score: score,
        totalQuestions: selectedQuestions.length,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error saving quiz result:", error);
    }
  };

  // Render Quiz Content
  const renderQuizContent = () => {
    if (isLoading) {
      return <div className="text-center">Loading...</div>;
    }

    // Previous Test Attempt Check
    if (testAttemptStatus) {
      return (
        <div className="alert alert-warning text-center">
          {errorMessage}
          {testAttemptStatus.completed
            ? ` Your previous test score was: ${testAttemptStatus.score} / ${testAttemptStatus.totalQuestions}`
            : " You cannot start a new test."}
        </div>
      );
    }

    // Test Eligibility Check
    if (!isEligibleForTest) {
      return (
        <div className="alert alert-warning text-center">
          {errorMessage || "You are not eligible for the test."}
        </div>
      );
    }

    // No Questions Available
    if (selectedQuestions.length === 0) {
      return (
        <div className="alert alert-danger text-center">
          {errorMessage ||
            "No questions could be loaded. Please contact support."}
        </div>
      );
    }

    // Test Completed
    if (testCompleted) {
      return (
        <div className="text-center">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {selectedQuestions.length}
          </p>
        </div>
      );
    }

    // Active Quiz Rendering
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    return (
      <div className="quiz-container">
        <h3>Question {currentQuestionIndex + 1}</h3>
        <p>{currentQuestion.question}</p>
        <div className="answer-options">
          {["A", "B", "C", "D"].map((option) => (
            <button
              key={option}
              className={`btn ${
                selectedAnswer === currentQuestion[option]
                  ? "btn-primary"
                  : "btn-outline-secondary"
              } m-2`}
              onClick={() => setSelectedAnswer(currentQuestion[option])}
            >
              {currentQuestion[option]}
            </button>
          ))}
        </div>
        <button
          className="btn btn-success mt-3"
          onClick={handleAnswer}
          disabled={!selectedAnswer}
        >
          {currentQuestionIndex < selectedQuestions.length - 1
            ? "Next Question"
            : "Finish Quiz"}
        </button>
      </div>
    );
  };

  return <div className="container mt-5">{renderQuizContent()}</div>;
};

export default Quiz;

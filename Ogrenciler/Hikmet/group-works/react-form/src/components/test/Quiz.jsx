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
  const [quizSettings, setQuizSettings] = useState(null);

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

  const fetchAdminSettings = async () => {
    try {
      const settingsRef = doc(db, "quiz_settings", "default");
      const settingsSnap = await getDoc(settingsRef);
  
      if (settingsSnap.exists()) {
        const fetchedSettings = settingsSnap.data();
  
        const validatedSettings = {
          easyCount: typeof fetchedSettings.easyCount === 'number' 
            ? fetchedSettings.easyCount 
            : 5,  
          mediumCount: typeof fetchedSettings.mediumCount === 'number' 
            ? fetchedSettings.mediumCount 
            : 3,  
          hardCount: typeof fetchedSettings.hardCount === 'number' 
            ? fetchedSettings.hardCount 
            : 2 
        };
  
        console.log("Validated Quiz Settings:", validatedSettings);
  
        return validatedSettings;
      } else {
        throw new Error("No quiz settings found in Firestore");
      }
    } catch (error) {
      console.error("Error fetching admin settings:", error);
      
      return {
        easyCount: 5,
        mediumCount: 3,
        hardCount: 2
      };
    }
  };

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

  const categorizeQuestions = (questions) => {
    const categorized = {
      easy: [],
      medium: [],
      hard: []
    };

    questions.forEach(question => {
      const level = (question.level || question.Level || '').toLowerCase().trim();
      switch(level) {
        case 'easy':
          categorized.easy.push(question);
          break;
        case 'medium':
          categorized.medium.push(question);
          break;
        case 'hard':
          categorized.hard.push(question);
          break;
        default:
          console.warn(`Question with unrecognized difficulty: ${question.question}`);
      }
    });

    return categorized;
  };

  const getRandomQuestions = (array, count) => {
    if (array.length === 0) return [];
    if (array.length <= count) return array;

    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const selectRandomQuestions = (questions, settings) => {
    const { easy, medium, hard } = categorizeQuestions(questions);

    const safeEasyCount = Math.min(settings.easyCount, easy.length);
    const safeMediumCount = Math.min(settings.mediumCount, medium.length);
    const safeHardCount = Math.min(settings.hardCount, hard.length);

    const selectedQuestions = [
      ...getRandomQuestions(easy, safeEasyCount),
      ...getRandomQuestions(medium, safeMediumCount),
      ...getRandomQuestions(hard, safeHardCount)
    ];

    console.log("Question Selection Breakdown:", {
      totalQuestions: selectedQuestions.length,
      easyQuestions: selectedQuestions.filter(q => 
        (q.level || q.Level || '').toLowerCase() === 'easy'
      ).length,
      mediumQuestions: selectedQuestions.filter(q => 
        (q.level || q.Level || '').toLowerCase() === 'medium'
      ).length,
      hardQuestions: selectedQuestions.filter(q => 
        (q.level || q.Level || '').toLowerCase() === 'hard'
      ).length
    });

    return selectedQuestions;
  };

  const isValidQuestion = (question) => {
    return (
      question &&
      question.question &&
      question.Correct &&
      question.A &&
      question.B &&
      question.C &&
      question.D &&
      (question.Level || question.level)
    );
  };

  const fetchQuestions = async () => {
    try {
      const settings = await fetchAdminSettings();
      
      if (!settings) {
        setErrorMessage("Failed to load quiz settings");
        return;
      }

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

      const randomQuestions = selectRandomQuestions(validQuestions, settings);

      setQuestions(validQuestions);
      setSelectedQuestions(randomQuestions);
      setQuizSettings(settings);
    } catch (error) {
      console.error("Question Fetching Error:", error);
      setErrorMessage("Failed to fetch questions: " + error.message);
    }
  };

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

  const saveQuizResult = async () => {
    if (!user) return;

    try {
        console.log("Saving quiz result for:", user.email);
        console.log("Score being saved:", score);
        console.log("Total Questions:", selectedQuestions.length);

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

        console.log("Quiz result saved successfully!");

    } catch (error) {
        console.error("Error saving quiz result:", error);
    }
};


  const renderQuizContent = () => {
    if (isLoading) {
      return <div className="text-center">Loading...</div>;
    }

    if (testAttemptStatus) {
      return (
        <div className="alert alert-warning text-center">
          {errorMessage}
          {testAttemptStatus.completed
            ? `Your previous test score was: ${testAttemptStatus.score} / ${testAttemptStatus.totalQuestions}`
            : " You cannot start a new test."}
        </div>
      );
    }

    if (!isEligibleForTest) {
      return (
        <div className="alert alert-warning text-center">
          {errorMessage || "You are not eligible for the test."}
        </div>
      );
    }

    if (selectedQuestions.length === 0) {
      return (
        <div className="alert alert-danger text-center">
          {errorMessage ||
            "No questions could be loaded. Please contact support."}
        </div>
      );
    }

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

    const currentQuestion = selectedQuestions[currentQuestionIndex];

    return (
      <div className="quiz-container">
        <h3>Question {currentQuestionIndex + 1}</h3>
        <p>{currentQuestion.question}</p>
        <div className="answer-options">
          {["A", "B", "C", "D"].map((option) => (
            <button
              key={option}
              className={`btn ${selectedAnswer === currentQuestion[option]
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
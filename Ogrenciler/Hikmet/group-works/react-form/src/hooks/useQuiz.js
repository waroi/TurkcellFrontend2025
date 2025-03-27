import { useState, useEffect } from "react";
import { 
  fetchQuizQuestions, 
  fetchQuizSettings, 
  saveQuizResult,
  selectRandomQuestions,
  isValidQuestion,
  checkUserTestEligibility,
  getUserTestStatus
} from "../services/quizService";

export const useQuiz = (user) => {
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

  // Check if user is eligible for the test and fetch their test status
  useEffect(() => {
    const checkEligibilityAndStatus = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        
        // First check if user has already taken the test
        const testStatus = await getUserTestStatus(user.uid);
        
        if (testStatus) {
          setTestAttemptStatus(testStatus);
          
          if (testStatus.completed) {
            setErrorMessage("You have already completed the test.");
            setIsLoading(false);
            return;
          }
        }
        
        // Then check if they are eligible
        const { isEligible, message } = await checkUserTestEligibility(user.email);
        
        if (isEligible) {
          await initializeQuiz();
          setIsEligibleForTest(true);
        } else {
          setErrorMessage(message || "You are not eligible for the test.");
        }
      } catch (error) {
        console.error("Error checking test eligibility:", error);
        setErrorMessage("Error checking test eligibility.");
      } finally {
        setIsLoading(false);
      }
    };

    checkEligibilityAndStatus();
  }, [user]);

  // Initialize the quiz with questions and settings
  const initializeQuiz = async () => {
    try {
      const settings = await fetchQuizSettings();
      
      if (!settings) {
        setErrorMessage("Failed to load quiz settings");
        return;
      }

      const allQuestions = await fetchQuizQuestions();
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

  // Handle answering a question
  const handleAnswer = async () => {
    if (!selectedAnswer) return;

    // Check if the answer is correct
    if (
      selectedQuestions[currentQuestionIndex] &&
      selectedAnswer === selectedQuestions[currentQuestionIndex].Correct
    ) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or complete the quiz
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer("");
    } else {
      await finishQuiz();
    }
  };

  // Finish the quiz and save the result
  const finishQuiz = async () => {
    if (!user) return;

    try {
      await saveQuizResult(
        user.uid,
        user.email,
        score,
        selectedQuestions.length
      );
      setTestCompleted(true);
    } catch (error) {
      console.error("Error saving quiz result:", error);
      setErrorMessage("Failed to save quiz result.");
    }
  };

  return {
    currentQuestion: selectedQuestions[currentQuestionIndex],
    currentQuestionIndex,
    totalQuestions: selectedQuestions.length,
    selectedAnswer,
    setSelectedAnswer,
    handleAnswer,
    isEligibleForTest,
    isLoading,
    testCompleted,
    score,
    errorMessage,
    testAttemptStatus
  };
};

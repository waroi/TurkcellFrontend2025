import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const QuestionManagementForm = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [questionCounts, setQuestionCounts] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsRef = collection(db, "questions");
        const snapshot = await getDocs(questionsRef);
        const questions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllQuestions(questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const toggleQuestionSelection = (question) => {
    const difficulty = (question.Level || question.level).toLowerCase();

    if (!selectedQuestions.includes(question)) {
      if (difficulty === "easy" && questionCounts.easy >= 4) {
        alert("Maximum 4 easy questions allowed");
        return;
      }
      if (difficulty === "medium" && questionCounts.medium >= 4) {
        alert("Maximum 4 medium questions allowed");
        return;
      }
      if (difficulty === "hard" && questionCounts.hard >= 2) {
        alert("Maximum 2 hard questions allowed");
        return;
      }

      setSelectedQuestions([...selectedQuestions, question]);
      setQuestionCounts((prev) => ({
        ...prev,
        [difficulty]: prev[difficulty] + 1,
      }));
    } else {
      setSelectedQuestions(
        selectedQuestions.filter((q) => q.id !== question.id)
      );
      setQuestionCounts((prev) => ({
        ...prev,
        [difficulty]: prev[difficulty] - 1,
      }));
    }
  };

  const createQuizSet = async () => {
    if (selectedQuestions.length !== 10) {
      alert("You must select exactly 10 questions (4 easy, 4 medium, 2 hard)");
      return;
    }

    try {
      const quizSetRef = collection(db, "quiz_sets");
      await addDoc(quizSetRef, {
        questions: selectedQuestions.map((q) => q.id),
        createdAt: new Date(),
        totalQuestions: selectedQuestions.length,
      });

      alert("Quiz set created successfully!");

      setSelectedQuestions([]);
      setQuestionCounts({ easy: 0, medium: 0, hard: 0 });
    } catch (error) {
      console.error("Error creating quiz set:", error);
      alert("Failed to create quiz set");
    }
  };

  const categorizeQuestions = (questions) => {
    return {
      easy: questions.filter(
        (q) => (q.Level || q.level)?.toLowerCase() === "easy"
      ),
      medium: questions.filter(
        (q) => (q.Level || q.level)?.toLowerCase() === "medium"
      ),
      hard: questions.filter(
        (q) => (q.Level || q.level)?.toLowerCase() === "hard"
      ),
    };
  };

  const categorizedQuestions = categorizeQuestions(allQuestions);

  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Quiz Question Management</h2>

      <div className="alert alert-info">
        Selection Limits: 4 Easy Questions, 4 Medium Questions, 2 Hard Questions
        (Current: Easy {questionCounts.easy}/4, Medium {questionCounts.medium}
        /4, Hard {questionCounts.hard}/2)
      </div>

      <div className="row">
        {Object.entries(categorizedQuestions).map(([difficulty, questions]) => (
          <div key={difficulty} className="col-md-4 mb-4">
            <div
              className={`card border-${
                difficulty === "easy"
                  ? "success"
                  : difficulty === "medium"
                  ? "warning"
                  : "danger"
              }`}
            >
              <div
                className={`card-header bg-${
                  difficulty === "easy"
                    ? "success"
                    : difficulty === "medium"
                    ? "warning"
                    : "danger"
                } text-white`}
              >
                {difficulty.toUpperCase()} Questions
              </div>
              <div className="card-body">
                {questions.map((question) => (
                  <div
                    key={question.id}
                    className={`card mb-2 ${
                      selectedQuestions.includes(question)
                        ? "border-primary"
                        : ""
                    }`}
                    onClick={() => toggleQuestionSelection(question)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body">
                      <p className="card-text">{question.question}</p>
                      <div className="d-flex justify-content-between">
                        <small className="text-muted">
                          Difficulty: {difficulty}
                        </small>
                        {selectedQuestions.includes(question) && (
                          <span className="badge bg-primary">Selected</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={createQuizSet}
          disabled={selectedQuestions.length !== 10}
        >
          Create Quiz Set (Selected: {selectedQuestions.length}/10)
        </button>
      </div>
    </div>
  );
};

export default QuestionManagementForm;

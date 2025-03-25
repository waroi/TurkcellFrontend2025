import React, { useState, useEffect } from "react";
import questionsData from "../../data/questions.json";

const OnlineTest = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const calculateResults = () => {
    let correctCount = 0;

    questions.forEach((question) => {
      if (answers[question.id] === question.correct_answer) {
        correctCount++;
      }
    });

    setCorrectAnswers(correctCount);
    setShowResults(true);
  };

  return (
    <div>
      <h1>Teknik Test</h1>
      <form>
        {questions.map((question) => (
          <div key={question.id} style={{ marginBottom: "20px" }}>
            <p>{question.question}</p>
            <div>
              {Object.keys(question.options).map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    id={option}
                    name={`question_${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                  />
                  <label htmlFor={option}>{question.options[option]}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        {!showResults && (
          <button type="button" onClick={calculateResults}>
            Sonuçları Göster
          </button>
        )}
      </form>

      {showResults && (
        <div>
          <h2>Sonuçlar</h2>
          <p>Doğru Cevaplar: {correctAnswers} / 5</p>
        </div>
      )}
    </div>
  );
};

export default OnlineTest;

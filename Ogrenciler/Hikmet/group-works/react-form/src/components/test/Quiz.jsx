import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Quiz = () => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "questions"));
        if (!querySnapshot.empty) {
          const firstQuestion = querySnapshot.docs[0].data();
          setQuestionData(firstQuestion);
        }
      } catch (error) {
        console.error("Soru çekme hatası:", error);
      }
    };

    fetchQuestion();
  }, []);

  const handleAnswer = () => {
    if (!selectedAnswer) {
      alert("Lütfen bir seçenek seçin!");
      return;
    }
    if (selectedAnswer === questionData.Correct) {
      setResult("✅ Doğru cevap!");
    } else {
      setResult("❌ Yanlış cevap!");
    }
  };

  if (!questionData) return <p>Yükleniyor...</p>;

  return (
    <div className="quiz-container">
      <h3>{questionData.question}</h3>
      <div className="options">
        {["A", "B", "C", "D"].map((key) => (
          <label key={key}>
            <input
              type="radio"
              name="answer"
              value={questionData[key]}
              checked={selectedAnswer === questionData[key]}
              onChange={() => setSelectedAnswer(questionData[key])}
            />
            {questionData[key]}
          </label>
        ))}
      </div>
      <button onClick={handleAnswer}>Cevabı Kontrol Et</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Quiz;

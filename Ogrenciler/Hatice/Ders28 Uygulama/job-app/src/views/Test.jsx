import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TechnicalTest = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const snapshot = await getDocs(collection(db, "technicalTests"));
      const questionList = snapshot.docs.map(doc => {
        const data = doc.data();

        try {
          return {
            id: doc.id,
            ...data,
            options: Array.isArray(data.options) ? data.options : JSON.parse(data.options),
          };
        } catch (error) {
          console.error("JSON parsing error for options", error);
          return {
            id: doc.id,
            ...data,
            options: [],
          };
        }
      });

      const randomQuestions = questionList.sort(() => 0.5 - Math.random()).slice(0, 5);
      setQuestions(randomQuestions);
    };

    fetchQuestions();
  }, []);

  const handleChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    let score = 0;
    let wrong = 0;

    questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (userAnswer === question.correctAnswer) {
        score += 1;
      } else {
        wrong += 1;
      }
    });

    console.log("Doğru:", score, "Yanlış:", wrong);

    if (wrong > 1) {
      alert("Test başarısız, yeterli puan alamadınız.");
      return navigate("/result?status=failed");
    }

    const successRate = (score / questions.length) * 100;
    if (successRate >= 80) {
      alert("Tebrikler, testi geçtiniz!");
      navigate("/result?status=success");
    } else {
      alert("Test başarısız, yeterli puan alamadınız.");
      navigate("/result?status=failed");
    }
  };

  if (questions.length === 0) return <p>Yükleniyor...</p>;

  return (
    <div className="p-4">
      <h2>Teknik Test</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {questions.map((question, qIndex) => (
          <div key={question.id} className="mb-4 border p-3 rounded shadow-sm">
            <p><strong>{qIndex + 1}.</strong> {question.question}</p>
            {question.options.map((option, index) => (
              <div key={index} className="form-check">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleChange(question.id, option)}
                  className="form-check-input"
                />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Testi Bitir ve Gönder</button>
      </form>
    </div>
  );
};

export default TechnicalTest;

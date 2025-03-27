import { useEffect, useState } from "react";
import {
  createQuestionDistribution,
  updateApplicationStatus,
} from "../firebase/firebaseUpload";
import Navbar from "../components/Navbar";

function QuestionType() {
  const [ranges, setRanges] = useState({
    easy: 10,
    middle: 10,
    hard: 10,
  });

  const [total, setTotal] = useState(null);

  useEffect(() => {
    setTotal(Number(ranges.easy) + Number(ranges.middle) + Number(ranges.hard));
  }, [ranges.easy, ranges.middle, ranges.hard]);

  const handleChange = (name, value) => {
    setRanges((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await createQuestionDistribution({ id, ...ranges, area: "front" });
    await updateApplicationStatus(
      application.id,
      "Test Aşamasında",
      application.email,
      application.name
    );
  };

  return (

    <div className="container form-container py-10">
      <Navbar />
      <div>
        <h2 className="text-center mb-4">Test Gönder</h2>
        <label>
          Kolay
          <span className="custom-badge">{ranges.easy}</span>
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="25"
          step="1"
          value={ranges.easy}
          onChange={(e) => handleChange("easy", e.target.value)}
        />
      </div>

      <div>
        <label>
          Orta <span className="custom-badge">{ranges.middle}</span>
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="25"
          step="1"
          value={ranges.middle}
          onChange={(e) => handleChange("middle", e.target.value)}
        />
      </div>

      <div>
        <label>
          Zor <span className="custom-badge">{ranges.hard}</span>
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="25"
          step="1"
          value={ranges.hard}
          onChange={(e) => handleChange("hard", e.target.value)}
        />
      </div>
      <div>Toplam Soru Sayısı: {total}</div>

      <div className="d-flex gap-2 justify-content-end mt-4">
        <button className="btn btn-secondary">Geri</button>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Testi Gönder
        </button>

      </div>
    </div>
  );
}

export default QuestionType;

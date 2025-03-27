import { useEffect, useState } from "react";
import {
  createQuestionDistribution,
  updateApplicationStatus,
  fetchApplicationById,
} from "../firebase/firebaseUpload";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router";


function QuestionType() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [application, setApplication] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApplicationById(id);
      setApplication(data);
    };

    fetchData();
  }, [id]);

  const handleSubmit = async () => {
    try {
      await createQuestionDistribution({ id, ...ranges, area: "front" });
      await updateApplicationStatus(
        application.id,
        "Test Aşamasında",
        application.email,
        application.name
      );

      alert("Başarıyla gönderildi!");
      navigate("/applications");
    } catch (error) {
      console.error("Hata oluştu:", error);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
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
        <a href="/applications" className="btn btn-secondary" >Geri</a>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Testi Gönder
        </button>

      </div>
    </div>
  );
}

export default QuestionType;

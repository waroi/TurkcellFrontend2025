import { useState } from "react";

import Button from "#/atoms/Button";

import { setDifficulty } from "@/services/firebase";
import useStore from "@/store/useStore";

export default function ApplicationQuestion({ id, difficulty }) {
  const { addToast } = useStore();

  const [easy, setEasy] = useState(difficulty[0]);
  const [medium, setMedium] = useState(difficulty[1]);
  const [hard, setHard] = useState(difficulty[2]);

  function saveDifficulty() {
    setDifficulty(id, [easy, medium, hard]).then(() => {
      addToast(
        "Başvurunun sınav soru dağılımı başarıyla değiştirilmiştir.",
        "success"
      );
    });
  }

  return (
    <>
      <p className="card-text">Sınav Soru Dağılımı</p>
      <div className="px-1 w-50 mb-3">
        <label htmlFor={`easy-${id}`} className="form-label">
          Kolay: {easy}
        </label>
        <input
          type="range"
          className="form-range"
          min="1"
          max="10"
          id={`easy-${id}`}
          value={easy}
          onChange={(event) => setEasy(parseInt(event.target.value))}
        />
      </div>
      <div className="px-1 w-50 mb-3">
        <label htmlFor={`medium-${id}`} className="form-label">
          Orta: {medium}
        </label>
        <input
          type="range"
          className="form-range"
          min="1"
          max="10"
          id={`medium-${id}`}
          value={medium}
          onChange={(event) => setMedium(parseInt(event.target.value))}
        />
      </div>
      <div className="px-1 w-50 mb-3">
        <label htmlFor={`hard-${id}`} className="form-label">
          Zor: {hard}
        </label>
        <input
          type="range"
          className="form-range"
          min="1"
          max="10"
          id={`hard-${id}`}
          value={hard}
          onChange={(event) => setHard(parseInt(event.target.value))}
        />
      </div>
      <Button onClick={saveDifficulty}>Kaydet</Button>
    </>
  );
}

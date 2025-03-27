import { useState } from "react";

import Button from "#/atoms/Button";

import { setDifficulty } from "@/services/firebase";
import useStore from "@/store/useStore";
import Range from "#/atoms/Range";

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
        <Range
          name={`easy-${id}`}
          value={easy}
          onChange={(event) => setEasy(parseInt(event.target.value))}
        >
          Kolay: {easy}
        </Range>
      </div>
      <div className="px-1 w-50 mb-3">
        <Range
          name={`medium-${id}`}
          value={medium}
          onChange={(event) => setMedium(parseInt(event.target.value))}
        >
          Orta: {medium}
        </Range>
      </div>
      <div className="px-1 w-50 mb-3">
        <Range
          name={`hard-${id}`}
          value={hard}
          onChange={(event) => setHard(parseInt(event.target.value))}
        >
          Zor: {hard}
        </Range>
      </div>
      <Button onClick={saveDifficulty}>Kaydet</Button>
    </>
  );
}

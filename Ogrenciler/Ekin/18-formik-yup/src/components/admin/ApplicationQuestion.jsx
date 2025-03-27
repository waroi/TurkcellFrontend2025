import { useEffect, useState } from "react";

import Button from "#/atoms/Button";

import "#/admin/CSS.css";

import { setDifficulty } from "@/services/firebase";
import useStore from "@/store/useStore";

const amount = Array.from({ length: 10 }, (_, index) => index + 1);

export default function ApplicationQuestion({ id }) {
  const { addToast } = useStore();

  const [easy, setEasy] = useState(5);
  const [medium, setMedium] = useState(3);
  const [hard, setHard] = useState(2);

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
      <div>
        <select
          value={easy}
          onChange={(event) => setEasy(parseInt(event.target.value))}
        >
          {amount.map((n) => (
            <option key={n} value={n}>
              {"Kolay " + n}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          value={medium}
          onChange={(event) => setMedium(parseInt(event.target.value))}
        >
          {amount.map((n) => (
            <option key={n} value={n}>
              {"Orta " + n}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          value={hard}
          onChange={(event) => setHard(parseInt(event.target.value))}
        >
          {amount.map((n) => (
            <option key={n} value={n}>
              {"Zor " + n}
            </option>
          ))}
        </select>
      </div>
      <Button onClick={saveDifficulty}>Kaydet</Button>
      {/* <div class="range_container">
        <div class="sliders_control">
          <input id="fromSlider" type="range" value="10" min="0" max={amount} />
          <input id="toSlider" type="range" value="30" min="0" max={amount} />
        </div>
        <div class="form_control">
          <div class="form_control_container">
            <div class="form_control_container__time">Min</div>
            <input
              class="form_control_container__time__input"
              type="number"
              id="fromInput"
              value="10"
              min="0"
              max="100"
            />
          </div>
          <div class="form_control_container">
            <div class="form_control_container__time">Max</div>
            <input
              class="form_control_container__time__input"
              type="number"
              id="toInput"
              value="30"
              min="0"
              max="100"
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

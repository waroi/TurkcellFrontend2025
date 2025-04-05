import React from "react";
import {useTwinRadioStore} from "../Store/ComCom"

function TwinRadioButtons() {
  const {radioValue, toggleRadioValue} = useTwinRadioStore()

  return (
    <fieldset aria-label="Choose a memory option">
      <div className="mt-4 flex justify-center items-center gap-5">
        {["Süreli", "Süresiz"].map((option) => (
          <label
            key={option}
            className={`px-4 py-1 cursor-pointer bg-neutral-700 rounded-full ${
              radioValue === option ? "border text-wihte border-lime-500" : "opacity-50"
            }`}
          >
            <input
              type="radio"
              name="memory-option"
              value={option}
              className="sr-only"
              checked={radioValue === option}
              onChange={() => toggleRadioValue()}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default TwinRadioButtons;

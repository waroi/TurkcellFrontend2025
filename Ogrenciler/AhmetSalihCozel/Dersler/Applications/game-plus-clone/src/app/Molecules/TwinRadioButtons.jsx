import React, { useEffect } from "react";

function TwinRadioButtons({value,toggle}) {

  useEffect(()=>{

  },[value])

  return (
    <fieldset aria-label="Choose a memory option w-full">
      <div className="mt-4 flex justify-center items-center gap-5">
        {["Süresiz", "Süreli"].map((option) => (
          <label
            key={option}
            className={`px-4 py-1 cursor-pointer bg-neutral-700 rounded-full ${
              value === option ? "border text-wihte border-lime-500" : "opacity-50"
            }`}
          >
            <input
              type="radio"
              name="memory-option"
              value={option}
              className="sr-only"
              checked={value === option}
              onChange={() => toggle()}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default TwinRadioButtons;

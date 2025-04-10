import React from "react";
import Square from "../../atoms/Square";
import "./style.css";

function CubeFace({ faceName, cells, onCellClick, highlightLine }) {
  console.log(faceName);

  return (
    <div className={`face ${faceName}`}>
      {cells.map((value, i) => (
        <Square
          key={i}
          value={value}
          onClick={() => onCellClick(faceName, i)}
          highlight={highlightLine?.includes(i)}
        />
      ))}
    </div>
  );
}

export default CubeFace;

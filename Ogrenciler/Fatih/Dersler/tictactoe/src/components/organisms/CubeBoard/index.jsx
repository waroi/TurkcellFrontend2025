import React from "react";
import CubeFace from "../CubeFace";
import "./style.css";

function CubeBoard({ cubeState, onCellClick, rotation, winningHighlights }) {
  return (
    <div
      className="cube"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      {Object.entries(cubeState).map(([face, cells]) => (
        <CubeFace
          key={face}
          faceName={face}
          cells={cells}
          onCellClick={onCellClick}
          highlightLine={winningHighlights?.[face]}
        />
      ))}
    </div>
  );
}

export default CubeBoard;

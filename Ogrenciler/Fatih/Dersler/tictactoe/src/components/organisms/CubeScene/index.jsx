import React from "react";
import CubeBoard from "../CubeBoard";
import "./style.css";

function CubeScene({ cubeState, onCellClick, rotation, winningHighlights }) {
  return (
    <div className="scene">
      <CubeBoard
        cubeState={cubeState}
        onCellClick={onCellClick}
        rotation={rotation}
        winningHighlights={winningHighlights}
      />
    </div>
  );
}

export default CubeScene;

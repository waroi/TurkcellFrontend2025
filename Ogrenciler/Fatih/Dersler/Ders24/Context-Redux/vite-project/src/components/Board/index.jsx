import React from "react";
import Square from "../Square";
import { FaBomb } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectResult } from "../../redux/resultSlice";
import useGameLogic from "../../hooks/useGameLogic";
import useScoreUpdate from "../../hooks/useScoreUpdate";

function Board({ xIsNext, squares, onPlay, bomb }) {
  const result = useSelector(selectResult);
  const { triggerBombLoss } = useScoreUpdate();

  const { handleClick } = useGameLogic({
    squares,
    xIsNext,
    onPlay,
    bomb,
    onBombTrigger: triggerBombLoss,
  });

  function getEmptyCells(squares) {
    return squares.reduce((acc, square, index) => {
      if (square === null) acc.push(index);
      return acc;
    }, []);
  }

  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          onSquareClick={() => handleClick(i)}
          showBomb={bomb === i && result === "lose"}
        />
      ))}
    </div>
  );
}

export default Board;

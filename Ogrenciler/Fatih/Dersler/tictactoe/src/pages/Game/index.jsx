import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import CubeScene from "../../components/organisms/CubeScene";
import useCubeRotation from "../../hooks/useCubeRotation";
import useOnlineGame from "../../hooks/useOnlineGame";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import GameLayout from "../../components/layouts/GameLayout";
import { isCubeDraw, isValidCubeState } from "../../utils/checkMoves";

function GamePage() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const playerSymbol = sessionStorage.getItem("playerSymbol") || "X";
  const {
    cubeState,
    xIsNext,
    winner,
    highlights,
    makeMove,
    initializeGame,
    loading,
  } = useOnlineGame(gameId, playerSymbol);

  const { rotation, handleKeyDown } = useCubeRotation();

  useEffect(() => {
    const isInvalidState = !isValidCubeState(cubeState);

    if (!loading && isInvalidState) {
      initializeGame();
    }
  }, [loading, cubeState, initializeGame, gameId]);

  let status;
  const isDraw = isCubeDraw(cubeState);

  if (winner) {
    status = `Kazanan: ${winner}`;
  } else if (isDraw) {
    status = "Berabere!";
  } else {
    status = `Sıradaki oyuncu: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <GameLayout onKeyDown={handleKeyDown}>
      <Text as="h1" size="xl" color="primary">
        TicTacToe
      </Text>
      <Text size="sm" color="light">
        Senin sembolün: {playerSymbol}
      </Text>
      <Text size="base" className="my-3 fw-bold" color="light">
        {status}
      </Text>

      {cubeState && (
        <CubeScene
          cubeState={cubeState}
          onCellClick={makeMove}
          rotation={rotation}
          winningHighlights={highlights}
        />
      )}

      {(winner || isDraw) && (
        <div className="mt-4">
          <Button variant="warning" className="me-3" onClick={initializeGame}>
            Tekrar Oyna
          </Button>
          <Button variant="secondary" onClick={() => navigate("/room-select")}>
            Oda Seçimine Dön
          </Button>
        </div>
      )}
    </GameLayout>
  );
}

export default GamePage;

import { useState } from "react";

export default function useCubeRotation() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleKeyDown = (e) => {
    setRotation((prev) => {
      switch (e.key) {
        case "ArrowDown":
          return { ...prev, x: prev.x - 15 };
        case "ArrowUp":
          return { ...prev, x: prev.x + 15 };
        case "ArrowLeft":
          return { ...prev, y: prev.y - 15 };
        case "ArrowRight":
          return { ...prev, y: prev.y + 15 };
        default:
          return prev;
      }
    });
  };

  return { rotation, handleKeyDown };
}

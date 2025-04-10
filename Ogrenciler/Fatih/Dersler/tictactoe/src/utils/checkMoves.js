export const isValidCubeState = (state) => {
  return (
    state &&
    typeof state === "object" &&
    Object.values(state).every((v) => Array.isArray(v) && v.length === 9)
  );
};

export const isCubeDraw = (state) => {
  return (
    isValidCubeState(state) &&
    Object.values(state)
      .flat()
      .every((cell) => cell)
  );
};

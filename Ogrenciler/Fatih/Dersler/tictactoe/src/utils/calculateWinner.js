export default function calculateWinner(cube) {
  const faces = Object.keys(cube);
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const face of faces) {
    for (const line of winningLines) {
      const [a, b, c] = line;
      if (
        cube[face][a] &&
        cube[face][a] === cube[face][b] &&
        cube[face][a] === cube[face][c]
      ) {
        return {
          winner: cube[face][a],
          highlights: {
            [face]: line,
          },
        };
      }
    }
  }

  return null;
}

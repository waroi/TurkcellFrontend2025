//* from https://levenshtein-calculator.web.app/

const insertCost = 1;
const deleteCost = 1;
// const substituteCost = 2;
const substituteCost = 1; //* Adjusted for similarity control.

export function minimumEditDistance(source, target) {
  const matrix = Array.from({ length: target.length + 1 }, () =>
    Array(source.length + 1).fill(0)
  );
  const path = [];
  const operations = [];

  for (let index = 1; index <= target.length; index++)
    matrix[index][0] = matrix[index - 1][0] + insertCost;

  for (let index = 1; index <= source.length; index++)
    matrix[0][index] = matrix[0][index - 1] + deleteCost;

  for (let x = 1; x <= target.length; x++)
    for (let y = 1; y <= source.length; y++)
      if (source[y - 1] === target[x - 1]) matrix[x][y] = matrix[x - 1][y - 1];
      else
        matrix[x][y] = Math.min(
          matrix[x - 1][y] + insertCost,
          matrix[x - 1][y - 1] + substituteCost,
          matrix[x][y - 1] + deleteCost
        );

  let x = target.length;
  let y = source.length;

  while (x !== 0 && y !== 0) {
    path.push(`${x}-${y}`);

    if (target[x - 1] === source[y - 1]) {
      x--;
      y--;
    } else if (matrix[x][y] === matrix[x - 1][y - 1] + substituteCost)
      operations.push({
        name: "Substitute",
        source: y-- - 1,
        target: x-- - 1,
      });
    else if (matrix[x][y] === matrix[x - 1][y] + insertCost)
      operations.push({
        name: "Insert",
        target: x-- - 1,
      });
    else
      operations.push({
        name: "Delete",
        source: y-- - 1,
      });
  }

  while (y !== 0)
    operations.push({
      name: "Delete",
      source: y-- - 1,
    });

  while (x !== 0)
    operations.push({
      name: "Insert",
      target: x-- - 1,
    });

  operations.reverse();

  //   return {
  //     matrix,
  //     cost: matrix[target.length][source.length],
  //     operations,
  //     path,
  //   };

  return matrix[target.length][source.length];
}

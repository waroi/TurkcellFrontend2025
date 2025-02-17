export const getNextId = (games) => {
  const ids = games.map((game) => game.id);
  return (Math.max(...ids) + 1).toString();
};

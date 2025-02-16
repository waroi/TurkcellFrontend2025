export const debounce = (cb, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      cb(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const getNextId = (games) => {
  const ids = games.map((game) => game.id);
  return (Math.max(...ids) + 1).toString();
};

export const createID = () => {
  return Math.random().toString(36).slice(2, 9);
};
export const getStorage = () =>
  JSON.parse(localStorage.getItem("movies")) || [];
export const setStorage = (movies) =>
  localStorage.setItem("movies", JSON.stringify(movies));

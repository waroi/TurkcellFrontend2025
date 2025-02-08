export default function local_storage() {}

local_storage.prototype.setMovies = function () {
  localStorage.setItem("movies", JSON.stringify(movies));
};

local_storage.prototype.getMovies = function () {
  return JSON.parse(localStorage.getItem("movies"));
};

const storage = new local_storage();
export { storage };
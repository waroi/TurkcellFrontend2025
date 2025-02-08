export default function localStorage() {}

localStorage.prototype.setMovies = function () {
  localStorage.setItem("movies", JSON.stringify(movies));
};

localStorage.prototype.getMovies = function () {
  return JSON.parse(localStorage.getItem("movies"));
};

const storage = new localStorage();

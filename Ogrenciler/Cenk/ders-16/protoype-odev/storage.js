export default function local_storage() {}

local_storage.prototype.setMovies = function (movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
};
  
  local_storage.prototype.getMovies = function () {
    return localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')): [];
};

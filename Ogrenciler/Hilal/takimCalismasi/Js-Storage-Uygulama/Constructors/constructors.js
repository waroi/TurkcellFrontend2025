export function Movie(
  id,
  movieName,
  director,
  year,
  description,
  isFavorite,
  movieType,
  poster
) {
  this.id = id;
  this.movieName = movieName;
  this.director = director;
  this.year = year;
  this.description = description;
  this.isFavorite = isFavorite;
  this.movieType = movieType;
  this.poster = poster;

 
}

Movie.prototype.setStorage = function () {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.push(this);
  localStorage.setItem("movies", JSON.stringify(films));
}

Movie.prototype.editStorage = function () {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const index = movies.findIndex((film) => film.id === this.id);
  movies[index] = this;
  localStorage.setItem("movies", JSON.stringify(movies));
}

Movie.prototype.deleteStorage = function () {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const newStorage = movies.filter((film) => film.id !== this.id);
  localStorage.setItem("movies", JSON.stringify(newStorage));
}

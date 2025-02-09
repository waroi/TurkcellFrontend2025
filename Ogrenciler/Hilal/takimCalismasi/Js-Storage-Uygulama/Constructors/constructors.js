import { getStorage, setStorage } from "../utils/index.js";

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

Movie.prototype.addToStorage = function () {
  const movies = getStorage();
  movies.push(this);
  setStorage(movies);
};

Movie.prototype.editStorage = function () {
  const movies = getStorage();
  const index = movies.findIndex((film) => film.id === this.id);
  movies[index] = this;
  setStorage(movies);
};

Movie.prototype.deleteStorage = function () {
  const movies = getStorage();
  const newStorage = movies.filter((film) => film.id !== this.id);
  setStorage(newStorage);
};

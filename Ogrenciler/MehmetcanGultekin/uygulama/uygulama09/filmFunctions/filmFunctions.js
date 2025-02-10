function FilmFunctions() {
  this.films = JSON.parse(localStorage.getItem("films")) || [];
}
FilmFunctions.prototype.addFilm = function (film) {
  this.films.push(film);
  this.saveToStorage();
};
FilmFunctions.prototype.updateFilm = function (oldName, updatedFilm) {
  this.films = this.films.map((film) =>
    film.name === oldName ? updatedFilm : film
  );
  this.saveToStorage();
};
FilmFunctions.prototype.deleteFilm = function (filmName) {
  this.films = this.films.filter((film) => film.name !== filmName);
  this.saveToStorage();
};
FilmFunctions.prototype.saveToStorage = function () {
  localStorage.setItem("films", JSON.stringify(this.films));
};
FilmFunctions.prototype.getFilms = function () {
  return this.films;
};

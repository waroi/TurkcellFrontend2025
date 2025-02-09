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
  console.log(id);
  this.id = id;
  this.movieName = movieName;
  this.director = director;
  this.year = year;
  this.description = description;
  this.isFavorite = isFavorite;
  this.movieType = movieType;
  this.poster = poster;
}

// Movie.prototype.getDetails = function () {
//   return `${this.movieName} - ${this.director} - ${this.year}`;
// };

export class Movie {
  constructor(
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
}

export class FestivalMovie extends Movie {
  constructor(
    id,
    movieName,
    director,
    year,
    description,
    isFavorite,
    poster,
    festivalName,
    award
  ) {
    super(
      id,
      movieName,
      director,
      year,
      description,
      isFavorite,
      poster
    );
    this.festivalName = festivalName;
    this.award = award;
  }

  getFestivalInfo() {
    return `${this.movieName} won the ${this.award} award at ${this.festivalName}.`;
  }
}

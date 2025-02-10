import { Movie } from "./movie";

export function MovieApp() {
  this.moviesContainer = document.querySelector(".movies .container");
  this.cardFlip = document.querySelector(".card-inner");
  this.formElements = {
    title: document.querySelector("#title"),
    director: document.querySelector("#director"),
    genre: document.querySelector("#genre"),
    year: document.querySelector("#year"),
    image: document.querySelector("#image"),
    description: document.querySelector("#description"),
    addButton: document.querySelector("form button"),
  };
  this.editCard = null;
  this.loadMovies();
  this.addEventListeners();
}

MovieApp.prototype.loadMovies = function () {
  const movies = JSON.parse(localStorage.getItem("movies") ?? "[]");
  movies.forEach(this.appendMovie.bind(this));
};

MovieApp.prototype.addEventListeners = function () {
  this.formElements.addButton.addEventListener("click", (event) => {
    event.preventDefault();
    this.editCard ? this.updateMovie() : this.addMovie();
  });
  document.addEventListener("DOMContentLoaded", () => {
    if (this.cardFlip) {
      this.cardFlip.addEventListener("click", () =>
        this.cardFlip.classList.toggle("is-flipped")
      );
    }
  });
};

MovieApp.prototype.addMovie = function () {
  const formData = this.getFormData();
  const movie = new Movie(
    formData.title,
    formData.director,
    formData.genre,
    formData.year,
    formData.image,
    formData.description
  );

  if (!this.validateForm(movie)) return;
  this.saveMovieToStorage(movie);
  this.appendMovie(movie);
  this.clearForm();
};

MovieApp.prototype.updateMovie = function () {
  const updatedMovie = this.getFormData();
  if (!this.validateForm(updatedMovie)) return;
  const movies = JSON.parse(localStorage.getItem("movies") ?? "[]");
  const index = movies.findIndex(
    (movie) => movie.title === this.editCard.dataset.title
  );
  if (index !== -1) {
    movies[index] = updatedMovie;
    localStorage.setItem("movies", JSON.stringify(movies));
    this.refreshCard(this.editCard, updatedMovie);
  }
  this.editCard = null;
  this.clearForm();
  this.formElements.addButton.textContent = "Ekle";
};

MovieApp.prototype.deleteMovie = function (card, title) {
  const movies = JSON.parse(localStorage.getItem("movies") ?? "[]");
  const updatedMovies = movies.filter((movie) => movie.title !== title);
  localStorage.setItem("movies", JSON.stringify(updatedMovies));
  card.remove();
};

MovieApp.prototype.setEdit = function (card, movie) {
  this.editCard = card;
  this.formElements.title.value = movie.title;
  this.formElements.director.value = movie.director;
  this.formElements.genre.value = movie.genre;
  this.formElements.year.value = movie.year;
  this.formElements.image.value = movie.image;
  this.formElements.description.value = movie.description;
  this.formElements.addButton.textContent = "Güncelle";
  window.scrollTo(0, 0);
};

MovieApp.prototype.appendMovie = function (movie) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.title = movie.title;

  const cardInner = document.createElement("div");
  cardInner.className = "card-inner";
  cardInner.addEventListener("click", () =>
    cardInner.classList.toggle("is-flipped")
  );

  const cardFront = this.createCardFront(movie, card);
  const cardBack = this.createCardBack(movie);

  cardInner.append(cardFront, cardBack);
  card.appendChild(cardInner);
  this.moviesContainer.appendChild(card);
};

MovieApp.prototype.createCardFront = function (movie, card) {
  const cardFront = document.createElement("div");
  cardFront.className = "card-front card-face";

  const cardImage = document.createElement("img");
  cardImage.className = "card-img-top img-fluid";
  cardImage.src = movie.image;

  const body = document.createElement("div");
  body.className = "card-body";

  let cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = movie.title;

  let cardDirector = document.createElement("h5");
  cardDirector.textContent = movie.director;
  cardDirector.classList.add("card-text");

  let cardGenre = document.createElement("p");
  cardGenre.textContent = movie.genre;
  cardGenre.classList.add("card-text");

  let cardYear = document.createElement("p");
  cardYear.textContent = movie.year;
  cardYear.classList.add("card-text");

  let buttons = document.createElement("div");
  let editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-primary", "me-3");
  editButton.textContent = "Düzenle";
  editButton.addEventListener("click", () => this.setEdit(card, movie));

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.textContent = "Sil";
  deleteButton.addEventListener("click", () =>
    this.deleteMovie(card, movie.title)
  );

  buttons.append(editButton, deleteButton);
  body.append(cardTitle, cardDirector, cardGenre, cardYear, buttons);
  cardFront.append(cardImage, body);
  return cardFront;
};

MovieApp.prototype.createCardBack = function (movie) {
  const cardBack = document.createElement("div");
  cardBack.className = "card-back card-face";

  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = movie.description;

  cardBack.appendChild(description);
  return cardBack;
};

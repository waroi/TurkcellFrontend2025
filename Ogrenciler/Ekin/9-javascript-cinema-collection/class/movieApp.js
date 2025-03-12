import { Movie } from "./movie.js";

export class MovieApp {
  constructor() {
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
    this.getStorageMovies();
    this.addEventListeners();
  }
  getStorageMovies() {
    const movies = JSON.parse(localStorage.getItem("movies") ?? "[]");
    movies.forEach((movie) => this.appendMovie(movie));
  }
  saveMovieToStorage(movie) {
    const movies = JSON.parse(localStorage.getItem("movies") ?? "[]");
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  addEventListeners() {
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
  }
  addMovie() {
    const movie = this.getFormData();
    if (!this.validateForm(movie)) return;
    this.saveMovieToStorage(movie);
    this.appendMovie(movie);
    this.clearForm();
  }
  refreshCard(card, movie) {
    const cardBody = card.querySelector(".card-body");
    const cardImage = card.querySelector(".card-img-top");
    if (cardBody && cardImage) {
      cardImage.src = movie.image;
      cardBody.querySelector(".card-title").textContent = movie.title;
      cardBody.querySelectorAll(".card-text")[0].textContent = movie.director;
      cardBody.querySelectorAll(".card-text")[1].textContent = movie.genre;
      cardBody.querySelectorAll(".card-text")[2].textContent = movie.year;
    }
    const cardBack = card.querySelector(".card-back .card-text");
    if (cardBack) {
      cardBack.textContent = movie.description;
    }
  }
  updateMovie() {
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
  }
  deleteMovie(card, title) {
    const movies = JSON.parse(localStorage.getItem("movies") ?? "[]");
    const updatedMovies = movies.filter((movie) => movie.title !== title);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    card.remove();
  }
  setEdit(card, movie) {
    this.editCard = card;
    this.formElements.title.value = movie.title;
    this.formElements.director.value = movie.director;
    this.formElements.genre.value = movie.genre;
    this.formElements.year.value = movie.year;
    this.formElements.image.value = movie.image;
    this.formElements.description.value = movie.description;
    this.formElements.addButton.textContent = "Güncelle";
    window.scrollTo(0, 0);
  }
  appendMovie(movie) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.title = movie.title;
    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";
    cardInner.addEventListener("click", () =>
      cardInner.classList.toggle("is-flipped")
    );
    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    const cardFront = this.createCardFront(movie);
    const cardBack = this.createCardBack(movie);

    this.moviesContainer.appendChild(card);
    let buttons = document.createElement("div");
    let editButton = document.createElement("button");
    editButton.classList.add("btn");
    editButton.classList.add("btn-primary");
    editButton.classList.add("me-3");
    editButton.textContent = "Düzenle";
    editButton.addEventListener("click", () => this.setEdit(card, movie));
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.textContent = "Sil";
    deleteButton.addEventListener("click", () =>
      this.deleteMovie(card, movie.title)
    );
    cardInner.append(cardFront, cardBack);
    card.append(cardInner, cardFooter);
    buttons.append(editButton, deleteButton);
    cardFooter.append(buttons);
  }
  createCardFront(movie) {
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
    body.append(cardTitle, cardDirector, cardGenre, cardYear);
    cardFront.append(cardImage, body);
    return cardFront;
  }
  createCardBack(movie) {
    const cardBack = document.createElement("div");
    cardBack.className = "card-back card-face";
    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = movie.description;
    cardBack.appendChild(description);
    return cardBack;
  }
  getFormData() {
    return new Movie(
      this.formElements.title.value,
      this.formElements.director.value,
      this.formElements.genre.value,
      this.formElements.year.value,
      this.formElements.image.value,
      this.formElements.description.value
    );
  }
  validateForm(movie) {
    if (Object.values(movie).some((value) => !value)) {
      alert("Lütfen formu eksiksiz doldurunuz.");
      return false;
    }
    return true;
  }

  clearForm() {
    Object.values(this.formElements).forEach((element) => {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.value = "";
      } else if (element.tagName === "SELECT") {
        element.selectedIndex = 0;
      }
    });
  }
}

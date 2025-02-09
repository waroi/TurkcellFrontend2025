import { Movie } from "./Constructors/constructors.js";
import { createID } from "./utils/index.js";

const movieName = document.getElementById("movieName");
const director = document.getElementById("director");
const year = document.getElementById("year");
const description = document.getElementById("description");
const isFavorite = document.getElementById("addFavorite");
const movieType = document.getElementById("movieType");
const poster = document.getElementById("poster");

const checkInitialStorage = () => {
  let movies = localStorage.getItem("movies");
  if (!movies) {
    movies = [];
    localStorage.setItem("movies", JSON.stringify(movies));
  }
};
checkInitialStorage();

let editingMovieId = "";

const modalForm = document.getElementById("addMovieForm");
modalForm.addEventListener("submit", addMovie);

function addMovie(e) {
  e.preventDefault();
  if (editingMovieId === "") {
    const id = createID();
    const movie = new Movie(
      id,
      movieName.value,
      director.value,
      year.value,
      description.value,
      isFavorite.checked,
      movieType.value,
      poster.value
    );
    movie.setStorage();
  } else {

    const updatedMovie = new Movie(
      editingMovieId,
      movieName.value,
      director.value,
      year.value,
      description.value,
      isFavorite.checked,
      movieType.value,
      poster.value
    );

    updatedMovie.editStorage();

    editingMovieId = "";
  }
  movieName.innerHTML = "";
  director.innerHTML = "";
  year.innerHTML = "";
  description.innerHTML = "";
  isFavorite.innerHTML = "";
  poster.innerHTML = "";
  showMovies();
  showFavorites();
}

const editMovie = (id) => {
  editingMovieId = id;
  const movies = JSON.parse(localStorage.getItem("movies"));
  const movieIndex = movies.findIndex((movie) => movie.id === editingMovieId);
  const movie = movies[movieIndex];
  console.log("id", editingMovieId, id);
  movieName.value = movie.movieName;
  director.value = movie.director;
  year.value = movie.year;
  description.value = movie.description;
  isFavorite.checked = movie.isFavorite;
  movieType.value = movie.movieType;
  poster.value = movie.poster;
};

function showMovies() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  const movieTypeMap = {
    1: "Bilim Kurgu",
    2: "Dram",
    3: "Aksiyon",
  };

  movies.map((movie) => {
    const col = document.createElement("div");
    col.className = "col d-flex justify-content-center mb-2";

    const card = document.createElement("div");
    card.className = "card bg-transparent text-white border-light p-3";
    card.style.width = "26rem";
    movieList.appendChild(card);

    const image = document.createElement("img");
    image.className = "card-img-top";
    image.src = movie.poster;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = movie.movieName;

    const director = document.createElement("p");
    director.className = "card-text";
    director.textContent = movie.director;

    const year = document.createElement("p");
    year.className = "card-text";
    year.textContent = movie.year;

    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = movie.description;

    const isFavorite = document.createElement("p");
    isFavorite.className = "card-text";
    isFavorite.textContent = movie.isFavorite ? "Favourite" : "";

    const movieType = document.createElement("p");
    movieType.className = "card-text";
    movieType.textContent = movieTypeMap[movie.movieType] || "Bilinmeyen Tür";

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger mb-2";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (e) => deleteMovie(movie.id, e));

    const editButton = document.createElement("button");
    editButton.className = "btn btn-warning";
    editButton.textContent = "Edit";
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#exampleModal");
    editButton.addEventListener("click", () => editMovie(movie.id));
    cardBody.appendChild(title);
    cardBody.appendChild(director);
    cardBody.appendChild(year);
    cardBody.appendChild(description);
    cardBody.appendChild(isFavorite);
    cardBody.appendChild(movieType);
    cardBody.appendChild(image);
    card.appendChild(deleteButton);
    card.appendChild(editButton);
    movieList.appendChild(col);
    col.appendChild(card);
  });
}
const deleteMovie = (id, e) => {
  console.log(e);
  e.target.parentElement.remove();
  const movies = JSON.parse(localStorage.getItem("movies"));
  console.log(movies);
  const newMovies = movies.filter((movie) => movie.id !== id);
  localStorage.setItem("movies", JSON.stringify(newMovies));
  showMovies();
};

const showFavorites = () => {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const favoriteMovies = movies.filter((movie) => movie.isFavorite === true);
  const favoriteList = document.getElementById("favoriteList");
  favoriteList.innerHTML = "";

  favoriteMovies.map((movie) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src =
      movie.poster ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GBT9UptUlr6lwozpVfkKhaEMmrnivaY4VQ&s";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = movie.movieName;

    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = movie.description || "Açıklama yok";

    const removeBtn = document.createElement("a");
    removeBtn.className = "btn btn-primary";
    removeBtn.textContent = "Favorilerden Kaldır";
    removeBtn.addEventListener("click", () => removeFromFavorites(movie.id));

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(removeBtn);
    card.appendChild(img);
    card.appendChild(cardBody);

    favoriteList.appendChild(card);
  });
};

const removeFromFavorites = (id) => {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies = movies.map((movie) =>
    movie.id === id ? { ...movie, isFavorite: false } : movie
  );
  localStorage.setItem("movies", JSON.stringify(movies));
  showFavorites();
};

showFavorites();

showMovies();


import { Movie } from "./Constructors/movie.js";
import { createID } from "./utils/index.js";
import { getStorage, setStorage } from "./utils/index.js";
import { createCard } from "./ui/ui.js";
import { Storage } from "./Constructors/storage.js";
import { movieTypeMap } from "./data.js";

const movieStorage = new Storage("movies");

const movieName = document.getElementById("movieName");
const director = document.getElementById("director");
const year = document.getElementById("year");
const description = document.getElementById("description");
const isFavorite = document.getElementById("addFavorite");
const movieType = document.getElementById("movieType");
const poster = document.getElementById("poster");
Object.entries(movieTypeMap).map(([key, value]) => {
  const optionElement = document.createElement("option");
  optionElement.innerHTML = value;
  optionElement.setAttribute("value", key);
  movieType.append(optionElement);
});

console.log(
  "1-clear storaga için button ekle.\n 2-ui.js,storage.js,movie.js utils altına geçir\n 3-toggleFavorite metodunu ekle \n  4-Festival filmine göre exten ettiğimiz yeni constructor ile sayfamızda güncellemeler yap"
);

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
    movieStorage.addToStorage(movie);
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

    movieStorage.editStorage(updatedMovie);

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

export const editMovie = (id) => {
  editingMovieId = id;
  const movies = getStorage();
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
  const movies = getStorage();
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";
  movies.map((movie) => {
    createCard(movieList, movie);
  });
}

export const deleteMovie = (id) => {
  const movies = getStorage();

  const newStorage = movies.filter((film) => film.id !== id);
  setStorage(newStorage);
  showMovies();
  showFavorites();
};

const showFavorites = () => {
  const movies = getStorage();
  const favoriteMovies = movies.filter((movie) => movie.isFavorite === true);
  const favoriteList = document.getElementById("favoriteList");
  favoriteList.innerHTML = "";

  favoriteMovies.map((movie) => {
    createCard(favoriteList, movie);

    const removeBtn = document.createElement("a");
    removeBtn.className = "btn btn-primary";
    removeBtn.textContent = "Favorilerden Kaldır";
    removeBtn.addEventListener("click", () => removeFromFavorites(movie.id));
  });
};

const removeFromFavorites = (id) => {
  const movies = getStorage();
  movies = movies.map((movie) =>
    movie.id === id ? { ...movie, isFavorite: false } : movie
  );
  localStorage.setItem("movies", JSON.stringify(movies));
  showFavorites();
};

showFavorites();

showMovies();

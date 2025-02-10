import Storage from "./storage.js";
import Movie from "./movie.js";
import Card from "./card.js";
const local_storage = new Storage();

const ekle_button = document.getElementById("ekle");
ekle_button.addEventListener("click", ekleFunction);

let movie_name = document.getElementById("movie-name");
let year = document.getElementById("year");
let genre = document.getElementById("genre");
let creator = document.getElementById("creator");
let Imdb = document.getElementById("imdb");
let url = document.getElementById("url");
createFromLocaleHistory();

function ekleFunction() {
  if (
    movie_name.value !== "" &&
    year.value !== "" &&
    genre.value !== "" &&
    creator.value !== "" &&
    Imdb.value !== "" &&
    url.value !== ""
  ) {
    const movie = new Movie(
      movie_name.value,
      year.value,
      creator.value,
      Imdb.value,
      genre.value,
      url.value
    );
    local_storage.saveMovie(movie);
    for (var element of [movie_name, year, genre, creator, Imdb, url]) {
      element.value = "";
    }
    createFromLocaleHistory();
  } else {
    alert("Your input is wrong!");
  }
}
function createFromLocaleHistory() {
  const row = document.getElementById("row");
  row.textContent = "";
  let list = local_storage.getMovies();
  for (let i = 0; i < list.length; i++) {
    const card = new Card(
      list,
      i,
      ekle_button,
      local_storage,
      movie_name,
      year,
      genre,
      creator,
      Imdb,
      url
    );
    row.appendChild(card);
  }
}

import Movie from "./movie.js";
import movieController from "./movieController.js";
import ui from "./ui.js";

const movie_controller = new movieController();
const UI = new ui();

const film = new Movie(
  "The Shawshank Redemption",
  "Frank Darabont",
  1994,
  "Drama",
  "https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/"
);

localStorage.setItem("movies", JSON.stringify(film));

document.addEventListener("DOMContentLoaded", () => {
  UI.renderMovies();
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#movieName").value;
  const director = document.querySelector("#director").value;
  const year = document.querySelector("#year").value;
  const type = document.querySelector(".category").value;
  const image = document.querySelector("#movie-banner").value;
  if (!name || !director || !year || !type || type === "Tür") {
    return;
  }
  const movie = new Movie(name, director, year, type, image);
  movie_controller.addMovie(movie);
  UI.renderMovies();
  form.reset();
});

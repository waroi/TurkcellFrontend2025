import Movie from "./movie.js";
import movieController from "./movieController.js";
import ui from "./ui.js";

const movie_controller = new movieController();
const UI = new ui();

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

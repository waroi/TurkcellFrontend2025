import Movie from "./movie.js";
import movieController from "./movieController.js";
import ui from "./ui.js";

const UI = new ui();
// const movie_controller = new movieController();

// const film = new Movie(
//   "The Shawshank Redemption",
//   "Frank Darabont",
//   1994,
//   "Drama",
//   "https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/"
// );
// localStorage.setItem("movies", JSON.stringify(film));


const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    const movieName = document.querySelector("#movieName").value;
    const director = document.querySelector("#director").value;
    const year = document.querySelector("#year").value;
    const type = document.querySelector(".category").value;
    const image = document.querySelector("#movie-banner").value;

    document.querySelector(".card-title").textContent = movieName || 'Film adı giriniz.';
    document.querySelector(".preview-director").textContent = director ? `Yönetmen: ${director}` : 'Lütfen yönetmen giriniz.';
    document.querySelector(".preview-year").textContent = year ? `Yıl: ${year}` : 'Çıkış tarihini giriniz.';
    document.querySelector(".preview-category").textContent = type !== '' ? `Tür: ${type}` : 'Film türünü giriniz.';
    
    const previewImage = document.querySelector(".preview-image-container img");
    if (image) {
      previewImage.src = image;
    } else {
      previewImage.src = "./assets/default-poster.jpg";
    }
  });
});

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
  UI.movie_controller.addMovie(movie);
  UI.renderMovies();
  form.reset();
  form.classList.remove("was-validated");
});
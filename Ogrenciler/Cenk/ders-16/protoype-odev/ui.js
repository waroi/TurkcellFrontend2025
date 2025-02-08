import movieController from "./movieController.js";

export default function ui() {}

ui.prototype.movieCard = function (movie, index) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("card", "col-12", "col-md-3", "p-0", "shadow");
  movieCard.style = "width: 18rem";

  const movieImg = document.createElement("img");
  movieImg.classList.add("card-img-top", "img-fluid", "object-fit-cover");
  movieImg.style = "height: 300px";
  movieImg.src = movie.image;
  movieImg.addEventListener(
    "error",
    () => (movieImg.src = "./assets/default-poster.jpg")
  );

  const movieBody = document.createElement("div");
  movieBody.classList.add("card-body");

  const movieName = document.createElement("h5");
  movieName.classList.add("card-title");
  movieName.textContent = movie.name;

  const movieDirector = document.createElement("p");
  movieDirector.classList.add("card-text");
  movieDirector.textContent = `Yönetmen: ${movie.director}`;

  const movieYear = document.createElement("p");
  movieYear.classList.add("card-text");
  movieYear.textContent = `Yıl: ${movie.year}`;

  const movieType = document.createElement("p");
  movieType.classList.add("card-text");
  movieType.textContent = `Tür: ${movie.type}`;

  const movieButtons = document.createElement("div");
  movieButtons.classList.add("d-flex", "gap-2", "flex-wrap");

  const iconDelete = document.createElement("i");
  iconDelete.classList.add("fa-solid", "fa-trash");
  const movieDelete = document.createElement("button");
  movieDelete.classList.add("btn", "btn-danger");
  movieDelete.appendChild(iconDelete);
  movieDelete.addEventListener("click", () =>
    movieController.deleteMovie(movie)
  );

  const iconEdit = document.createElement("i");
  iconEdit.classList.add("fa-solid", "fa-pencil");
  const movieEdit = document.createElement("button");
  movieEdit.classList.add("btn", "btn-warning");
  movieEdit.appendChild(iconEdit);
  movieEdit.addEventListener("click", () => movieController.editMovie(index));

  movieButtons.append(movieEdit, movieDelete);
  movieBody.append(
    movieName,
    movieDirector,
    movieYear,
    movieType,
    movieButtons
  );
  movieCard.append(movieImg, movieBody);

  return movieCard;
};

ui.prototype.renderMovies = function () {
  const movieListContainer = document.querySelector(".movie-list");
  movieListContainer.innerHTML = "";
  movieController.movieList.forEach((movie, index) => {
    const movieCard = this.movieCard(movie, index);
    movieListContainer.appendChild(movieCard);
  });
};

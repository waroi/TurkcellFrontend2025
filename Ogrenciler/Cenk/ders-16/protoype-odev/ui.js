import movieController from "./movieController.js";

export default function ui() {
  this.movie_controller = new movieController();
}

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

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid","fa-trash");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.appendChild(deleteIcon);
  deleteButton.addEventListener("click", () => {
    this.movie_controller.deleteMovie(index);
    this.renderMovies();
  });

  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid","fa-pencil");

  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-warning");
  editButton.appendChild(editIcon);
  editButton.addEventListener("click", () => this.movie_controller.editMovie(index));

  movieButtons.append(editButton, deleteButton);
  movieBody.append(movieName, movieDirector, movieYear, movieType, movieButtons);
  movieCard.append(movieImg, movieBody);

  return movieCard;
};

ui.prototype.renderMovies = function () {
  const movieListContainer = document.querySelector(".movie-list");
  movieListContainer.innerHTML = "";
  //const movieList = movie_controller.getMovieList();
  const movieList = this.movie_controller.getMovieList();
  movieList.forEach((movie, index) => {
    const movieCard = this.movieCard(movie, index);
    movieListContainer.appendChild(movieCard);
  });
};

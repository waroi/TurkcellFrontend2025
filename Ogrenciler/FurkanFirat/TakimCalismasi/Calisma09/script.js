const previewIMG = document.querySelector(".preview-image");

previewIMG.onerror = () => {
  previewIMG.src =
    "https://github.com/furkan-firat/cinecalm/blob/main/public/defaultPoster.jpg?raw=true";
};

function pushMovie() {
  const name = document.querySelector("#movieName").value;
  const director = document.querySelector("#director").value;
  const year = document.querySelector("#year").value;
  const type = document.querySelector(".category").value;
  const image = document.querySelector("#movie-banner").value;

  movies.push({name, director, year, type, image});
}

function formCleaner() {
  document.querySelector("#movieName").value = "";
  document.querySelector("#director").value = "";
  document.querySelector("#year").value = "";
  document.querySelector(".category").value = "";
  document.querySelector("#movie-banner").value = "";
}

function showMovies() {
  const movieList = document.querySelector(".movie-list");

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("card", "col-12", "col-md-3");

    const movieImg = document.createElement("img");
    movieImg.classList.add("card-img-top", "img-fluid", "h-50");
    movieImg.src = movie.image;

    const movieBody = document.createElement("div");
    movieBody.classList.add("card-body");

    const movieName = document.createElement("h5");
    movieName.classList.add("card-title");
    movieName.textContent = movie.name;

    const movieDirector = document.createElement("p");
    movieDirector.classList.add("card-text");
    movieDirector.textContent = movie.director;

    const movieYear = document.createElement("p");
    movieYear.classList.add("card-text");
    movieYear.textContent = movie.year;

    const movieType = document.createElement("p");
    movieType.classList.add("card-text");
    movieType.textContent = movie.type;

    const movieButtons = document.createElement("div");
    movieButtons.classList.add("d-grid", "gap-2");

    const movieDelete = document.createElement("button");
    movieDelete.classList.add("btn", "btn-danger");

    const movieEdit = document.createElement("button");
    movieEdit.classList.add("btn", "btn-warning");

    const iconDelete = document.createElement("i");
    iconDelete.className = "fa-solid fa-trash";

    const iconEdit = document.createElement("i");
    iconEdit.className = "fa-solid fa-pencil";

    movieDelete.appendChild(iconDelete);
    movieEdit.appendChild(iconEdit);
    movieButtons.appendChild(movieDelete, movieEdit);
    movieBody.appendChild(
      movieName,
      movieDirector,
      movieYear,
      movieType,
      movieButtons
    );
    movieCard.appendChild(movieImg, movieBody);
    movieList.appendChild(movieCard);
  });
}

const movies = [];

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  pushMovie();
  formCleaner();
  showMovies();
  console.log(movies);
});

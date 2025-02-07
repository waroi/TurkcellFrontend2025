const movies = [];
document.getElementById("addMovieForm").addEventListener("submit", addMovie);

function addMovie(e) {
  e.preventDefault();

  const movieName = document.getElementById("movieName").value;
  const director = document.getElementById("director").value;
  const year = document.getElementById("year").value;
  const description = document.getElementById("description").value;
  const isFavourite = document.getElementById("addFavorite").checked;
  const movieType = document.getElementById("movieType").value;
  const poster = document.getElementById("poster").value;
  const id = movieName;

  const movie = {
    movieName,
    director,
    year,
    description,
    isFavourite,
    movieType,
    poster,
    id,
  };
  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));
  showMovies();
}

const editMovie = (id, e) => {
  e.preventDefault();
  const movies = JSON.parse(localStorage.getItem("movies"));
  const movie = movies.find((movie) => movie.id === id);
  const movieName = document.getElementById("movieName");
  const director = document.getElementById("director");
  const year = document.getElementById("year");
  const description = document.getElementById("description");
  const isFavourite = document.getElementById("addFavorite");
  const movieType = document.getElementById("movieType");
  const poster = document.getElementById("poster");

  movieName.value = movie.movieName;
  director.value = movie.director;
  year.value = movie.year;
  description.value = movie.description;
  isFavourite.checked = movie.isFavourite;
  movieType.value = movie.movieType;
  poster.value = movie.poster;

  const newMovie = {
    ...movie,
    movieName: movieName.value,
    director: director.value,
    year: year.value,
    description: description.value,
    isFavourite: isFavourite.checked,
    movieType: movieType.value,
    poster: poster.value,
  };

  const newMovies = movies.filter((movie) => movie.id !== id);
  newMovies.push(newMovie);
  localStorage.setItem("movies", JSON.stringify(newMovies));

  showMovies();
};

function showMovies() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const col = document.createElement("div");
    col.className = "col d-flex justify-content-center";

    const card = document.createElement("div");
    card.className = "card ";
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

    const isFavourite = document.createElement("p");
    isFavourite.className = "card-text";
    isFavourite.textContent = movie.isFavourite ? "Favourite" : "";

    const movieType = document.createElement("p");
    movieType.className = "card-text";
    movieType.textContent = movie.movieType;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (e) => deleteMovie(movie.id, e));

    const editButton = document.createElement("button");
    editButton.className = "btn btn-warning";
    editButton.textContent = "Edit";
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#exampleModal");
    editButton.addEventListener("click", (e) => editMovie(movie.id, e));

    cardBody.appendChild(title);
    cardBody.appendChild(director);
    cardBody.appendChild(year);
    cardBody.appendChild(description);
    cardBody.appendChild(isFavourite);
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

showMovies();

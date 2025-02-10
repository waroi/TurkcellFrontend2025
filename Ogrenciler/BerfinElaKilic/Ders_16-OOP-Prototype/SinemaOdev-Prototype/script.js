
let storage = new Storage();
let movieArray = storage.getMovies();

let ui = new UI();
addButton.addEventListener("click", addFunction);
let selectedMovie = "";

function randomTwoDigit() {
  let whole = Math.floor(Math.random() * 10) + 1;
  let decimal = Math.floor(Math.random() * 10);
  return `${whole},${decimal}`;
}

let navButton = document.getElementById("nav-btn");
navButton.addEventListener("click", () => {
  ui.clearInput();
  updateButton.disabled = true;
  addButton.disabled = false;
});


movieArray.map((m) => ui.createCard(m));

function addFunction() {
  let maxMovie = movieArray.length > 0 ? Math.max(...movieArray.map((m) => m.movieId)) : 0;
  
  let movie = new Movie(movieName.value, movieDirector.value , movieYear.value, movieImg.value, movieCategory.value, maxMovie+1);
  movieArray.push(movie);
  storage.setMovies("movieArray", movieArray);
  ui.clearInput();
  ui.createCard(movie);
}

function deleteFunction(id, button) {
  let newMovieArray = movieArray.filter((m) => m.movieId !== id);
  movieArray = newMovieArray;
  storage.setMovies("movieArray", newMovieArray);
  button.parentElement.parentElement.parentElement.remove();
}
function updateSave() {
  let updatingMovie = movieArray.find(
    (movie) => movie.movieId === selectedMovie
  );
  if (updatingMovie) {
    updatingMovie.movieName = movieName.value;
    updatingMovie.movieYear = movieYear.value;
    updatingMovie.movieDirector = movieDirector.value;
    updatingMovie.movieImg = movieImg.value;
    updatingMovie.movieCategory = movieCategory.value;

    let index = movieArray.findIndex(
      (movie) => movie.movieId === selectedMovie
    );
    if (index !== -1) {
      movieArray[index] = updatingMovie;
    }
    storage.setMovies("movieArray", movieArray);
    ui.updateCard(updatingMovie);
  }
}

updateButton.addEventListener("click", updateSave);
function updateFunction(m) {
  movieName.value = m.movieName;
  movieYear.value = m.movieYear;
  movieDirector.value = m.movieDirector;
  movieImg.value = m.movieImg;
  movieCategory.value = m.movieCategory;

  addButton.disabled = true;
  updateButton.disabled = false;

  selectedMovie = m.movieId;
}


let storage = new Storage();
let movieArray = storage.getMovies();

let ui = new UI();
addButton.addEventListener("click", addFunction);
let selectedMovie = "";
let films = [
  {
    movieId: 1,
    movieName: "The Godfather",
    movieDirector: "Francis Ford Capolla",
    movieYear: "1972",
    movieImg:
      "https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys",
    movieCategory: "1",
  },
  {
    movieId: 2,
    movieName: "Harry Potter ve Ateş Kadehi",
    movieDirector: "Mike Newell",
    movieYear: "2005",
    movieImg: "https://tr.web.img2.acsta.net/pictures/bzp/01/53756.jpg",
    movieCategory: "8",
  },
  {
    movieId: 3,
    movieName: "IT",
    movieDirector: " Andy Muschietti",
    movieYear: "2017",
    movieImg:
      "https://upload.wikimedia.org/wikipedia/tr/5/58/It_%282017%29.jpg",
    movieCategory: "3",
  },
  {
    movieId: 4,
    movieName: "Lucy",
    movieDirector: "Luc Besson",
    movieYear: "2014",
    movieImg:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10479310_p_v10_ar.jpg",
    movieCategory: "6",
  },
];
films.map(m => ui.createCard(m));

function randomTwoDigit() {
  let whole = Math.floor(Math.random() * 4) + 5;
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
  let maxMovie =
  movieArray.length > 0 ? Math.max(...movieArray.map((m) => m.movieId)) : 4;
  
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

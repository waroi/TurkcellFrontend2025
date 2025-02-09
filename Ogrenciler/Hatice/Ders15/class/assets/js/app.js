const changes = document.getElementById("changes");
const poster = document.getElementById("poster-url");
const filmname = document.getElementById("film-name");
const director = document.getElementById("film-director");
const year = document.getElementById("film-year");
const type = document.getElementById("film-type");
const update = document.getElementById("update");
const addMovieBtn = document.getElementById("addMovie");
const movieModal = document.getElementById("movieModalLabel");
const addMovie = document.getElementById("addMovie");
let indexUp = -1;

const storage = new LocalStorage();
const ui = new UI();

let movies = [
    new Movie(
        "Komşum Totoro",
        "1988",
        "https://b6s54eznn8xq.merlincdn.net/Uploads/Films/komsum-totoro-film-gosterimi-20245261443314acb1d274c164489a388c28299131058.png",
        "Animasyon",
        "Hayao Miyazaki"
    ),
    new Movie(
        "Harry Potter Melez Prens",
        "2009",
        "https://static.nadirkitap.com/fotograf/746977/23/Efemera_2021051814284274697713.jpg",
        "Fantastik",
        "Alfonso Cuarón"
    ),
    new Movie(
        "Leon",
        "1994",
        "https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm137-leon-the-professional-profesyonel-poster-movie-film-satisi-753x1100.webp",
        "Aksiyon",
        "Luc Besson"
    ),
    new Movie(
        "Yıldızlararası",
        "2014",
        "https://i.pinimg.com/736x/09/d5/3d/09d53d45b686ca7e6c39c9e51412ed26.jpg",
        "Bilim Kurgu",
        "Christopher Nolan"
    ),
    new Movie(
        "Yeşil Sokak Holiganları",
        "2005",
        "https://m.media-amazon.com/images/I/51zRV+F4SVL._AC_UF894,1000_QL80_.jpg",
        "Aksiyon",
        "Lexi Alexander"
    ),
    new Movie(
        "Yaralı Yüz",
        "1983",
        "https://m.media-amazon.com/images/M/MV5BNDUzYjY0NmUtMDM4OS00Y2Q5LWJiODYtNTk0ZTk0YjZhMTg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "Aksiyon",
        "Brian De Palma"
    ),
    new Movie(
        "Başlangıç",
        "2010",
        "https://upload.wikimedia.org/wikipedia/tr/9/94/Ba%C5%9Flang%C4%B1%C3%A7.jpg",
        "Bilim Kurgu",
        "Christopher Nolan"
    ),
    new Movie(
        "Dune",
        "2021",
        "https://m.media-amazon.com/images/I/61YsswH6vQL.jpg",
        "Aksiyon",
        "Denis Villeneuve"
    ),
    new Movie(
        "Zindan Adası",
        "2010",
        "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_.jpg",
        "Aksiyon",
        "Martin Scorsese"
    ),
    new Movie(
        "Buz Devri",
        "2002",
        "https://upload.wikimedia.org/wikipedia/tr/a/ad/Buz_Devri_afis.jpg",
        "Animasyon",
        "Chris Wedge"
    ),
    new Movie(
        "Cinnet",
        "1980",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD2w9WTpwNY_tvIVts88QyDY_Jj9nJYosxg&s",
        "Korku",
        "Stanley Kubrick"
    ),
    new Movie(
        "Blade Runner 2049",
        "2017",
        "https://b6s54eznn8xq.merlincdn.net/Uploads/Films/blade-runner-2049-bicak-sirti-201791913625.jpg",
        "Bilim Kurgu",
        "Denis Villeneuve"
    )
];

if (storage.movies.length < 1) {
    movies.map(movie => storage.addStorage(movie))
} 

addMovie.addEventListener("click", function () {
    if (indexUp <= 0) {
        movieModalLabel.textContent = "Film Ekle";
    }
});
changes.addEventListener("click", () => {
    if (indexUp <= 0) {
        let movie = new Movie(filmname.value, year.value, poster.value, type.value, director.value)
        storage.addStorage(movie)
        showMovies();
    } else {
        movies[indexUp].title = filmname.value
        movies[indexUp].director = director.value
        movies[indexUp].year = year.value
        movies[indexUp].type = type.value
        movies[indexUp].poster = poster.value
        storage.updateStorage(movies[indexUp], indexUp)
        showMovies();
    }

    ui.clearForm()
});
function updateMovie(index) {
    const movie = movies[index];
    filmname.value = movie.title;
    director.value = movie.director;
    year.value = movie.year;
    type.value = movie.type;
    poster.value = movie.poster;
    indexUp = index;
    movieModal.textContent = "Güncelle";
}
function removeMovie(index) {
    storage.removeFromStorage(index)
    showMovies();
}
function showMovies() {
    let moviesStorage = storage.movies
    if (moviesStorage !== null) {
        movies = moviesStorage
    }
    if (movies !== null) {
        ui.showMovies(movies)
        showSlider();
    }
}
function showSlider() {
    let moviesStorage = storage.movies;
    if (moviesStorage !== null) {
        movies = moviesStorage;
    }
    if (movies !== null) {
        ui.showSlider(movies);
    }
}
showMovies();
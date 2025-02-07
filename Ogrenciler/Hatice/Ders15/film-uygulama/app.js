
const changes = document.getElementById("changes");
const poster = document.getElementById("poster-url");
const filmname = document.getElementById("film-name");
const director = document.getElementById("film-director");
const year = document.getElementById("film-year");
const type = document.getElementById("film-type");
const update = document.getElementById("update");
const addMovieBtn = document.getElementById("addMovie");
const movieWrap = document.getElementById("movie-wrap");
let indexUp = -1;

let movies = [
    {
        title: "Komşum Totoro",
        year: "1988",
        poster: "https://b6s54eznn8xq.merlincdn.net/Uploads/Films/komsum-totoro-film-gosterimi-20245261443314acb1d274c164489a388c28299131058.png",
        type: "Animasyon",
        director: "Hayao Miyazaki",
    },
    {
        title: "Harry Potter Melez Prens",
        year: "2009",
        poster: "https://static.nadirkitap.com/fotograf/746977/23/Efemera_2021051814284274697713.jpg",
        type: "Fantastik",
        director: "Alfonso Cuarón",
    },
    {
        title: "Leon",
        year: "1994",
        poster: "https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm137-leon-the-professional-profesyonel-poster-movie-film-satisi-753x1100.webp",
        type: "Aksiyon",
        director: "Luc Besson",
    },
    {
        title: "Yıldızlararası",
        year: "2014",
        poster: "https://i.pinimg.com/736x/09/d5/3d/09d53d45b686ca7e6c39c9e51412ed26.jpg",
        type: "Bilim Kurgu",
        director: "Christopher Nolan",
    },
    {
        title: "Yeşil Sokak Holiganları",
        year: "2005",
        poster: "https://m.media-amazon.com/images/I/51zRV+F4SVL._AC_UF894,1000_QL80_.jpg",
        type: "Aksiyon",
        director: "Lexi Alexander",
    },
    {
        title: "Yaralı Yüz",
        year: "1983",
        poster: "https://m.media-amazon.com/images/M/MV5BNDUzYjY0NmUtMDM4OS00Y2Q5LWJiODYtNTk0ZTk0YjZhMTg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        type: "Aksiyon",
        director: "Brian De Palma",
    },
    {
        title: "Başlangıç",
        year: "2010",
        poster: "https://upload.wikimedia.org/wikipedia/tr/9/94/Ba%C5%9Flang%C4%B1%C3%A7.jpg",
        type: "Bilim Kurgu",
        director: "Christopher Nolan",
    },
    {
        title: "Dune",
        year: "2021",
        poster: "https://m.media-amazon.com/images/I/61YsswH6vQL.jpg",
        type: "Aksiyon",
        director: "Denis Villeneuve",
    },
    {
        title: "Zindan Adası",
        year: "2010",
        poster: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_.jpg",
        type: "Aksiyon",
        director: "Martin Scorsese",
    },
    {
        title: "Buz Devri ",
        year: "2002",
        poster: "https://upload.wikimedia.org/wikipedia/tr/a/ad/Buz_Devri_afis.jpg",
        type: "Animasyon",
        director: "Chris Wedge",
    },
    {
        title: "Cinnet",
        year: "1980",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD2w9WTpwNY_tvIVts88QyDY_Jj9nJYosxg&s",
        type: "Korku",
        director: "Stanley Kubrick",
    },
    {
        title: "Blade Runner 2049",
        year: "2017",
        poster: "https://b6s54eznn8xq.merlincdn.net/Uploads/Films/blade-runner-2049-bicak-sirti-201791913625.jpg",
        type: "Bilim Kurgu",
        director: "Denis Villeneuve",
    },

];

changes.addEventListener("click", () => {
    if (indexUp <= 0) {
        let movie = {
            poster: poster.value,
            title: filmname.value,
            year: year.value,
            type: type.value,
            director: director.value,
            id: Math.random() * 100,
        }
        movies.push(movie)
        localStorage.setItem("movies", JSON.stringify(movies));
        showMovies();
    } else {
        movies[indexUp].title = filmname.value
        movies[indexUp].director = director.value
        movies[indexUp].year = year.value
        movies[indexUp].type = type.value
        movies[indexUp].poster = poster.value
        localStorage.setItem("movies", JSON.stringify(movies));
        showMovies();
    }

    poster.value = "";
    filmname.value = "";
    year.value = "";
    type.value = "";
    director.value = "";
});
function updateMovie(index) {
    const movie = movies[index]

    filmname.value = movie.title;
    director.value = movie.director;
    year.value = movie.year;
    type.value = movie.type;
    poster.value = movie.poster;
    indexUp = index

}
function removeMovie(index) {
    movies.splice(index, 1)
    localStorage.setItem("movies", JSON.stringify(movies));
    showMovies();
}
function showMovies() {
    let moviesStorage = JSON.parse(localStorage.getItem("movies"))
    if (moviesStorage !== null) {
        movies = moviesStorage
    }
    if (movies !== null) {
        let movieTemplate = '';
        movieWrap.innerHTML = ''
        movies.forEach((movie, index) => {
            movieTemplate += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-5 h-100">
            <div class="card h-100">
            <img src="${movie.poster}" class="card-img-top" alt="${movie.title} Poster">
            <div class="card-body h-100">
            <h5 class="card-title fw-bold">${movie.title}</h5>
            <p class="card-text">Yönetmen: ${movie.director} </p>
            <p class="card-text">Yıl: ${movie.year} </p>
            <p class="card-text">Tür: ${movie.type} </p>
           
                      <div class="d-flex gap-3">
                <button type="button" class="btn btn-update gap-3" data-bs-toggle="modal" data-bs-target="#movieModal" onclick="updateMovie(${index})" id="update">
                    <span class="text">Güncelle</span>
                </button>
                <a href="#" class="btn btn-delete d-inline-flex" onclick="removeMovie(${index})" ><span class="text">Sil</span></a>
            </div>

      
            </div>
            </div>
            </div>
            `
        });
        movieWrap.innerHTML = movieTemplate;
        showSlider();
    }
}
function showSlider() {
    const carouselItems = document.getElementById("carousel-items");
    let moviesStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesStorage !== null) {
        movies = moviesStorage;
    }
    if (movies !== null) {
        let sliderTemplate = '';
        let numberOfItemsPerSlide = 4;
        for (let i = 0; i < movies.length; i += numberOfItemsPerSlide) {
            let slideItems = movies.slice(i, i + numberOfItemsPerSlide);
            sliderTemplate += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <div class="row">
                    ${slideItems.map(movie => `
                    <div class="col-3">
                        <img src="${movie.poster}" class="d-block w-100" alt="Movie poster">
                    </div>`).join('')}
                </div>
            </div>`;
        }
        carouselItems.innerHTML = sliderTemplate;
    }
}
showMovies();
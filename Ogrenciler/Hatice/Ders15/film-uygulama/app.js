const changes = document.getElementById("changes");
const poster = document.getElementById("poster-url");
const filmname = document.getElementById("film-name");
const director = document.getElementById("film-director");
const year = document.getElementById("film-year");
const type = document.getElementById("film-type");
const update = document.getElementById("update");
const movieWrap = document.getElementById("movie-wrap");

let movies = [{title:"Speed", 
    year:"1994", 
    poster:"https://m.media-amazon.com/images/M/MV5BMDc2ODI5YWQtMmM2ZS00MTdmLWEyNWEtNmRmOGE5NGZlYWMzXkEyXkFqcGc@._V1_SX300.jpg", 
    type:"aksiyon", 
    director:"Jan de Bont"}];

changes.addEventListener("click", () => {
    let movie = {
        poster:poster.value, 
        title:filmname.value, 
        year:year.value, 
        type:type.value,
        director:director.value}
    console.log(movie);
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
});

function showMovie(){
    let template = `
    <div class="col-md-3">
            <div class="card">
                <img src="https://m.media-amazon.com/images/M/MV5BMDc2ODI5YWQtMmM2ZS00MTdmLWEyNWEtNmRmOGE5NGZlYWMzXkEyXkFqcGc@._V1_SX300.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Speed</h5>
                        <p class="card-text">Yönetmen: Jan de Bont</p>
                        <p class="card-text">Yıl:1994</p>
                        <p class="card-text">Tür: aksiyon, macera</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="update">
                            Güncelle
                        </button>
                        <a href="#" class="btn btn-primary">Sil</a>
                    </div>
                </div>
            </div>
    `
    // movieWrap
    // movies = JSON.parse(localStorage.getItem("movies"));
    // movies.forEach(movie => {
    //     var div = document.createElement("div");
    //     div.setAttribute("")
    // });
    var result = (template, movie);
}
showMovie();
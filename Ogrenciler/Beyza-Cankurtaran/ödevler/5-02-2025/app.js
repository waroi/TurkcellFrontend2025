
let films = JSON.parse(localStorage.getItem("films")) || [];

function filmJSONtoStorage() {
    fetch("./movie.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("JSON dosyası yüklenemedi!");
            }
            return res.json();
        })
        .then((movieJSON) => {
            movieJSON.forEach((movie) => {
                let filmObj = {
                    ad: movie.Title,
                    yonetmen: movie.Director,
                    yil: movie.Year,
                    tur: movie.Genre,
                    afis: movie.Images ? movie.Images[0] : "",
                };

                films.push(filmObj);
            });

            localStorage.setItem("films", JSON.stringify(films));
            console.log("Filmler başarıyla kaydedildi:", films);
        })
        .catch((err) => console.error("Hata:", err));
}

filmJSONtoStorage();

//object olarak kullanımı
/*let movie={
    name:"Avatar",
    director:"a b",
    year:"2010",
    genre:"bilim-kurgu",
}
sessionStorage.setItem("user",JSON.stringify(movie));
let getUser=JSON.parse(sessionStorage.getItem("movie"));
console.log(getUser);
console.log(typeof getUser);*/

//bu kod sayfa yüklendiğinde önceki filmlerin yüklenmesini sağlıyormuş
document.addEventListener("DOMContentLoaded", loadFilms);
//ekle butonuna basıldığında addFilm fonksiyonu çalışacak
document.getElementById("film-form").addEventListener("submit", addFilm);
function loadFilms() {
    let films = JSON.parse(localStorage.getItem("films")) || [];
    const filmListesi = document.getElementById("film-listesi");
    filmListesi.innerHTML = "";
    films.forEach((film, index) => {
        filmListesi.innerHTML += createFilmCard(film, index);
    });

}

function addFilm(event) {
    event.preventDefault();
    let film = {
        ad: document.getElementById("filmAdi").value,
        yonetmen: document.getElementById("yonetmen").value,
        yil: document.getElementById("yil").value,
        tur: document.getElementById("yil").value,
        afis: document.getElementById("afis").value
    };
    let films = JSON.parse(localStorage.getItem("films"));
    films.push(film);
    localStorage.setItem("films", JSON.stringify(films));
    loadFilms();
    document.getElementById("film-form").reset();

}
//burası şidilik innerHTML düzelticem
function createFilmCard(film, index) {
    return `
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="${film.afis}" class="card-img-top" alt="${film.ad}">
                <div class="card-body">
                    <h5 class="card-title">${film.ad}</h5>
                    <p class="card-text"><strong>Yönetmen:</strong> ${film.yonetmen}</p>
                    <p class="card-text"><strong>Yıl:</strong> ${film.yil}</p>
                    <p class="card-text"><strong>Tür:</strong> ${film.tur}</p>
                    <button class="btn btn-warning" onclick="editFilm(${index})">Güncelle</button>
                    <button class="btn btn-danger" onclick="deleteFilm(${index})">Sil</button>
                </div>
            </div>
        </div>
    `;
}
function editFilm(index) {
    let films = JSON.parse(localStorage.getItem("films"));
    let film = films[index];
    document.getElementById("filmAdi").value = film.ad;
    document.getElementById("yonetmen").value = film.yonetmen;
    document.getElementById("yil").value = film.yil;
    document.getElementById("tur").value = film.tur;
    document.getElementById("afis").value = film.afis;
    deleteFilm(index);


}
function deleteFilm(index) {
    let films = JSON.parse(localStorage.getItem("films"));
    films.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(films));
    loadFilms();
}
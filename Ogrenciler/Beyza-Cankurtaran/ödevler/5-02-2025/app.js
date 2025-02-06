
let films = JSON.parse(localStorage.getItem("films")) || [];

function filmJSONtoStorage() {
    if (films.length === 0){
        fetch("./movies.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("JSON dosyası yüklenemedi!");
            }
            return res.json();
        })
        .then((movieJSON) => {
            movieJSON.forEach((movie) => {
                let filmObj = {
                    ad: movie.title,
                    yonetmen: movie.cast[0],
                    yil: movie.year,
                    tur: movie.genres[0],
                    afis: movie.thumbnail,
                };

                films.push(filmObj);
            });

            localStorage.setItem("films", JSON.stringify(films));
            console.log("Filmler başarıyla kaydedildi:", films);
        })
        .catch((err) => console.error("Hata:", err));
    }
    
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
        filmListesi.appendChild(createFilmCard(film, index));
    });

}

function addFilm(event) {
    event.preventDefault();
    let film = {
        ad: document.getElementById("filmAdi").value,
        yonetmen: document.getElementById("yonetmen").value,
        yil: document.getElementById("yil").value,
        tur: document.getElementById("tur").value,
        afis: document.getElementById("afis").value
    };
    let films = JSON.parse(localStorage.getItem("films"));
    films.unshift(film);
    localStorage.setItem("films", JSON.stringify(films));
    loadFilms();
    document.getElementById("film-form").reset();

}

function createFilmCard(film, index) {
    // Kolon oluştur
    let colDiv = document.createElement("div");
    colDiv.classList.add("col-md-4");

    // Kart oluştur
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mb-3");

    // Resim oluştur
    let img = document.createElement("img");
    img.src = film.afis;
    img.alt = film.ad;
    img.classList.add("card-img-top");
    img.style.maxHeight="500px";

    // Kart gövdesi
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Başlık
    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = film.ad;

    // Yönetmen bilgisi
    let director = document.createElement("p");
    director.classList.add("card-text");
    director.innerHTML = `<strong>Yönetmen:</strong> ${film.yonetmen}`;

    // Yıl bilgisi
    let year = document.createElement("p");
    year.classList.add("card-text");
    year.innerHTML = `<strong>Yıl:</strong> ${film.yil}`;

    // Tür bilgisi
    let genre = document.createElement("p");
    genre.classList.add("card-text");
    genre.innerHTML = `<strong>Tür:</strong> ${film.tur}`;

    // Güncelle Butonu
    let editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-warning");
    editButton.textContent = "Güncelle";
    editButton.onclick = function() { editFilm(index); };

    // Silme Butonu
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "ms-2");
    deleteButton.textContent = "Sil";
    deleteButton.onclick = function() { deleteFilm(index); };

    // Elemanları birbirine ekle
    cardBody.appendChild(title);
    cardBody.appendChild(director);
    cardBody.appendChild(year);
    cardBody.appendChild(genre);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteButton);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);

    return colDiv; 
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
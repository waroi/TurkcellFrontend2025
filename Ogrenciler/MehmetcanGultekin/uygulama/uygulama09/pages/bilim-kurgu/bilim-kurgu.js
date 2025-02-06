document.addEventListener("DOMContentLoaded", function () {
  // Local Storage'dan filmleri yükle
  const films = JSON.parse(localStorage.getItem("films")) || [];
  // Sadece bilim kurgu türündeki filmleri filtrele
  console.log(films);

  const bilimKurguFilmleri = films.filter(
    (film) => film.genre.toLowerCase() === "bilim kurgu"
  );

  console.log(bilimKurguFilmleri);

  // Bilim kurgu filmlerini ekrana yükle
  loadFilms(bilimKurguFilmleri);
});
// Filmleri ekrana yükle
function loadFilms(films) {
  const filmList = document.getElementById("film-list");
  films.forEach(function (film) {
    // Yeni kartı oluştur
    const filmCard = document.createElement("div");
    filmCard.className = "col-md-3 mb-4"; // Her kart 3 birim genişlikte (4 kart yan yana)
    const cardBody = document.createElement("div");
    cardBody.className = "card h-100";
    const filmImg = document.createElement("img");
    filmImg.className = "card-img-top img-fluid";
    filmImg.src = film.url;
    const cardContent = document.createElement("div");
    cardContent.className = "card-body";
    const filmTitle = document.createElement("h5");
    filmTitle.className = "card-title";
    filmTitle.textContent = film.name;
    const filmDirectorName = document.createElement("p");
    filmDirectorName.className = "card-text";
    filmDirectorName.textContent = `Yönetmen: ${film.director}`;
    const filmYearDate = document.createElement("p");
    filmYearDate.className = "card-text";
    filmYearDate.textContent = `Yıl: ${film.year}`;
    const filmGenreType = document.createElement("p");
    filmGenreType.className = "card-text";
    filmGenreType.textContent = `Tür: ${film.genre}`;
    // Elementleri birleştir
    cardContent.appendChild(filmTitle);
    cardContent.appendChild(filmDirectorName);
    cardContent.appendChild(filmYearDate);
    cardContent.appendChild(filmGenreType);
    cardBody.appendChild(filmImg);
    cardBody.appendChild(cardContent);
    filmCard.appendChild(cardBody);
    // Kartı film listesine ekle
    filmList.appendChild(filmCard);
  });
}

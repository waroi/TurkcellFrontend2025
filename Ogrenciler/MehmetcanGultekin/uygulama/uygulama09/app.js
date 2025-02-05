const filmCard = document.getElementById("film-card");
const filmName = document.getElementById("film-name").value;
const filmDirector = document.getElementById("film-director").value;
const filmGenre = document.getElementById("film-genre");
const filmYear = document.getElementById("film-year");
const filmUrl = document.getElementById("film-url");

const filmButton = document.getElementById("film-button");


// const filmImg = document.createElement("img");
// filmImg.className = "card-img-top img-fluid";
// filmImg.src = filmUrl.value;

const filmTitle = document.createElement("h5");
filmTitle.textContent = filmName.value;

const filmDirectorName = document.createElement("p");
filmDirectorName.textContent = filmDirector.value;

const filmGenreType = document.createElement("p");
filmGenreType.textContent = filmGenre.value;

const filmYearDate = document.createElement("p");
filmYearDate.textContent = filmYear.value;



filmButton.addEventListener("click", function () {
    // filmCard.appendChild(filmImg);
    filmCard.appendChild(filmTitle);
    filmCard.appendChild(filmDirectorName);
    filmCard.appendChild(filmGenreType);
    filmCard.appendChild(filmYearDate);
    console.log(filmTitle);
    }); 



function UI() {}

let movieName = document.getElementById("movie-name");
let movieYear = document.getElementById("movie-year");
let movieDirector = document.getElementById("movie-director");
let movieImg = document.getElementById("movie-img");
let movieCategory = document.getElementById("movie-category");
let addButton = document.getElementById("add-btn");
let updateButton = document.getElementById("update-btn");

UI.prototype.createCard = function (m) {
  let cardSection = document.getElementById("card-section");
  let card = document.createElement("div");
  card.className = "card col-xl-3 col-lg-4 col-md-6 col-12 border-0 p-3";
  card.id = `card'${m.movieId}`;
  let movieImg = document.createElement("img");
  movieImg.className = "card-img-top";
  movieImg.setAttribute("src", m.movieImg);
  let cBody = document.createElement("div");
  cBody.className = "card-body";
  let badge = document.createElement("span");
  badge.className = "badge text-bg-dark px-3 py-2 mb-3";
  let category = document.getElementById(m.movieCategory);
  badge.textContent = category.innerText;
  let title = document.createElement("h5");
  title.className = "card-title fw-bold  text-truncate";
  title.textContent = m.movieName;
  let year = document.createElement("h6");
  year.className = "card-year";
  year.textContent = m.movieYear;
  let director = document.createElement("h6");
  director.className = "card-director";
  director.textContent = m.movieDirector;
  let point = document.createElement("div");
  let pStar = document.createElement("div");
  point.className = "d-flex justify-content-between";
  let star = document.createElement("img");
  star.className = "me-1";
  star.src = "https://img.icons8.com/?size=20&id=7856&format=png&color=f3de2b";
  let number = document.createElement("span");
  number.textContent = randomTwoDigit();
  let buttons = document.createElement("div");
  buttons.className = "d-flex justify-content-between mt-3";
  let deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger w-45";
  deleteButton.id = "delete-btn";
  deleteButton.textContent = "Sil";
  deleteButton.addEventListener("click", () =>
    deleteFunction(m.movieId, deleteButton)
  );
  let updateButton = document.createElement("button");
  updateButton.className = "btn btn-success w-45";
  updateButton.setAttribute("data-bs-toggle", "modal");
  updateButton.setAttribute("data-bs-target", "#exampleModal");
  updateButton.textContent = "Güncelle";
  updateButton.addEventListener("click", () => updateFunction(m));
  cardSection.appendChild(card);
  card.appendChild(movieImg);
  card.appendChild(cBody);
  cBody.appendChild(point);
  point.appendChild(badge);
  point.appendChild(pStar);
  pStar.appendChild(star);
  pStar.appendChild(number);
  cBody.appendChild(title);
  cBody.appendChild(year);
  cBody.appendChild(director);
  cBody.appendChild(buttons);
  buttons.appendChild(deleteButton);
  buttons.appendChild(updateButton);
};
UI.prototype.clearInput = function () {
  movieName.value = "";
  movieYear.value = "";
  movieDirector.value = "";
  movieImg.value = "";
  movieCategory.value = 0;
};

UI.prototype.updateCard = function (updatingMovie) {
  let selectedCard = document.getElementById(`card'${selectedMovie}`);
  selectedCard.children[0].src = updatingMovie.movieImg;
  let category = document.getElementById(updatingMovie.movieCategory);
  selectedCard.children[1].children[0].children[0].textContent =
    category.innerText;
  selectedCard.children[1].children[1].textContent = updatingMovie.movieName;
  selectedCard.children[1].children[2].textContent = updatingMovie.movieYear;
  selectedCard.children[1].children[3].textContent =
    updatingMovie.movieDirector;
};

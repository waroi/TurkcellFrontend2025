import { movieTypeMap } from "../../data.js";
import { createEvents } from "../index.js";
import { editMovie, deleteMovie, toggleFavorite } from "../../script.js"

export const createCard = (parentElement, movie) => {
  const col = document.createElement("div");
  col.className = "col d-flex justify-content-center mb-2";

  const card = document.createElement("div");
  card.className = "card bg-transparent text-white border-light p-3";
  card.style.width = "26rem";

  const image = document.createElement("img");
  image.className = "card-img-top";
  image.src =
    movie.poster ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GBT9UptUlr6lwozpVfkKhaEMmrnivaY4VQ&s";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.appendChild(cardBody);

  const titleLabel = document.createElement("label");
  titleLabel.className = "fw-bold fs-5"
  titleLabel.textContent = "Film"
  const title = document.createElement("p");
  title.className = "card-title fs-5 fst-italic";
  title.textContent = movie.movieName;



  const directorLabel = document.createElement("label");
  directorLabel.className = "fw-bold fs-5"
  directorLabel.textContent = "Yönetmen"
  const director = document.createElement("p");
  director.className = "card-text";
  director.textContent = movie.director;

  const yearLabel = document.createElement("label");
  yearLabel.className = "fw-bold fs-5"
  yearLabel.textContent = "Çıkış Yılı"
  const year = document.createElement("p");
  year.className = "card-text";
  year.textContent = movie.year;

  const descriptionLabel = document.createElement("label");
  descriptionLabel.className = "fw-bold fs-5"
  descriptionLabel.textContent = "Açıklama"
  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = movie.description;

  const isFavorite = document.createElement("i");
  if (movie.isFavorite === false) {
    isFavorite.className = "cart-text fa-regular fa-heart"
  } else {
    isFavorite.className = "card-text fa-solid fa-heart"
    isFavorite.style.color = "red"
  }
  createEvents("click", isFavorite, toggleFavorite, movie.id)


  const movieTypeLabel = document.createElement("label");
  movieTypeLabel.className = "fw-bold fs-5"
  movieTypeLabel.textContent = "Tür"
  const movieType = document.createElement("p");
  movieType.className = "card-text";
  movieType.textContent = movieTypeMap[movie.movieType] || "Bilinmeyen Tür";

  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger mb-2";
  deleteButton.textContent = "Delete";
  createEvents("click", deleteButton, deleteMovie, movie.id);

  const editButton = document.createElement("button");
  editButton.className = "btn btn-warning";
  editButton.textContent = "Edit";
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.setAttribute("data-bs-target", "#exampleModal");
  createEvents("click", editButton, editMovie, movie.id);





  parentElement.appendChild(col);
  cardBody.appendChild(titleLabel)
  cardBody.appendChild(title);
  cardBody.appendChild(directorLabel)
  cardBody.appendChild(director);
  cardBody.appendChild(yearLabel)
  cardBody.appendChild(year);
  cardBody.appendChild(descriptionLabel)
  cardBody.appendChild(description);
  cardBody.appendChild(isFavorite);
  cardBody.appendChild(movieTypeLabel)
  cardBody.appendChild(movieType);

  if (movieTypeMap[movie.movieType]) {
    const festivalLabel = document.createElement("label");
    festivalLabel.className = "fw-bold fs-5";
    festivalLabel.textContent = "Festival Adı";
    const festival = document.createElement("p");
    festival.className = "card-text";
    festival.textContent = movie.festivalName || "Bilinmiyor";

    const awardLabel = document.createElement("label");
    awardLabel.className = "fw-bold fs-5";
    awardLabel.textContent = "Aldığı Ödül";
    const awardText = document.createElement("p");
    awardText.className = "card-text";
    awardText.textContent = movie.award || "Yok";

    cardBody.appendChild(festivalLabel);
    cardBody.appendChild(festival);
    cardBody.appendChild(awardLabel);
    cardBody.appendChild(awardText);
  }

  cardBody.appendChild(image);
  card.appendChild(deleteButton);
  card.appendChild(editButton);
  col.appendChild(card);





  if (parentElement === favoriteList) {
    deleteButton.style.display = "none"
    editButton.style.display = "none"

    const removeBtn = document.createElement("a");
    removeBtn.className = "btn btn-secondary mt-3";
    removeBtn.textContent = "Favorilerden Kaldır";
    createEvents("click", removeBtn, toggleFavorite, movie.id)
    cardBody.appendChild(removeBtn)
  }
};

import { movieTypeMap } from "../data.js";
import { createEvents } from "../utils/index.js";
import { editMovie, deleteMovie } from "../script.js";

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

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = movie.movieName;

  const director = document.createElement("p");
  director.className = "card-text";
  director.textContent = movie.director;

  const year = document.createElement("p");
  year.className = "card-text";
  year.textContent = movie.year;

  const description = document.createElement("p");
  description.className = "card-text";
  description.textContent = movie.description;

  const isFavorite = document.createElement("p");
  isFavorite.className = "card-text";
  isFavorite.textContent = movie.isFavorite ? "Favourite" : "";

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
  cardBody.appendChild(title);
  cardBody.appendChild(director);
  cardBody.appendChild(year);
  cardBody.appendChild(description);
  cardBody.appendChild(isFavorite);
  cardBody.appendChild(movieType);
  cardBody.appendChild(image);
  card.appendChild(deleteButton);
  card.appendChild(editButton);
  col.appendChild(card);
};

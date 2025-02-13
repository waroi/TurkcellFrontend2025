import {Request} from "./request.js";

function createCard(data) {
  const card = document.createElement("div");
  card.className = "card col-12 col-md-6 col-lg-4 border-success shadow";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title text-success";
  cardTitle.textContent = data.title;

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
  cardSubtitle.textContent = data.id;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = data.body;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  return card;
}

function renderCards(data) {
  const cardList = document.querySelector(".card-list");
  data.forEach((item) => {
    const card = createCard(item);
    cardList.appendChild(card);
  });
}

Request.get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => renderCards(data))
  .catch((err) => console.error(err));

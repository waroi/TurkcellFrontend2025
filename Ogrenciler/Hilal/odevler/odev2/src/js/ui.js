const createCustomGameCard = (data) => {
  const card = document.createElement("div");
  card.className = "card w-100 h-100";

  const image = document.createElement("img");
  image.className = "card-img-top";
  image.setAttribute = ("alt", "game-image");

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title ";
  cardTitle.textContent = data.name;

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle";
  cardSubtitle.textContent = data.developer;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = data.description;

  card.appendChild(image);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  return card;
};
const createPopularGameList = (gameData) => {
  const popularGameList = document.querySelector(".popular-games");
  console.log(popularGameList);
  gameData.map((gameItem) => {
    const card = createCustomGameCard(gameItem);
    popularGameList.appendChild(card);
  });
};

export const createUi = (gameData) => {
  createPopularGameList(gameData);
};

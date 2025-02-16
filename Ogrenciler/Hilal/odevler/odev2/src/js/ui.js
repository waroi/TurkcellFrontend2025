//components
const createCustomGameCard = (data) => {
  const card = document.createElement("div");
  card.className =
    "card w-100 h-100 bg-transparent text-light border-0 position-relative";

  const overlay = document.createElement("div");
  overlay.className = "card-img-overlay";

  const image = document.createElement("img");
  image.className = "card-img-top flex-grow-1";
  image.setAttribute = ("alt", "game-image");
  image.src = data.game_image;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column justify-content-end";

  const heartIcon = document.createElement("span");
  heartIcon.className = "heart-icon card-text ";
  heartIcon.innerHTML = "❤️";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title ";
  cardTitle.textContent = data.name;

  const cardSubtitle = document.createElement("p");
  cardSubtitle.className = "card-subtitle";
  cardSubtitle.textContent = data.release_date;

  const cardText = document.createElement("div");
  cardText.className = "d-flex justify-content-between align-items-stretch";

  const price = document.createElement("p");
  price.textContent = data.price;
  price.className = "card-text ";

  card.appendChild(image);
  card.appendChild(overlay);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardText.appendChild(price);
  cardText.appendChild(heartIcon);

  card.appendChild(cardBody);

  return card;
};

const createPopularGameList = (gameData) => {
  const popularGameList = document.querySelector(".popular-games");
  console.log(popularGameList);
  gameData.map((gameItem) => {
    const card = createCustomGameCard(gameItem);
    const col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 mb-3";

    popularGameList.appendChild(col);
    col.appendChild(card);
  });
};

export const createUi = (gameData) => {
  createPopularGameList(gameData);
};

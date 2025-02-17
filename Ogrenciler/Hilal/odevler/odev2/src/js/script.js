import { Request } from "./request.js";
import { createUi, createGameModal, getModalElements } from "./ui.js";
import { Game } from "./game.js";

const gameData = [];
const gameCategories = [];

const fetchGameCategories = () => {
  Request.get("http://localhost:3000/gameCategories")
    .then((data) => {
      gameCategories.push(...data);
      createGameModal({}, gameCategories);
    })
    .catch((err) => console.error(err));
};

const fetchGames = () => {
  Request.get("http://localhost:3000/games")
    .then((data) => {
      createUi(data);
      gameData.push(...data);
      console.log(gameData);
    })
    .catch((err) => console.error(err));
};

const fetchAll = () => {
  fetchGames();
  fetchGameCategories();
};

const postGameItem = (game) => {
  Request.post("http://localhost:3000/games", game)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
};
const putGameItem = (game) => {
  Request.put(`http://localhost:3000/games/${game.id}`, game)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
};

const deleteElement = (game) => {
  Request.put(`http://localhost:3000/games/${game.id}`, game)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
};

export const addEditGameItem = (e, game) => {
  e.preventDefault();
  const modalElements = getModalElements();
  console.log(game);
  const {
    modal,
    modalTitle,
    gameName,
    developer,
    description,
    release,
    price,
    steamUrl,
    imageUrl,
    category,
  } = modalElements;
  if (game) {
    gameName.value = game?.name || "";
    developer.value = game?.developer || "";
    release.value = game?.release_date || "";
    description.value = game?.description || "";
    category.value = game?.category || "";
    steamUrl.value = game?.steam_url || "";
    imageUrl.value = game?.game_image || "";
    price.value = game?.price || "";
    const updatedGame = {
      id: game.id,
      name: gameName.value,
      developer: developer.value,
      release_date: release.value,
      description: description.value,
      category: category.value,
      steam_url: steamUrl.value,
      game_image: imageUrl.value,
      price: price.value,
    };
    putGameItem(updatedGame);
  } else {
    const game = new Game(
      gameName.value,
      developer.value,
      release.value,
      description.value,
      category.value,
      steamUrl.value,
      imageUrl.value,
      price.value
    );
    console.log(game, "game");
    postGameItem(e, game);
  }
};

fetchAll();

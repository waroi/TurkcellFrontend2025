import { Request } from "./request.js";
import { createUi, createGameModal, getModalElements } from "./ui.js";
import { Game } from "./game.js";

const gameData = [];
const gameCategories = [
  "Battle Royale",
  "RPG",
  "FPS",
  "Strategy",
  "Adventure",
  "MMORPG",
  "Survival",
  "Sports",
  "Simulation",
  "Racing",
];
let updatedGameId = null;

const fetchGames = () => {
  Request.get("http://localhost:3000/games")
    .then((data) => {
      createUi(data);
      gameData.push(...data);
      console.log(gameData);
    })
    .catch((err) => console.error(err));
};

const getInit = () => {
  fetchGames();
  createGameModal({}, gameCategories);
};

const postGameItem = (game) => {
  Request.post("http://localhost:3000/games", game)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
};

export const putGameItem = (id, updatedGame) => {
  Request.put(`http://localhost:3000/games/${id}`, updatedGame)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
};

export const deleteGameItem = (id) => {
  Request.delete(`http://localhost:3000/games/${id}`, id)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
};

export const addEditGameItem = () => {
  const modalElements = getModalElements();
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
  if (updatedGameId) {
    console.log(updatedGameId, `http://localhost:3000/games/${updatedGameId}`);
    const updatedGame = {
      id: updatedGameId,
      name: gameName.value,
      developer: developer.value,
      release_date: release.value,
      description: description.value,
      category: category.value,
      steam_url: steamUrl.value,
      game_image: imageUrl.value,
      price: price.value,
    };
    putGameItem(updatedGameId, updatedGame);
    updatedGameId = null;
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
    postGameItem(game);
  }
};

export const preEditGame = (game) => {
  const modalElements = getModalElements();
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
  console.log(category.value, game.category);
  gameName.value = game?.name || "";
  developer.value = game?.developer || "";
  release.value = game?.release_date || "";
  description.value = game?.description || "";
  category.value = game?.category || "RPG";
  steamUrl.value = game?.steam_url || "";
  imageUrl.value = game?.game_image || "";
  price.value = game?.price || "";
  updatedGameId = game.id;
};

getInit();

import { Request } from "./request.js";
import { createUi } from "./ui.js";

const gameData = [];

const fetchGames = () => {
  Request.get("http://localhost:3000/games")
    .then((data) => {
      createUi(data);
      gameData.push(...data);
      console.log(gameData);
    })
    .catch((err) => console.error(err));
};

fetchGames();

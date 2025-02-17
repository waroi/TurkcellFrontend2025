import { Game } from "./game.js";

export function fetchGames() {
    fetch("http://localhost:3000/games")
        .then(res => res.json())
        .then(data => {
            const gameList = document.getElementById("game-list");
            gameList.textContent = ""; // 

            data.forEach(gameData => {
                const game = new Game(
                    gameData.id,
                    gameData.name,
                    gameData.description,
                    gameData.category,
                    gameData.releaseDate,
                    gameData.image,
                    gameData.videoURL,
                    gameData.developer,
                    gameData.steamURL
                );
                gameList.appendChild(game.createCard());
            });
        });
}




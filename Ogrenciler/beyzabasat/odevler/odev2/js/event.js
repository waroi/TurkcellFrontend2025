import { fetchGames, addGame } from "./GameService.js";
import { renderGames } from "./UI.js";
import Game from "./Game.js";

document.addEventListener("DOMContentLoaded", async function () {
    const gameList = document.getElementById("game-list");
    const gameForm = document.getElementById("gameForm");
    const addGameModalEl = document.getElementById("addGameModal");
    const addGameModal = new bootstrap.Modal(addGameModalEl);


    const games = await fetchGames();
    renderGames(games, gameList);

    // Yeni oyun ekleme
    gameForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const newGame = new Game(
            Date.now(), 
            document.getElementById("gameName").value,
            document.getElementById("gameDescription").value,
            document.getElementById("gameCategory").value,
            document.getElementById("gameReleaseDate").value,
            document.getElementById("gameImage").value,
            document.getElementById("gameDeveloper").value,
            document.getElementById("gameSteamUrl").value
        );

        console.log("Gönderilen Veri:", newGame); 

        const addedGame = await addGame(newGame);
        console.log("JSON Server'a Eklenen Veri:", addedGame); 

        addGameModal.hide();
        gameForm.reset();

        const updatedGames = await fetchGames();
        renderGames(updatedGames, gameList);
    });
});

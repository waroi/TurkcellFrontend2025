import UI from "./UI.js";
import GameService from "./GameService.js";
import Game from "./Game.js";


document.addEventListener("DOMContentLoaded", () => {
    UI.displayGames();

    const gameForm = document.getElementById("gameForm");
    const editGameForm = document.getElementById("editGameForm");
    
    document.getElementById("openModalBtn").addEventListener("click", function () {
        UI.openAddGameModal();
    });


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

        await GameService.addGame(newGame);
        UI.displayGames();

        const addGameModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("addGameModal"));
        addGameModal.hide();
        gameForm.reset();
    });

 
    editGameForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const updatedGame = new Game(
            document.getElementById("editGameId").value,
            document.getElementById("editGameName").value,
            document.getElementById("editGameDescription").value,
            document.getElementById("editGameCategory").value,
            document.getElementById("editGameReleaseDate").value,
            document.getElementById("editGameImage").value,
            document.getElementById("editGameDeveloper").value,
            document.getElementById("editGameSteamUrl").value
        );

        await GameService.updateGame(updatedGame.id, updatedGame);
        UI.displayGames();

        const editGameModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("editGameModal"));
        editGameModal.hide();
    });
});

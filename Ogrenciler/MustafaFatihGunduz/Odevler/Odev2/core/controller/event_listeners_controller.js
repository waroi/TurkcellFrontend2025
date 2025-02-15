import GameViewController from "../view/game_view_controller.js";

class EventListenersController {
    constructor() {
        this.gameViewController = new GameViewController();
    }
    addEventListeners() {
        document.addEventListener("DOMContentLoaded", () => {
            this.gameViewController.getAllGames();
        });
        document.querySelector("#saveButton").addEventListener("click", () => {
            if (this.gameViewController.editCard) {
                this.gameViewController.updateGame();
            } else {
                this.gameViewController.addGame();
            }
        });
        document.querySelector("#searchButton").addEventListener("click", () => {
            this.gameViewController.searchGameByTitleGenrePublisher();
        });
        document.querySelector("#orderGame").addEventListener("change", (event) => {
            const selectedValue = event.target.value;
            if (selectedValue === "aToZ") {
                this.gameViewController.orderGamesByAlphabeticalOrder();
            } else if (selectedValue === "zToA") {
                this.gameViewController.orderGamesByAlphabeticalReverseOrder();
            } else if (selectedValue === "newToOld") {
                this.gameViewController.orderGamesByReleaseDate();
            }
        });
    }
}

export default EventListenersController;

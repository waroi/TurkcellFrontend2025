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
            this.gameViewController.filterGameByTitleGenrePublisher();
        });
        document.querySelector("#orderButton").addEventListener("click", () => {
            this.gameViewController.orderGamesByAlphabeticalOrder();
        });

    }
}

export default EventListenersController;

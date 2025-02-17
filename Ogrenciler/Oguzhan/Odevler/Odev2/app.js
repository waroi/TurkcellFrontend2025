import { GameController } from "./js/controller/gameController.js";

document.addEventListener("DOMContentLoaded", () => {
    GameController.initFetchs();
    GameController.initEventListeners();
    GameController.handleFormSubmit();
    GameController.deleteGameEventListener();
});



import GameService from "../api/gameService.js";
import GameListView from "../views/gameListView.js";
import ModalView from "../views/modalView.js";

export default class GameController {
  constructor() {
    this.gameListView = new GameListView(".game-list");
    this.modalView = new ModalView("#gameModal");

    this.loadGames();
    this.setupEventListeners();
  }

  setupEventListeners = () => {
    document
      .querySelector("#addGameBtn")
      .addEventListener("click", (event) => this.addGame(event));

    document.querySelectorAll(".delete-game").forEach((button) => {
      button.addEventListener("click", (event) => {
        const gameId = event.target.dataset.id;
        this.deleteGame(gameId);
      });
    });

    document.querySelectorAll(".edit-game").forEach((button) => {
      button.addEventListener("click", (event) => {
        const gameId = event.target.dataset.id;
        this.editGame(gameId);
      });
    });
  };

  loadGames = () => {
    GameService.getGames()
      .then((games) => {
        this.gameListView.renderGames(games);
        this.setupEventListeners();
      })
      .catch((error) =>
        console.error("Oyunları yüklerken hata oluştu:", error)
      );
  };

  addGame = (event) => {
    event.preventDefault();
    const gameData = this.modalView.getFormData();
    GameService.addGame(gameData)
      .then(() => this.loadGames())
      .catch((error) => console.error("Oyun eklenirken hata oluştu:", error));
  };

  deleteGame = (id) => {
    GameService.deleteGame(id)
      .then(() => this.loadGames())
      .catch((error) => console.error("Oyun silinirken hata oluştu:", error));
  };

  editGame = (id) => {
    GameService.getGames()
      .then((games) => {
        let gameToEdit;
        for (let i = 0; i < games.length; i++) {
          if (games[i].id === parseInt(id)) {
            gameToEdit = games[i];
            break;
          }
        }

        if (gameToEdit) {
          this.modalView.setFormData(gameToEdit);
        }
      })
      .catch((error) =>
        console.error("Oyun düzenlenirken hata oluştu:", error)
      );
  };
}

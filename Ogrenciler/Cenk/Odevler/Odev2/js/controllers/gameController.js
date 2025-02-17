import GameService from "../api/gameService.js";
import GameListView from "../views/gameListView.js";
import ModalView from "../views/modalView.js";

export default class GameController {
  constructor() {
    this.gameListView = new GameListView(".game-list");
    this.modalView = new ModalView("#gameModal");
    this.games = [];

    this.loadGames();
    this.setupEventListeners();
  }

  setupEventListeners = () => {
    document.querySelector("#addGameBtn").addEventListener("click", () => {
      document.querySelector("#gameForm").reset();
      delete document.querySelector("#gameForm").dataset.gameId;
      const modal = new bootstrap.Modal(document.querySelector("#gameModal"));
      modal.show();
    });

    document.querySelector("#gameForm").addEventListener("submit", (event) => {
      event.preventDefault();
      this.saveGame();
    });
    document
      .querySelector("#saveGameBtn")
      .addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Kaydet Butonuna Basıldı!");
        this.saveGame();
      });

    document.querySelector(".game-list").addEventListener("click", (event) => {
      const target = event.target;
      if (target.classList.contains("edit-game")) {
        this.editGame(target.dataset.id);
      }
      if (target.classList.contains("delete-game")) {
        this.deleteGame(target.dataset.id);
      }
    });

    document
      .querySelector("#searchInput")
      .addEventListener("input", () => this.filterGames());
    document
      .querySelector("#categoryFilter")
      .addEventListener("change", () => this.filterGames());
    document
      .querySelector("#releaseDateFilter")
      .addEventListener("change", () => this.filterGames());
    document
      .querySelector("#sortFilter")
      .addEventListener("change", () => this.filterGames());
  };

  loadGames = () => {
    GameService.getGames()
      .then((games) => {
        this.games = games;
        this.renderFilteredGames();
      })
      .catch((error) =>
        console.error("Oyunları yüklerken hata oluştu:", error)
      );
  };

  saveGame = () => {
    const gameData = this.modalView.getFormData();
    const gameId = document.querySelector("#gameForm").dataset.gameId;

    console.log("Kaydet Butonu Çalışıyor!");
    console.log("Formdan Gelen ID:", gameId);
    console.log("Formdan Gelen Data:", gameData);

    if (!gameData.name || !gameData.category || !gameData.releaseDate) {
      alert("Lütfen tüm gerekli alanları doldurun!");
      return;
    }

    if (gameId) {
      console.log("Güncelleme İşlemi Yapılıyor:", gameId);
      GameService.updateGame(gameId, gameData)
        .then(() => {
          console.log("Güncelleme Başarılı!");
          this.loadGames();
        })
        .then(() => {
          const modal = bootstrap.Modal.getInstance(
            document.querySelector("#gameModal")
          );
          modal.hide();
        })
        .catch((error) =>
          console.error("Oyun güncellenirken hata oluştu:", error)
        );
    } else {
      gameData.id = Date.now();
      console.log("Yeni Oyun Ekleniyor:", gameData);
      GameService.addGame(gameData)
        .then(() => {
          console.log("Oyun Eklendi!");
          this.loadGames();
        })
        .then(() => {
          const modal = bootstrap.Modal.getInstance(
            document.querySelector("#gameModal")
          );
          modal.hide();
        })
        .catch((error) => console.error("Oyun eklenirken hata oluştu:", error));
    }
  };

  deleteGame = (id) => {
    GameService.deleteGame(id)
      .then(() => this.loadGames())
      .catch((error) => console.error("Oyun silinirken hata oluştu:", error));
  };

  editGame = (id) => {
    const gameToEdit = this.games.find((game) => game.id === parseInt(id));

    if (gameToEdit) {
      this.modalView.setFormData(gameToEdit);
      document.querySelector("#gameForm").dataset.gameId = id;
      const modal = new bootstrap.Modal(document.querySelector("#gameModal"));
      modal.show();
    }
  };

  filterGames = () => {
    let filteredGames = [...this.games];

    const searchQuery = document
      .querySelector("#searchInput")
      .value.toLowerCase();
    const selectedCategory = document.querySelector("#categoryFilter").value;
    const selectedReleaseDate =
      document.querySelector("#releaseDateFilter").value;
    const selectedSort = document.querySelector("#sortFilter").value;

    if (searchQuery) {
      filteredGames = filteredGames.filter(
        (game) =>
          game.name.toLowerCase().includes(searchQuery) ||
          game.category.toLowerCase().includes(searchQuery) ||
          game.developer.toLowerCase().includes(searchQuery)
      );
    }

    if (selectedCategory !== "Kategori Seç") {
      filteredGames = filteredGames.filter(
        (game) => game.category === selectedCategory
      );
    }

    if (selectedReleaseDate !== "Çıkış Tarihi") {
      if (selectedReleaseDate.includes("-")) {
        const [start, end] = selectedReleaseDate.split("-").map(Number);
        filteredGames = filteredGames.filter((game) => {
          const gameYear = parseInt(game.releaseDate.split("-")[0]);
          return gameYear >= start && gameYear <= end;
        });
      } else {
        filteredGames = filteredGames.filter((game) =>
          game.releaseDate.startsWith(selectedReleaseDate)
        );
      }
    }

    if (selectedSort === "a-z") {
      filteredGames.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "z-a") {
      filteredGames.sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedSort === "cikis-yeni") {
      filteredGames.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    } else if (selectedSort === "cikis-eski") {
      filteredGames.sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
    }

    this.renderFilteredGames(filteredGames);
  };

  renderFilteredGames = () => {
    console.log("Oyunlar Render Ediliyor:", this.games);
    this.gameListView.renderGames(this.games);

    document.querySelectorAll(".edit-game").forEach((button) => {
      console.log("Düzenleme Butonu Bağlanıyor:", button.dataset.id);
      button.addEventListener("click", (event) => {
        const gameId = event.target.dataset.id;
        console.log("Düzenleme Butonuna Basıldı. ID:", gameId);
        this.editGame(gameId);
      });
    });

    document.querySelectorAll(".delete-game").forEach((button) => {
      console.log("Silme Butonu Bağlanıyor:", button.dataset.id);
      button.addEventListener("click", (event) => {
        const gameId = event.target.dataset.id;
        console.log("Silme Butonuna Basıldı. ID:", gameId);
        this.deleteGame(gameId);
      });
    });
  };
}

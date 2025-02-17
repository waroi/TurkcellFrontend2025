import GamesClient from "./clients/game-client.js";

class GameRenderer {
	constructor() {
		this.gamesGrid = document.getElementById("games-grid");
	}

	renderGames(games) {
		if (!this.gamesGrid) return;
		const gameCardsHTML = games
			.map((game) => this.createGameCard(game))
			.join("");
		this.gamesGrid.innerHTML = gameCardsHTML;
		this.attachCardEventListeners();
	}

	createGameCard(game) {
		return `
            <div class="col h-100">
            <div class="card game-card" id="game-card">
            <img
                    src="${game.image}"
                    class="card-img-top img-fluid game-card-img"
                    alt="${game.name}" />
                <div class="card-body">
                    <h5 class="card-title" >${game.name}</h5>
                    <p class="card-text game-description">
                    ${game.description}
                    </p>
                    <div class="row">
                    <button
                        class="edit-button game-archive-button-style"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#updateGameModal"
                        data-bs-whatever="@mdo"
                        id="editGame" data-id="${game.id}">
                        Oyuna Can Ver
                    </button>
                    <button class="delete-button game-archive-button-style" id="deleteGame" data-id="${game.id}">Oyunu Tarihe Göm</button>
                    <button
                    class="detail-button game-archive-button-style"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#gameDetailModal"
                        data-bs-whatever="@mdo"
                        id="detailGame" data-id="${game.id}">
                        Oyunu Mezarından Çıkar
                    </button>
                    </div>
                </div>
            </div>
            </div>
            `;
	}

	fillGameDataToInput(gameId, gamesList) {
		const game = gamesList.find((i) => i.id === gameId);
		const formName = "updateGameForm";
		const updateGameFormElement = document.forms[formName];

		if (!game || !updateGameFormElement) {
			console.error("Game not found or update form not available.");
			return;
		}

		updateGameFormElement["name"].value = game.name;
		updateGameFormElement["desc"].value = game.description;
		updateGameFormElement["category"].value = game.category;
		updateGameFormElement["releaseDate"].value = game.releaseDate;
		updateGameFormElement["image"].value = game.image;
		updateGameFormElement["developer"].value = game.developer;
		updateGameFormElement["steamUrl"].value = game.steamUrl;
	}

	gameDetailModalBody(gameId, gamesList) {
		const game = gamesList.find((i) => i.id === gameId);
		const gameDetailModalBody = document.getElementById("gameDetailModalBody");
		if (!game || !gameDetailModalBody) {
			console.error(
				"Game not found or detail modal body element not available."
			);
			return;
		}
		gameDetailModalBody.innerHTML = `
            <div class="row">
                    <div class="col-md-4 ">
                <img src="${game.image}" class="img-fluid" alt="${game.name}">
                    </div>
                    <div class="col-md-8">
                <h5>${game.name}</h5>
                <p>${game.description}</p>
                <p>Category: ${game.category}</p>
                <p>Release Date: ${game.releaseDate}</p>
                <p>Developer: ${game.developer}</p>
                <a href="${game.steamUrl}" target="_blank">Steam Link</a>
                    </div>
            </div>
            `;
	}

	attachCardEventListeners() {
		document.querySelectorAll("#deleteGame").forEach((element) => {
			element.addEventListener("click", (e) => {
				e.preventDefault();
				const gameId = e.target.dataset.id;
				gameFormHandler.deleteGame(gameId);
			});
		});
		document.querySelectorAll("#editGame").forEach((element) => {
			element.addEventListener("click", (e) => {
				const gameId = e.target.dataset.id;
				gameFormHandler.editedGameId = gameId;
				this.fillGameDataToInput(gameId, gameList);
				this.gameDetailModalBody(gameId, gameList);
			});
		});
		document.querySelectorAll("#detailGame").forEach((element) => {
			element.addEventListener("click", (e) => {
				const gameId = e.target.dataset.id;
				this.gameDetailModalBody(gameId, gameList);
			});
		});
	}
}

class GameFormHandler {
	constructor(gameRenderer) {
		this.gameRenderer = gameRenderer;
		this.editedGameId = "";
	}

	getFormData(formName) {
		const gameFormElement = document.forms[formName];
		return {
			name: gameFormElement["name"].value,
			description: gameFormElement["desc"].value,
			category: gameFormElement["category"].value,
			releaseDate: gameFormElement["releaseDate"].value,
			image: gameFormElement["image"].value,
			developer: gameFormElement["developer"].value,
			steamUrl: gameFormElement["steamUrl"].value,
		};
	}

	filterFormData() {
		const gameFilterFormElement = document.forms["filterForm"];
		return {
			category: gameFilterFormElement["category"].value,
			releaseDate: gameFilterFormElement["releaseDate"].value,
			developer: gameFilterFormElement["developer"].value,
		};
	}

	getSearchData() {
		const searchFormElement = document.forms["searchForm"];
		const searchInput = searchFormElement.querySelector("input[type='search']");
		return searchInput.value.trim().toLowerCase();
	}

	async createGame() {
		try {
			const game = this.getFormData("gameForm");
			await GamesClient.create(game);
			await this.gameRenderer.renderGameCards(gameList);
		} catch (error) {
			console.error("Error creating game:", error);
			displayErrorMessage(
				"Failed to create game. Please check the console for details."
			);
		}
	}

	async updateGame() {
		try {
			const editedData = this.getFormData("updateGameForm");
			editedData.id = this.editedGameId;
			await GamesClient.put(editedData);
			await this.gameRenderer.renderGameCards(gameList);
		} catch (error) {
			console.error("Error updating game:", error);
			displayErrorMessage(
				"Failed to update game. Please check the console for details."
			);
		}
	}

	async deleteGame(gameId) {
		if (
			!confirm("Oyunu tarihin tozlu sayfalarına gömmek istediğine emin misin?")
		) {
			return;
		}
		try {
			await GamesClient.delete(gameId);
			await this.gameRenderer.renderGameCards(gameList);
		} catch (error) {
			console.error("Error deleting game:", error);
			displayErrorMessage(
				"Failed to delete game. Please check the console for details."
			);
		}
	}
}

class SortAndFilterHandler {
	constructor(gameRenderer) {
		this.gameRenderer = gameRenderer;
	}

	searchGames(gamesList) {
		const searchTerm = gameFormHandler.getSearchData();

		if (!searchTerm) {
			this.gameRenderer.renderGames(gamesList);
			return;
		}

		const filteredGames = gamesList.filter((game) => {
			const term = searchTerm.toLowerCase();
			return (
				game.name.toLowerCase().includes(term) ||
				game.description.toLowerCase().includes(term) ||
				game.category.toLowerCase().includes(term) ||
				game.developer.toLowerCase().includes(term)
			);
		});

		this.gameRenderer.renderGames(filteredGames);
	}

	renderFilteredGames(gamesList) {
		const filters = gameFormHandler.filterFormData();

		const filteredGames = gamesList.filter((game) => {
			if (
				filters.developer &&
				!game.developer.toLowerCase().includes(filters.developer.toLowerCase())
			) {
				return false;
			}
			if (
				filters.releaseDate &&
				!game.releaseDate.includes(filters.releaseDate)
			) {
				return false;
			}
			if (
				filters.category &&
				!game.category.toLowerCase().includes(filters.category.toLowerCase())
			) {
				return false;
			}
			return true;
		});
		this.gameRenderer.renderGames(filteredGames);
	}

	async sortByAZ() {
		try {
			const games = await GamesClient.sortByAsc();
			this.gameRenderer.renderGames(games);
		} catch (error) {
			console.error("Error sorting A-Z:", error);
			displayErrorMessage(
				"Failed to sort games A-Z. Please check the console for details."
			);
		}
	}

	async sortByZA() {
		try {
			const games = await GamesClient.sortByDes();
			this.gameRenderer.renderGames(games);
		} catch (error) {
			console.error("Error sorting Z-A:", error);
			displayErrorMessage(
				"Failed to sort games Z-A. Please check the console for details."
			);
		}
	}

	async sortByReleaseDate() {
		try {
			const games = await GamesClient.sortByReleaseDate();
			this.gameRenderer.renderGames(games);
		} catch (error) {
			console.error("Error sorting by release date:", error);
			displayErrorMessage(
				"Failed to sort games by release date. Please check the console for details."
			);
		}
	}
}

class EventHandler {
	constructor(gameRenderer, gameFormHandler, sortAndFilterHandler) {
		this.gameRenderer = gameRenderer;
		this.gameFormHandler = gameFormHandler;
		this.sortAndFilterHandler = sortAndFilterHandler;
	}

	attachEventListeners(gamesList) {
		document.addEventListener("DOMContentLoaded", async () => {
			try {
				await this.gameRenderer.renderGameCards(gamesList);
			} catch (error) {
				console.error("Error rendering initial game cards:", error);
				displayErrorMessage(
					"Failed to load game data. Please check the console for details."
				);
			}
		});

		document.getElementById("searchForm").addEventListener("submit", (e) => {
			e.preventDefault();
			this.sortAndFilterHandler.searchGames(gamesList);
		});

		document.getElementById("filterForm").addEventListener("click", (e) => {
			e.preventDefault();
			this.sortAndFilterHandler.renderFilteredGames(gamesList);
		});

		document
			.getElementById("sortZA")
			.addEventListener("click", () => this.sortAndFilterHandler.sortByZA());
		document
			.getElementById("sortAZ")
			.addEventListener("click", () => this.sortAndFilterHandler.sortByAZ());
		document
			.getElementById("sortDate")
			.addEventListener("click", () =>
				this.sortAndFilterHandler.sortByReleaseDate()
			);

		document
			.getElementById("submitForm")
			.addEventListener("click", () => this.gameFormHandler.createGame());
		document
			.getElementById("updateForm")
			.addEventListener("click", () => this.gameFormHandler.updateGame());

		document.addEventListener("click", function (e) {
			const gameCard = e.target.closest(".game-card");
			if (gameCard) {
				gameCard.style.filter = "none";
			}
		});
	}
}

let gameList = [];
const gameRenderer = new GameRenderer();
const gameFormHandler = new GameFormHandler(gameRenderer);
const sortAndFilterHandler = new SortAndFilterHandler(gameRenderer);
const eventHandler = new EventHandler(
	gameRenderer,
	gameFormHandler,
	sortAndFilterHandler
);

document.addEventListener("DOMContentLoaded", async () => {
	try {
		gameList = await GamesClient.getAll();
		gameRenderer.renderGames(gameList);
		eventHandler.attachEventListeners(gameList);
	} catch (error) {
		console.error("Failed to initialize app:", error);
		displayErrorMessage("Uygulama başlatılamadı. Lütfen konsolu kontrol edin.");
	}
});

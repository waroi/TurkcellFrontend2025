import { GameService } from "./storage.js";
import { filterGames } from "./filter.js";
import { GameUI } from "./ui.js";
import Game from "./game.js";

const gamesContainer = document.querySelector(".card-container");
let gameId = null;

export const showGames = async () => {
	try {
		const games = await GameService.fetchGames();
		games.forEach((game) => {
			const gameCard = GameUI.createGameCard(game);
			gamesContainer.appendChild(gameCard);
		});
	} catch (error) {
		console.log("Error fetching games:", error.message);
		GameUI.errorMessageUI();
	}
};

const showSortedGames = async (sortBy) => {
	try {
		gamesContainer.innerHTML = "";
		const sortedGames = await filterGames.sortGames(sortBy);
		sortedGames.forEach((game) => {
			const gameCard = GameUI.createGameCard(game);
			gamesContainer.appendChild(gameCard);
		});
	} catch (error) {
		console.log("Error fetching games:", error.message);
		GameUI.errorMessageUI();
	}
};

const showFilteredGames = async (category, date) => {
	try {
		gamesContainer.innerHTML = "";
		const filteredGames = await filterGames.filterGames(category, date);
		filteredGames.forEach((game) => {
			const gameCard = GameUI.createGameCard(game);
			gamesContainer.appendChild(gameCard);
		});
	} catch (error) {
		console.log("Error fetching games:", error.message);
		GameUI.errorMessageUI();
	}
};

export const showSearchedGames = async (e) => {
	try {
		gamesContainer.innerHTML = "";
		const filteredGames = await filterGames.searchGames(e.target.value);
		if (!filteredGames || !filteredGames.length) {
			GameUI.errorMessageUI();
			return;
		}
		filteredGames.forEach((game) => {
			const gameCard = GameUI.createGameCard(game);
			gamesContainer.appendChild(gameCard);
		});
	} catch (error) {
		console.log("Error fetching games:", error.message);
		GameUI.errorMessageUI();
	}
};

async function handleGameFormSubmit(e) {
	try {
		e.preventDefault();
		const gameElements = GameUI.getFormElements();

		if (!gameId) {
			await addNewGame(
				gameElements.name.value,
				gameElements.description.value,
				gameElements.category.value,
				gameElements.poster.value,
				gameElements.releaseDate.value,
				gameElements.producer.value,
				gameElements.steamUrl.value
			);
			return;
		}

		const updateGameElements = {
			name: gameElements.name.value,
			description: gameElements.description.value,
			category: gameElements.category.value,
			poster: gameElements.poster.value,
			releaseDate: gameElements.releaseDate.value,
			producer: gameElements.producer.value,
			steamUrl: gameElements.steamUrl.value,
		};

		await GameService.updateGame(gameId, updateGameElements);
		gameId = null;
	} catch (error) {
		console.error("Oyun eklenirken bir hata oluştu.", error.message);
	}
}

async function addNewGame(
	name,
	description,
	category,
	poster,
	releaseDate,
	producer,
	steamUrl
) {
	const newGame = new Game(
		name,
		description,
		category,
		poster,
		releaseDate,
		producer,
		steamUrl
	);
	try {
		await GameService.createGame(newGame);
		console.log("Oyun başarıyla eklendi.", newGame);
	} catch (error) {
		console.error("Oyun eklenirken bir hata oluştu.", error.message);
	}
}

export async function deleteGame(id) {
	try {
		await GameService.deleteGame(id);
		console.log("Oyun başarıyla silindi:");
	} catch (error) {
		console.error("Oyun silinirken bir hata oluştu:", error.message);
	}
}

export async function updateGame(id) {
	try {
		const game = await GameService.fetchGameById(id);
		const formElements = GameUI.getFormElements();
		gameId = id;
		formElements.name.value = game.name;
		formElements.description.value = game.description;
		formElements.category.value = game.category;
		formElements.releaseDate.value = game.releaseDate;
		formElements.poster.value = game.poster;
		formElements.producer.value = game.producer;
		formElements.steamUrl.value = game.steamUrl;
	} catch (error) {
		console.error(error.message);
	}
}

document
	.getElementById("addGameForm")
	.addEventListener("submit", handleGameFormSubmit);

document.querySelectorAll(".sorting-dropdown").forEach((item) => {
	item.addEventListener("click", (event) => {
		const selectedValue = event.target.getAttribute("data-value");
		showSortedGames(selectedValue);
	});
});

document.querySelectorAll(".category-dropdown").forEach((item) => {
	item.addEventListener("click", (event) => {
		const selectedValue = event.target.getAttribute("data-value");
		showFilteredGames(selectedValue, null);
	});
});

document.querySelectorAll(".date-dropdown").forEach((item) => {
	item.addEventListener("click", (event) => {
		const selectedValue = event.target.getAttribute("data-value");
		showFilteredGames(null, selectedValue);
	});
});

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", showSearchedGames);

showGames();
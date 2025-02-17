import GamesClient from "./clients/game-client.js";

// const games = await GamesClient.getAll(); //!SORULACAK
let gamesList = [];
let editedGameId = "";

//! HATA YÖNETİMİ YAPILACAK!!!!!

//! Search işlemi daha sonra yapılacak
function getSearchData() {
	const searchFormElement = document.forms["searchForm"];
	const searchInput = searchFormElement.querySelector("input[type='search']");
	return searchInput.value.trim().toLowerCase();
}

function renderGames(games) {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const gameCardsHTML = games.map((game) => createGameCard(game)).join("");
	gameGrid.innerHTML = gameCardsHTML;

	document.querySelectorAll("#deleteGame").forEach((element) =>
		element.addEventListener("click", (e) => {
			e.preventDefault();
			const gameId = e.target.dataset.id;
			deleteGame(gameId);
		})
	);
	document.querySelectorAll("#editGame").forEach((element) => {
		element.addEventListener("click", (e) => {
			const gameId = e.target.dataset.id;
			editedGameId = gameId;
			fillGameDataToInput(gameId);
			gameDetailModalBody(gameId);
		});
	});
}

function searchGames(gamesList) {
	const searchTerm = getSearchData();

	if (!searchTerm) {
		renderGames(gamesList);
		return;
	}

	const filteredGames = gamesList.filter((game) => {
		return (
			game.name.toLowerCase().includes(searchTerm) ||
			game.description.toLowerCase().includes(searchTerm) ||
			game.category.toLowerCase().includes(searchTerm) ||
			game.developer.toLowerCase().includes(searchTerm)
		);
	});

	renderGames(filteredGames);
}

function filterFormData() {
	const gameFilterFormElement = document.forms["filterForm"];
	const filteredData = {
		category: gameFilterFormElement["category"].value,
		releaseDate: gameFilterFormElement["releaseDate"].value,
		developer: gameFilterFormElement["developer"].value,
	};
	return filteredData;
}

function renderFilteredGames(gamesList) {
	const filters = filterFormData();

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

	renderGames(filteredGames);
}

function getFormData(formName) {
	const gameFormElement = document.forms[formName];
	const game = {
		name: gameFormElement["name"].value,
		description: gameFormElement["desc"].value,
		category: gameFormElement["category"].value,
		releaseDate: gameFormElement["releaseDate"].value,
		image: gameFormElement["image"].value,
		developer: gameFormElement["developer"].value,
		steamUrl: gameFormElement["steamUrl"].value,
	};
	return game;
}

async function renderGameCards() {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const games = await GamesClient.getAll();
	gamesList = games;
	const gameCardsHTML = games?.map((game) => createGameCard(game)).join("");
	gameGrid.innerHTML = gameCardsHTML;
}

function fillGameDataToInput(gameId) {
	const game = gamesList.find((i) => i.id === gameId);
	const formName = "updateGameForm";
	const updateGameFormElement = document.forms[formName];

	updateGameFormElement["name"].value = game.name;
	updateGameFormElement["desc"].value = game.description;
	updateGameFormElement["category"].value = game.category;
	updateGameFormElement["releaseDate"].value = game.releaseDate;
	updateGameFormElement["image"].value = game.image;
	updateGameFormElement["developer"].value = game.developer;
	updateGameFormElement["steamUrl"].value = game.steamUrl;
}

async function createGame() {
	const game = getFormData("gameForm");
	await GamesClient.create(game);
	await renderGameCards();
}

async function updateGame() {
	const editedData = getFormData("updateGameForm");
	editedData.id = editedGameId;
	await GamesClient.put(editedData);
	await renderGameCards();
}

async function deleteGame(gameId) {
	await GamesClient.delete(gameId);
	await renderGameCards();
}

function gameDetailModalBody(gameId) {
	const game = gamesList.find((i) => i.id === gameId);
	const gameDetailModalBody = document.getElementById("gameDetailModalBody");
	gameDetailModalBody.innerHTML = `
				<div class="row">
						<div class="col-md-4 ">
								<img src="${game.image}" class="img-fluid"	alt="${game.name}">
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

function createGameCard(game) {
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
						class="edit-button"
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#updateGameModal"
							data-bs-whatever="@mdo"
							id="editGame" data-id="${game.id}">
							Edit Game 
						</button>
      <button class="delete-button" id="deleteGame" data-id="${game.id}">Delete</button>
      <button
							type="button"
							data-bs-toggle="modal"
							data-bs-target="#gameDetailModal"
							data-bs-whatever="@mdo"
							id="detailGame" data-id="${game.id}">
							Show Detail Archived Game
						</button>
						</div>
					</div>
				</div>
 </div>
    `;
}

async function sortByAZ() {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const games = await GamesClient.sortByAsc();
	const gameCardsHTML = games?.map((game) => createGameCard(game)).join("");
	gameGrid.innerHTML = gameCardsHTML;
}

async function sortByZA() {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const games = await GamesClient.sortByDes();
	const gameCardsHTML = games?.map((game) => createGameCard(game)).join("");
	gameGrid.innerHTML = gameCardsHTML;
}

async function sortByReleaseDate() {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const games = await GamesClient.sortByReleaseDate();
	const gameCardsHTML = games?.map((game) => createGameCard(game)).join("");
	gameGrid.innerHTML = gameCardsHTML;
}

document.addEventListener("DOMContentLoaded", async () => {
	await renderGameCards();
	document.querySelectorAll("#deleteGame").forEach((element) =>
		element.addEventListener("click", (e) => {
			e.preventDefault();
			const gameId = e.target.dataset.id;
			deleteGame(gameId);
		})
	);
	document.querySelectorAll("#editGame").forEach((element) =>
		element.addEventListener("click", (e) => {
			const gameId = e.target.dataset.id;
			editedGameId = gameId;
			fillGameDataToInput(gameId);
		})
	);
	document.querySelectorAll("#detailGame").forEach((element) =>
		element.addEventListener("click", (e) => {
			const gameId = e.target.dataset.id;
			gameDetailModalBody(gameId);
		})
	);

	document
		.getElementById("searchForm")
		.addEventListener("submit", function (e) {
			e.preventDefault();
			searchGames(gamesList);
		});
	document.getElementById("filterForm").addEventListener("click", function (e) {
		e.preventDefault();
		renderFilteredGames(gamesList);
	});
});
document.getElementById("sortZA").addEventListener("click", sortByZA);
document.getElementById("sortAZ").addEventListener("click", sortByAZ);
document
	.getElementById("sortDate")
	.addEventListener("click", sortByReleaseDate);

document.getElementById("submitForm").addEventListener("click", createGame);
document.getElementById("updateForm").addEventListener("click", updateGame);
document.addEventListener("click", function (e) {
	const gameCard = e.target.closest(".game-card");
	if (gameCard) {
		gameCard.style.filter = "none";
	}
});

//? Modal yapıldı
//? Json serverde veriler tutuluyor
//? Listeme yapıldı.
//? TODO: cardlara tıklandığında modal açılacak ve detaylar görünecek => YAPILDI!
//? TODO: sıralama, arama butonları eklendi logic eklenecek. => YAPILDI!
//? TODO: Güncelleme işlemi yapılacak. => YAPILDI!
//? TODO: Filtreleme yapılacak => YAPILDI!

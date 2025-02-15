import GamesClient from "./clients/game-client.js";

// const games = await GamesClient.getAll(); //!SORULACAK
let gamesList = [];
let editedGameId = "";
//! Delete butonuna basıldığında sayfa yenileniyor, neden!!

// console.log(games);

//! HATA YÖNETİMİ YAPILACAK!!!!!

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

function createGameCard(game) {
	return `
 <div class="col h-100">
    <div class="card">
					<img
						src="${game.image}"
						class="card-img-top"
						alt="${game.name}" />
					<div class="card-body">
						<h5 class="card-title">${game.name}</h5>
						<p class="card-text">
      ${game.description}
						</p>
						<a
							type="button"
							class="btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#updateGameModal"
							data-bs-whatever="@mdo"
							id="editGame" data-id="${game.id}">
							Edit Game 
						</a>
      <a class="btn btn-danger" id="deleteGame" data-id="${game.id}">Delete</a>
					</div>
				</div>
 </div>
    `;
}

async function sortByAZ() {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const games = await GamesClient.sortByDes();
	const gameCardsHTML = games?.map((game) => createGameCard(game)).join("");
	gameGrid.innerHTML = gameCardsHTML;
}
async function sortByZA() {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const games = await GamesClient.sortByAsc();
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

async function renderGameCards() {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const games = await GamesClient.getAll();
	gamesList = games;
	const gameCardsHTML = games?.map((game) => createGameCard(game)).join("");
	gameGrid.innerHTML = gameCardsHTML;
}

document.addEventListener("DOMContentLoaded", async () => {
	await renderGameCards();
	document.querySelectorAll("#deleteGame").forEach((element) =>
		element.addEventListener("click", (e) => {
			console.log("delete");
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
});
document.getElementById("sortAZ").addEventListener("click", sortByAZ);
document.getElementById("sortZA").addEventListener("click", sortByZA);
document
	.getElementById("sortDate")
	.addEventListener("click", sortByReleaseDate);

document.getElementById("submitForm").addEventListener("click", createGame);
document.getElementById("updateForm").addEventListener("click", updateGame);

//? Modal yapıldı
//? Json serverde veriler tutuluyor
//? Listeme yapıldı.
// TODO: cardlara tıklandığında modal açılacak ve detaylar görünecek => YAPILDI!
// TODO: Filtreleme, sıralama, arama butonları eklendi logic eklenecek.
// TODO: Güncelleme işlemi yapılacak.

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
		date: gameFormElement["date"].value,
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
	updateGameFormElement["date"].value = game.date;
	updateGameFormElement["image"].value = game.image;
	updateGameFormElement["developer"].value = game.developer;
	updateGameFormElement["steamUrl"].value = game.steamUrl;
}

async function createGame() {
	const game = getFormData("gameForm");
	await GamesClient.create(game);
}

async function updateGame() {
	const editedData = getFormData("updateGameForm");
	editedData.id = editedGameId;
	await GamesClient.put(editedData);
}

async function deleteGame(gameId) {
	await GamesClient.delete(gameId);
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
						<button
							type="button"
							class="btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#updateGameModal"
							data-bs-whatever="@mdo"
							id="editGame" data-id="${game.id}">
							Edit Game 
						</button>
      <button class="btn btn-danger" id="deleteGame" data-id="${game.id}">Delete</button>
					</div>
				</div>
 </div>
    `;
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

document.getElementById("submitForm").addEventListener("click", createGame);
document.getElementById("updateForm").addEventListener("click", updateGame);

//? Modal yapıldı
//? Json serverde veriler tutuluyor
//? Listeme yapıldı.
// TODO: cardlara tıklandığında modal açılacak ve detaylar görünecek => YAPILDI!
// TODO: Filtreleme, sıralama, arama butonları eklendi logic eklenecek.
// TODO: Güncelleme işlemi yapılacak.

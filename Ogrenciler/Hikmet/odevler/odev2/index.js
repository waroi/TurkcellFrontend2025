import GamesClient from "./clients/game-client.js";

// const games = await GamesClient.getAll(); //!SORULACAK
//! Delete butonuna basıldığında sayfa yenileniyor, neden!!

// console.log(games);

//! HATA YÖNETİMİ YAPILACAK!!!!!

function getFormData() {
	const formName = "gameForm";
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

async function createGame() {
	const game = getFormData();
	await GamesClient.create(game);
}

async function deleteGame(gameId) {
	await GamesClient.delete(gameId);
}

function createGameCard(game) {
	return `
 <div class="col h-100">
    <div class="card"  id=${game.id}>
					<img
						src="${game.image}"
						class="card-img-top"
						alt="${game.name}" />
					<div class="card-body">
						<h5 class="card-title">${game.name}</h5>
						<p class="card-text">
      ${game.description}
						</p>
						<button class="btn btn-primary">Edit</button>
      <button type="button" class="btn btn-danger" id="deleteGame" data-id="${game.id}">Delete</button>
					</div>
				</div>
 </div>

    `;
}

async function renderGameCards() {
	const gameGrid = document.getElementById("games-grid");
	if (!gameGrid) return;
	const games = await GamesClient.getAll();
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
});
document.getElementById("submitForm").addEventListener("click", createGame);

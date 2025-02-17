import { deleteGame, updateGame } from "./script.js";

const gamesContainer = document.querySelector(".card-container");

export class GameUI {

	static createGameCard(game) {
		const col = document.createElement("div");
		col.className = "col-lg-3 col-md-4 col-sm-6 col-12 d-flex";

		const card = document.createElement("div");
		card.className = "card text-white border-light p-3 h-80";
		card.style.width = "26rem";

		const image = document.createElement("img");
		image.src = game.poster;
		image.className = "card-img-top w-50 d-flex align-items-center justify-content-center mx-auto";
		image.alt = game.name;
		card.appendChild(image);

		const cardBody = document.createElement("div");
		cardBody.className = "card-body";
		card.appendChild(cardBody);

		const title = document.createElement("h5");
		title.className = "card-title";
		title.textContent = game.name;
		cardBody.appendChild(title);

		const titleBottom = document.createElement("img");
		titleBottom.src = "https://64.media.tumblr.com/0d81e425fd804faea9149946d72b44e3/tumblr_inline_n37smc4myx1qhwjx8.png";
		titleBottom.className = "card-bottom w-100";
		cardBody.appendChild(titleBottom);

		const description = document.createElement("p");
		description.className = "card-text";
		description.textContent = game.description; 
		cardBody.appendChild(description);

		const infoContainer = document.createElement("div");
		infoContainer.className = "d-flex justify-content-between w-100"; 

		const category = document.createElement("p");
		category.className = "card-text mb-0";
		category.textContent = game.category;

		const releaseDate = document.createElement("p");
		releaseDate.className = "card-text mb-0";
		releaseDate.textContent = game.releaseDate;

		infoContainer.appendChild(category);
		infoContainer.appendChild(releaseDate);
		cardBody.appendChild(infoContainer);

		const cardFooter = document.createElement("div");
		cardFooter.className = "card-footer bg-transparent d-flex justify-content-end gap-2";
		card.appendChild(cardFooter);

		const deleteButton = document.createElement("button");
		deleteButton.addEventListener("click", deleteGame);
		deleteButton.className = "card-button";
		deleteButton.textContent = "Delete";
		deleteButton.setAttribute("data-id", game.id);
		deleteButton.addEventListener("click", (e) => {
			e.stopPropagation();
			const gameId = e.target.getAttribute("data-id");
			deleteGame(gameId);
		});
		cardFooter.appendChild(deleteButton);

		const updateButton = document.createElement("button");
		updateButton.className = "card-button";
		updateButton.textContent = "Update";
		updateButton.setAttribute("data-id", game.id);
		updateButton.addEventListener("click", (e) => {
			e.stopPropagation();
			const gameId = e.target.getAttribute("data-id");
			updateGame(gameId);
		});

		updateButton.setAttribute("data-bs-toggle", "modal");
		updateButton.setAttribute("data-bs-target", "#newGameModal");
		cardFooter.appendChild(updateButton);

		col.appendChild(card);
		card.addEventListener("click", () => {openGameModal(game)});

		return col;
	}

	static errorMessageUI = () => {
		const errorImage = document.createElement("img");
		errorImage.src = "/assets/images/not-found.png";
		errorImage.className = "w-25";

		const errorText = document.createElement("p");
		errorText.textContent = "UPS! Oyunlar yüklenirken bir hata oluştu";
		errorText.className = "text-center";

		gamesContainer.appendChild(errorImage);
		gamesContainer.appendChild(errorText);
	};

	static getFormElements = () => {
		const name = document.getElementById("name");
		const description = document.getElementById("description");
		const category = document.getElementById("category");
		const poster = document.getElementById("poster");
		const releaseDate = document.getElementById("releaseDate");
		const producer = document.getElementById("producer");
		const steamUrl = document.getElementById("steamUrl");

		return {
			name,
			description,
			category,
			poster,
			releaseDate,
			producer,
			steamUrl,
		};
	};
}

function openGameModal(game) {
	document.getElementById("modalGameTitle").textContent = game.name;
	document.getElementById("modalGameImage").src = game.poster;
	document.getElementById("modalGameDescription").textContent = game.description;
	document.getElementById("modalGameCategory").textContent = game.category;
	document.getElementById("modalGameReleaseDate").textContent = game.releaseDate;
	document.getElementById("modalGameProducer").textContent = game.producer;
	document.getElementById("modalGameSteam").href = game.steamUrl;
	const modal = new bootstrap.Modal(document.getElementById("gameDetailModal"));
	modal.show();
}
import { Request } from './request.js';
import { UI } from './ui.js';

// const gamesSection = document.querySelector('#gamesSection');
let ui;
let games = [];
let allGames = [];
let updateIndex = null;

Request.get("./assets/games.json")
  .then((data) => {
    games = data.games;
    allGames = [...games];
    ui = new UI(games);
    ui.createGameCards(games, games);
    document.querySelectorAll('.update-button').forEach((button, i) => {
      button.addEventListener("click", function () {
        ui.openUpdateModal(i);
      });
    });
  })
  .catch((err) => {
    console.error('Veri alınırken hata oluştu:', err);
  });

function sortGames(option) {
  let sortedGames = [...games];
  if (option === 'a-z') {
    sortedGames.sort((gameA, gameB) => gameA.name.localeCompare(gameB.name));
  } else if (option === 'z-a') {
    sortedGames.sort((gameA, gameB) => gameB.name.localeCompare(gameA.name));
  } else if (option === 'yeni') {
    sortedGames.sort((gameA, gameB) => new Date(gameB.date) - new Date(gameA.date));
  } else if (option === 'eski') {
    sortedGames.sort((gameA, gameB) => new Date(gameA.date) - new Date(gameB.date));
  } else {
    sortedGames = [...allGames];
  }
  games = sortedGames;
  ui.createGameCards(games, games);
}

document.getElementById('sort-option').addEventListener('change', (e) => {
  const sortOption = e.target.value;
  sortGames(sortOption);
});

function filterGamesByType(type) {
  if (type) {
    games = allGames.filter(game => game.type.toLowerCase() === type.toLowerCase());
  } else {
    games = [...allGames];
  }
  ui.createGameCards(games, games);
}

document.getElementById('filter-category').addEventListener('change', (e) => {
  const selectedType = e.target.value;
  filterGamesByType(selectedType);
});

function deleteGame(gameId) {
  games = games.filter(game => game.id !== parseInt(gameId));
  Request.delete(`./assets/games.json/${gameId}`)
    .then(() => {
      const gameCard = document.getElementById(`game-card-${gameId}`);
      if (gameCard) {
        gameCard.remove();
      }
    })
    .catch((err) => {
      console.error('Veri silme işlemi sırasında hata oluştu:', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.delete-game').forEach((button) => {
    button.addEventListener('click', () => {
      const gameId = button.getAttribute('data-game-id');
      deleteGame(gameId);
    });
  });
});

document.getElementById('changes').addEventListener('click', function () {
  let updateIndex = ui.getUpdateIndex();
  if (updateIndex === null) {
    console.error("Güncellenecek oyun seçilmedi!");
    return;
  }
  const updatedGame = {
    poster: document.getElementById('game-poster-url').value,
    name: document.getElementById('game-name').value,
    type: document.getElementById('game-type').value,
    date: document.getElementById('game-year').value,
    steam_url: document.getElementById('game-steam-url').value,
    director: document.getElementById('game-director').value,
    description: document.getElementById('game-description').value
  };
  ui.saveChanges(updatedGame, updateIndex);
  const modalElement = document.getElementById("gameModal");
  // const modalInstance = bootstrap.Modal.getInstance(modalElement);
  // if (modalInstance) {
  //   modalInstance.hide();
  // }
  ui.setUpdateIndex(null);
});

document.getElementById("searchForm").addEventListener("click", function () {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm) ||
    game.type.toLowerCase().includes(searchTerm) ||
    game.director.toLowerCase().includes(searchTerm)
  );
  ui.createGameCards(filteredGames, filteredGames);
});

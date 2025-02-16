import { Request } from './request.js';
import { UI } from './ui.js';

const gamesSection = document.querySelector('#gamesSection');
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
    filterGamesByType();
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
  if (option === 'a-z') {
    games.sort((gameA, gameB) => gameA.name.localeCompare(gameB.name));
  } else if (option === 'z-a') {
    games.sort((gameA, gameB) => gameB.name.localeCompare(gameA.name));
  } else if (option === 'yeni') {
    games.sort((gameA, gameB) => new Date(gameB.date) - new Date(gameA.date));
  } else if (option === 'eski') {
    games.sort((gameA, gameB) => new Date(gameA.date) - new Date(gameB.date));
  } else {
    games = [...allGames];
  }
  ui.createGameCards(games, games);
}

document.getElementById('sort-option').addEventListener('change', (e) => {
  const sortOption = e.target.value;
  sortGames(sortOption);
});

function filterGamesByType(type) {
  if (type) {
    games = allGames.filter(game => {
      return game.type.toLowerCase() === type.toLowerCase();
    });
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
    .then((message) => {
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
  const deleteButtons = document.querySelectorAll('.delete-game');
  deleteButtons.forEach((button) => {
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
  // console.log("Güncellenen oyun index:", updateIndex);  
  // console.log("Güncellemeden önce oyun:", games[updateIndex]);
  const updatedGame = {
    poster: document.getElementById('game-poster-url').value,
    name: document.getElementById('game-name').value,
    type: document.getElementById('game-type').value,
    date: document.getElementById('game-year').value,
    steam: document.getElementById('game-steam-url').value,
    director: document.getElementById('game-director').value,
    description: document.getElementById('game-description').value
  };
  games[updateIndex] = updatedGame;
  // console.log("Güncellemeden sonra oyun:", games[updateIndex]);
  document.getElementById('games-wrap').innerHTML = "";
  ui.createGameCards(games, games);
  const modal = new bootstrap.Modal(document.getElementById('gameModal'));
  modal.hide();
  updateIndex = null;
});

function openUpdateModal(index) {
  updateIndex = index;
  const game = games[index];

  document.getElementById('game-poster-url').value = game.poster || '';
  document.getElementById('game-name').value = game.name || '';
  document.getElementById('game-type').value = game.type || '';
  document.getElementById('game-year').value = game.date || '';
  document.getElementById('game-steam-url').value = game.steam || '';
  document.getElementById('game-director').value = game.director || '';
  document.getElementById('game-description').value = game.description || '';

  const modal = new bootstrap.Modal(document.getElementById('gameModal'));
  modal.show();
}

document.addEventListener("DOMContentLoaded", function () {
  createGameControls();
});

function createGameControls() {
  const modal = new bootstrap.Modal(document.getElementById('gameModal'));
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.update-game').forEach((button, index) => {
    button.addEventListener('click', () => openUpdateModal(index));
  });
});

document.getElementById('searchForm').addEventListener('click', function (event) {
  // sayfa sürekli yenilenmesin diye gpt önermişti fakat button type düzenlemesi yapınca gerek kalmadı
  // event.preventDefault(); 

  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredGames = games.filter(game => {
    return game.name.toLowerCase().includes(searchTerm) ||
      game.type.toLowerCase().includes(searchTerm) ||
      game.director.toLowerCase().includes(searchTerm);
  });

  ui.createGameCards(filteredGames, filteredGames);
});

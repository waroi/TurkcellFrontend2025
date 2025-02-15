import { Request } from './request.js';
import { UI } from './ui.js';

const gamesSection = document.querySelector('#gamesSection');
const ui = new UI();
let games = [];
let allGames = [];

Request.get("./assets/games.json")
    .then((data) => {
        games = data.games;  
        allGames = [...games]; 
        ui.createGameCards(games, games);  
        filterGamesByType(); 
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

document.addEventListener("DOMContentLoaded", async () => {

  const games = await Storage.fetchGames();


  UI.renderGames(games);

 
  setupEventListeners();
});

function setupEventListeners() {
 
  const addGameForm = document.getElementById('add-game-form');
  if (addGameForm) {
      addGameForm.addEventListener('submit', async (event) => {
          event.preventDefault(); 

          const name = document.getElementById('game-name').value;
          const description = document.getElementById('game-description').value;
          const category = document.getElementById('game-category').value;
          const releaseDate = document.getElementById('game-release').value;
          const imageUrl = document.getElementById('game-image').value;
          const producer = document.getElementById('game-producer').value;
          const steamUrl = document.getElementById('game-steam-url').value;
    
          const newGame = {
              name,
              description,
              category,
              releaseDate,
              imageUrl,
              producer,
              steamUrl
          };

        
          await Storage.addGame(newGame);
          const games = await Storage.fetchGames();
          UI.renderGames(games);
          addGameForm.reset();
      });
  }

  document.getElementById('searchBar').addEventListener('input', function (event) {
      const query = event.target.value.toLowerCase();
      const gameCards = document.querySelectorAll('.game-card');

      gameCards.forEach(card => {
          const gameName = card.querySelector('.card-title').textContent.toLowerCase();
          const gameDescription = card.querySelector('.card-text').textContent.toLowerCase();

          if (gameName.includes(query) || gameDescription.includes(query)) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  });


  document.getElementById('sortSelect').addEventListener('change', function () {
      const sortOption = this.value;
      const gameList = document.getElementById('gameList');
      let games = Array.from(gameList.children);

      games.sort((a, b) => {
          const nameA = a.querySelector('.card-title').textContent.toLowerCase();
          const nameB = b.querySelector('.card-title').textContent.toLowerCase();
          const dateA = new Date(a.querySelector('.card-date').textContent);
          const dateB = new Date(b.querySelector('.card-date').textContent);

          if (sortOption === 'name_asc') {
              return nameA.localeCompare(nameB);
          } else if (sortOption === 'name_desc') {
              return nameB.localeCompare(nameA);
          } else if (sortOption === 'date_up') {
              return dateA - dateB;
          } else if (sortOption === 'date_down') {
              return dateB - dateA;
          }
      });

      games.forEach(game => gameList.appendChild(game)); 
  });

  document.getElementById('gameList').addEventListener('click', async (event) => {
      if (event.target.classList.contains('delete-button')) {
          const gameId = event.target.dataset.id;
          await Storage.deleteGame(gameId);
          const games = await Storage.fetchGames();
          UI.renderGames(games);
      }
  });

 
  const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
  const body = document.body;

 
  toggleDarkModeBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
          toggleDarkModeBtn.innerHTML = '🌞'; 
      } else {
          toggleDarkModeBtn.innerHTML = '🌙'; 
      }

     
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('navbar-dark-mode');
    
      const modalContent = document.querySelectorAll('.modal-content');
      modalContent.forEach((modal) => modal.classList.toggle('dark-mode'));
    
      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => card.classList.toggle('dark-mode'));
  });
}
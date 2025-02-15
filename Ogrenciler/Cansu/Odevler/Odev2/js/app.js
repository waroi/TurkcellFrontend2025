document.addEventListener("DOMContentLoaded", async () => {

  const games = await Storage.fetchGames();

  // Game rendering
  UI.renderGames(games);

  // Event listeners for adding, sorting, searching, and deleting games
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

          // Add new game to the Storage and render updated list
          await Storage.addGame(newGame);
          const games = await Storage.fetchGames();
          UI.renderGames(games);
          addGameForm.reset();
      });
  }

  // Search functionality
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

  // Sort functionality
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

      games.forEach(game => gameList.appendChild(game)); // Sorted games
  });

  // Delete functionality
  document.getElementById('gameList').addEventListener('click', async (event) => {
      if (event.target.classList.contains('delete-button')) {
          const gameId = event.target.dataset.id;
          await Storage.deleteGame(gameId);
          const games = await Storage.fetchGames();
          UI.renderGames(games);
      }
  });

  // Dark Mode Toggle Button
  const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
  const body = document.body;

  // Dark mode transition
  toggleDarkModeBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
          toggleDarkModeBtn.innerHTML = '🌞'; // Sun icon for light mode
      } else {
          toggleDarkModeBtn.innerHTML = '🌙'; // Moon icon for dark mode
      }

      // Navbar and modal dark mode classes
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('navbar-dark-mode');
    
      const modalContent = document.querySelectorAll('.modal-content');
      modalContent.forEach((modal) => modal.classList.toggle('dark-mode'));
    
      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => card.classList.toggle('dark-mode'));
  });
}
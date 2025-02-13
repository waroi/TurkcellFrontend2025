
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
  
    document.getElementById('game-list').addEventListener('click', async (event) => {
      if (event.target.classList.contains('delete-button')) {
        const gameId = event.target.dataset.id;
        

        await Storage.deleteGame(gameId);
  

        const games = await Storage.fetchGames();
        UI.renderGames(games);
      }
    });
  }
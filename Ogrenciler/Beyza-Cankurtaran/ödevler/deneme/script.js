// 4. script.js - Main script that initializes everything
document.addEventListener('DOMContentLoaded', async () => {
    // Create request instance
    const request = new Request();
    
    // Create and initialize game list
    window.gameList = new GameList(request);
    
    // Fetch initial games
    await gameList.fetchGames();
});
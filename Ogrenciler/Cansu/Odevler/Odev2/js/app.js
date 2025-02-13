document.addEventListener("DOMContentLoaded", async () => {
    const games = await Storage.fetchGames();
    UI.renderGames(games);
});
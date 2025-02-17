//başlatmak için burayı kullannn!
document.addEventListener('DOMContentLoaded', async () => {
    const request = new Request();
    window.gameList = new GameList(request);
    await gameList.fetchGames();
});
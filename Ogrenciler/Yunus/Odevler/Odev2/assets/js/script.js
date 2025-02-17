const gameArchive = new GameArchive()
const ui = new UI()

document.addEventListener("DOMContentLoaded", () => {
    gameArchive.getAllGames()
    const gameForm = document.getElementById("gameForm")

    gameForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const gameId = document.getElementById("saveGameBtn").dataset.id

        const game = new Game(
            gameId || Math.floor(Math.random() * 1000).toString(),
            document.getElementById("gameName").value,
            document.getElementById("gameDescription").value,
            document.getElementById("gameCategory").value,
            document.getElementById("gameReleaseDate").value,
            document.getElementById("gameImage").value,
            document.getElementById("gameDeveloper").value,
            document.getElementById("gameSteamUrl").value,
            Number(document.getElementById("gameRating").value),
            document.getElementById("gameFavorite").checked,
        )

        if (gameId) {
            gameArchive.updateGame(game)
        } else {
            gameArchive.addGame(game)
        }
    })

    document.getElementById("addGameBtn").addEventListener("click", () => {
        const saveIcon = document.createElement('i')
        saveIcon.className = 'bi bi-save me-2'

        const saveButton = document.getElementById('saveGameBtn');

        saveButton.textContent = 'Kaydet '
        saveButton.prepend(saveIcon)
        saveButton.dataset.id = ''

        document.getElementById("modalTitle").textContent = "Yeni Oyun Ekle"
        gameForm.reset()
    });

    document.getElementById("searchInput").addEventListener("input", () => gameArchive.filterGames())
    document.getElementById("categoryFilter").addEventListener("change", () => gameArchive.filterGames())
    document.getElementById("sortBy").addEventListener("change", () => gameArchive.filterGames())
})
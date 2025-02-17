document.addEventListener("DOMContentLoaded", function () {
    ui.displayGames();

    document.getElementById("gameForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var newGame = {
            name: document.getElementById("gameName").value,
            description: document.getElementById("gameDesc").value,
            category: document.getElementById("gameCategory").value,
            release_date: document.getElementById("release_date").value,
            image: document.getElementById("gameImage").value,
            developer: document.getElementById("developer").value,
            steam_url: document.getElementById("steam_url").value
        };

        gameService.addGame(newGame).then(() => {
            alert("Oyun başarıyla eklendi.");
            ui.displayGames();
        });
    });

    document.getElementById('sortOrder').addEventListener('change', (e) => {
        const sortOption = e.target.value;
        ui.displayGames(); 
    });

    document.getElementById('dateFilter').addEventListener('input', () => ui.displayGames()); 

    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        const selectedType = e.target.value;
        ui.displayGames(); 
    });

    ["searchInput", "categoryFilter", "dateFilter", "sortOrder"].forEach(id => {
        document.getElementById(id).addEventListener("input", () => ui.displayGames()); 
    });
});

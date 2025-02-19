let editingGameId = null;  

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await UI.renderGames(await Storage.fetchGames());
        setupEventListeners();
        applyDarkMode();
    } catch (error) {
        console.error("🔥ERROR: An error occurred during DOMContentLoaded!", error);
    }
});

function setupEventListeners() {
    const addGameForm = document.getElementById("gameForm");
    const categorySelect = document.getElementById("categorySelect");
    const searchBar = document.getElementById("searchBar");
    const sortSelect = document.getElementById("sortSelect");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const developerSelect = document.getElementById("developerSelect");

    if (addGameForm) {
        addGameForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const newGame = {
                name: document.getElementById("gameName").value,
                description: document.getElementById("gameDescription").value,
                category: document.getElementById("gameCategory").value,
                release_date: document.getElementById("releaseDate").value,
                image: document.getElementById("gameImage").value,
                developer: document.getElementById("gameDeveloper").value,
                steam_url: document.getElementById("gameSteamURL").value,
            };

            try {
                if (editingGameId) { 
                    await Storage.updateGame(editingGameId, newGame);
                    UI.updateGameCard(editingGameId, newGame);
                    editingGameId = null;  
                } else { 
                    const addedGame = await Storage.addGame(newGame);
                    UI.addGameCard(addedGame);
                }

                await UI.renderGames(await Storage.fetchGames()); 
                addGameForm.reset(); 
                const modal = bootstrap.Modal.getInstance(document.getElementById('gameModal'));
                modal.hide(); 
            } catch (error) {
                console.error("🔥ERROR: An error occurred while adding or updating the game!", error);
            }
        });
    }

    function applyFiltersAndSort() {
        Storage.fetchGames().then(allGames => {
            const selectedCategory = categorySelect.value;
            if (selectedCategory !== "all") {
                allGames = allGames.filter(game => game.category === selectedCategory);
            }

            const selectedCode = developerSelect.value;
            const developerMap = {
                "dvp": "Tümü",
                "nin": "Nintendo",
                "from": "FromSoftware",
                "rock": "Rockstar Games",
                "beth": "Bethesda Game Studios",
                "moj": "Mojang Studios",
                "cd": "CD Projekt Red",
                "blizz": "Blizzard Entertainment",
                "epic": "Epic Games",
                "super": "Supergiant Games",
                "id": "id Software",
                "inner": "Innersloth"
            };
            const selectedDeveloper = developerMap[selectedCode];
            if (selectedDeveloper !== "Tümü") {
                allGames = allGames.filter(game => game.developer === selectedDeveloper);
            }

            const sortOption = sortSelect.value;
            switch (sortOption) {
                case "name_asc":
                    allGames.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "name_desc":
                    allGames.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case "date_up":
                    allGames.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
                    break;
                case "date_down":
                    allGames.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                    break;
            }

            UI.renderGames(allGames);
        }).catch(error => {
            console.error("🔥ERROR: An error occurred while applying filters and sorting!", error);
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener("change", applyFiltersAndSort);
    }

    if (developerSelect) {
        developerSelect.addEventListener("change", applyFiltersAndSort);
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", applyFiltersAndSort);
    }

    if (searchBar) {
        searchBar.addEventListener("input", function (event) {
            const query = event.target.value.toLowerCase();
            const allCards = document.querySelectorAll("#gameList .col-md-4");

            allCards.forEach((card) => {
                const gameName = card.querySelector(".card-title").textContent.toLowerCase();
                card.style.display = gameName.includes(query) ? "block" : "none";
            });
        });
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }
}

function applyDarkMode() {
    const darkMode = localStorage.getItem("darkMode");
    const darkModeToggle = document.getElementById("darkModeToggle");
    document.body.classList.toggle("dark", darkMode === "enabled");
    if (darkModeToggle) darkModeToggle.textContent = darkMode === "enabled" ? "🌙" : "🌞";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
        if (darkModeToggle) darkModeToggle.textContent = "🌙";
    } else {
        localStorage.removeItem("darkMode");
        if (darkModeToggle) darkModeToggle.textContent = "🌞";
    }
}































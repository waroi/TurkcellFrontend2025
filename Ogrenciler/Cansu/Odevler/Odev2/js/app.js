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
                await Storage.addGame(newGame);
                await UI.renderGames(await Storage.fetchGames());
                addGameForm.reset();
            } catch (error) {
                console.error("🔥 ERROR: An error occurred while adding the game!", error);
            }
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener("change", async function () {
            const selectedCategory = this.value;
            try {
                const allGames = await Storage.fetchGames();
                const filteredGames = selectedCategory === "all"
                    ? allGames
                    : allGames.filter(game => game.category === selectedCategory);

                UI.renderGames(filteredGames);
            } catch (error) {
                console.error("🔥 ERROR: An error occurred while filtering games by category!", error);
            }
        });
    }

    if (developerSelect) {
        developerSelect.addEventListener("change", async function () {
            const selectedCode = this.value;
            
            
            const developerMap = {
                "dvp": "Tümü",
                "nin": "Nintendo",
                "from": "FromSoftware",
                "rock": "Rockstar",
                "beth": "Bethesda",
                "moj": "Mojang",
                "cd": "CD Projekt Red",
                "blizz": "Blizzard",
                "epic": "Epic",
                "super": "Supergiant",
                "id": "id Software",
                "inner": "Innersloth"
            };

            const selectedDeveloper = developerMap[selectedCode];

            try {
                const allGames = await Storage.fetchGames();
                const filteredGames = (selectedDeveloper === "Tümü")
                    ? allGames
                    : allGames.filter(game => game.developer === selectedDeveloper);

                UI.renderGames(filteredGames);
            } catch (error) {
                console.error("🔥 ERROR: An error occurred while filtering games by developer!", error);
            }
        });
    }

    if (searchBar) {
        searchBar.addEventListener("input", function (event) {
            const query = event.target.value.toLowerCase();
    
           
            const allCards = document.querySelectorAll("#gameList .col-md-4");
            
            allCards.forEach((card) => {
                const gameName = card.querySelector(".card-title").textContent.toLowerCase();
                
               
                if (gameName.includes(query)) {
                    card.style.display = "block"; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    }
    


    if (sortSelect) {
        sortSelect.addEventListener("change", async function () {
            const sortOption = this.value;
            try {
                let games = await Storage.fetchGames();

                switch (sortOption) {
                    case "name_asc":
                        games.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case "name_desc":
                        games.sort((a, b) => b.name.localeCompare(a.name));
                        break;
                    case "date_up":
                        games.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
                        break;
                    case "date_down":
                        games.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                        break;
                }

                UI.renderGames(games);
            } catch (error) {
                console.error("🔥 ERROR: An error occurred while sorting the games!", error);
            }
        });
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }
}

function applyDarkMode() {
    try {
        const darkMode = localStorage.getItem("darkMode");
        const darkModeToggle = document.getElementById("darkModeToggle");

        if (darkMode === "enabled") {
            document.body.classList.add("dark");
            if (darkModeToggle) darkModeToggle.textContent = "🌙";
        } else {
            document.body.classList.remove("dark");
            if (darkModeToggle) darkModeToggle.textContent = "🌞";
        }
    } catch (error) {
        console.error("🔥 ERROR: An error occurred while applying Dark Mode!", error);
    }
}

function toggleDarkMode() {
    try {
        document.body.classList.toggle("dark");
        const darkModeToggle = document.getElementById("darkModeToggle");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
            if (darkModeToggle) darkModeToggle.textContent = "🌙";
        } else {
            localStorage.removeItem("darkMode");
            if (darkModeToggle) darkModeToggle.textContent = "🌞";
        }
    } catch (error) {
        console.error("🔥 ERROR: An error occurred while changing Dark Mode!", error);
    }
}








document.addEventListener("DOMContentLoaded", async () => {
    await UI.renderGames(await Storage.fetchGames());
    setupEventListeners();
    applyDarkMode(); 
});

function setupEventListeners() {
    const addGameForm = document.getElementById("gameForm");
    const categorySelect = document.getElementById("categorySelect");
    const searchBar = document.getElementById("searchBar");
    const sortSelect = document.getElementById("sortSelect");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const gameList = document.getElementById("gameList");

  
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

            await Storage.addGame(newGame);
            await UI.renderGames(await Storage.fetchGames());
            addGameForm.reset();
        });
    }


    if (categorySelect) {
        categorySelect.addEventListener("change", async function () {
            const selectedCategory = this.value;
            const allGames = await Storage.fetchGames(); 

            const filteredGames = selectedCategory === "all"
                ? allGames 
                : allGames.filter(game => game.category === selectedCategory); 

            UI.renderGames(filteredGames);
        });
    }

    // Arama
    if (searchBar) {
        searchBar.addEventListener("input", function (event) {
            const query = event.target.value.toLowerCase();
            document.querySelectorAll(".game-card").forEach((card) => {
                const gameName = card.querySelector(".card-title").textContent.toLowerCase();
                card.style.display = gameName.includes(query) ? "block" : "none";
            });
        });
    }
    if (developerSelect) {
        developerSelect.addEventListener("change", async function () {
            const selectedDeveloper = this.value;
            const allGames = await Storage.fetchGames(); 
    
            const filteredGames = selectedDeveloper === "dvp"
                ? allGames 
                : allGames.filter(game => game.developer === selectedDeveloper); 
    
            UI.renderGames(filteredGames); 
        });
    }
    

  
    if (sortSelect) {
        sortSelect.addEventListener("change", async function () {
            const sortOption = this.value;
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
        });
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }
}

function applyDarkMode() {
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeToggle").textContent = "🌙"; // Karanlık mod butonu simgesi
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("darkModeToggle").textContent = "🌞"; // Aydınlık mod butonu simgesi
    }
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById("darkModeToggle").textContent = "🌙";
    } else {
        localStorage.removeItem("darkMode");
        document.getElementById("darkModeToggle").textContent = "🌞";
    }
}





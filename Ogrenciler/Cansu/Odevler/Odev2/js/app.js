document.addEventListener("DOMContentLoaded", async () => {
    await UI.renderGames();
    setupEventListeners();
});

function setupEventListeners() {
    const addGameForm = document.getElementById("gameForm");
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
            await UI.renderGames();
            addGameForm.reset();
        });
    }

    document.getElementById("searchBar").addEventListener("input", function (event) {
        const query = event.target.value.toLowerCase();
        document.querySelectorAll(".game-card").forEach((card) => {
            const gameName = card.querySelector(".card-title").textContent.toLowerCase();
            card.style.display = gameName.includes(query) ? "block" : "none";
        });
    });

    document.getElementById("sortSelect").addEventListener("change", function () {
        const sortOption = this.value;
        const gameList = document.getElementById("gameList");
        let games = Array.from(gameList.children);

        games.sort((a, b) => {
            const nameA = a.querySelector(".card-title").textContent.toLowerCase();
            const nameB = b.querySelector(".card-title").textContent.toLowerCase();
            const dateA = new Date(a.querySelector(".card-date").textContent.split(": ")[1]);
            const dateB = new Date(b.querySelector(".card-date").textContent.split(": ")[1]);

            if (sortOption === "name_asc") return nameA.localeCompare(nameB);
            if (sortOption === "name_desc") return nameB.localeCompare(nameA);
            if (sortOption === "date_up") return dateA - dateB;
            if (sortOption === "date_down") return dateB - dateA;
        });

        games.forEach((game) => gameList.appendChild(game));
    });
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
     
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
           
            darkModeToggle.textContent = "🌙";
        } else {
            localStorage.removeItem("darkMode");
           
            darkModeToggle.textContent = "🌞";
        }
    });
    
  
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark");
       
        darkModeToggle.textContent = "🌙";
    } else {
        darkModeToggle.textContent = "🌞";
    }
    

}


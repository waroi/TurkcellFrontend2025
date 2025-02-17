const API_URL = "http://localhost:3000/games";

document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
    document.getElementById("gameForm").addEventListener("submit", addGame);
    document.getElementById("searchInput").addEventListener("input", filterGames);
    document.getElementById("categoryFilter").addEventListener("change", filterGames);
    document.getElementById("dateFilter").addEventListener("change", filterGames);
    document.getElementById("sortOrder").addEventListener("change", fetchGames);
});

async function fetchGames() {
    const response = await fetch(API_URL);
    let games = await response.json();
    
    const sortOrder = document.getElementById("sortOrder").value;
    if (sortOrder === "az") {
        games.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "za") {
        games.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOrder === "newest") {
        games.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    } else if (sortOrder === "oldest") {
        games.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    }
    
    displayGames(games);
}

function displayGames(games) {
    const gameList = document.getElementById("gameList");
    gameList.innerHTML = "";
    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("col-md-4");
        gameCard.innerHTML = `
            <div class="card mb-4">
                <img src="${game.image}" class="card-img-top" alt="${game.name}">
                <div class="card-body">
                    <h5 class="card-title">${game.name}</h5>
                    <p class="card-text">${game.description}</p>
                    <p><strong>Kategori:</strong> ${game.category}</p>
                    <p><strong>Çıkış Tarihi:</strong> ${game.releaseDate}</p>
                    <p><strong>Yapımcı:</strong> ${game.developer}</p>
                    <a href="${game.steamUrl}" target="_blank" class="btn btn-primary btn-sm">Steam Sayfası</a>
                    <button class="btn btn-warning btn-sm" onclick="editGame(${game.id})">Düzenle</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteGame(${game.id})">Sil</button>
                </div>
            </div>
        `;
        gameList.appendChild(gameCard);
    });
}

async function addGame(event) {
    event.preventDefault();
    
    const newGame = {
        name: document.getElementById("gameName").value,
        description: document.getElementById("gameDesc").value,
        category: document.getElementById("gameCategory").value,
        releaseDate: document.getElementById("releaseDate").value,
        image: document.getElementById("gameImage").value,
        developer: document.getElementById("developer").value,
        steamUrl: document.getElementById("steamUrl").value,
    };
    
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGame)
    });
    
    document.getElementById("gameForm").reset();
    fetchGames();
}

async function deleteGame(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchGames();
}

function filterGames() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value.toLowerCase();
    const dateFilter = document.getElementById("dateFilter").value;
    
    fetch(API_URL)
        .then(response => response.json())
        .then(games => {
            let filteredGames = games.filter(game => 
                game.name.toLowerCase().includes(searchTerm) ||
                game.category.toLowerCase().includes(searchTerm) ||
                game.developer.toLowerCase().includes(searchTerm)
            );
            
            if (categoryFilter) {
                filteredGames = filteredGames.filter(game => game.category.toLowerCase() === categoryFilter);
            }
            
            if (dateFilter) {
                filteredGames = filteredGames.filter(game => game.releaseDate === dateFilter);
            }
            
            displayGames(filteredGames);
        });
}

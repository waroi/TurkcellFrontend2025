document.getElementById("add-game-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const gameId = document.getElementById("game-id").value;
    const categorySelect = document.getElementById("game_category");
    const videoInput = document.getElementById("videoURL").value.trim();
    const newGame = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        category: categorySelect.value,
        releaseDate: document.getElementById("releaseDate").value,
        image: document.getElementById("image").value,
        videoURL: videoInput ? videoInput : "",
         developer: document.getElementById("developer").value,
        steamURL: document.getElementById("steamURL").value
    };

    if (gameId) {
        fetch(`http://localhost:3000/games/${gameId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newGame)
        })
        .then(() => fetchGames());
    } else {
        fetch("http://localhost:3000/games", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newGame)
        })
        .then(() => fetchGames());
    }

    document.getElementById("add-game-form").reset();
    let modal = bootstrap.Modal.getInstance(document.getElementById("addGameModal"));
    modal.hide();
});

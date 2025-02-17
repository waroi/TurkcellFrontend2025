const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("id");

if (gameId) {
    fetch(`http://localhost:3000/games/${gameId}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Oyun bulunamadı!");
            }
            return res.json();
        })
        .then(game => {
            document.getElementById("game-title").textContent = game.name;
            document.getElementById("game-description").textContent = game.description;
            document.getElementById("game-category").textContent = game.category;
            document.getElementById("game-releaseDate").textContent = game.releaseDate;
            document.getElementById("game-developer").textContent = game.developer;
            document.getElementById("game-steamURL").href = game.steamURL;

            const iframeContainer = document.getElementById("game-video-iframe");

            if (game.videoURL) {
                console.log("Yüklenen video URL:", game.videoURL);
            
                if (game.videoURL.includes("youtube.com/watch?v=")) {
                    game.videoURL = game.videoURL.replace("watch?v=", "embed/");
                } else if (game.videoURL.includes("youtu.be/")) {
                    let videoID = game.videoURL.split("youtu.be/")[1]; 
                    game.videoURL = `https://www.youtube.com/embed/${videoID}`;
                }
            
                iframeContainer.src = game.videoURL;
                iframeContainer.style.display = "block"; 
            } else {
                console.log("Video URL bulunamadı!");
                iframeContainer.style.display = "none"; 
            }
            
        })
        .catch(error => {
            console.error("Oyun bilgisi yüklenirken hata oluştu:", error);
            document.body.innerHTML = `<h2>Oyun bulunamadı.</h2><a href="index.html" class="btn btn-secondary">Ana Sayfa</a>`;
        });
} else {
    console.error("Oyun ID bulunamadı.");
    document.body.innerHTML = `<h2>Geçersiz oyun ID'si.</h2><a href="index.html" class="btn btn-secondary">Ana Sayfa</a>`;
}

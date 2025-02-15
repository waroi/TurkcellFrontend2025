class Storage {
    static async fetchGames() {
        try {
            const response = await fetch("http://localhost:3000/games");
            const games = await response.json();
            console.log("Çekilen oyunlar:", games); // Konsolda kontrol et
            return games;
        } catch (error) {
            console.error("Oyunlar yüklenirken hata oluştu:", error);
            return [];
        }
    }

    static async addGame(game) {
        try {
            await fetch("http://localhost:3000/games", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(game),
            });
        } catch (error) {
            console.error("Oyun eklenirken hata oluştu:", error);
        }
    }

    static async deleteGame(id) {
        try {
            await fetch(`http://localhost:3000/games/${id}`, { method: "DELETE" });
            const updatedGames = await Storage.fetchGames(); // Yeni listeyi al
            UI.renderGames(updatedGames); // Güncellenmiş oyunları göster
        } catch (error) {
            console.error("Oyun silinirken hata oluştu:", error);
        }
    }
}


class Storage {
    // Oyunları çekme
    static async fetchGames() {
        try {
            const response = await fetch("http://localhost:3000/games");

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const games = await response.json();
            console.log("Games fetched:", games);
            return games;
        } catch (error) {
            console.error("Error while loading games:", error);
            return []; // Hata durumunda boş array döndürülür
        }
    }

    // Yeni oyun ekleme
    static async addGame(game) {
        try {
            const response = await fetch("http://localhost:3000/games", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(game),
            });

            if (!response.ok) {
                throw new Error(`Game could not be added! Error code: ${response.status}`);
            }

            return await response.json(); // Yeni eklenen oyun döndürülür
        } catch (error) {
            console.error("An error occurred while adding the game:", error);
            return null; // Hata durumunda null döndürülür
        }
    }

    // Oyun güncelleme
    static async updateGame(id, updatedGame) {
        try {
            const response = await fetch(`http://localhost:3000/games/${id}`, {
                method: "PUT", // PUT isteği, mevcut veriyi güncellemek için
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedGame), // Güncel veri gönderilir
            });

            if (!response.ok) {
                throw new Error(`Game could not be updated! Error code: ${response.status}`);
            }

            return await response.json(); // Güncellenmiş oyun verisi döndürülür
        } catch (error) {
            console.error("An error occurred while updating the game:", error);
            return null; // Hata durumunda null döndürülür
        }
    }

    // Oyun silme
    static async deleteGame(id) {
        try {
            const response = await fetch(`http://localhost:3000/games/${id}`, { method: "DELETE" });

            if (!response.ok) {
                throw new Error(`The game could not be deleted! Error code: ${response.status}`);
            }

            return true; // Silme başarılı ise true döndürülür
        } catch (error) {
            console.error("An error occurred while deleting the game:", error);
            return false; // Hata durumunda false döndürülür
        }
    }
}









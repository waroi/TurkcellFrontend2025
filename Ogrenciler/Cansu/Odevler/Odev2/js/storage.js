class Storage {
    static async fetchGames() {
        try {
            const response = await fetch("http://localhost:3000/games");

            if (!response.ok) {
                throw new Error(`Sunucu hatası: ${response.status}`);
            }

            const games = await response.json();
            console.log("Çekilen oyunlar:", games);
            return games;
        } catch (error) {
            console.error("Oyunlar yüklenirken hata oluştu:", error);
            return []; // Hata olursa boş liste dön
        }
    }

    static async addGame(game) {
        try {
            const response = await fetch("http://localhost:3000/games", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(game),
            });

            if (!response.ok) {
                throw new Error(`Oyun eklenemedi! Hata kodu: ${response.status}`);
            }

            return await response.json(); // Eklenen oyunu geri döndür
        } catch (error) {
            console.error("Oyun eklenirken hata oluştu:", error);
            return null; // Hata olursa null dön
        }
    }

    static async deleteGame(id) {
        try {
            const response = await fetch(`http://localhost:3000/games/${id}`, { method: "DELETE" });

            if (!response.ok) {
                throw new Error(`Oyun silinemedi! Hata kodu: ${response.status}`);
            }

            return true; // Başarıyla silindi
        } catch (error) {
            console.error("Oyun silinirken hata oluştu:", error);
            return false; // Silme başarısız oldu
        }
    }
}



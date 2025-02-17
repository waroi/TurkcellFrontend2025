import { fetchGames } from "./GameService.js";
import UI from "./UI.js";

export async function applyFilters() {
  const category = document.getElementById("filterCategory").value.trim();
  const year = document.getElementById("filterYear").value.trim();

  // Tüm oyunları API'dan çek
  const games = await fetchGames();
  let filteredGames = games;

  // Kategori filtresi uygulama (büyük/küçük harf duyarsız)
  if (category !== "") {
    filteredGames = filteredGames.filter(game =>
      game.category && game.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Çıkış yılı filtresi uygulama
  if (year !== "") {
    filteredGames = filteredGames.filter(game => {
      // Hem releaseDate hem de release_date kontrol ediliyor
      const release = game.releaseDate || game.release_date;
      // Eğer release tarihi varsa, yıl kısmını kontrol et (ilk 4 karakter)
      return release && release.toString().substring(0, 4) === year;
    });
  }

  // Filtrelenmiş oyunları ekrana bas
  UI.renderGames(filteredGames);
}

export async function clearFilters() {
  document.getElementById("filterCategory").value = "";
  document.getElementById("filterYear").value = "";
  const games = await fetchGames();
  UI.renderGames(games);
}

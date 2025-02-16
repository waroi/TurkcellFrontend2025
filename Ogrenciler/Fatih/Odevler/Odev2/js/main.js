import ApiService from "./services/ApiService.js";
import UI from "./views/UI.js";

document.addEventListener("DOMContentLoaded", async () => {
  const apiService = new ApiService("http://localhost:3000");

  const ui = new UI(apiService);

  await ui.gameList.renderGames();

  document.getElementById("add-game-btn").addEventListener("click", () => {
    console.log("✅ Yeni Oyun Ekle butonuna tıklandı!");

    document.getElementById("game-form").reset();
    document.getElementById("game-id").value = "";

    const modal = new bootstrap.Modal(document.getElementById("gameModal"));
    modal.show();
  });
});

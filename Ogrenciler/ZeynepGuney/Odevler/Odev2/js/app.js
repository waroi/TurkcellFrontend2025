import { Request } from './request.js';
import { UI } from './ui.js';

const ui = new UI();

// Request.get("./assets/games.json")
//   .then((data) => ui.createGameCards(data))
//   .catch((err) => console.error(err));

  Request.get("./assets/games.json")
  .then((data) => {
    console.log(data); // Veriyi kontrol et
    ui.createGameCards(data.games); 
  })
  .catch((err) => console.error(err));

function removeGameCard(index) {
    const gameCard = document.getElementById(`game-card-${index}`);
    if (gameCard) {
        gameCard.remove();  
    }
}
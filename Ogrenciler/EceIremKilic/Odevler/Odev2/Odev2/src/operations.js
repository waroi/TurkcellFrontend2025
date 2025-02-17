const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");
const searchBar = document.getElementById("search-bar");
const allCards = document.querySelectorAll(".cardWrap");
let games = [];
async function fetchGames() {
  try {
    games = await fetch("http://localhost:3000/games/").then((response) =>
      response.json()
    );
    console.log("Oyunlar yüklendi:", games);

    Operations.addCatToFilterButton(games);
    Operations.addDateToFilterButton(games);
  } catch (error) {
    console.error("hata oluştu:", error);
  }
}
fetchGames();
class Operations {
  static addCatToFilterButton(games) {
    const existingCategories = Array.from(filterSelect.options).map(
      (option) => option.textContent
    );
    games.forEach((game) => {
      if (!existingCategories.includes(game.categories)) {
        const opt = document.createElement("option");
        opt.textContent = game.categories;
        opt.value = game.categories;
        filterSelect.appendChild(opt);
        existingCategories.push(game.categories);
      }
    });
    const newOpt = document.createElement("option");
    newOpt.textContent = "Tarihe Göre";
    newOpt.setAttribute("disabled", "");
    filterSelect.appendChild(newOpt);
  }
  static addDateToFilterButton(games) {
    const existingDates = Array.from(filterSelect.options).map(
      (option) => option.textContent
    );
    games.forEach((game) => {
      if (!existingDates.includes(game.releaseDate)) {
        const opt = document.createElement("option");
        opt.textContent = game.releaseDate;
        opt.value = game.releaseDate;
        filterSelect.appendChild(opt);
        existingDates.push(game.releaseDate);
      }
    });
    console.log("basarılı");
  }
  static filterGamesByCategory() {
    const selectedCategory = filterSelect.value.toLowerCase().trim();
    allCards.forEach((card) => {
      const gameCategory = card
        .querySelector(".badge")
        .textContent.toLowerCase()
        .trim();
      if (selectedCategory === gameCategory) {
        card.style.display = "block";
      } else if (!selectedCategory || selectedCategory === "filtrele") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    console.log(selectedCategory);
  }
  static filterGamesByDate() {
    const selectedDate = filterSelect.value.toLowerCase().trim();
    allCards.forEach((card) => {
      const gameDate = card
        .querySelector(".opacity-0")
        .textContent.toLowerCase()
        .trim();
      if (selectedDate === gameDate) {
        card.style.display = "block";
      } else if (!selectedDate || selectedDate === "filtrele") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    console.log(selectedCategory);
  }
  static searchGame() {
    const searchWord = searchBar.value.toLowerCase().trim();
    allCards.forEach((card) => {
      const cardTitle = card
        .querySelector(".card-title")
        .textContent.toLowerCase()
        .trim();
      const cardCat = card
        .querySelector(".badge")
        .textContent.toLowerCase()
        .trim();
      const cardPub = card
        .querySelector(".pub")
        .textContent.toLowerCase()
        .trim();
      cardTitle.startsWith(searchWord) ||
      cardCat.startsWith(searchWord) ||
      cardPub.startsWith(searchWord)
        ? (card.style.display = "block")
        : (card.style.display = "none");
    });
  }
  static sortAscending(games) {
    const sortedData = games.sort((a, b) => a.title.localeCompare(b.title));
    sortedData.forEach(game => {
        GameAPI.put(`http://localhost:3000/games/${game.id}`, game);
    })
  }
}

filterSelect.addEventListener("change", () => {
  Operations.filterGamesByCategory();
  Operations.filterGamesByDate();
});
searchBar.addEventListener("input", () => {
  Operations.searchGame();
});
sortSelect.addEventListener("change", () => {
  Operations.sortAscending(games);
  console.log(games);
});

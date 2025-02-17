class Games {
  constructor(
    id = null,
    name,
    description,
    category,
    releaseDate,
    img,
    producer,
    url
  ) {
    this.id = id ? id : Math.floor(Math.random() * 10000).toString();
    this.name = name;
    this.description = description;
    this.category = category;
    this.releaseDate = releaseDate;
    this.img = img;
    this.producer = producer;
    this.url = url;
  }
}
gameForm.addEventListener("submit", (e) => {
  e.preventDefault;
  let games = createGame();
  apiCall.sendGame(games);
});

function createGame() {
  const gameNameValue = gameName.value;
  const gameDescriptionValue = gameDescription.value;
  const gameCategoryValue = gameCategory.value;
  const gameDateValue = gameDate.value;
  const gameImgValue = gameImg.value;
  const gameProducerValue = gameProducer.value;
  const gameURLValue = gameURL.value;

  return new Games(
    null,
    gameNameValue,
    gameDescriptionValue,
    gameCategoryValue,
    gameDateValue,
    gameImgValue,
    gameProducerValue,
    gameURLValue
  );
}

function randomTwoDigit() {
  let whole = Math.floor(Math.random() * 4) + 5;
  let decimal = Math.floor(Math.random() * 10);
  return `${whole},${decimal}`;
}

document.getElementById("searchOnPage").addEventListener("input", searchGame);
function searchGame(event) {
  const searchValue = event.target.value.toLowerCase();
  const cards = document.querySelectorAll(".game-card");
  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const category = card
      .querySelector(".card-category")
      .textContent.toLowerCase();

    if (title.includes(searchValue) || category.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const categoryFilter = document.getElementById("categoryFilter");
  const yearFilter = document.getElementById("yearFilter");
  const filterButton = document.getElementById("saveFilter");
  const clearFilterButton = document.getElementById("clearFilter");

  filterButton.addEventListener("click", function () {
    filterGames();
  });

  clearFilterButton.addEventListener("click", function () {
    categoryFilter.value = "all";
    yearFilter.value = "";
    filterGames();
  });

  function filterGames() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const selectedYear = yearFilter.value.trim();
    const cards = document.querySelectorAll(".game-card");

    cards.forEach((card) => {
      const gameCategory = card
        .querySelector(".card-category")
        .textContent.toLowerCase();
      const gameDateText = card.querySelector(".game-date").textContent.trim();
      const gameYear = extractYear(gameDateText);

      let categoryMatch =
        selectedCategory === "all" || gameCategory === selectedCategory;
      let yearMatch = true;

      if (selectedYear !== "") {
        yearMatch = gameYear === parseInt(selectedYear);
      }

      if (categoryMatch && yearMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function extractYear(dateText) {
    const yearMatch = dateText.match(/\d{4}/);
    return yearMatch ? parseInt(yearMatch[0]) : null;
  }
});

function compareGames(a, b, sortType) {
  let dateA = new Date(a.querySelector(".game-date").textContent.trim());
  let dateB = new Date(b.querySelector(".game-date").textContent.trim());
  if (sortType === "a-to-z" || sortType === "z-to-a") {
    const gameA = a
      .querySelector(".card-title")
      .textContent.toLowerCase()
      .trim();
    const gameB = b
      .querySelector(".card-title")
      .textContent.toLowerCase()
      .trim();
    return sortType === "z-to-a"
      ? gameB.localeCompare(gameA)
      : gameA.localeCompare(gameB);
  } else if (sortType === "date-oldest") {
    return dateA - dateB;
  } else if (sortType === "date-latest") {
    return dateB - dateA;
  }
}

document.getElementById("filter-sort").addEventListener("change", function () {
  const sortType = this.value;
  const gameCard = document.getElementById("gameCard");
  const gameCards = Array.from(gameCard.children);

  const sortedGameCards = gameCards.sort((a, b) =>
    compareGames(a, b, sortType)
  );
  sortedGameCards.forEach((card) => gameCard.appendChild(card));
});

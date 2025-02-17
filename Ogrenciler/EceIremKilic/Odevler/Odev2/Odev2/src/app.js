class Game {
  constructor(
    title,
    description,
    releaseDate,
    gameImg,
    categories,
    publisher,
    steamUrl,
    id
  ) {
    this.id = this.generateId(games);
    this.title = title;
    this.description = description;
    this.releaseDate = releaseDate;
    this.gameImg = gameImg;
    this.categories = categories;
    this.publisher = publisher;
    this.steamUrl = steamUrl;
  }
  generateId(games) {
    if (!Array.isArray(games) || games.length === 0) {
      return "1";
    }
    const lastGame = games[games.length - 1];
    return (parseInt(lastGame.id, 10) + 1).toString();
  }
  addGame = () => {
    const gTitle = iTitle.value;
    const gDesc = iDesc.value;
    const gCat = iCategory.value;
    const gDate = iDate.value;
    const gImg = iImg.value;
    const gPub = iPub.value;
    const gSteam = iSteam.value;
    const newGame = new Game(gTitle, gDesc, gCat, gDate, gImg, gPub, gSteam);
  };
}

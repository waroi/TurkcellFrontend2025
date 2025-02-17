class apiCall {
  static sendGame(game) {
    Request.post("http://localhost:3002/games", {
      id: game.id,
      name: game.name,
      description: game.description,
      category: game.category,
      releaseDate: game.releaseDate,
      img: game.img,
      producer: game.producer,
      url: game.url,
    });
  }

  static deleteGame(id) {
    Request.delete(`http://localhost:3002/games/${id}`).catch((err) =>
      console.error(err)
    );
  }

  static editGame(game, id) {
    gameName.value = game.name;
    gameDescription.value = game.description;
    gameCategory.value = game.category;
    gameDate.value = game.releaseDate;
    gameImg.value = game.img;
    gameProducer.value = game.producer;
    gameURL.value = game.url;

    updateButton.addEventListener("click", (e) => {
      e.preventDefault();
      const newGameName = gameName.value;
      const newGameDescription = gameDescription.value;
      const newGameCategory = gameCategory.value;
      const newGameDate = gameDate.value;
      const newGameImg = gameImg.value;
      const newGameProducer = gameProducer.value;
      const newGameURL = gameURL.value;

      Request.put(`http://localhost:3002/games/${id}`, {
        id: game.id,
        name: newGameName,
        description: newGameDescription,
        category: newGameCategory,
        releaseDate: newGameDate,
        img: newGameImg,
        producer: newGameProducer,
        url: newGameURL,
      });
    });
  }
}

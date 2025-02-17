UI.initialize();

UI.gameArray = (await Database.getGames()).map(
  (game) =>
    new Game(
      game.id,
      game.name,
      game.category,
      game.price,
      game.developer,
      game.releaseDate,
      game.description,
      game.URL,
      game.imageURL
    )
);

UI.renderGames();

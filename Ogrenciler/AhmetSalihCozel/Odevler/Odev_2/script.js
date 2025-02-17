async function init() {
    let root = document.getElementById("root");
    root.append(await gamesCardSection());
  }
  
  init();

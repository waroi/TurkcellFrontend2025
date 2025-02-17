async function fetchAllGames() {

    const response = await fetch("http://localhost:3000/games")
    if (!response.ok) {
        throw new Error('Bir hata oluştu:', response.status)
    }
    const data = await response.json();
    console.log(data)
    UI.listGames(data);
}

fetchAllGames();


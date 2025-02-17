const API_URL = "http://localhost:3000/games";
const CATEGORY_URL = "http://localhost:3000/categories";

export async function getGames() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function addGame(game) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
  });
  return response.json();
}

export async function deleteGame(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

export async function toggleFavorite(id, isFavorite) {
  await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isFavorite }),
  });
}

export async function updateGame(id, updatedGame) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedGame),
  });
}

export async function getCategories() {
  const response = await fetch(CATEGORY_URL);
  return response.json();
}

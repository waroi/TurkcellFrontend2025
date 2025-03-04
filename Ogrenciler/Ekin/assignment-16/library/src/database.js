const URL = "http://localhost:3000";

export async function getBooks() {
  return await fetch(`${URL}/books`).then((response) => response.json());
}

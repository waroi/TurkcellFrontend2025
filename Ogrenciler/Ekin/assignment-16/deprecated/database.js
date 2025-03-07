const URL = "http://localhost:3000";

export async function getBooks() {
  return await fetch(`${URL}/books`).then((response) => response.json());
}

export function addBook(book) {
  return fetch(`${URL}/books`, {
    method: "POST",
    body: JSON.stringify(book),
  }).then((response) => response.json());
}

export function editBook(book) {
  return fetch(`${URL}/books/${book.id}`, {
    method: "PUT",
    body: JSON.stringify(book),
  }).then((response) => response.json());
}

export function deleteBook(id) {
  return fetch(`${URL}/books/${id}`, { method: "DELETE" }).then((response) =>
    response.json()
  );
}

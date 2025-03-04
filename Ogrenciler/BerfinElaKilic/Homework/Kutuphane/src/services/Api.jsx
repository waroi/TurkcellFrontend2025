const API_URL = "http://localhost:3000/books";

export async function getBooks() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}

export async function postBooks(book) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...book,
        id: Date.now().toString(),
      }),
    });
    const data = await response.json();
    console.log("data:", data);
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}

export const deleteBooks = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    });
    const responseData = await response.json();
    return response;
  } catch (error) {
    console.error("Silme isteği başarısız oldu:", error);
    return null;
  }
};

export async function updateBooks(id, book) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}

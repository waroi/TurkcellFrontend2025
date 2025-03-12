const API_URL = "http://localhost:3000/blogs";

export async function getBlogs() {
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

export const blogId = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/blogs/${id}`); // PORT KONTROLÜ
    if (!response.ok) {
      throw new Error(
        `Blog verisi alınamadı. HTTP Hata Kodu: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Çekme isteği başarısız oldu:", error.message);
    return null;
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    });
    const responseData = await response.json();
    return response;
  } catch (error) {
    console.error("Silme isteği başarısız oldu:", error);
    return null;
  }
};

export async function updateBlog(id, blog) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
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

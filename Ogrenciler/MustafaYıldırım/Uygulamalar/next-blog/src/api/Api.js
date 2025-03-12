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
    const response = await fetch(`http://localhost:3000/blogs/${id}`);
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

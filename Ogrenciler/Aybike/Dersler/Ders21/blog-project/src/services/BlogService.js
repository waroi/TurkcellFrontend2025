// set timeout koyabiliriz
const API_URL = "http://localhost:5001/blogs";

export class BlogService {
  static async getBlogs(category) {
    const response = await fetch(API_URL + "?category_like=" + category);
    return await response.json();
  }
  static async put(blog) {
    const response = await fetch(API_URL + "/" + blog.id, {
      method: "PUT",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok)
      throw new Error("Blog güncellenemedi! Hata Kodu: " + response.status);
    const data = await response.json();
    return data;
  }
  static async delete(id) {
    const response = await fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    if (!response.ok)
      throw new Error("Blog silinemedi! Hata Kodu: " + response.status);
    console.log("Silme işlemi başarılı");
  }
  static async post(blog) {
    const response = await fetch(API_URL + "/", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok)
      throw new Error("Blog eklenemedi! Hata Kodu: " + response.status);
    const data = await response.json();
    return data;
  }
}

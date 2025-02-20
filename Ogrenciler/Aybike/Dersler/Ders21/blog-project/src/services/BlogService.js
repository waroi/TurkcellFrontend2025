// set timeout koyabiliriz
const API_URL = "http://localhost:5001/blogs";

export class BlogService {
  static async getBlogs(category) {
    const response = await fetch(API_URL + "?category_like=" + category);
    return await response.json();
  }
}

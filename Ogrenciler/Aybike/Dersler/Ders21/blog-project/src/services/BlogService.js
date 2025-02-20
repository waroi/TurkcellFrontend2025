// set timeout koyabiliriz
const API_URL = "http://localhost:5001/blogs";

export class BlogService {
    static async getBlogs() {
			const response = await fetch(API_URL);
			return await response.json();
    }

  
 
  }
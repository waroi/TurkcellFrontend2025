export default {
  getBlogs: async () => {
    return await fetch("http://localhost:3000/blogs").then((response) =>
      response.json()
    );
  },

  addBlog: async (blog) => {
    return await fetch("http://localhost:3000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((response) => response.json());
  },

  editBlog: async (blog) => {
    return await fetch(`http://localhost:3000/blogs/${blog.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((response) => response.json());
  },

  deleteBlog: async (id) => {
    return await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
};

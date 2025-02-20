import { useState } from "react";
const API_URL = "http://localhost:3000/blogs";

export const api = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  async function getBlogs() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (response.ok) {
        setBlogs(data);
        return data;
      }
    } catch (error) {
      console.log("Request Model Error: ", error);
      return null;
    }
  }

  async function postBlog() {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      const data = await response.json();
      if (response.ok) {
        setBlogs([...blogs, data]);
        return data;
      }
    } catch (error) {
      console.log("Request Model Error: ", error);
      return null;
    }
  }

  async function deleteBlog() {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("Request Model Error: ", error);
      return null;
    }
  }

  async function updateBlog() {
    try {
      const response = await fetch(API_URL, {
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
};

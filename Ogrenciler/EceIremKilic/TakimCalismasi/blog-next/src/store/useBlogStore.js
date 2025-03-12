import { create } from "zustand";
import data from "../../data/data.json";

const useBlogStore = create((set) => ({
  posts: [...data.posts],
  id: 17,
  getPosts: async () => {
    const response = await fetch(`http://localhost:3000/posts`);
    const posts = await response.json();
    set({ posts });
  },
  getPostById: async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    return response.json();
  },
  addPost: async (newPost) => {
    set((state) => ({
      posts: [...state.posts, { id: state.id, ...newPost }],
      id: state.id + 1,
    }));
    const response = await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    return response.json();
  },
  updatePost: async (id, updatedPost) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      ),
    }));
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    });
    return response.json();
  },
  deletePost: async (id) => {
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    }));
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
}));

export default useBlogStore;

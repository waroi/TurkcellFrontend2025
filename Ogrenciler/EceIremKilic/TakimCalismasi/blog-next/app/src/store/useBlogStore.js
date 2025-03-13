"use client";
import { create } from "zustand";
import { useEffect } from "react";

const useBlogStore = create((set) => ({
  posts: [],
  id: 17,

  getPosts: async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      set({ posts: data });
    } catch (error) {
      console.error("Veri alınırken hata oluştu:", error);
    }
  },

  getPostById: async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    return response.json();
  },

  addPost: async (newPost) => {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      const addedPost = await response.json();
      set((state) => ({
        posts: [...state.posts, addedPost],
        id: state.id + 1,
      }));

      return addedPost;
    } catch (error) {
      console.error("Post eklenirken hata oluştu:", error);
    }
  },

  updatePost: async (id, updatedPost) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      const updatedData = await response.json();
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, ...updatedData } : post
        ),
      }));

      return updatedData;
    } catch (error) {
      console.error("Post güncellenirken hata oluştu:", error);
    }
  },

  deletePost: async (id) => {
    try {
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });

      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      }));
    } catch (error) {
      console.error("Post silinirken hata oluştu:", error);
    }
  },
}));

export default useBlogStore;

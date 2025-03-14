import { create } from "zustand";
import { collection, getDocs, query, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase_config";

const useBlogStore = create((set) => ({
  posts: [],
  getPosts: async () => {
    try {
      const q = query(collection(db, "posts"));
      const snaps = await getDocs(q);
      const allPosts = snaps.docs.map((post) => post.data());

      set({ posts: allPosts });
    } catch (error) {
      console.log("fetchAllPosts DBController Error", error);
    }
  },

  getPostById: async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    return response.json();
  },
  addPost: async (newPost) => {
    try {
      const newPostRef = doc(db, "posts", self.crypto.randomUUID());
      await setDoc(newPostRef, {
        title: newPost.title,
        content: newPost.content,
        author: newPost.author, // 🔥 DÜZELTİLDİ
        releaseDate: newPost.releaseDate,
        image: newPost.image,
      });

      // Yeni eklenen postu getir
      const newPostSnap = await getDoc(newPostRef);
      const newPostData = { id: newPostSnap.id, ...newPostSnap.data() };

      // State'i güncelle
      set((state) => ({
        posts: [...state.posts, newPostData],
      }));

      console.log("Yeni post eklendi:", newPostData);
    } catch (error) {
      console.log("addPost DBController Error", error);
    }
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

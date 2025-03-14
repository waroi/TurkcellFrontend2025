import { create } from "zustand";
import {
  collection,
  getDocs,
  query,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase_config";

const useBlogStore = create((set) => ({
  posts: [],
  getPosts: async () => {
    try {
      const q = query(collection(db, "posts"));
      const snaps = await getDocs(q);
      const allPosts = snaps.docs.map((post) => ({
        id: post.id,
        ...post.data(),
      }));

      set({ posts: allPosts });
    } catch (error) {
      console.log("fetchAllPosts DBController Error", error);
    }
  },

  getPostById: async (id) => {
    try {
      const postRef = doc(db, "posts", id);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        const postData = {
          id: postSnap.id,
          ...postSnap.data(),
        };
        console.log("getPostById:", postData);
        return postData;
      } else {
        console.log("Belirtilen ID'ye sahip gönderi bulunamadı.");
        return null;
      }
    } catch (error) {
      console.error("getPostById DBController Error:", error);
      return null;
    }
  },
  addPost: async (newPost) => {
    try {
      const newPostRef = doc(db, "posts", self.crypto.randomUUID());
      await setDoc(newPostRef, {
        title: newPost.title,
        content: newPost.content,
        author: newPost.author,
        releaseDate: newPost.releaseDate,
        image: newPost.image,
      });

      const newPostSnap = await getDoc(newPostRef);
      const newPostData = { id: newPostSnap.id, ...newPostSnap.data() };

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

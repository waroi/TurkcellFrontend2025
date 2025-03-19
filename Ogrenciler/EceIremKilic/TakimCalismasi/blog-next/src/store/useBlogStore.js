import { create } from "zustand";
import {
  collection,
  getDocs,
  query,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase_config";

const useBlogStore = create((set) => ({
  posts: [],
  getPosts: async () => {
    try {
      const postsCollection = collection(db, "posts");
      const q = query(postsCollection, orderBy("releaseDate", "desc"));
      const snaps = await getDocs(q);
      const allPosts = snaps.docs.map((post) => ({
        id: post.id,
        ...post.data(),
      }));
      set({ posts: allPosts });
    } catch (error) {
      console.error("fetchAllPosts DBController Error", error);
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

      set((state) => {
        const alreadyExists = state.posts.some(
          (post) => post.id === newPostData.id
        );
        return alreadyExists ? state : { posts: [...state.posts, newPostData] };
      });

      console.log("Yeni post eklendi:", newPostData);
    } catch (error) {
      console.error("addPost DBController Error", error);
    }
  },

  updatePost: async (id, updatedPost) => {
    try {
      const postRef = doc(db, "posts", id);
      await updateDoc(postRef, updatedPost);

      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, ...updatedPost } : post
        ),
      }));
      console.log("Post güncellendi:", updatedPost);
    } catch (error) {
      console.error("updatePost DBController Error", error);
    }
  },

  deletePost: async (id) => {
    try {
      const confirmDelete = confirm(
        "Bu postu silmek istediğinize emin misiniz?"
      );
      if (!confirmDelete) return;
      const postRef = doc(db, "posts", id);
      await deleteDoc(postRef);

      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      }));

      console.log("Post silindi:", id);
    } catch (error) {
      console.error("deletePost DBController Error", error);
    }
  },
}));

export default useBlogStore;

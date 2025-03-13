import { create } from "zustand";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase_config";

const useBlogStore = create((set) => ({
  posts: [],
  getPosts: async () => {
    try {
      const q = query(collection(db, "posts"));
      const snaps = await getDocs(q);
      const allPosts = snaps.docs.forEach((post) =>
        set((state) => ({
          posts: [...state.posts, post.data()],
        }))
      );
      // for (const doc of snaps.docs) {
      //   set((state) => ({
      //     posts: [...state.posts, doc.data()],
      //   }));
      // }
    } catch (error) {
      console.log("fetchAllPosts DBController Error", error);
    }
  },
  getPostById: async (id) => {},
  addPost: async (newPost) => {},
  updatePost: async (id, updatedPost) => {},
  deletePost: async (id) => {},
}));

export default useBlogStore;

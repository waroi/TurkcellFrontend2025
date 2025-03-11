import { create } from "zustand";
import data from "../data/data.json";

const useBlogStore = create((set) => ({
  posts: data,
  id: 17,
  addPosts: (post) =>
    set((state) => ({
      posts: [...state.posts, { id: state.id, ...post }],
      id: state.id + 1,
    })),
}));

export default useBlogStore;

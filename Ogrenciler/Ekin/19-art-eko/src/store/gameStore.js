import { create } from "zustand";

export default create((set) => ({
  set: (value) => {
    set({ ...value });
  },
}));

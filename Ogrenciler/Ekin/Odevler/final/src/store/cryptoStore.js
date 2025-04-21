import { create } from "zustand";

export default create((set) => ({
  user: false,

  set: (value) => {
    set({ ...value });
  },
}));

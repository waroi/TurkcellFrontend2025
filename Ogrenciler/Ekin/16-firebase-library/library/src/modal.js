import { create } from "zustand";

//* show, mode, book, action

export default create((set) => ({
  setModal: (properties) =>
    Object.entries(properties).forEach(([key, value]) =>
      set((state) => ({ ...state, [key]: value }))
    ),
}));

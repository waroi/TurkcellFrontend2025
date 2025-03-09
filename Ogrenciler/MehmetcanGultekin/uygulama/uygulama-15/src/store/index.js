import { create } from "zustand";

export const useAuthStore = create((set) => ({
  userInfo: { email: "", password: "", yayinevi: "", adminName: "" },
  addUserInfo: (data) =>
    set((state) => ({
      userInfo: data,
    })),
}));

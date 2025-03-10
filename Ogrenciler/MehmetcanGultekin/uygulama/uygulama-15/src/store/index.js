import { create } from "zustand";

export const useAuthStore = create((set) => ({
  userInfo: { email: "", password: "", yayinevi: "", adminName: "" },
  authenticatedUser: {
    isAuthenticated: false,
    yayin: "",
    adminName: "",
    userId: "",
  },
  addUserInfo: (data) =>
    set((state) => ({
      //  userInfo: { email: "", password: "", yayinevi: "", adminName: "" },
      userInfo: data,
    })),
  clearUserInfo: (data) =>
    set((state) => ({
      userInfo: { email: "", password: "", yayinevi: "", adminName: "" },
    })),
  addAuthenticatedUser: (data) =>
    set((state) => ({
      authenticatedUser: data
        ? data
        : { isAuthenticated: false, yayin: "", adminName: "", userId: "" },
    })),
}));

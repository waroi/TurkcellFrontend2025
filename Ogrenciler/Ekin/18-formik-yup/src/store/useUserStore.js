import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  applications: [],

  setUser: (user) => {
    set({ user });
  },

  setApplications: (application) => {
    set({ application });
  },
}));

export default useUserStore;

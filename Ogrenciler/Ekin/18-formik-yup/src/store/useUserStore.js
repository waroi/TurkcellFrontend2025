import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  applications: [],

  setUser: (user) => {
    set({ user });
  },

  setApplications: (applications) => {
    set({ applications });
  },

  setApplicationStatus: (id, status) => {
    set((state) => ({
      applications: state.applications.map((application) =>
        id == application.id ? { ...application, status } : application
      ),
    }));
  },
}));

export default useUserStore;

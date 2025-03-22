import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  applications: [],
  toast: "",

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

  setToast: (toast) => {
    set({ toast });
  },
}));

export default useUserStore;

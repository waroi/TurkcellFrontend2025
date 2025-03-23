import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  applications: [],
  userApplications: [],
  toast: [],

  setUser: (user) => {
    set({ user });
  },

  setApplications: (applications) => {
    set({ applications });
  },

  setUserApplications: (userApplications) => {
    set({ userApplications });
  },

  setApplicationStatus: (id, status) => {
    set((state) => ({
      applications: state.applications.map((application) =>
        id == application.id ? { ...application, status } : application
      ),
    }));
  },

  addToast: (message, variant) => {
    set((state) => ({
      toast: state.toast.concat([
        { key: Math.random().toString(36).substring(5), message, variant },
      ]),
    }));
  },

  removeToast: (selectedKey) => {
    set((state) => {
      return { toast: state.toast.filter(({ key }) => selectedKey != key) };
    });
  },
}));

export default useUserStore;

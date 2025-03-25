import { create } from "zustand";

export default create((set) => ({
  user: null,
  allApplications: [],
  applications: [],
  userApplications: [],
  toast: [],

  setUser: (user) => {
    set({ user });
  },

  setAllApplications: (allApplications) => {
    set({ allApplications });
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
        id == application.form ? { ...application, status } : application
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

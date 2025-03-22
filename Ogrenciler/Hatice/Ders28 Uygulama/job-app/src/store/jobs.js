import { create } from "zustand";

export default create((set) => ({
  jobs: [],
  user: null,

  setUser: (user) => {
    set({ user });
  },


  setJobs: (jobs) => {
    set({ jobs });
  },

  addJobs: (job) => {
    set((state) => ({
      jobs: [...state.jobs, job],
    }));
  },

  deleteJobs: (id) => {
    set((state) => ({
      jobs: state.jobs.filter((job) => id != job.id),
    }));
  },
}));

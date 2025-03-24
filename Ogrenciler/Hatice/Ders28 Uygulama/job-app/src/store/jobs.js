import { create } from "zustand";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";

export default create((set) => ({
  jobs: [],
  user: null,

  setUser: (user) => {
    set({ user });
  },

  fetchJobs: async () => {
    const db = getFirestore();
    const jobCollection = collection(db, "jobApplications");

    try {
      const jobSnapshot = await getDocs(jobCollection);
      const jobList = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      set({ jobs: jobList });
    } catch (error) {
      console.error("Error fetching jobs: ", error);
    }
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

  updateJobStatus: async (id, newStatus) => {
    const db = getFirestore();
    const jobDoc = doc(db, "jobApplications", id);

    await updateDoc(jobDoc, { status: newStatus });
    set((state) => ({
      jobs: state.jobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job
      ),
    }));
  }
}));

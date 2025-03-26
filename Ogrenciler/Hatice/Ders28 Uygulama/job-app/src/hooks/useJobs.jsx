import { useState, useEffect } from 'react';
import useJobsStore from '../store/jobs';

const useJobs = () => {
  const jobs = useJobsStore((state) => state.jobs);
  const fetchJobs = useJobsStore((state) => state.fetchJobs);
  const updateJobStatus = useJobsStore((state) => state.updateJobStatus);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs().then(() => setLoading(false));
  }, [fetchJobs]);

  const handleStatusChange = (id, newStatus) => {
    updateJobStatus(id, newStatus);
  };

  return { jobs, loading, updateJobStatus, handleStatusChange};
};

export default useJobs;

import React, { useEffect, useState } from 'react';
import useJobsStore from '../store/jobs';

const Applications = () => {
  const jobs = useJobsStore((state) => state.jobs);
  const fetchJobs = useJobsStore((state) => state.fetchJobs);
  const updateJobStatus = useJobsStore((state) => state.updateJobStatus);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs().then(() => setLoading(false));
  }, [fetchJobs]); // fetchJobs bağımlılığı eklendi

  const handleStatusChange = (id, newStatus) => {
    updateJobStatus(id, newStatus);
  };

  return (
    <div className='container mt-5'>
      <h2 className='mb-4'>Başvurular</h2>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : jobs.length > 0 ? (
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Ad Soyad</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>LinkedIn</th>
              <th>Ön Yazı</th>
              <th>Başvuru Tarihi</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.fullName}</td>
                <td>{job.email}</td>
                <td>{job.phone}</td>
                <td>
                  <a href={job.linkedin} target='_blank' rel='noopener noreferrer'>
                    LinkedIn
                  </a>
                </td>
                <td>{job.coverLetter}</td>
                <td>{job.createdAt?.toDate?.().toLocaleString() || '-'}</td>
                <td>
                  <select className='bg-white text-dark'
                  style={{ border: "1px solid var(--primary)", borderRadius: "5px" }}
                    value={job.status || 'Beklemede'}
                    onChange={(e) => handleStatusChange(job.id, e.target.value)}
                  >
                    <option value='Beklemede'>Beklemede</option>
                    <option value='Olumlu'>Olumlu</option>
                    <option value='Olumsuz'>Olumsuz</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Başvuru Yok</p>
      )}
    </div>
  );
};

export default Applications;

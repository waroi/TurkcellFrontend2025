import React, { useEffect, useState } from 'react';
import useJobs from '../hooks/useJobs';
import ApplicationStatus from '../hooks/ApplicationStatus';

const Applications = () => {
  const { jobs, loading } = useJobs();

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
                  <ApplicationStatus job={job} />
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

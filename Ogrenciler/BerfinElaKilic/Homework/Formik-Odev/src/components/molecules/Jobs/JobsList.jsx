import React from 'react';
import JobCard from '../../atoms/cards/JobCard';

const JobList = ({ jobs, onDelete }) => {
  return (
    <div>
      <h2>İş İlanları</h2>
      {jobs.length > 0 ? (
        <JobCard jobs={jobs} onDelete={onDelete} />
      ) : (
        <p>Henüz iş ilanı yok.</p>
      )}
    </div>
  );
};

export default JobList;
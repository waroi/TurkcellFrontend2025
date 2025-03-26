import React, { useEffect, useState } from 'react';
import useJobs from './useJobs';

const ApplicationStatus = ({ job }) => {
    const { handleStatusChange } = useJobs();

    return (
        <div>
            <select className='bg-white text-dark'
                style={{ border: "1px solid var(--primary)", borderRadius: "5px" }}
                value={job.status || 'Beklemede'}
                onChange={(e) => handleStatusChange(job.id, e.target.value)}
            >
                <option value='Beklemede'>Beklemede</option>
                <option value='Olumlu'>Olumlu</option>
                <option value='Olumsuz'>Olumsuz</option>
            </select>
        </div>
    )
}

export default ApplicationStatus;
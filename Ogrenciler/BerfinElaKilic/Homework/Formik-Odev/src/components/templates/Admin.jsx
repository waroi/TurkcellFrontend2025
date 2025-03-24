import React, { useEffect, useState } from 'react'
import { getAllJobs, deleteJob } from '../../utils/services'
import JobList from '../molecules/Jobs/JobsList';

const Admin = () => {
    const [listing, setListing] = useState([])

    useEffect(() => {
        const loadListing = async () => {
            try {
                const data = await getAllJobs()
                setListing(data)
            } catch (error) {
                console.error(error)
            }
        }
        loadListing();
    }, []);

    const handleDelete = async (id) => {
        try {
          await deleteJob(id); 
          setListing(listing.filter(listing => listing.jobId !== id)); 
        } catch (error) {
          console.error(error);
        }
      };


return (
    <div>
        <h1>İlan Yönetimi</h1>
        <JobList jobs={listing} onDelete={handleDelete}/>

    </div>
)
}

export default Admin
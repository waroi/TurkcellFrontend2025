import React, { useEffect, useState } from 'react'
import { getAllJobs, deleteJob } from '../../utils/services'
import BaseCard from '../atoms/cards/baseCard';
import DangerButton from '../atoms/Buttons/DangerButton';

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
          setListings(listings.filter(listing => listing.jobId !== id)); 
        } catch (error) {
          console.error(error);
        }
      };


return (
    <div>
        <h1>İlanlar</h1>
        <BaseCard/>
        <DangerButton onClick= {handleDelete}>Sil</DangerButton> 
    </div>
)
}

export default Admin
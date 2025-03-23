import React from 'react'
import { getJobs } from '../firebase/firebaseConfig'
import jobs from '../store/jobs'

const applications = () => {
  console.log(getJobs)
  return (
    <div className='container'>
      <h2>Başvurular</h2>
      <div className='row'>
        {jobs.length < 0 ? (
          jobs.map((job) => (
            <div></div>
          ))
        ):(
          <p>Başvuru Yok</p>
        )}
      </div>
    </div>
    
  )
}

export default applications
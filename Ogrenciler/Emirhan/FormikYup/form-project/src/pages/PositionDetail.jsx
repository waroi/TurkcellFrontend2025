import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { fetchPosition } from '../firebase/firebaseUpload'
import Navbar from '../components/Navbar'


const PositionDetail = () => {
    const { id } = useParams();
    const [position, setPosition] = useState({});
    useEffect(() => async () => {
        const getJob = await fetchPosition(id);
        setPosition(getJob);
    }, [id]);

    return (
        <>
            <Navbar />
            <div className='container my-5 py-2'>
                <h2 className="text-center mb-4 py-5">{position.title}</h2>
                <div>
                    <div className="d-flex flex-column gap-3">
                        <div className='d-flex gap-2 align-items-center'>
                            <i className="fa-solid fa-calendar-days"></i>
                            <span className="fw-medium ">Başvuru Başlangıcı: {position.startDate}</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span className="fw-medium">Son Başvuru: {position.endDate}</span>
                        </div>


                    </div>
                    <p className="mt-3">{position.description}</p>
                    <hr />
                    <div className="d-flex gap-3 mb-3 justify-content-between">
                        <div className="d-flex flex-column gap-2">
                            <div className="d-flex gap-2 align-items-center">
                                <i className="fa-solid fa-location-dot"></i>
                                <span><strong>Konum:</strong> {position.location}</span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <i className="fa-solid fa-briefcase"></i>
                                <span><strong>İş Türü:</strong> {position.type}</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h5>Sorumluluklar:</h5>
                        <div className='white-space mb-3'>
                            {position.responsivities}
                        </div>

                    </div>
                    <div>
                        <h5>Gereksinimler:</h5>
                        <div className='white-space'>
                            {position.requirements}
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <a href='/workform' className="primary-button inline-button text-decoration-none">Hemen Başvur!</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PositionDetail
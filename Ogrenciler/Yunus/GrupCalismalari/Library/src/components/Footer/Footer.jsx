import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <footer className='footer-library text-white py-4 mt-3'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img src='../logo2.png' className='img-fluid' width={100} alt='Balığın Kütüphanesi'></img>
                        <p className="d-flex flex-column align-items-start mt-4 mb-4 ms-3">
                            <NavLink to="/" className="text-white text-decoration-none mb-2 me-3">Anasayfa</NavLink>
                            <NavLink to="/popular-books" className="text-white text-decoration-none me-3">Kitap Ara</NavLink>
                        </p>
                        <p className='mb-2'>&copy; 2025 Balığın Kütüphanesi. All rights reserved.</p>
                    </div>
                    <div className='col-md-6 d-flex justify-content-end align-items-end'>
                        <div className="social-links mb-3">
                            <a className="text-white me-3">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a className="text-white me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a className="text-white">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>


        </footer >
    )
}

export default Footer
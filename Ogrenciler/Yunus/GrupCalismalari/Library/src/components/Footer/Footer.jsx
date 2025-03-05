import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink } from 'react-router'
import { useState } from 'react'

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
        alert('Teşekkürler! Geri bildiriminiz alındı.');
    };

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
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <form onSubmit={handleSubmit} className='mt-4'>
                                    <h5>Geri Bildirim Gönderin</h5>
                                    <div className='mb-3'>
                                        <input
                                            type='text'
                                            placeholder='Adınız'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <input
                                            type='email'
                                            placeholder='E-posta adresiniz'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <textarea
                                            placeholder='Mesajınız'
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            className='form-control'
                                        />
                                    </div>
                                    <button type='submit' className='btn btn-light'>Gönder</button>
                                </form>
                            </div>
                            <div className="col-md-12 d-flex justify-content-end align-items-end social-links mb-3">
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
                <p className='text-center mb-2'>&copy; 2025 Balığın Kütüphanesi. All rights reserved.</p>
            </div>
        </footer >
    );
}

export default Footer
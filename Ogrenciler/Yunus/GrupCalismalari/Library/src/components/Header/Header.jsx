import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
    return (
        <>
            <nav className="navbar py-3 navbar-expand-lg bg-body-tertiary">
                <div className="container flex-column">
                    <NavLink className="navbar-brand" to="/">
                        <img src="../logo.png" width={200} className='img-fluid' alt="Balığın Kütüphanesi" />
                        {/* Balığın Kütüphanesi */}
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Anasayfa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/popular-books">Kitap Ara</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
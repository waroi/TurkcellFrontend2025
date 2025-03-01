import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom">
                <p className="col-md-4 mb-0 text-body-secondary">© 2025 Company, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                </a>

                <ul className="nav col-md-4">
                    <li className="nav-item"><NavLink to={""} className="nav-link px-2 text-body-secondary">Anasayfa</NavLink></li>
                    <li className="nav-item"><NavLink to={""} className="nav-link px-2 text-body-secondary">Spor</NavLink></li>
                    <li className="nav-item"><NavLink to={""} className="nav-link px-2 text-body-secondary">Economi</NavLink></li>
                    <li className="nav-item"><NavLink to={""} className="nav-link px-2 text-body-secondary">Sağlık</NavLink></li>
                    <li className="nav-item"><NavLink to={""} className="nav-link px-2 text-body-secondary">Magazin</NavLink></li>
                    <li className="nav-item"><NavLink to={""} className="nav-link px-2 text-body-secondary">Genel</NavLink></li>
                    <li className="nav-item"><NavLink to={""} className="nav-link px-2 text-body-secondary">Dünya</NavLink></li>
                </ul>
        </footer>
    )
}

export default Footer
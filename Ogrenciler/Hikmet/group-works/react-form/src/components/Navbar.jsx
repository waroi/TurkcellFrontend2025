import React from 'react'
import { Link } from 'react-router';
const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FormApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item me-2">
                            <Link className="btn btn-primary"to="/login">Giriş Yap</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary" to="/register">Kayıt ol!</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    </>

    )
}

export default Navbar


import React from 'react'
import {NavLink} from 'react-router';

import Logo from '../../assets/logo.png';
import Router from '../../routes/Router';
const Header = () => {
    return (<>
        <header  >
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark mx-auto">
                <div className="container container-fluid">
                    <NavLink className="navbar-brand" href="#">
                        <img src={Logo} alt="Sihirli Dükkan Logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Anasayfa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="index.html#about-us">Hakkımızda</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="index.html#bestseller">Çok Satanlar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="index.html#products">Ürünler</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sss">Sıkça Sorulan Sorular</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="index.html#contact-us">Bize Ulaşın</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dil Tercihi
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">İngilizce</a></li>
                                    <li><a className="dropdown-item" href="#">İspanyolca</a></li>
                                    <li><a className="dropdown-item" href="#">Türkçe</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <img src="https://img.icons8.com/?size=100&id=fJ7hcfUGpKG7&format=png&color=ffffff" alt="" />
                            </li>
                            <li className="nav-item">
                                <img src="https://img.icons8.com/?size=100&id=87&format=png&color=ffffff" alt="" />
                            </li>
                            <li className="nav-item">
                                <img src="https://img.icons8.com/?size=100&id=P6ZYIof6BwLW&format=png&color=ffffff" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </header>
        
    </>)
}

export default Header;
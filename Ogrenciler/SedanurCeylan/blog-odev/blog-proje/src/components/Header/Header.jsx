import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

function Header() {
    return (
        <div className='header'>
            <div className='title'>BlogSayfam</div>
            <div className='menu'>
                <a href='#'>Anasayfa</a>
                <a href='#'>Hakkımda</a>
                <a href='#'>İletişim</a>
            </div>
        </div>
    );
}

export default Header;
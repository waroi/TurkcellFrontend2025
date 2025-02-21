import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


function Footer() {
    return (
        <footer class="py-3 mt-5 bg-white">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Anasayfa</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Hakkımda</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">İletişim</a></li>

            </ul>
            <p class="text-center text-body-secondary">© 2025 Turkcell Bootcamp, Beyza Seda Beyza</p>
        </footer>
    );
}

export default Footer;
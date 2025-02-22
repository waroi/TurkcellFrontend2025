import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h5>Hakkımızda</h5>
                        <p>Bu blog sayfası temizlik konularında bilgi paylaşımı yapmaktadır.</p>
                    </div>
                </div>
                <div className="text-center">
                    <p className='m-0'>&copy; 2025 Mis Gibi Blog.</p>
                    <div className='d-flex gap-3 justify-content-center'>
                        <a href="https://github.com/zeynepguney" target='_blank'>Zeynep</a>
                        <a href="https://github.com/YunusOrak" target='_blank'>yunus</a>
                        <a href="https://github.com/ctutar" target='_blank'>Cansu</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
const Footer = () => {
    return (
        <footer className="footer bg-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="mb-3 gothic-text">Çok Gezenti</h1>
                        <p>Seyahat bloglarımızdan yararlanmayı unutmayın!</p>
                        <ul className="list-unstyled">
                            <li><strong>Adres:</strong> 34010 Kadıköy/İstanbul</li>
                            <li><strong>E-posta:</strong> info@cokgezentiHR.com</li>
                            <li><strong>Telefon:</strong> +1 234 567 890</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-3 fw-bold text-center">Popüler Yazılar</h5>
                        <div className="d-flex flex-row justify-content-around pb-3">
                            <ul className="list-unstyled me-4" >
                                <li><a className="text-black text-decoration-none">Kolezyum</a>
                                
                                </li>
                                <li><a className=" text-black  text-decoration-none">Machu Pichu</a></li>
                                <li><a className="text-black  text-decoration-none">Stonehedge</a></li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h5 className="fw-bold">Çok Gezenti Bülteni'ne Abone Ol</h5>
                        <p className="mb-3">Seyahatteki temel bilgilerimizden yararlanmayı unutmayın!
                            olun!</p>
                        <form method="post">
                            <div className="input-group mb-3">
                                <i className="fa fa-envelope fa-2x me-2"></i>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="E-posta adresiniz"
                                    aria-label="E-posta adresiniz" required
                                />
                                <button className="btn btn-primary" type="submit">Abone Ol</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; 2025 Çok Gezenti. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
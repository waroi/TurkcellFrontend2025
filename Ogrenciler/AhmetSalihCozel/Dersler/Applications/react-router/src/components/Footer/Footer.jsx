const Footer = () => {
    return (
        <footer className="footer p-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="footer-brand mb-4">
                            <img src="./../src/assets/logo.png" alt="HoloWorld" height="50" />
                            <div>
                                <ul className="list-unstyled footer-links mt-3">
                                    <li className="mb-2"><a className="links" href="#products">Shop HoloWorld</a></li>
                                    <li className="mb-2"><a className="links" href="#about">About Us</a></li>
                                    <li className="mb-2"><a className="links" href="#faq">FAQ</a></li>
                                    <li className="mb-2"><a className="links" href="#contact">Contact Us</a></li>
                                    <li className="mb-2"><a className="links" href="#">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <h4 className="mb-3 text-white">Newsletter</h4>
                        <p className="text-white">Subscribe and stay current with our latest products.</p>
                        <form className="footer-subscribe">
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your e-mail"
                                    aria-label="E-mail for subscribe" />
                                <button className="btn btn-secondary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-end mt-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <p className="mb-0 text-white">&copy; 2025 HoloWorld. All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 d-flex">
                            <div className="footer-social ms-auto">
                                <a className="me-3" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a className="me-3" href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a className="me-3" href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer
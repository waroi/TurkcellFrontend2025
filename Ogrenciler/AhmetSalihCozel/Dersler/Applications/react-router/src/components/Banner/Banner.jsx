import { NavLink } from "react-router";

const Banner = () => {
    return (
        <section className="banner p-5">
            <div className="overlay">
                <div className="container">
                    <div className="row banner-content">
                        <div className="col-lg-4">
                            <h2 className="banner-title mt-5 mb-5 text-white">WELCOME TO HOLOWorld!</h2>
                            <p className="text-white mb-5">Buy a holographic universe and step into different adventures.</p>
                            <NavLink to={'/products'} className="banner btn btn-secondary">BUY NOW</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner
import { NavLink } from "react-router";

const Header = () => {
    return (
        <header className="header-menu">
            <nav className="navbar navbar-expand-lg" role="navigation" aria-label="Main navigation">
                <div className="container-lg">
                    <NavLink className="navbar-brand" to={'/'} aria-label="HoloWorld">
                        <img src="./../src/assets/logo.png" alt="Logo" height="50" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu"
                        aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse nav-underline" id="navbarMenu">
                        <ul className="navbar-nav ms-auto me-5" role="menubar">
                            <li className="nav-item" role="none">
                                <NavLink className="nav-link me-2" to={'/'} role="menuitem" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item" role="none">
                                <NavLink className="nav-link me-2" to={'/products'} role="menuitem">Products</NavLink>
                            </li>
                            <li className="nav-item" role="none">
                                <NavLink className="nav-link me-2" to={'/about'} role="menuitem">About</NavLink>
                            </li>
                            <li className="nav-item" role="none">
                                <NavLink className="nav-link me-2" to={'/faq'} role="menuitem">FAQ</NavLink>
                            </li>
                            <li className="nav-item" role="none">
                                <NavLink className="nav-link me-2" to={'/contact-us'} role="menuitem">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header
import { NavLink } from 'react-router'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'

const Header = () => {
    return (
        <header className='container mt-3'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 pb-5">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/a'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
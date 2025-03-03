import { NavLink } from 'react-router';
import { FaRegNewspaper } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container'>
        <NavLink className='navbar-brand fs-2 text-primary fw-bold' to='/'>
          Taraflı Gazete
          <FaRegNewspaper className='ms-2 fs-1'/>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink
                className='nav-link active fs-5 me-3'
                aria-current='page'
                to='/'
              >
                Anasayfa
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link fs-5' to='/haberler'>
                Haberler
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

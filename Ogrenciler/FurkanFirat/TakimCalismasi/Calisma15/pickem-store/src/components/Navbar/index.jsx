import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark-purple fixed-top shadow-lg'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand text-white fs-36 ms-4'>
          pick'em
        </NavLink>
        <button
          className='navbar-toggler btn-white border-0'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
          aria-label='Toggle team navigation'
        >
          <i className='bi bi-list text-white'></i>
        </button>
        <div
          className='offcanvas offcanvas-end'
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header'>
            <h5
              className='offcanvas-title fs-36 text-white'
              id='offcanvasNavbarLabel'
            >
              pick'em
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 fw-semibold'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link' aria-current='page'>
                  Anasayfa
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/oyuncular' className='nav-link'>
                  Oyuncular
                </NavLink>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='bombalar.html'>
                  Bombalar
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='hakkimizda.html'>
                  Hakkımızda
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='sss.html'>
                  S.S.S
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='iletisim.html'>
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

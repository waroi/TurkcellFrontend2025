import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
import { doSignOut } from '../../firebase/auth';

export default function Navbar() {
  const { isLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    doSignOut();
    navigate('/');
  };

  return (
    <nav className='navbar navbar-expand-lg sticky-top shadow-sm navbar-style'>
      <div className='container d-flex justify-content-between align-items-center'>
        <NavLink to='/' className='navbar-brand d-flex align-items-center'>
          <i className='bi bi-book me-2 fs-3'></i>
          <span className='fw-bold text-white'>BookStore</span>
        </NavLink>

        <button
          className='navbar-toggler border-0 shadow-none'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
        >
          <i className='bi bi-list text-white fs-2'></i>
        </button>
        {/* home - admin */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto flex-column flex-lg-row text-center'>
            <li className='nav-item mx-2'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded-pill ${
                    isActive ? 'bg-white fw-bold' : 'text-white'
                  }`
                }
              >
                <i className='bi bi-house-door me-1'></i> Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className='nav-item mx-2'>
                <NavLink
                  to='/admin'
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill ${
                      isActive ? 'bg-white fw-bold' : 'text-white'
                    }`
                  }
                >
                  <i className='bi bi-shield-lock me-1'></i> Admin
                </NavLink>
              </li>
            )}
          </ul>
          {/* profile */}
          <div className='d-flex align-items-center gap-3'>
            {isLoggedIn ? (
              <div className='d-flex align-items-center gap-2 text-center w-100 justify-content-center'>
                <div className='bg-white rounded-circle d-flex align-items-center justify-content-center d-none d-lg-flex profile-circle'>
                  <i className='bi bi-person text-orange fs-5'></i>
                </div>

                <span className='text-white d-none d-lg-block'>
                  {currentUser?.email || 'User'}
                </span>
                <button
                  onClick={signOut}
                  className='btn btn-outline-light rounded-pill px-3 mt-1'
                >
                  <i className='bi bi-box-arrow-right me-1'></i> Logout
                </button>
              </div>
            ) : (
              <div className='d-flex gap-2 w-100 justify-content-center mt-1'>
                <NavLink to='/login' className='text-decoration-none'>
                  <button className='btn btn-light text-orange rounded-pill'>
                    <i className='bi bi-person-check me-1'></i> Login
                  </button>
                </NavLink>
                <NavLink to='/register' className='text-decoration-none'>
                  <button className='btn btn-outline-light rounded-pill'>
                    <i className='bi bi-person-plus me-1'></i> Register
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

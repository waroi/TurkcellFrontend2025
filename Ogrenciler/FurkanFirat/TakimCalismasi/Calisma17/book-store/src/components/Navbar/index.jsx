import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
import { doSignOut } from '../../firebase/auth';

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const signOut = () => {
    doSignOut();
    navigate('/');
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container'>
          <NavLink to='/' className='navbar-brand'>
            Book Store
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
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link active' aria-current='page'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/admin' className='nav-link'>
                  Admin
                </NavLink>
              </li>
            </ul>
            {isLoggedIn ? (
              <li className='nav-item' onClick={signOut}>
                <span className='btn btn-primary'>Logout</span>
              </li>
            ) : (
              <div className='ms-auto'>
                <NavLink to='/login'>
                  <li className='nav-item btn btn-warning me-2'>Login</li>
                </NavLink>
                <NavLink to='/register'>
                  <li className='nav-item btn btn-outline-secondary'>
                    Register
                  </li>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

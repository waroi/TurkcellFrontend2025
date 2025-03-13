'use client';
import { useAuth } from '@/context/authContext';
import { useSearch } from '@/context/searchContext';
import Link from 'next/link';
const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { isLoggedIn, logOutUser } = useAuth();
  return (
    <nav className='navbar navbar-dark bg-secondary navbar-expand-lg'>
      <div className='container-fluid'>
        <Link className='navbar-brand' href='/'>
          TechTalks
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' href='/'>
                Anasayfa
              </Link>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className='auth-buttons'>
            {isLoggedIn ? (
              <div className='logged-in'>
                <button className='btn' onClick={logOutUser}>
                  Logout
                </button>
              </div>
            ) : (
              <div className='not-logged-in'>
                <button className='btn btn-primary'>Login</button>
                <button className='btn btn-outline-warning'>Register</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

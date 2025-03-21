import React from 'react';
import { Button } from '../atoms/Button';
import NavbarLink from '../atoms/NavbarLink';

const NavItems = ({ currentUser, handleLogout }) => {
  if (currentUser) {
    return (
      <>
        <NavbarLink to='/admin'>Applications</NavbarLink>

        <li className='nav-item'>
          <Button
            className='btn btn-outline-secondary ms-2'
            onClick={handleLogout}
          >
            Logout
          </Button>
        </li>
      </>
    );
  }

  return (
    <>
      <NavbarLink to='/login'>Login</NavbarLink>
      <NavbarLink to='/register'>Register</NavbarLink>
    </>
  );
};

export default NavItems;

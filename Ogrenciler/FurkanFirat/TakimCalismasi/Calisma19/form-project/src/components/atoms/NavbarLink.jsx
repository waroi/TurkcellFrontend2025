import React from 'react';
import { Link } from 'react-router';

const NavbarLink = ({ to, children }) => {
  return (
    <li className='nav-item'>
      <Link className='nav-link' to={to}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;

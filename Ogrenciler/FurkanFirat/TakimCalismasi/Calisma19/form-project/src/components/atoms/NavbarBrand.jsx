import React from 'react';
import { Link } from 'react-router';

const NavbarBrand = ({ to, children }) => {
  return (
    <Link className='navbar-brand' to={to}>
      <h5>{children}</h5>
    </Link>
  );
};

export default NavbarBrand;

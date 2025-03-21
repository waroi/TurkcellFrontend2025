import React from 'react';
import { useNavigate } from 'react-router';
import NavbarBrand from '../atoms/NavbarBrand';
import NavItems from '../molecules/NavItems';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { currentUser, logOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate('/login');
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-transparent'>
      <div className='container-fluid mx-5'>
        <NavbarBrand to='/'>{'{atmosware}'}</NavbarBrand>

        <ul className='navbar-nav ms-auto'>
          <NavItems currentUser={currentUser} handleLogout={handleLogout} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

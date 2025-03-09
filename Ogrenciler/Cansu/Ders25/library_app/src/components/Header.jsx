import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><button onClick={toggleTheme}>Toggle Theme</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';

const Navbar = ({ handleCategoryChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-mint bg-mint">
      <a className="navbar-brand" href="#">Mis Gibi Blog</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button className="nav-link" onClick={() => handleCategoryChange('Genel Temizlik')}>Genel Temizlik</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryChange('Hızlı Temizlik')}>Hızlı Temizlik</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryChange('Doğal Temizlik')}>Doğal Temizlik</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryChange('Banyo Temizliği')}>Banyo Temizliği</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryChange('Mutfak Temizliği')}>Mutfak Temizliği</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

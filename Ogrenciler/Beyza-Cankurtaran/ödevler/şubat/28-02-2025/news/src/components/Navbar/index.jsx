import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Anasayfa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Haberler</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Haberler</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Spor Haberleri</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ekonomi Haberleri</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Teknoloji Haberleri</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sağlık Haberleri</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">ZenCode</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Anasayfa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/position">Açık Pozisyonlar</a>
            </li>

          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Arama yap..." aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form> */}
          <div class="dropdown">
            <div class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              isim eklicez buraya
            </div>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Çıkış Yap</a></li>

            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
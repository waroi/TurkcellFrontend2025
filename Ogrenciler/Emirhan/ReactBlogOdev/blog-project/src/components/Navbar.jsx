function Navbar({ handleSearch, search }) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Blog Ekle
              </button>
            </li>
          </ul>
          <form className="d-flex " role="search">
            <input
              className="form-control "
              type="search"
              placeholder="Blog başlığı ara..."
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

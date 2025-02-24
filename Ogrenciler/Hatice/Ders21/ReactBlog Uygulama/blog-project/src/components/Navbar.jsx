function Navbar({ handleSearch, search }) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Blog
        </a>
        <div className="d-flex align-items-center justify-content-center mx-auto gap-5 w-75">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Blog Ekle
          </button>

          <form className="d-flex flex" role="search">
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

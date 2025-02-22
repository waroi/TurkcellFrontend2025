function Navbar({ handleSearch, search }) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GitHub
        </a>
        <div className="d-flex align-items-center justify-content-center mx-auto gap-5 w-75">
          <form className="d-flex flex" role="search">
            <input
              className="form-control "
              type="search"
              placeholder="..."
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

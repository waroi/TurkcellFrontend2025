const Navbar = ({
  setMoviename,
  handleSearch,
  setSelectedOption,
  selectedOption,
}) => {
  const functionSearch = (e) => {
    e.preventDefault();
    handleSearch();
    console.log(selectedOption);
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary positi">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.imdb.com/">
          CineScope
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="dropdown me-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedOption}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setSelectedOption("Filmler")}
                >
                  Filmler
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setSelectedOption("Oyuncular")}
                >
                  Oyuncular
                </button>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              onChange={(e) => setMoviename(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Film ya da oyuncu yaz..."
              aria-label="Search"
            />
            <button
              onClick={functionSearch}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

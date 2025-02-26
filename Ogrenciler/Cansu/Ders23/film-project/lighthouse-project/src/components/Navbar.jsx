import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  height: 70px;
  top: 0;
  width: 100%;
  background-color: #1c1c1c;
`;

const NavbarBrand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: auto;
`;

const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c9302c;
  }
`;
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
            <button onClick={functionSearch} className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

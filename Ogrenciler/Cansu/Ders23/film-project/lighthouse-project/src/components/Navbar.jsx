import styled from 'styled-components';

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
const Navbar = ({ setMoviename, handleSearch, setSelectedOption, selectedOption }) => {
  const functionSearch = (e) => {
    e.preventDefault()
    handleSearch()
    console.log(selectedOption)
  }
  return (
    <NavbarContainer className="navbar navbar-expand-lg navbar-light z-3">
      <div className="container">
        <NavbarBrand href="#">CineScope</NavbarBrand>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <div className="dropdown">
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
                <button className="dropdown-item" onClick={() => setSelectedOption("Filmler")}>
                  Filmler
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setSelectedOption("Oyuncular")}>
                  Oyuncular
                </button>
              </li>
            </ul>
          </div>
          <SearchForm>
            <SearchInput onChange={(e) => setMoviename(e.target.value)} type="search" placeholder="Film ismi..." aria-label="Search" />
            <SearchButton onClick={functionSearch} type="submit">Ara</SearchButton>
          </SearchForm>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;





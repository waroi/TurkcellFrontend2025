import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(14,14,14);  
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
const Navbar = ({setMoviename, handleSearch}) => {
  const functionSearch =(e) =>{
    e.preventDefault()
    handleSearch()
  }
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavbarBrand href="#">CineScope</NavbarBrand>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
            <SearchForm>
              <SearchInput onChange={(e)=>setMoviename(e.target.value) } type="search" placeholder="Search" aria-label="Search" />
              <SearchButton onClick={functionSearch} type="submit">Search</SearchButton>
            </SearchForm>
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;





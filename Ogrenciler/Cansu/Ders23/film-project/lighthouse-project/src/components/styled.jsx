import styled from "styled-components";

export const CardMovieImg = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
`;

export const GenderChip = styled.span`
  padding: 3px 7px;
  background-color: white;
  border-radius: 20px;
  color: black;
  font-size: 12px;
  margin-left: 20px;
`;

export const HomeContainer = styled.section`
  width: 100%;
  background-color: #161616;
  min-height: 100vh;
`;

export const CardImg = styled.img`
  height: 270px;
  object-fit: cover;
`;

export const CardTypography = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  padding: 0;
  margin-bottom: 0;
`;

export const CardTitle = styled.h5`
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
`;

export const GenreChip = styled.span`
  padding: 3px 7px;
  background-color: white;
  border-radius: 20px;
  color: black;
  font-size: 12px;
  margin-left: 20px;
`;

export const DetailButton = styled.button`
  background-color: #dbdbdb;
  color: black;
  font-size: 13px;
  border: none;
  &:hover {
    background-color: #bebebe;
    color: black;
  }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  height: 70px;
  top: 0;
  width: 100%;
  background-color: #1c1c1c;
`;

export const NavbarBrand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: auto;
`;

export const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const SearchButton = styled.button`
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

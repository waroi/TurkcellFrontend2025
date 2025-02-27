import { Nav, Search, SearchButton } from "../util/styled-components";

export default function SearchBar({ searchUser, setSearchUser }) {
  return (
    <Nav>
      <i className="fa-solid fa-magnifying-glass"></i>
      <Search
        type="text"
        placeholder="Search GitHub User"
        defaultValue={searchUser}
      />
      <SearchButton
        onClick={(event) => {
          setSearchUser(event.target.parentNode.children[1].value);
        }}
      >
        Search
      </SearchButton>
    </Nav>
  );
}

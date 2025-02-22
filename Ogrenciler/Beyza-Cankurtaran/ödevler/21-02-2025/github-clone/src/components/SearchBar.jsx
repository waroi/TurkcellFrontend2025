import styled from "styled-components";

export default function SearchBar({ searchUser, setSearchUser }) {
  const Nav = styled.nav`
    display: flex;
    align-items: center;
    box-shadow: 0 0 20px var(--shadow);
    padding: 25px;
    border-radius: 15px;
    background-color: var(--white);
    height: 85px;

    & i {
      font-size: 24px;
      margin-right: 40px;
    }
  `;

  const Search = styled.input`
    outline: none;
    border: none;
    color: inherit;
  `;

  const Button = styled.button`
    border: none;
    background-color: var(--primary);
    color: var(--white);
    padding: 5px 15px;
    border-radius: 15px;
    margin-left: auto;
  `;

  return (
    <Nav>
      <i className="fa-solid fa-magnifying-glass"></i>
      <Search
        type="text"
        placeholder="Search GitHub User"
        value={searchUser}
        onInput={(event) => setSearchUser(event.target.value)}
      />
      {/* <Button onClick={() => {}}>Search</Button> */}
    </Nav>
  );
}

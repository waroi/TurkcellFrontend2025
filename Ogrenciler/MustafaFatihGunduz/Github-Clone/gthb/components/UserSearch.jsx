import React from "react";
import styled from "styled-components";
import github from "../src/assets/github.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  color: #1a0b2e;
  padding: 13px 20px;
`;

const SearchButton = styled.button`
  font-weight: 600;
  padding: 13px 20px;
  color: #1a0b2e;
`;

const UserSearch = ({ text, setText, fetchUsers }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchUsers();
    }
  };
  return (
    <>
      <Container className="container py-5">
        <div className="input-group my-5 w-50 search-bar rounded-pill">
          <span className="input-group-text rounded-start-pill">
            <img
              src={github}
              alt="github"
              className="img-fluid"
            />
          </span>
          <SearchInput
            type="text"
            className="form-control"
            placeholder="Kullanıcı adı giriniz."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <span className="input-group-text rounded-end-pill">
            <SearchButton
              className="btn"
              type="button"
              id="button-addon2"
              onClick={fetchUsers}
            >
              Ara
            </SearchButton>
          </span>
        </div>
      </Container>
    </>
  );
};

export default UserSearch;

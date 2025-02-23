import React from "react";
import styled from "styled-components";
import github from "../src/assets/github.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 54px;
   padding: 5px 20px;
   border-color: #693b93;
  box-shadow: -10px 0px 10px 5px #693b93;
`;

const SearchInput = styled.input`
  width: 100%;
  color: #1a0b2e;
  padding: 13px 20px;
  border-radius: 25px;
  border-color: #693b93;
  box-shadow: 0px 0px 10px 7px #693b93;
`;

const SearchButton = styled.button`
  background-color: #0dcaf0;
  font-weight: 600;
  border-radius: 25px;
  padding: 13px 20px;
  color: #1a0b2e;
  border-color: #693b93;
  box-shadow: 10px 0px 10px 5px #693b93;
`;

const UserSearch = ({ text, setText, fetchUsers }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchUsers(); 
    }
  };
  return (
    <>
      <Container className="container">
        <div className="input-group my-5 w-50">
          <Logo src={github} alt="github" className="bg-light btn rounded-start-pill "/>
          <SearchInput
            type="text"
            className="form-control"
            placeholder="Kullanıcı adı giriniz."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <SearchButton
            className="btn bg-light rounded-end-pill"
            type="button"
            id="button-addon2"
            onClick={fetchUsers}
          >
            Ara
          </SearchButton>
        </div>
      </Container>
    </>
  );
};

export default UserSearch;

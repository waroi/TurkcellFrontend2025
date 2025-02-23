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
  height: 50px;
`;

const SearchInput = styled.input`
  width: 100%;
  color: #1a0b2e;
  padding: 13px 20px;
  border-radius: 25px;
`;

const SearchButton = styled.button`
  background-color: #0dcaf0;
  font-weight: 600;
  border-radius: 25px;
  padding: 13px 20px;
  color: #1a0b2e;
`;

const UserSearch = ({ text, setText, fetchUsers }) => {
  return (
    <>
      <Container className="container">
        <div className="input-group my-5 w-50">
          <Logo src={github} alt="github" />
          <SearchInput
            type="text"
            className="form-control"
            placeholder="Kullanıcı adı giriniz."
            value={text}
            onChange={(e) => setText(e.target.value)}
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

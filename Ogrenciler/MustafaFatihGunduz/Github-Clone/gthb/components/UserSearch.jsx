import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-y: 10px;
`;

const SearchInput = styled.input`
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

const UserSearch = ({ users, setUsers, text, setText, fetchUsers }) => {
  return (
    <>
      <Container className="container">
        <h1 className="mt-5 text-white">GitHub Clone</h1>
        <div className="input-group my-5 w-25">
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
          {console.log(users)}
        </div>
      </Container>
    </>
  );
};

export default UserSearch;

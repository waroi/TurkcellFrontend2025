import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 350px;
  padding: 10px;
  border: 2px solid #333;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchInput = ({ inputRef, username, setUsername, fetchGitHubUser }) => {
  return (
    <InputContainer>
      <Input
        ref={inputRef}
        type="text"
        placeholder="GitHub kullanıcı adı girin..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={fetchGitHubUser}>Ara</Button>
    </InputContainer>
  );
};

export default SearchInput;

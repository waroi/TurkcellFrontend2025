import React, { useEffect, useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./StyledComponents"; 

const SearchBar = ({ onSearch, setUsername, username }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue);
  };
  useEffect(() => {
    if (username) {
      onSearch();
    }
  }, [username]);
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Kullanıcı adını girin"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <StyledButton type="submit">Ara</StyledButton>
    </StyledForm>
  );
};
export default SearchBar;

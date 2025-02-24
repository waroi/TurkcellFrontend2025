import React, { useState, useEffect } from "react";
import { StyledForm2, StyledInput2, StyledButton2 } from "./StyledComponents";


const RepoSearch = ({ onSearch, setRepos, userRepos }) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            const filtered = userRepos.filter((repo) =>
                repo.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setRepos(filtered);
        } else {
            setRepos(userRepos); 
        }
        setInputValue(""); 
    };
    useEffect(() => {
        if (userRepos) {
            onSearch();
        }
    }, [userRepos]);

    return (
        <StyledForm2 onSubmit={handleSubmit}>
            <StyledInput2
                type="text"
                placeholder="Depo adını girin"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <StyledButton2 variant="primary" type="submit">
                Ara
            </StyledButton2>
        </StyledForm2>
    );
};


export default RepoSearch;
import React from 'react'
import { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchMovie = ({ onSearch, setMovieName, movieName }) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setMovieName(inputValue);
    };
    useEffect(() => {
        if (movieName) {
            onSearch();
        }
    }, [movieName]);
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                placeholder="Kullanıcı adını girin"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit">Ara</Button>
        </Form>
    );
};
export default SearchMovie;

import React, { useState } from "react";
import SearchBar from "../SearchBar";
import { getMovie, getPerson } from "../../services/fetch";

const Search = ({ setMovie, setActor }) => {
  const [query, setQuery] = useState("");

  const getData = async () => {
    const movieList = await getMovie(query);
    const person = await getPerson(query);
    setMovie(movieList);
    setActor(person);
  };

  return (
    <div>
      <div className="container ">
        <div className="banner">
          <img
            src="https://picsum.photos/1200/700"
            className="d-block "
            alt="..."
          />
          <div className="align-items-center">
            <SearchBar query={query} setQuery={setQuery} getData={getData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

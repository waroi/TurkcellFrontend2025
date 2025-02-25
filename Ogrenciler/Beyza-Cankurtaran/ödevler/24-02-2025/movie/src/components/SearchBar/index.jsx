import React, { useState } from 'react';
import { getMovie, getPerson } from '../../services/fetch';
import './searchbar.css'
import MovieCard from '../MovieCard';
export const SearchBar = ({movieList,setMovieList,personList,setPersonList}) => {
    const [query, setQuery] = useState("");
    

    const getData = async (e) => {
        e.preventDefault();
        const movie = await getMovie(query);
        const person = await getPerson(query);
        setMovieList(movie);
        setPersonList(person);
        console.log("Movie::",movie);
        console.log("Person:",person);
    }
    return (<>
        <div className='searchbar'>
            <form className="d-flex" role="search">
                <input
                    className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="search" placeholder="Film veya oyuncu arayın" aria-label="Search" />
                <button className="btn btn-primary" type="submit" 
                onClick={getData}>Search</button>
            </form>
        
        </div>
    </>)
}

export default SearchBar;
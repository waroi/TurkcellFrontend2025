import React from 'react'
import SearchBar from '../SearchBar';
import './style.css';
const Banner = () => {
    return (<>
        <div className="container ">
            <div className="banner">
                <img src="https://picsum.photos/1200/700" className="d-block " alt="..." />
                <div className="align-items-center">
                    <SearchBar/>
                </div>
            </div>
        </div>
    </>)
}

export default Banner;
import React from 'react'

function navbar( username) {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="text" placeholder="Kullanıcı adı giriniz..." aria-label="Search" value={username} onChange={handleSearch}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
};

export default navbar

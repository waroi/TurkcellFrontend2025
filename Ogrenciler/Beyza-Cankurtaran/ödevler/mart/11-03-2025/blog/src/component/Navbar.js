"use client";
import { useSearch } from '@/searchContext';

const Navbar = ({ }) => {
    const {searchQuery,setSearchQuery,handleSearch}=useSearch();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TechTalks</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Anasayfa</a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => {setSearchQuery(e.target.value);
                 handleSearch(e);
                }}
            //   onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 

            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

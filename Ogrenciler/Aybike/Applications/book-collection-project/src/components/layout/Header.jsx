import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { orderBooks } from "../../redux/slice/librarySlice";
import { useState } from "react";
import ThemeButton from '../ThemeButton';
import AdminButton from '../AdminButton';

const Header = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('asc');

  const handleSort = () => {
    dispatch(orderBooks({ order }));
	setOrder(order === 'asc' ? 'desc' : 'asc');
  };

  return (
    <nav className="navbar-books navbar navbar-expand-lg shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src="/src/assets/logo.png" alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLink className="nav-link" to="/">
            Library
          </NavLink>
          <NavLink className="nav-link px-2" to="/">
            Categories
          </NavLink>
          <NavLink className="nav-link" to="/">
            About Us
          </NavLink>
        </div>
		<i type="button" className="fa-solid fa-sort px-2"
          onClick={handleSort}/>
        <ThemeButton />
        <AdminButton />
      </div>
    </nav>
  );
};

export default Header;
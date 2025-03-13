import { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSearchTermRedux } from "../redux/slices/blogSlice";
import { registerWithGoogle, signOut } from "../../../firebase/authControl";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const distpacth = useDispatch();
  function handleSearch(e) {
    e.preventDefault();
    distpacth(setSearchTermRedux(searchTerm));
  }
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link
          href={`/`}
          className="navbar-brand d-flex gap-2 align-items-center"
        >
          <img
            width={50}
            src="https://clinipol.co.uk/clinipolsite/wp-content/uploads/2017/07/future-icon.png"
            alt="logo"
          />
          <h2> Geleceğin Bloğu</h2>
        </Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Ara"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="btn btn-outline-success"
            type="submit"
          >
            Ara
          </button>
        </form>
        <Link href={`/userPage`} onClick={registerWithGoogle}>
          SignIn
        </Link>
        <Link href={`/`} onClick={signOut}>
          SignOut
        </Link>
        <Modal />
      </div>
    </nav>
  );
};

export default Navbar;

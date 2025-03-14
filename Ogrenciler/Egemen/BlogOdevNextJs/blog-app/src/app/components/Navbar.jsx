"useClient";

import { auth } from "../../../firebase/firebase";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSearchTermRedux } from "../redux/slices/blogSlice";
import { registerWithGoogle, signOut } from "../../../firebase/authControl";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userAuth, setUserAuth] = useState();
  const dispatch = useDispatch();
  function handleSearch(e) {
    e.preventDefault();
    dispatch(setSearchTermRedux(searchTerm));
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUserAuth(userAuth);
      } else {
        setUserAuth(null);
      }
    });

    return () => unsubscribe();
  }, []);
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
        {userAuth ? (
          <div className="d-flex gap-4">
            <Modal />
            <Link className="btn btn-danger" href={`/`} onClick={signOut}>
              SignOut
            </Link>
          </div>
        ) : (
          <Link
            className="btn btn-primary"
            href={`/userPage`}
            onClick={registerWithGoogle}
          >
            SignIn
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

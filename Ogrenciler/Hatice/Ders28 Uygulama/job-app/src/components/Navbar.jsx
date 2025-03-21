import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();
    const [dark, setDark] = useState(false);

    const toggle = () => {
        setDark(!dark);
        if (dark) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
        } else {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg text-white fixed-top bg-primary">
                <div className="navbar-content d-flex justify-content-between align-items-center w-100">
                    <div className="navbar-heading">
                        <h5 className="ps-5">{"{atmosware}"}</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <button
                            onClick={toggle}
                            className="btn px-5"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px"
                            }}
                        >
                            {dark ? "🌙" : "🔆"} {/* Dark modda ay, light modda güneş */}
                        </button>
                        {user && (
                            <button
                                onClick={logout}
                                className="btn btn-danger mx-3"
                                style={{ cursor: "pointer" }}
                            >
                                Çıkış Yap
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

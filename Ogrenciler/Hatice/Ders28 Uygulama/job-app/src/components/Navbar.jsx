import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();

    const [dark, setDark] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    const logout = async () => {
        try {
            await auth.signOut();
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.error("Çıkış yapılamadı:", error);
        }
    };
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
    const handleButtonDisplay = () => {
        if (location.pathname === "/") {
            return "d-block";
        } else {
            return "d-none";
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
                        <button onClick={()=>navigate("/my-applications")} className={`btn btn-warning ${handleButtonDisplay()}`}>
                            Başvurularımı Görüntüle
                        </button>
                        <button
                            onClick={toggle}
                            className="btn px-5"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                            }}
                        >
                            {dark ? "🌙" : "🔆"}
                        </button>
                        {user ? (
                            <button
                                onClick={logout}
                                className="btn btn-danger mx-3"
                                style={{ cursor: "pointer" }}
                            >
                                Çıkış Yap
                            </button>
                        ) : (
                            <p className="mx-3">Giriş yapınız</p>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

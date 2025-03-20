import { useState } from "react";
const Navbar = () => {
    const [dark, setDark] = useState(false);
    const toggle = () => {
        setDark(!dark);
        if (dark) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
        }
        else {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg text-white fixed-top bg-primary">
                <div className="navbar-content d-flex justify-content-space-between align-items-center w-100">
                    <div className="navbar-heading w-100">
                        <h5 className="p-5 text-start">{"{atmosware}"}</h5>
                    </div>
                    <div>
                        <button
                            onClick={toggle}
                            className="btn px-5"
                            style={{
                                cursor:"pointer",
                                fontSize : "30px"
                            }}
                        > 
                         🔆
                        </button>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

const Sidebar = ({ setShowAddBook }) => {
    return (
        <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
            <h4 className="text-center">📚 Panel</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Anasayfa</Link>
                </li>
                <li className="nav-item">
                    <button className="nav-link text-center  text-white " onClick={() => setShowAddBook(true)}>
                        Kitap Ekle
                    </button>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Ayarlar</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

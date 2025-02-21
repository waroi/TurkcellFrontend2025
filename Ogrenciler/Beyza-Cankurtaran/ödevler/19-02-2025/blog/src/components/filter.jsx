import React, { useState } from "react";
import '../App.css';
const Filter = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const yazarFiltre = (authors) => {
    setFilter(authors);
    setIsOpen(false);
  };

  const tumYazarlarFiltre = () => {
    setFilter("");
    setIsOpen(false);
  };

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-lila dropdown-toggle"
        onClick={toggleDropdown}
      >
        Yazara Göre Filtrele
      </button>
      {isOpen && (
        <ul className="dropdown-menu show">
          <li>
            <a className="dropdown-item" onClick={() => yazarFiltre("Hazal")}>
              Hazal
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={() => yazarFiltre("Oğuzhan")}>
              Oğuzhan
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={() => yazarFiltre("Beyza")}>
              Beyza
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={tumYazarlarFiltre}>
              Hepsi
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;

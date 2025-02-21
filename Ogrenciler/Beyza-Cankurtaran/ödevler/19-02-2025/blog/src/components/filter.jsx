import React, { useState } from "react";

const Filter = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const yazarFiltre = (author) => {
    setFilter(author);
    setIsOpen(false);
  };

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-success dropdown-toggle"
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
            <hr className="dropdown-divider" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;

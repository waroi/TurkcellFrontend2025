import React from "react";
import { useNavigate } from "react-router";

const Navbar = ({country, topic, setCountry,setTopic}) => {
  const navigate = useNavigate();
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry)
    if (selectedCountry) {
      navigate(`/${selectedCountry}`);
    }
  };

  const handleTopicChange = (event) => {
    const selectedTopic = event.target.value;
    setTopic(selectedTopic)
    if (selectedTopic) {
      navigate(`/${country}/${selectedTopic}`);
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Spor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Teknoloji
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ekonomi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Siyaset
              </a>
            </li>
          </ul>
        </div>
      <select className="form-select" aria-label="Default select example" onChange={handleCountryChange}>
        <option selected defaultValue="tr">Türkiye</option>
        <option value="de">Almanya</option>
        <option value="ru">Rusya</option>
        <option value="en">İngiltere</option>
      </select>
      <select className="form-select" aria-label="Default select example" onChange={handleTopicChange}>
        <option selected defaultValue="general">Genel</option>
        <option value="sport">Spor</option>
        <option value="technology">Teknoloji</option>
        <option value="economy">Ekonomi</option>
      </select>
      </div>
    </nav>
  );
};

export default Navbar;

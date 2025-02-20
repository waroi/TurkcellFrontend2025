import React from "react";
import { useState } from "react";
import Modal from "../Modal";


const Card = ({ title, detail, author, img, date, explanation}) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="card col-lg-3 col-md-6 col-sm-12">
      <img
        src={img}
        className="card-img-top"
        alt="..."
        width={200}
        height
        ={300}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{detail}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">🖊 {author} </li>
        <li className="list-group-item"> 📅 {date}</li>
      </ul>
      <div className="card-body ">
        <button
          type="button"
          href="#"
          className="card-link badge text-bg-primary text-decoration-none p-2"
          onClick={handleShow}
        >
          İncele
        </button>
        <Modal show={showModal} handleClose={handleClose} explanation={explanation} title={title} />
      </div>
    </div>
  );
};

export default Card;

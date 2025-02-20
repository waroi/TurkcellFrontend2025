import React from "react";

const Card = () => {
  return (
    <div className="card col-3">
      <img
        src="https://picsum.photos/200/300"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">🖊 Hazal Cankurtaran </li>
        <li className="list-group-item"> 📅 19-10-2025</li>
      </ul>
      <div className="card-body ">
        <a
          href="#"
          className="card-link badge text-bg-primary text-decoration-none p-2"
        >
          İncele
        </a>
      </div>
    </div>
  );
};

export default Card;

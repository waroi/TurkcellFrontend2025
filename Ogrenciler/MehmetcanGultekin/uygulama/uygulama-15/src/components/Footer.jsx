import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-bottom bg-dark text-white py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0 py-3 d-flex justify-content-center align-items-center">
              Copyright 2025 All rights reserved | This website is made with
              <FontAwesomeIcon className="mx-1" icon={faHeart} size="1.9x" color="brown" />
              by Mehmetcan, Ece and Hilal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

import PropTypes from "prop-types";
import React from "react";

const Deneme = ({ isim, yas }) => {
  return (
    <React.Fragment>
      <div>{isim}</div>
      <div>{yas}</div>
    </React.Fragment>
  );
};

Deneme.propTypes = {
  isim: PropTypes.string.isRequired,
  yas: PropTypes.number.isRequired,
};

export default Deneme;

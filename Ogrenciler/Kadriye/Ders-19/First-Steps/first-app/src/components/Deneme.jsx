import PropTypes from "prop-types";
import React from "react";

const Deneme = ({ isim, yaş }) => {
  return (
    <>
      <div>{isim}</div>
      <div>{yaş}</div>
    </>
  );
};
//Eski type kontrol mantığı
// Deneme.propTypes = {
//   isim: PropTypes.string.isRequred,
//   yaş: PropTypes.number,
// };
export default Deneme;

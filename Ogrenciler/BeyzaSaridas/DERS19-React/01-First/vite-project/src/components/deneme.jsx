import React from 'react'
//import PropTypes from 'prop-types'
const Deneme = ({isim,yas}) => {
  return (
   <>
    <div>{isim}</div>
    <div>{yas}</div>
    </>
  );
};
/*deneme.propTypes ={
   isim: PropTypes.string.isRequired,
   yas: PropTypes.number.isRequired,
};  değişmiş bu
*/

export default Deneme;

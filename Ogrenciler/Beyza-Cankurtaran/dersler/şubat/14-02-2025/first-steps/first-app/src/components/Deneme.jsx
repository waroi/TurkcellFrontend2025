import React from "react";
import Proptypes from "prop-types";
const Deneme = ({ isim, yas }) => {
    return (
        <>
            <div>{isim}</div>
            <div>{yas}</div>
        </>
    );
};
Deneme.Proptypes={
    isim:Proptypes.string.isRequired,
    yas:Proptypes.number,
}
export default Deneme;

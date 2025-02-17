import PropTypes from "prop-types";

const Deneme = ({ name, age }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

Deneme.propTypes = {
  name: PropTypes.string.isRequired, 
  age: PropTypes.number.isRequired,
};

export default Deneme;

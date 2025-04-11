import "./style.css";

const Square = ({ value, onClick, highlight }) => {
  return (
    <button
      className={`square ${
        highlight ? "highlight" : ""
      } ${value?.toLowerCase()}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

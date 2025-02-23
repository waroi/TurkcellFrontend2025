import ReactDOM from "react-dom";
const index = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Selam dünyalı ben portal hedefim ise {text} </div>,
    target
  );
};

export default index;

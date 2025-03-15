const ModalWrapper = (WrappedComponent) => (props) => {
  const handleClick = () => {
    console.log("Button clicked!");
    props.onClick();
  };

  return <WrappedComponent {...props} onClick={handleClick} />;
};

export default ModalWrapper;

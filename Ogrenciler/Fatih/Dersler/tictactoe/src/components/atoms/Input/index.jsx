const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      className="form-control py-2 px-3 rounded-3 border border-secondary"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;

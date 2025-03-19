const CheckBox = ({ id, label, value, onChange, name }) => {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="checkbox"
        className="form-control"
        id={id}
        name={name}
        value={value || ""}
        onChange={onChange}
      />
    </div>
  );
};
export default CheckBox;

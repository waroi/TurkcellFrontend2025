const CheckBox = ({ id, label, checked, onChange, name }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;

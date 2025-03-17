const Label = ({ ...label }) => {
  return (
    <label htmlFor={label.id} className="form-label">
      {label.name}
    </label>
  );
};

export default Label;

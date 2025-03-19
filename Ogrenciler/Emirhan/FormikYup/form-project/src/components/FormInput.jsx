/* eslint-disable react/prop-types */

function FormInput({ label, id, type, value, handleChange, error, placeholder }) {
  return (
    <>
     <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        id={id}
        name={id}
        placeholder={placeholder}
        className={error ? "input-error form-control" : "form-control"}
        autoComplete="off"
      />
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default FormInput;

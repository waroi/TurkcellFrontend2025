/* eslint-disable react/prop-types */


function FormInput({ label, id, type, value, handleChange, error, placeholder, isArray = false, addArray, removeArray, array }) {
  return (
    <>
      <label>{label}</label>
      <div className="d-flex gap-2">
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
        {isArray ? <button onClick={() => addArray(id)}><i className="fa-solid fa-plus"></i></button> : null}
        {array && array.length > 1 ? array.map((item, index) => (
          <div key={index}>{item}</div>
        )) : null}
      </div>

      {error && <p className="error">{error}</p>}
    </>
  );
}

export default FormInput;

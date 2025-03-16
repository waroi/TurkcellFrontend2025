export default function Input({ ref, name, type }) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${type == "file" ? "py-3" : ""}`}
        id={name}
        placeholder={name}
        ref={ref}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

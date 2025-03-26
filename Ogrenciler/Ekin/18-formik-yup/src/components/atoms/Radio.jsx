export default function Radio({ value, children, onClick }) {
  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="radio"
        name={"value"}
        id={value}
        onClick={onClick}
      />
      <label className="form-check-label" htmlFor={value}>
        {children}
      </label>
    </div>
  );
}

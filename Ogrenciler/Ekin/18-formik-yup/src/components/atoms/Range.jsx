export default function Range({
  name,
  value,
  onChange,
  children,
  min = 1,
  max = 10,
}) {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

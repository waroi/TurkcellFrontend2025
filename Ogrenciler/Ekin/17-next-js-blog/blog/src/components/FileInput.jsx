export default function FileInput({ ref, name }) {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor={name}>
        {name}
      </label>
      <input
        type="file"
        className="form-control py-3"
        id={name}
        accept="image/*"
        ref={ref}
      />
    </div>
  );
}

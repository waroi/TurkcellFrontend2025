export default function TextArea({ ref, name }) {
  return (
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id={name}
        placeholder={name}
        ref={ref}
        rows={3}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

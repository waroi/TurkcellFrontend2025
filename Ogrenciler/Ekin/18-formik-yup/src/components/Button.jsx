export default function Button({ variant = "primary", children, disabled }) {
  return (
    <button disabled={disabled} className={`btn btn-${variant}`} type="submit">
      {children}
    </button>
  );
}

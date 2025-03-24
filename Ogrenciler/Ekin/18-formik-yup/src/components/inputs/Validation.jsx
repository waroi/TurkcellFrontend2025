export default function Validation({ meta }) {
  return (
    <p
      className={`text-danger small fw-bold mb-0 ${
        meta.touched && meta.error ? "active" : ""
      }`}
    >
      {meta.touched && meta.error ? meta.error : ""}
    </p>
  );
}

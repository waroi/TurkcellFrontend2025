export default function Section({ name, children }) {
  return (
    <div>
      <h3 className="mt-5 mb-4 fs-4 fw-medium">{name}</h3>
      {children}
    </div>
  );
}

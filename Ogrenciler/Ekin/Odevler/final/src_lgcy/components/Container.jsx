export default function Container({ className, children }) {
  return (
    <section className={className}>
      <div className="container">{children}</div>
    </section>
  );
}

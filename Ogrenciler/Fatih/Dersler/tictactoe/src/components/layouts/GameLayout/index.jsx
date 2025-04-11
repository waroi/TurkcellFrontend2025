const GameLayout = ({ children, onKeyDown }) => {
  return (
    <div
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center px-3 text-center"
      style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)" }}
      onKeyDown={onKeyDown}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default GameLayout;

const AuthLayout = ({ children }) => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ background: "linear-gradient(135deg, #0f172a, #1e3a8a)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

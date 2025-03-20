export default function HomeView() {
  return (
    <>
      <div className="container">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#login"
              type="button"
              role="tab"
            >
              Sign In
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#register"
              type="button"
              role="tab"
            >
              Sign Up
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="login" role="tabpanel">
            aa
          </div>
          <div className="tab-pane fade" id="register" role="tabpanel">
            bb
          </div>
        </div>
      </div>
    </>
  );
}

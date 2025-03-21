import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function HomeView() {
  return (
    <>
      <div className="container">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#sign-in"
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
              data-bs-target="#sign-up"
              type="button"
              role="tab"
            >
              Sign Up
            </button>
          </li>
        </ul>
        <div className="tab-content pt-4">
          <div
            className="tab-pane fade show active"
            id="sign-in"
            role="tabpanel"
          >
            <SignIn />
          </div>
          <div className="tab-pane fade" id="sign-up" role="tabpanel">
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
}

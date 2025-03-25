import useStore from "@/store/useStore";
import useAuth from "@/hooks/useAuth";

import NavigationLinks from "#/atoms/NavLinks";

export default function Navigation() {
  const { user } = useStore();
  const { logout } = useAuth();

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary py-3"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Application
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavigationLinks user={user} logout={logout} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

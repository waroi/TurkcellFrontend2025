import useStore from "@/store/useStore";
import useAuth from "@/hooks/useAuth";

import Item from "#/atoms/NavItem";
import Button from "#/atoms/Button";

export default function Nav() {
  const { user } = useStore();
  const { logout } = useAuth();

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary py-3"
      data-bs-theme="dark"
    >
      <div className="container">
        <h1 className="d-none">Application</h1>
        <a className="navbar-brand" href="/">
          Application
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Item to="/">Home</Item>
            <Item display={!user} to="/auth">
              Sign In / Up
            </Item>
            <Item display={user} to="/applications">
              Applications
            </Item>
            <Item display={user} to="/user">
              User
            </Item>
            <Item display={user && user.isAdmin} to="/admin">
              Admin
            </Item>
            <Item>
              <Button variant="nav-link" onClick={logout}>
                Logout
              </Button>
            </Item>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import { NavLink } from 'react-router'
import 'bootstrap/dist/js/bootstrap.bundle'
import CategoryBar from './CategoryBar'

const Navbar = () => {
    return (
        <header>
  <nav className="navbar-news navbar navbar-expand-lg ">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Konnichwa</NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Features</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Pricing</NavLink>
          </li>
        </ul>
        <CategoryBar />
      </div>
    </div>
  </nav>
</header>

    )
}

export default Navbar
export default function Navigation({ openModal }) {
  return (
    <nav className="navbar position-fixed w-100 top-0 navbar-expand-lg bg-dark text-uppercase z-3 shadow ">
      <div className="container">
        <a className="navbar-brand" href="">
          <h1 className="flex-center text-white">Blog</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <section className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav align-items-center ms-auto">
            <li className="nav-item">
              <button
                className="btn btn-primary text-uppercase me-2"
                onClick={openModal}
              >
                <i className="fa-solid fa-plus"></i> Add
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Trend
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}

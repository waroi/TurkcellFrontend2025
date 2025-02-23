import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="">
      {" "}
      <footer className="py-4 mt-5">
        <div className="container">
          <div className="text-secondary">
            {" "}
            <div className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center">
              <a
                className="text-secondary text-xs text-decoration-none"
                href="https://github.com"
              >
                <span>
                  <FaGithub className="fs-3 me-2" />
                </span>
                © 2025 GitHub, Inc.
              </a>
              <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <a
                  className="text-secondary text-xs text-decoration-none"
                  href="#"
                >
                  Terms
                </a>
                <a
                  className="text-secondary text-xs text-decoration-none"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="text-secondary text-xs text-decoration-none"
                  href="#"
                >
                  Security
                </a>
                <a
                  className="text-secondary text-xs text-decoration-none"
                  href="#"
                >
                  Status
                </a>
                <a
                  className="text-secondary text-xs text-decoration-none"
                  href="#"
                >
                  Docs
                </a>
                <a
                  className="text-secondary text-xs text-decoration-none"
                  href="#"
                >
                  Contact
                </a>
                <a
                  className="text-secondary text-xs text-decoration-none"
                  href="#"
                >
                  Manage cookies
                </a>
                <a
                  className="text-secondary text-xs text-decoration-none"
                  href="#"
                >
                  Do not share my personal information
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;

import React from "react";
import blog from "../assets/blog.png";

const Footer = () => {
  return (
    <footer className="bg-info">
      <div className="footer-top pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex justify-content-center">
              <img src={blog} alt="#" className="nav-blog-img" />
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <ul className="list-unstyled fs-4 fw-bold footer-links">
                <li>
                  <a href="#" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Main Article
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-center">
              <h5 className="fs-3 fw-bold">Geliştiriciler</h5>
              <div className="d-flex developers">
                <a href="https://www.linkedin.com/in/ece-irem-kilic/" target="_blank">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGcnFAMs-OVDg/profile-displayphoto-shrink_200_200/B4DZPbnWuLHUAc-/0/1734556348739?e=1745452800&v=beta&t=rdzgExb4q8liQ27W3zSkuzP4qQiVhUz02imXX2V7TBY"
                    className="p-0 img-fluid rounded-circle avatar me-2"
                    alt="ece"
                  />
                </a>
                <a href="https://www.linkedin.com/in/mustafa-fatih-g%C3%BCnd%C3%BCz-9bb15a20a/" target="_blank">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQH4bMMiVhFX9Q/profile-displayphoto-shrink_800_800/B4DZPqq12wHUAo-/0/1734808922598?e=1745452800&v=beta&t=QOHYTQlKOooKFKEve3gO3L--q0rOFCPijVVLCGRi__0"
                    className="p-0 img-fluid rounded-circle avatar me-2"
                    alt="fatih"
                  />
                </a>
                <a href="https://www.linkedin.com/in/berfin-ela-k%C4%B1l%C4%B1%C3%A7-64a76a1b9/" target="_blank">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHGEWxP5zW_uQ/profile-displayphoto-shrink_800_800/B4DZUgoo2GHkAc-/0/1740009279730?e=1745452800&v=beta&t=8EVZoyI9G-vz_oEHKhD3F07JcRzpMWI3S3FSiWMXq9U"
                    className="p-0 img-fluid rounded-circle avatar me-2"
                    alt="ela"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0 pb-3 d-flex justify-content-center">
                Copyright ©2025 All rights reserved | This website is made with
                <img src="https://img.icons8.com/?size=20&id=59805&format=png&color=d70000" />
                by Ela, Ece and Fatih.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

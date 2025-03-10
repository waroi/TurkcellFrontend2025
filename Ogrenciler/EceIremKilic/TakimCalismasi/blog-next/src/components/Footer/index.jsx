import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="container">
        <div className="row">
          <div>
            <h5>Blog</h5>
            <p className="text-muted">Travel Blog</p>
          </div>

          <div className="col-md-4">
            <h5>Linkler</h5>
            <ul>
              <li>Ana sayfa</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Sosyal Medya</h5>
            <div className="d-flex">
              <Link href="#" />
            </div>
          </div>

          <div>
            <p>Blog. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

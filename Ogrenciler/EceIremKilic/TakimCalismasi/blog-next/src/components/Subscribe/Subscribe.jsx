import styles from "./subscribe.module.css";
import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 bg-dark py-5 px-3">
            <h4 className="text-white">
              Son gelişmelerden haberdar olmak için bültenimize abone olun.
            </h4>
            <p className="text-white">
              Emin ol sadece tek bir spam bile yok. Sadece sana özel bir indirim
              gelirse haberdar edeceğiz.
            </p>
            <form className="d-flex flex-column">
              <label htmlFor="Email" className="text-white">
                Email
              </label>
              <input type="email" name="email" id="email" className="mt-3" />
              <button className="w-25 mt-3">Abone ol</button>
            </form>
          </div>
          <div className="col-lg-7">
            <div className={`${styles.sideImage} w-100 object-fit-cover`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

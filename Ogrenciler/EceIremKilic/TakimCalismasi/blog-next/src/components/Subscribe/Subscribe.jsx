import CustomButton from "../CustomButton";
import Input from "../Input";
import styles from "./subscribe.module.css";
import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe-section" id="subscribe">
      <div className="container mb-5">
        <h2 className="my-5">Bültenimize Abone Ol</h2>
        <div className="row">
          <div
            className={` col-lg-5 d-flex flex-column justify-content-between p-5 ${styles.bgColor} rounded`}
          >
            <h4 className="text-white">
              Son gelişmelerden haberdar olmak için bültenimize abone olun.
            </h4>
            <p className="text-white display-6 fs-4">
              Emin ol sadece tek bir spam bile yok. Sadece sana özel bir indirim
              gelirse haberdar edeceğiz.
            </p>
            <div className="d-flex flex-column">
              <Input
                type="email"
                id="email"
                placeholder="Mail adresi giriniz."
                label="Email"
                value=""
                onChange={null}
              />

              <CustomButton buttonText="Abone Ol" variant="outline-danger" />
            </div>
          </div>
          <div className="col-lg-7 p-0">
            <div className={`${styles.sideImage} w-100 object-fit-cover`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

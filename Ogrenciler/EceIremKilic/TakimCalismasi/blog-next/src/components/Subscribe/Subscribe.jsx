import CustomButton from "../CustomButton";
import Input from "../Input";
import Description from "./atoms/Description";
import Subtitle from "./atoms/Subtitle";
import Title from "./atoms/Title";
import styles from "./subscribe.module.css";
import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe-section" id="subscribe">
      <div className="container mb-5">
        <Title title={"Bültenimize Abone Ol"} />
        <div className="row">
          <div
            className={` col-lg-5 d-flex flex-column justify-content-between p-5 ${styles.bgColor} rounded`}
          >
            <Subtitle
              title={
                "Son gelişmelerden haberdar olmak için bültenimize abone olun."
              }
            />
            <Description title={"Emin ol sadece tek bir spam bile yok. Sadece sana özel bir indirim gelirse haberdar edeceğiz."} />

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

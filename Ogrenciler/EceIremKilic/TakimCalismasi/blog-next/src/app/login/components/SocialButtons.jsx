import React from "react";
import SocialButton from "../atoms/SocialButton";
import styles from "@/app/login/login.module.css";

const SocialButtons = () => {
  return (
    <div>
      <hr className="m-5" />
      <div className="social-buttons d-flex flex-column gap-2">
        <SocialButton
          style={styles.facebookBtn}
          brand={"fa-brands fa-facebook me-2"}
          title={"Facebook ile giriş yap"}
        />
        <SocialButton
          style={styles.googleBtn}
          brand={"fa-brands fa-google me-2"}
          title={"Google ile giriş yap"}
        />
        <SocialButton
          style={styles.githubBtn}
          brand={"fa-brands fa-github me-2"}
          title={"Github ile giriş yap"}
        />
      </div>
    </div>
  );
};

export default SocialButtons;

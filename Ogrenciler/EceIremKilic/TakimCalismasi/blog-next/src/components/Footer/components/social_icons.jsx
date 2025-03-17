import React from "react";
import Brand from "../atoms/brand";
const SocialIcons = () => {
  return (
    <div className="social-icons d-flex gap-2">
      <Brand brandIcon={"fa-brands fa-instagram"} />
      <Brand brandIcon={"fa-brands fa-linkedin"} />
      <Brand brandIcon={"fa-brands fa-facebook"} />
      <Brand brandIcon={"fa-brands fa-github"} />
    </div>
  );
};

export default SocialIcons;

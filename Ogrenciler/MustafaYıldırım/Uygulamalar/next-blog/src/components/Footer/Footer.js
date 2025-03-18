import React from "react";
import FooterText from "./FooterText/FooterText";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterContact from "./FooterContact/FooterContact";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const Footer = () => {
  return (
    <>
      <footer className="pt-4 pb-4 w-100 bg-light" id="contact">
        <div className="container">
          <div className="row">
            <FooterText />
            <FooterLinks />
            <FooterContact />
          </div>
          <FooterCopyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;

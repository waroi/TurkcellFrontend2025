import React, { PropsWithRef } from "react";
import { Navbar } from "react-bootstrap";

type Props = {
  imageURL: string;
};

const NavbarBrand: React.FC<Props> = ({ imageURL }) => {
  return (
    <Navbar.Brand>
      <img src={imageURL} alt="NavbarBrand" />
    </Navbar.Brand>
  );
};

export default NavbarBrand;

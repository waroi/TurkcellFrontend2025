import React from "react";
import { Nav } from "react-bootstrap";

type Props = {
  label: string;
  href: string;
};

const NavbarItem: React.FC<Props> = ({ label, href }) => {
  return <Nav.Link href={href}>{label}</Nav.Link>;
};

export default NavbarItem;

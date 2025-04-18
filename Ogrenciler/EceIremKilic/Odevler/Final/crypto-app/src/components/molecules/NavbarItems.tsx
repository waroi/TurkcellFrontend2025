import React from "react";
import { Dropdown, DropdownItem, DropdownMenu, Nav } from "react-bootstrap";
import NavbarItem from "../atoms/NavbarItem";

type NavItem = {
  label: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
};

type Props = {
  items: NavItem[];
};
const NavbarItems: React.FC<Props> = ({ items }) => {
  return (
    <Nav className="me-auto">
      {items.map((item, index) =>
        item.isDropdown ? (
          <Dropdown key={index}>
            <Dropdown.Toggle
              variant="link"
              className="text-decoration-none nav-link"
            >
              {item.label}
            </Dropdown.Toggle>
            <DropdownMenu>
              {item.dropdownItems?.map((dropdownItem, index) => (
                <Dropdown.Item key={index} href={dropdownItem.href}>
                  {dropdownItem.label}
                </Dropdown.Item>
              ))}
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem key={index} label={item.label} href={item.href} />
        )
      )}
    </Nav>
  );
};

export default NavbarItems;

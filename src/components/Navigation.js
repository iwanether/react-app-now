import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from "reactstrap";

function Navigation() {
  const [toggle, setToggle] = useState({ isOpen: false });

  const toggler = () => {
    setToggle({ isOpen: !toggle.isOpen });
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React Routing Demo</NavbarBrand>
        <NavbarToggler onClick={toggler} />
        <Collapse isOpen={toggle.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/page">
                Page
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

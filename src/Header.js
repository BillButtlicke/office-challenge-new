import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarToggler,
  Collapse,
  NavItem,
  DropdownItem,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

function Header() {
  return (
    <Navbar color="light" expand="md" light>
      <NavbarBrand href="/">Good Job</NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/BillButtlicke">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/logout">Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;

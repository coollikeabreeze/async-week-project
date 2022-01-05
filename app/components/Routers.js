import React from "react";
import { connect } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";

import Header from "./Header"
import Home from "./Home"

import {
  Collapse, Container, Row, Col, Form, Input, Button, Navbar, Nav, NavbarToggler, NavbarText,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown, Dropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export class Routers extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
  return (
    <div>
      <header>
        <Navbar dark expand="sm">
          <NavbarBrand href="/"> ASYNC WEEK </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />

          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"> GitHub</NavLink>
              </NavItem>

              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}
}

export default connect(null, null)(Routers);

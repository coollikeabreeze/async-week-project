import React from "react";
import { Route, Link } from "react-router-dom";

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const Header = () => {
  return (
    <div>
      <header>
        <Navbar>
          <DropdownMenu>
            <DropdownItem>First Dropdown Item</DropdownItem>
          </DropdownMenu>
          <NavLink>Your Posts</NavLink>
          <NavLink>Create New Posts</NavLink>
          <NavLink>Logout</NavLink>
        </Navbar>
      </header>

      {/* <Route path="/" component={Home}></Route> */}

      <div>
        Hello, World
      </div>

    </div>
  )
}

export default Header;

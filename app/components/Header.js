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
      <header className="navbar-default">
      <Navbar>
          <NavLink>Your Post</NavLink>
          <NavLink>Create New Posts</NavLink>
          <NavLink>Logout</NavLink>
        </Navbar>
      </header>

      {/* <Route path="/" component={Home}></Route> */}

    </div>
  )
}

export default Header;

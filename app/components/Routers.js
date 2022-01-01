import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Header from "./Header"
import Home from "./Home"

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const Routers = () => {
  return (
    <div>
      <Navbar>
          <DropdownMenu>
            <DropdownItem>First Dropdown Item</DropdownItem>
          </DropdownMenu>
          <NavLink>Your Posts</NavLink>
          <NavLink>Create New Posts</NavLink>
          <NavLink>Logout</NavLink>
        </Navbar>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Routers;

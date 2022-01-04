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

      <header>
      <Navbar className="navbar-default">
          <NavLink>Your Post</NavLink>
          <NavLink>Create New Posts</NavLink>
          <NavLink>Logout</NavLink>
        </Navbar>
      </header>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Routers;

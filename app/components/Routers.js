import React from "react";
import { connect } from "react-redux";
import { Route, Routes, Link, withRouter } from "react-router-dom";

import Header from "./Header"
import Home from "./Home"
import Users from "./Users"
import AddUser from "./AddUser"
import Analytics from "./Analytics";

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
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/users" element={<Users/>}/>
        <Route exact path="/add-user" element={<AddUser/>}/>
        <Route exact path="/analytics" element={<Analytics/>}/>
      </Routes>
    </div>
  )
}
}

export default connect(null, null)(Routers);

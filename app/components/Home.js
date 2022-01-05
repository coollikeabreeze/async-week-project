

import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import {
  Container, Row, Col, Form,
  Input, Button,
  Navbar, Nav, NavbarBrand, Dropdown,
  NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, ButtonDropdown, dropdownOpen, toggleDropdown
} from "reactstrap";

export class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
      return (
    <div>

    </div>
    )}
}


export default connect(null, null)(Home);

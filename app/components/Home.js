import React from "react";
import { Route, Link } from "react-router-dom";

import {
  Container, Row, Col, Form,
  Input, Button,
  Navbar, Nav, NavbarBrand, Dropdown,
  NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, ButtonDropdown, dropdownOpen, toggleDropdown
} from "reactstrap";

export default class Home extends React.Component {
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
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Action</DropdownToggle>
          <DropdownMenu className="dropdown">
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
          </Dropdown>
      <Table>
        <thead className="table-header">
          <tr>
            <th>DATE</th>
            <th>TITLE</th>
          </tr>
        </thead>
        <tbody>
          <tr>

          </tr>
        </tbody>
      </Table>
    </div>
    )}
};

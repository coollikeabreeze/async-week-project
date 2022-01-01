import React from "react";
import { Route, Link } from "react-router-dom";

import {
  Container, Row, Col, Form,
  Input, Button,
  Navbar, Nav, NavbarBrand,
  NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, ButtonDropdown, dropdownOpen, toggleDropdown
} from "reactstrap";

const Home = () => {
  return (
  <div>
    <ButtonDropdown >
      <Button id="dropdownButton">Action</Button>
        <DropdownToggle/>
        <DropdownMenu>
            Item 1
        </DropdownMenu>
        </ButtonDropdown>
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>

        </tr>
      </tbody>
    </Table>
  </div>
  )
};

export default Home;

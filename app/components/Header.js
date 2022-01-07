import React from "react";
import { connect } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";

import Header from "./Header"
import Home from "./Home"
import Users from "./Users"

import {
  Collapse, Container, Row, Col, Form, Input, Button, Navbar, Nav, NavbarToggler, NavbarText,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown, Dropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export class Headers extends React.Component {
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

        <Navbar dark expand="sm" fixed ="top">
          <NavbarBrand href="/"> ASYNC WEEK PROJECT</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/users">All Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add-user">Add User</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/analytics">User Analytics</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarText>
              Andrea Khan | ASW
          </NavbarText>
        </Navbar>
      </header>
    </div>
  )
}
}

export default connect(null, null)(Headers);


// import React from "react";
// import { Route, Link } from "react-router-dom";

// import {
//   Container, Row, Col, Form, Input, Button, Navbar, Nav,
//   NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//   DropdownToggle, DropdownMenu, DropdownItem
// } from 'reactstrap';

// const Header = () => {
//   return (
//     <div>
//       <header className="navbar-default">
//       <Navbar>
//           <NavLink>Your Post</NavLink>
//           <NavLink>Create New Posts</NavLink>
//           <NavLink>Logout</NavLink>
//         </Navbar>
//       </header>

//       {/* <Route path="/" component={Home}></Route> */}

//     </div>
//   )
// }

// export default Header;

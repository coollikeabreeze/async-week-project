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
        <Navbar dark expand="sm">
          <NavbarBrand href="/"> ASYNC WEEK </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />

          <Collapse navbar>
            <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink href="/users">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/chartjs/">Chart.js</NavLink>
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

      {/* <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/users" element={<Users/>}/>
      </Routes> */}
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

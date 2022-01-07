import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import { fetchUsers } from '../redux/users'

import {
  Breadcrumb, BreadcrumbItem, Table, Button
} from "reactstrap";

export class Users extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render () {
    return (
      <div>
        <div>
          <Breadcrumb listTag="div">
            <BreadcrumbItem>
              <Link to="/">
                Home
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem
              active
              tag="span"
            >
              Users
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div>
          <Button id='new-user-button' href="/add-user">
            Add New User
          </Button>
        </div>
        <Table dark className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody>

            {this.props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                </tr>
              )
            })}
          </tbody>
      </Table>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);


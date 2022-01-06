import axios from "axios";
require("babel-polyfill");

const initialState = [];

import history from '../history'

const SET_USERS= 'SET_USERS'
const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'

//ACTION CREATOR
const _setUsers = (users) => ({
  type: SET_USERS,
  users
})

const _addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  }
}

const _deleteUser = (user) => {
  return {
    type: DELETE_USER,
    user,
  }
}

//THUNK
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get('/api/users');
      dispatch(_setUsers(users))
    } catch (error) {
      console.log(error)
    }
  }
};

export const addUser = (user) =>
{
  return async (dispatch) => {
    try {
      const { data: added } = await axios.post('api/users', user);
      dispatch(_addUser(added));
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteUser = (userId) =>
{
  return async (dispatch) => {
    try {
      const { data: deleted } = await axios.delete(`/api/users/${userId}`);
      dispatch(_deleteUser(deleted));
    } catch (error) {
      console.log(error)
    }
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
      case ADD_USER:
        return [...state, action.user];
      case DELETE_USER:
        return state.filter((user) => user.id !== action.user.id);
    default:
      return state;
  }
}

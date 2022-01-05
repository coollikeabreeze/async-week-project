import { combineReducers } from 'redux'
import usersReducer from './users'
import authenticateReducer from './auth'

const appReducer = combineReducers({
  users: usersReducer,
  authenticate: authenticateReducer

})

export default appReducer

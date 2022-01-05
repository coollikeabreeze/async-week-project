import { combineReducers } from 'redux'
import dummyReducer from './user'
import authenticateReducer from './authenticate'

const appReducer = combineReducers({
  dummyReducer: dummyReducer,
  authenticate: authenticateReducer

})

export default appReducer

import { combineReducers } from 'redux'
import dummyReducer from './reducer'

const appReducer = combineReducers({
  //add/update reducer states here:
  dummyReducer: dummyReducer
})

export default appReducer

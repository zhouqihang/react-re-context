import { combineReducers } from '../re-context/index';
import todoReducer from './todo'
import filterReducer from './filter'

export default combineReducers({
  todo: todoReducer,
  filter: filterReducer
})
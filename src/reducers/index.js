import { combineReducers } from 'react-redux';
import auth from './auth';
import message from './message';

export default combineReducers({
  auth,
  message,
})
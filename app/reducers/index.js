import { combineReducers } from 'redux';
import macros from './macros';
import userSettings from './userSettings';
import groceries from './groceries';
import user from './user';

const reducer = combineReducers({
  macros,
  userSettings,
  groceries,
  user,
});

export default reducer;
